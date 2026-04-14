import { elements as el } from './elements'

class Parceiros {
    
    acessarPagina() {
        cy.get(el.sidebarParceiros).click()
        // Boa prática: garantir que a tela carregou antes de continuar
        cy.url().should('include', '/parceiros') 
    }

    iniciarNovoCadastro() {
        cy.get(el.btnNovoParceiro).should('be.visible')
        cy.wait(2000) // Mantido do seu código para evitar o erro de timeout
        cy.get(el.btnNovoParceiro).click()
    }

    // Recebe qual é a jornada (Produtor Rural, Motorista, etc)
    escolherJornada(nomeDaJornada) {
        cy.get(el.jornadaItem).contains(nomeDaJornada).click()
        cy.get(el.pageHeading).should('contain.text', 'Novo Parceiro')
    }

    // Recebe um objeto gigante com todos os dados do parceiro da vez
    preencherFormulario(dados) {
        cy.get(el.tipoPessoa).select(dados.tipoPessoa)
        cy.get(el.cnpj).type(dados.cnpj)

        // Validações dos campos preenchidos automaticamente pela API do VGC
        cy.get(el.nome).should('have.value', dados.nomeEsperado)
        cy.get(el.razaoSocial).should('have.value', dados.razaoSocialEsperado)
        cy.get(el.cep).should('have.value', dados.cepEsperado)
        cy.get(el.cidade).type(dados.cidade)
        cy.contains('li', dados.cidade).last().should('be.visible').click() // Seleciona a cidade correta na lista suspensa
        
        // Validações de endereço automático
        cy.get(el.bairro).should('have.value', dados.bairroEsperado)
        cy.get(el.endereco).should('have.value', dados.enderecoEsperado)
        cy.get(el.numero).should('have.value', dados.numeroEsperado)
        cy.get(el.nomeContato).type(dados.nomeContato)

        // País e Telefones
        cy.get(el.pais).type('Brasil')
        cy.contains('li', 'Brasil').click()
        cy.get(el.telefone).type(dados.telefone)
        cy.get(el.celular).should('have.value', dados.celularEsperado)
        cy.get(el.email).should('have.value', dados.emailEsperado)
    }

    salvarParceiro() {
        cy.get(el.btnSubmit).click()
    }

    validarCadastroCriado(nomeEsperado) {
        cy.get(el.cardName).should('contain.text', nomeEsperado)
    }
}

export default new Parceiros()