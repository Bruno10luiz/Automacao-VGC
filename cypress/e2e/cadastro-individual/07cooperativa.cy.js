import Login from "../pages/login"
import Dashboard from "../pages/dashboard"
import Parceiros from "../pages/parceiros" 


describe('Parceiros',  () => {

    const dados = {
        cenario: 'Cadastro: Cooperativa', // Nome que vai aparecer no Cypress
        jornada: 'Cooperativa',
        tipoPessoa: 'JURÍDICA',
        cnpj: '16.985.833/0001-99',
        nomeEsperado: 'GRUPO LEO ROSTRO CORRETORES DE IMOVEIS',
        razaoSocialEsperado: 'LEO ROSTRO EMPREENDIMENTOS IMOBILIARIOS LTDA',
        cepEsperado: '88301650',
        cidade: 'ITAJAI',
        bairroEsperado: 'FAZENDA',
        enderecoEsperado: 'AGOSTINHO FERNANDES VIEIRA',
        numeroEsperado: '62',
        nomeContato: 'TESTE NAME',
        telefone: '1234567890',
        celularEsperado: '5130294987',
        emailEsperado: 'societario@audipers.com.br'
    }

    before(() => {
        //arrange
        Login.visitarPagina()

        Login.preencherCredenciais()

        Dashboard.vericarAcessoDashboard()

    })

    it('Acessar Parceiros e Fazer Cadastro cooperativa', () => {
        
                Parceiros.acessarPagina()
                Parceiros.iniciarNovoCadastro()
                Parceiros.escolherJornada(dados.jornada)
                Parceiros.preencherFormulario(dados)
                Parceiros.salvarParceiro()        
                Parceiros.validarCadastroCriado(dados.nomeEsperado)
    })
})