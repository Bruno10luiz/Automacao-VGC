import Login from "../pages/login"
import Dashboard from "../pages/dashboard"
import Parceiros from "../pages/parceiros" 


describe('Parceiros',  () => {

    const dados = {
        cenario: 'Cadastro: Importador', // Nome que vai aparecer no Cypress
        jornada: 'Produtor Rural',
        tipoPessoa: 'JURÍDICA',
        cnpj: '50.071.289/0001-08',
        nomeEsperado: '50.071.289 DAVID DE SOUZA SILVA',
        razaoSocialEsperado: '50.071.289 DAVID DE SOUZA SILVA',
        cepEsperado: '24736590',
        cidade: 'SAO GONCALO',
        bairroEsperado: 'LAGOINHA',
        enderecoEsperado: 'MARECHAL POVOAS',
        numeroEsperado: '05',
        nomeContato: 'TESTE NAME',
        telefone: '1234567890',
        celularEsperado: '2197735570',
        emailEsperado: 'davidengproducao@gmail.com'
    }

    before(() => {
        //arrange
        Login.visitarPagina()

        Login.preencherCredenciais()

        Dashboard.vericarAcessoDashboard()

    })

    it('Acessar Parceiros e Fazer Cadastro importador', () => {
        
        //act
        cy.get('a[href="/parceiros"]').click(); //sidebar parceiros

        cy.get('button[title="Criar um novo parceiro"]').should('be.visible')
        cy.wait(2000) 

        cy.get('button[title="Criar um novo parceiro"]').click(); //novo parceiro

        cy.get('.escolher-jornada-parceiro__item').contains('Importador').click() //importador

        cy.get('.page-heading')
            .should('contain.text', 'Novo Parceiro') //validando se está na página de cadastro de parceiro

        cy.get('#tipoPessoa').select('JURÍDICA')//selecionando tipo pessoa jurídica ou fisica

        cy.get('#cnpj').type('50.071.289/0001-08')// cnpj

        cy.get('#nome')
            .should('have.value', '50.071.289 DAVID DE SOUZA SILVA' )//nome preenchido automaticamente após inserir o cnpj
        cy.get('#razaoSocial')
            .should('have.value', '50.071.289 DAVID DE SOUZA SILVA' )//razao social preenchida automaticamente após inserir o cnpj
        cy.get('#cep')
            .should('have.value', '24736590')//cep preenchido automaticamente após inserir o cnpj

        cy.get('input[placeholder="Digite o nome da cidade"]')//cidade
            .type('SAO GONCALO')
            
        cy.contains('SAO GONCALO')
            .last() 
            .should('be.visible')
            .click();

        cy.get('input[placeholder="Informe o bairro"]')
            .should('have.value', 'LAGOINHA')
        cy.get('#endereco')
            .should('have.value', 'MARECHAL POVOAS')
        cy.get('#numero')
            .should('have.value', '05')

        cy.get('#nomeContato').type('David')

        cy.get('input[placeholder="Buscar país"]').type('Brasil')
        cy.contains('li', 'Brasil').click()

        cy.get('#telefone').type('1234567890')
        cy.get('#celular')
            .should('have.value', '2197735570')
        cy.get('#email')
            .should('have.value', 'davidengproducao@gmail.com')
        cy.get('button[type="submit"]').click()

        cy.get('.card-info-parceiro__name')
            .should('contain.text', '50.071.289 DAVID DE SOUZA SILVA')
    })
})