import Login from "../../../pages/login"
import Dashboard from "../../../pages/dashboard"
import Parceiros from "../../../pages/parceiros" // Importa a página nova


describe('Procurar Conta Contábil', () => {
    before (() => {
        Login.visitarPagina()

        Login.preencherCredenciais()

        Dashboard.vericarAcessoDashboard()
    })

    it('Acessar Conta Contábil', () => {
        Parceiros.acessarPagina()
        
        cy.contains('a', 'AGROMAXIMUS COMERCIO E REPR.AGRICOLA LTD').click()
        cy.contains('button','Novo Contato').click()
        cy.get('#nomeContato').type('TESTE NAME')
        cy.get('#email').type('test@example.com')
        cy.get('input[placeholder="Buscar país"]').type('Estados Unidos')   
            .should('have.value', 'Estados Unidos')
        cy.contains('li', 'Estados Unidos').click()
        cy.get('#celular').type('1234567890')
        cy.get('button[type="submit"]').click()
    })
})