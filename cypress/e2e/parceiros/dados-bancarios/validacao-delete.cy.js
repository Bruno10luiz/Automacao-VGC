import Login from "../../../pages/login"
import Dashboard from "../../../pages/dashboard"
import Parceiros from "../../../pages/parceiros" // Importa a página nova


describe('Procurar Conta Contábil', () => {
    beforeEach(() => {
        Login.visitarPagina()

        Login.preencherCredenciais()

        Dashboard.vericarAcessoDashboard()
    })

    it('Acessar Parceiros e validar exclusão de conta principal', () => {
        Parceiros.acessarPagina()
    
        cy.contains('a', '50.071.289 DAVID DE SOUZA SILVA').click()
        cy.contains('.lista-dados-bancarios__card-body', 'Principal')
            .find('button[title="Excluir"]') 
            .click();                       
        
        cy.contains('button', 'Excluir').click()
        cy.get('.swal2-popup')
            .should('be.visible')
    })
})
