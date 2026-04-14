import { elements as el } from "./elements"





class Impostos {

    acessarParceiro() {
        cy.get(el.nomeParceiro).should('be.visible').click()
    }

    clicarNovoImposto() {
        cy.get(el.btnNovoImposto, { timeout: 10000 })
          .scrollIntoView() // Rola a tela até o elemento
          .should('be.visible')
          .click()
    }

    preencherFormularioImposto(dados) {
        // 1. Busca e seleciona o tipo na lista
        cy.get(el.inputTipoImposto).type(dados.buscaTipo)
        cy.contains('li', dados.nomeExatoLista).should('be.visible').click()

        // 2. Preenche os campos "select"
        cy.get(el.selectNota).select(dados.nota)
        cy.get(el.selectOrigemFinanceiro).select(dados.financeiro)
        cy.get(el.selectOrigemEstoque).select(dados.estoque)

        // 3. Clica em calcular
        cy.get(el.btnCalcular).click()
    }

    salvarImposto() {
        cy.get(el.btnSalvar).click()
    }

    cadastrarNovoImposto(dados) {
        this.clicarNovoImposto()
        this.preencherFormularioImposto(dados)
        this.salvarImposto()
    }
}

export default new Impostos()