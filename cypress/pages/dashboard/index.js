import { elements as el} from './elements'

class Dashboard {
    vericarAcessoDashboard() {
        cy.url().should('eq', 'https://portal.dev.veloso.com.br/dashboard')
    }

    verificarDetalhesParceiros() {
        cy.get(el.navDetalhesAnaliticos).click()

        cy.get(el.inputIdParceiro).type('12835')

        cy.get(el.btnBuscarParceiro).click()

        cy.get(el.resultadoPesquisa)
            .should('contain.text','BERNHARD ROTHFOS GMBH')

        cy.get(el.btnVisualizarParceiro).click()
    }

}

export default new Dashboard()