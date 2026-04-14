import Login from "../pages/login"
import Dashboard from "../../../pages/dashboard"
import Parceiros from "../../../pages/parceiros/cadastro-parceiros"


describe('Parceiros',  () => {

    const dados = {
        cenario: 'Cadastro: Comerciante', // Nome que vai aparecer no Cypress
        jornada: 'Comerciante',
        tipoPessoa: 'JURÍDICA',
        cnpj: '17.522.276/0001-32',
        nomeEsperado: 'BRASEIRO SPETTUS',
        razaoSocialEsperado: 'JOSE FERNANDES OLIVEIRA NETO 02210930367',
        cepEsperado: '60325690',
        cidade: 'FORTALEZA',
        bairroEsperado: 'MONTE CASTELO',
        enderecoEsperado: 'HENRIQUE AUTRAN',
        numeroEsperado: '621',
        nomeContato: 'TESTE NAME',
        telefone: '1234567890',
        celularEsperado: '8589125844',
        emailEsperado: ''
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
    })
})