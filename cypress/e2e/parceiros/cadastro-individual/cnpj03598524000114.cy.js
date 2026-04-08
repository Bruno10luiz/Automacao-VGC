import Login from "../../../pages/login"
import Dashboard from "../../../pages/dashboard"
import Parceiros from "../../../pages/parceiros" 

const dados = {
    cenario: 'Cadastro: Produtor Rural - David', // Nome que vai aparecer no Cypress
    jornada: 'Produtor Rural',
    tipoPessoa: 'JURÍDICA',
    cnpj: '03.598.524/0001-14',
    nomeEsperado: 'MAERSK LOGISTICS & SERVICES BRASIL LTDA.',
    razaoSocialEsperado: 'MAERSK LOGISTICS & SERVICES BRASIL LTDA.',
    cepEsperado: '89249000',
    cidade: 'ABDON BATISTA',
    bairroEsperado: 'AREAS DIVERSAS',
    enderecoEsperado: 'JOSE ALVES',
    numeroEsperado: '4184',
    nomeContato: 'TESTE NAME',
    telefone: '1234567890',
    celularEsperado: '1150397113',
    emailEsperado: 'tax-br@maersk.com'
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
        //Parceiros.salvarParceiro()        
       // Parceiros.validarCadastroCriado(dados.nomeEsperado)
        
    })
})