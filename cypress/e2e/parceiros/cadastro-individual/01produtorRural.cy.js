import Login from "../../../pages/login"
import Dashboard from "../../../pages/dashboard"
import Parceiros from "../../../pages/parceiros" 

const dados = {
    cenario: 'Cadastro: Produtor Rural - David', // Nome que vai aparecer no Cypress
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


describe('Parceiros',  () => {

    before(() => {
        //arrange
        Login.visitarPagina()

        Login.preencherCredenciais()

        Dashboard.vericarAcessoDashboard()

    })

    it('Acessar Parceiros e Fazer Cadastro Produtor Rural', () => {

        Parceiros.acessarPagina()
        Parceiros.iniciarNovoCadastro()
        Parceiros.escolherJornada(dados.jornada)
        Parceiros.preencherFormulario(dados)
        Parceiros.salvarParceiro()        
        Parceiros.validarCadastroCriado(dados.nomeEsperado)
        
    })
})