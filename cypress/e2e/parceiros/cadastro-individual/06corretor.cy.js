import Login from "../pages/login"
import Dashboard from "../../../pages/dashboard"
import Parceiros from "../../../pages/parceiros/cadastro-parceiros" 


describe('Parceiros',  () => {
    
    const dados ={
        cenario: 'Cadastro: Corretor', // Nome que vai aparecer no Cypress
        jornada: 'Corretor',
        tipoPessoa: 'JURÍDICA',
        cnpj: '46.060.391/0001-30',
        nomeEsperado: 'LAMPIAO 10',
        razaoSocialEsperado: 'RIO FORMOSO 8 ENERGIA RENOVAVEL S.A.',
        cepEsperado: '24736590',
        cidade: 'SAO GONCALO',
        bairroEsperado: 'FLAMENGO',
        enderecoEsperado: 'DO FLAMENGO',
        numeroEsperado: '00078',
        nomeContato: 'TESTE NAME',
        telefone: '1234567890',
        celularEsperado: '2132359800',
        emailEsperado: 'impostos.diretos@neoenergia.com'
    }

    before(() => {
        //arrange
        Login.visitarPagina()

        Login.preencherCredenciais()

        Dashboard.vericarAcessoDashboard()

    })

    it('Acessar Parceiros e Fazer Cadastro corretor', () => {
        
                Parceiros.acessarPagina()
                Parceiros.iniciarNovoCadastro()
                Parceiros.escolherJornada(dados.jornada)
                Parceiros.preencherFormulario(dados)
                Parceiros.salvarParceiro()        
                Parceiros.validarCadastroCriado(dados.nomeEsperado)
    })
})