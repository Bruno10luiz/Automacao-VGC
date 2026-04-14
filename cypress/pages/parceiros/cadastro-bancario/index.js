import { elements as el } from "./elements"

class DadosBancarios {

    acessarParceiro(nomeDoParceiro) {
        cy.contains('a', nomeDoParceiro).scrollIntoView().should('be.visible').click()
    }

    clicarNovoDadoBancario() {
        cy.get(el.btnNovoDadoBancario, { timeout: 10000 })
          .scrollIntoView()
          .should('be.visible')
          .click()
    }

    marcarOpcoesIniciais() {
        // Usa force: true caso o Angular esconda o checkbox original atrás de uma estilização
        cy.get(el.chkContaPrincipal).click({ force: true })
        cy.get(el.chkPermitirAdiantamento).click({ force: true })
    }

    preencherBanco(nomeBanco, opcaoLista) {
        // Garante que o campo de banco está habilitado antes de digitar
        cy.get(el.inputBanco).should('not.be.disabled').type(nomeBanco)
        cy.contains('li', opcaoLista).should('be.visible').click()
    }

    preencherDetalhesConta(dados) {
        // O .should('not.be.disabled') evita aquele erro chato que você teve na identificação
        cy.get(el.inputAgencia).should('not.be.disabled').type(dados.agencia)
        cy.get(el.inputNumeroConta).type(dados.numeroConta)
        cy.get(el.selectTipoConta).select(dados.tipoConta)
        cy.get(el.inputChavePix).type(dados.chavePix)
        cy.get(el.inputIdentificacao).should('not.be.disabled').type(dados.identificacao)
    }

    salvar() {
        // Voltando para a estrutura que você sabe que funciona bem no sistema!
        cy.contains('button', 'Salvar', { timeout: 10000 })
          .scrollIntoView()
          .should('be.visible')
          .click()
    }

    validarMensagemDeErro(mensagemExperada) {
        cy.contains(mensagemExperada, { timeout: 8000 }).should('be.visible')
    }

    clicarExcluirContaPrincipal() {
        // Encontra o card que contém a palavra "Principal", busca o botão de excluir dentro dele e clica
        cy.contains(el.cardContaBancaria, 'Principal')
          .find(el.btnIconeExcluir)
          .scrollIntoView()
          .should('be.visible')
          .click()
    }

    confirmarExclusaoModal() {
        // Aqui usamos o contains direto porque geralmente esses modais de confirmação 
        // aparecem soltos no final do HTML e é a forma mais segura de clicar
        cy.contains('button', 'Excluir').should('be.visible').click()
    }

    validarPopupAlertaVisivel() {
        cy.get(el.popupAlerta, { timeout: 8000 })
          .should('be.visible')
    }
}

export default new DadosBancarios()