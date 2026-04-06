import Login from "../pages/login"
import Dashboard from "../pages/dashboard"
import Parceiros from "../pages/parceiros" 


describe('Parceiros',  () => {

    const dados = {
        cenario: 'Cadastro: Parceiro Uso/Consumo', // Nome que vai aparecer no Cypress
        jornada: 'Parceiro Uso/Consumo',
        tipoPessoa: 'JURÍDICA',
        cnpj: '23.165.305/0001-59',
        nomeEsperado: 'HELOISA PELICULAS',
        cepEsperado: '03728210',
        cidade: 'SAO PAULO',
        bairroEsperado: 'JARDIM CASTELO',
        enderecoEsperado: 'CARLOS BIGATTI',
        numeroEsperado: '44',
        nomeContato: 'TESTE NAME',
        telefone: '1234567890',
        celularEsperado: '1123737119',
        emailEsperado: 'camilaspcorte@hotmail.com'  
    }

    before(() => {
        //arrange
        Login.visitarPagina()

        Login.preencherCredenciais()

        Dashboard.vericarAcessoDashboard()

    })

    it('Acessar Parceiros e Fazer Cadastro Parceiro Uso/Consumo', () => {
        
                Parceiros.acessarPagina()
                Parceiros.iniciarNovoCadastro()
                Parceiros.escolherJornada(dados.jornada)
                Parceiros.preencherFormulario(dados)
                Parceiros.salvarParceiro()        
                Parceiros.validarCadastroCriado(dados.nomeEsperado)
    })
})