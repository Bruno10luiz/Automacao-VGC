import Login from "../pages/login"
import Dashboard from "../../../pages/dashboard"
import Parceiros from "../../../pages/parceiros/cadastro-parceiros" 


describe('Parceiros',  () => {

    const dados = {
        cenario: 'Cadastro: Prestador de Serviço', // Nome que vai aparecer no Cypress
        jornada: 'Prestador de Serviço',
        tipoPessoa: 'JURÍDICA',
        cnpj: '52.567.367/0001-95',
        nomeEsperado: '52.567.367 TAMIRES DINO PARANHOS',
        razaoSocialEsperado: '52.567.367 TAMIRES DINO PARANHOS',
        cepEsperado: '13218783',
        cidade: 'CAMPINAS',
        bairroEsperado: 'IVOTURUCAIA',
        enderecoEsperado: 'VEREADOR DUILIO GARBATTI',
        numeroEsperado: '140',
        nomeContato: 'TESTE NAME',
        telefone: '1234567890',
        celularEsperado: '1144933020',
        emailEsperado: 'zigue1436@gmail.com'
    }

    before(() => {
        //arrange
        Login.visitarPagina()

        Login.preencherCredenciais()

        Dashboard.vericarAcessoDashboard()

    })

    it('Acessar Parceiros e Fazer Cadastro Prestador de Serviço', () => {
        
                Parceiros.acessarPagina()
                Parceiros.iniciarNovoCadastro()
                Parceiros.escolherJornada(dados.jornada)
                Parceiros.preencherFormulario(dados)
                Parceiros.salvarParceiro()        
                Parceiros.validarCadastroCriado(dados.nomeEsperado)
    })
})