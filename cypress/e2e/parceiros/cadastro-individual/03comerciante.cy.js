import Login from "../../../pages/login"
import Dashboard from "../../../pages/dashboard"
import Parceiros from "../../../pages/parceiros/cadastro-parceiros"


describe('Parceiros',  () => {

    const dados = {
        cenario: 'Cadastro: Comerciante', // Nome que vai aparecer no Cypress
        jornada: 'Comerciante',
        tipoPessoa: 'JURÍDICA',
        cnpj: '27.171.820/0001-00',
        nomeEsperado: 'PIZZARIA BAIANA',
        razaoSocialEsperado: 'PIZZARIA BAIANA LTDA',
        cepEsperado: '45530000',
        cidade: 'ITACARE',
        bairroEsperado: 'CENTRO',
        enderecoEsperado: 'LODONIO ALMEIDA',
        numeroEsperado: '160',
        nomeContato: 'TESTE NAME',
        telefone: '1234567890',
        celularEsperado: '7388066859',
        emailEsperado: 'pizzariabaiana.fin@gmail.com'
    }

    before(() => {
        //arrange
        Login.visitarPagina()

        Login.preencherCredenciais()

        Dashboard.vericarAcessoDashboard()

    })

    it('Acessar Parceiros e Fazer Cadastro comerciante', () => {
        
                Parceiros.acessarPagina()
                Parceiros.iniciarNovoCadastro()
                Parceiros.escolherJornada(dados.jornada)
                Parceiros.preencherFormulario(dados)
                Parceiros.salvarParceiro()        
                Parceiros.validarCadastroCriado(dados.nomeEsperado)
                Parceiros.deletarParceiroCriado(dados.razaoSocialEsperado)
    })
    
})