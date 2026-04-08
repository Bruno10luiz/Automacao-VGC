import Login from "../../../pages/login"
import Dashboard from "../../../pages/dashboard"
import Parceiros from "../../../pages/parceiros" 

describe('Impostos',() => {

    before(() =>{
        Login.visitarPagina()

        Login.preencherCredenciais()    

        Dashboard.vericarAcessoDashboard()

    })

    it('Cadastrar Impostos', () => {
        Parceiros.acessarPagina()
        cy.contains('a','50.071.289 DAVID DE SOUZA SILVA').click()
        cy.wait(1000)
        cy.contains('button', 'Novo Imposto').click()

        //tipo de imposto
        cy.get('input[placeholder="Buscar tipo de imposto"]').type('presumido')
        cy.contains('li', 'Presumido ICMS DEB').click()

        //Na nota
        cy.get('#nota').select('Nenhum')
        

        //No financeiro origem
        cy.get('#origemFinanceiro').select('Nenhum')
            

        //No financeiro origem estoque
        cy.get('#origemEstoque').select('Nenhum')

        //Calcular
        cy.get('#calcular').click()

        //Salvar
        cy.contains('button', 'Salvar').click()


        //Adicionar outro imposto
        cy.wait(1000)
        cy.contains('button', 'Novo Imposto').click()

        //Na nota
        cy.get('#nota').select('Nenhum')
        
        //No financeiro origem
        cy.get('#origemFinanceiro').select('Subtrair')
            
        //No financeiro origem estoque
        cy.get('#origemEstoque').select('Subtrair')

        //Calcular
        cy.get('#calcular').click()

        //Salvar
        cy.contains('button', 'Salvar').click()

        //Adicionar outro imposto
        cy.wait(1000)
        cy.contains('button', 'Novo Imposto').click()

        //Na nota
        cy.get('#nota').select('Subtrair')
        
        //No financeiro origem
        cy.get('#origemFinanceiro').select('Subtrair')
            
        //No financeiro origem estoque
        cy.get('#origemEstoque').select('Subtrair')

        //Calcular
        cy.get('#calcular').click()

        //Salvar
        cy.contains('button', 'Salvar').click()


        
    })

})