import Login from "../../../pages/login"
import Dashboard from "../../../pages/dashboard"
import Parceiros from "../../../pages/parceiros" // Importa a página nova


describe('Procurar Conta Contábil', () => {
    beforeEach(() => {
        Login.visitarPagina()

        Login.preencherCredenciais()

        Dashboard.vericarAcessoDashboard()
    })

    it('Acessar Dados Bancários e criar novo dado bancário com todas informações', () => {
        Parceiros.acessarPagina()
    
        cy.contains('a', '50.071.289 DAVID DE SOUZA SILVA').click()
        cy.contains('button', 'Novo Dado Bancário').click()

        //conta principal
        cy.get('#contaPrincipal').click()
        cy.get('#permitirAdiantamento').click()

        //banco
        cy.get('.autocomplete > .form-control').type('Banco do Brasil')
        cy.contains('li', 'BANCO DO BRASIL S/A (1)').click()
        cy.contains('button', 'Salvar').click()
        cy.get('#agencia').type('1234')
        cy.get('#numeroConta').type('56789-0')
        cy.get('#tipoConta').select('Corrente')
        cy.get('#chavePix').type('12345678900')
        cy.get('#identificacao').type('Dado Bancário Teste')
        cy.contains('button', 'Salvar').click()


        })
    it('Acessar Dados Bancários e criar novo dado bancário com apenas informações obrigatórias', () => {
        Parceiros.acessarPagina()
    
        cy.contains('a', '50.071.289 DAVID DE SOUZA SILVA').click()
        cy.contains('button', 'Novo Dado Bancário').click()

        //conta principal
        //cy.get('#contaPrincipal').click()
        //cy.get('#permitirAdiantamento').click()

        //banco
        cy.get('.autocomplete > .form-control').type('Banco do Brasil')
        cy.contains('li', 'BANCO DO BRASIL S/A (1)').click()

        cy.contains('button', 'Salvar').click()

        })
})