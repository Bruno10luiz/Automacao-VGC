import Login from "../../../pages/login"
import Dashboard from "../../../pages/dashboard"
import Parceiros from "../../../pages/parceiros" // Importa a página nova


describe('Procurar Conta Contábil', () => {
    before (() => {
        Login.visitarPagina()

        Login.preencherCredenciais()

        Dashboard.vericarAcessoDashboard()
    })

    it('Acessar Fiscal e criar conta contábil com código reduzido', () => {
        Parceiros.acessarPagina()

        cy.contains('a', 'AGROMAXIMUS COMERCIO E REPR.AGRICOLA LTD').click()
        cy.get('button[title="Editar Fiscal"]').click()
        cy.get('[formcontrolname="contaContabil3"]').type('19804')
        cy.contains('li', '19804 - Descrição: Agromaximus Comercio e Repr. Agri. Ltda. - Número Conta: 1.1.3.07.0867 ').click()
        cy.contains('button', ' Cancelar ').click()
    })
})