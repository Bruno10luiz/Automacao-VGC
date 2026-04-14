import { elements as el } from "./elements"

class Fiscal {

    acessarParceiro(nomeDoParceiro) {
        cy.contains('a', nomeDoParceiro).scrollIntoView().should('be.visible').click()
    }

    clicarEditarFiscal() {
        cy.get(el.btnEditarFiscal, { timeout: 10000 })
          .scrollIntoView()
          .should('be.visible')
          .click()
    }

    preencherContaContabil(codigoConta, textoDaLista) {
        // Limpamos o campo antes por segurança e digitamos o código numérico
        cy.get(el.inputContaContabil).should('not.be.disabled').clear().type(codigoConta)
        
        // Clica na opção gigantesca que aparece na lista suspensa (dropdown)
        cy.contains('li', textoDaLista).should('be.visible').click()
    }

    cancelarEdicao() {
        cy.contains('button', 'Cancelar')
          .scrollIntoView()
          .should('be.visible')
          .click()
    }
}

export default new Fiscal()