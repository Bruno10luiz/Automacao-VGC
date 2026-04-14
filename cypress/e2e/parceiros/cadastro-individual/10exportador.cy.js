import Login from "../pages/login"
import Dashboard from "../../../pages/dashboard"
import Parceiros from "../../../pages/parceiros/cadastro-parceiros"


describe('Parceiros',  () => {
    
    const dados = {
        cenario: 'Cadastro: Exportador', // Nome que vai aparecer no Cypress
        jornada: 'Exportador',
        tipoPessoa: 'JURÍDICA',
        cnpj: '13.140.593/0001-33',
        nomeEsperado: 'ALFA CARNES',
        razaoSocialEsperado: 'ALFA CARNES COMERCIAL LTDA',
        cepEsperado: '05116000',
        cidade: 'SAO PAULO',
        bairroEsperado: 'VILA JAGUARA',
        enderecoEsperado: 'PAUVA',
        numeroEsperado: 'N.192',
        nomeContato: 'TESTE NAME',
        telefone: '1234567890',
        celularEsperado: '1136216258',
        emailEsperado: 'contpaulistanodp@gmail.com'
    }

    before(() => {
        //arrange
        Login.visitarPagina()

        Login.preencherCredenciais()

        Dashboard.vericarAcessoDashboard()

    })

    it('Acessar Parceiros e Fazer Cadastro exportador', () => {
        
                Parceiros.acessarPagina()
                Parceiros.iniciarNovoCadastro()
                Parceiros.escolherJornada(dados.jornada)
                Parceiros.preencherFormulario(dados)
                Parceiros.salvarParceiro()        
                Parceiros.validarCadastroCriado(dados.nomeEsperado)
    })
})