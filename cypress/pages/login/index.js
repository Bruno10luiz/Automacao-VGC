import { elements as el } from './elements'

class Login {

    visitarPagina() {
        cy.visit('https://portal.dev.veloso.com.br/')
    }

    preencherCredenciais(){

        cy.get(el.username).type('gabriel@devspott.com')

        cy.get(el.password).type('Gabeirigo123!')

        cy.get(el.submitButton).click()

    }


}

export default new Login()