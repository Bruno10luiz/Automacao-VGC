import Login from "../../../pages/login"
import Dashboard from "../../../pages/dashboard"
import Parceiros from "../../../pages/parceiros" // Importa a página nova


describe('Procurar Conta Contábil', () => {
    before (() => {
        Login.visitarPagina()

        Login.preencherCredenciais()

        Dashboard.vericarAcessoDashboard()
    })

    it('Atualizando Nome do parceiro, matriz não pode att sozinho', () => {
        Parceiros.acessarPagina()
        cy.contains('a','50.071.289 DAVID DE SOUZA SILVA').click()
        cy.wait(1000)
        cy.get('.card-info-parceiro__btn-editar-texto').click()
        cy.get('#nome').clear().type('50.071.289 DAVID DE SOUZA SILVA ATUALIZADO')
        cy.contains('button', 'Atualizar').click()
        cy.wait(1000)
        cy.get('.card-info-parceiro__btn-editar-texto').click()
        cy.get('input[placeholder="Buscar parceiro matriz"]')
            .should('have.value', '')
    })
})