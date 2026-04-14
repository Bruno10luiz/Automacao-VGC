import { elements as el } from "./elements"

class EditarParceiro {

    acessarParceiro(nomeDoParceiro) {
        cy.contains('a', nomeDoParceiro).scrollIntoView().should('be.visible').click()
    }

    abrirEdicao() {
        // O should('be.visible') aqui substitui o primeiro cy.wait(1000)
        cy.get(el.btnEditarParceiro, { timeout: 10000 }).should('be.visible').click()
    }

    atualizarNome(novoNome) {
        // O Cypress limpa o campo (clear) antes de digitar o novo nome
        cy.get(el.inputNome).should('be.visible').clear().type(novoNome)
    }

    salvarAtualizacao() {
        cy.contains('button', 'Atualizar').should('be.visible').click()
    }

    validarMatrizNaoAtualizada() {
        cy.get(el.inputMatriz, { timeout: 10000 })
          .should('be.visible')
          .and('have.value', '')
    }
}

export default new EditarParceiro()