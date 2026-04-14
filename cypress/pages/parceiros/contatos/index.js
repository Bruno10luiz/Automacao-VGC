import { elements as el } from "./elements"

class Contatos {

    criarContato(dados) {
        cy.get(el.nome).click()
        
        // Correção do Timeout: Espera o botão de novo contato ficar visível na tela antes de clicar
        cy.get(el.btnNovoContato, { timeout: 10000 }).should('be.visible').click()
        
        cy.get(el.nomeContato).type(dados.nomeContato)
        cy.get(el.email).type(dados.email)
        
        // Digita o país e verifica se o texto foi inserido no input
        cy.get(el.pais).type(dados.pais).should('have.value', dados.pais)
        
        // Correção do Dropdown: Clica na opção da lista suspensa que contém o nome do país
        cy.contains(dados.pais).should('be.visible').click()
        
        cy.get(el.celular).type(dados.celular)
        cy.get(el.btnSubmit).click()
    }

}

export default new Contatos()