import Login from "../pages/login"
import Dashboard from "../pages/dashboard"
import Parceiros from "../pages/parceiros" 


describe('Parceiros',  () => {

    const dados = {
        cenario: 'Cadastro: Transportadora', // Nome que vai aparecer no Cypress
        jornada: 'Transportadora',
        tipoPessoa: 'JURÍDICA',
        cnpj: '55.019.365/0001-50',
        nomeEsperado: 'ANTUNES DETAILS LTDA',
        razaoSocialEsperado: 'ANTUNES DETAILS LTDA',
        cepEsperado: '89070410',
        cidade: 'BLUMENAU',
        bairroEsperado: 'BADENFURT',
        enderecoEsperado: 'FRANCISCO PASSOLD',
        numeroEsperado: '40',
        nomeContato: 'TESTE NAME',
        telefone: '1234567890',
        celularEsperado: '4792500708',
        emailEsperado: 'paulosantunes2017@gmail.com'
    }

    before(() => {
        //arrange
        Login.visitarPagina()

        Login.preencherCredenciais()

        Dashboard.vericarAcessoDashboard()

    })

    it('Acessar Parceiros e Fazer Cadastro transportadora', () => {
        
               Parceiros.acessarPagina()
               Parceiros.iniciarNovoCadastro()
               Parceiros.escolherJornada(dados.jornada)
               Parceiros.preencherFormulario(dados)
               Parceiros.salvarParceiro()        
               Parceiros.validarCadastroCriado(dados.nomeEsperado)
    })
})