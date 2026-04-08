import Login from "../pages/login"
import Dashboard from "../pages/dashboard"
import Parceiros from "../pages/parceiros" 


describe('Parceiros',  () => {

    const dados = {
       cenario: 'Cadastro: Torrador Interno', // Nome que vai aparecer no Cypress
        jornada: 'Torrador Mercado Interno',
        tipoPessoa: 'JURÍDICA',
        cnpj: '01.791.100/0001-46',
        nomeEsperado: 'MASTER SHOP',
        razaoSocialEsperado: 'A ANDRADE FREITAS',
        cepEsperado: '40140020',
        cidade: 'SALVADOR',
        bairroEsperado: 'BARRA AVENIDA',
        enderecoEsperado: 'ANTUNES',
        numeroEsperado: '16',
        nomeContato: 'TESTE NAME',
        telefone: '1234567890',
        //celularEsperado: '2197735570',
        //emailEsperado: 'teste@gmail.com' 
    }

    before(() => {
        //arrange
        Login.visitarPagina()

        Login.preencherCredenciais()

        Dashboard.vericarAcessoDashboard()

    })

    it('Acessar Parceiros e Fazer Cadastro torradorinterno', () => {
        
                Parceiros.acessarPagina()
                Parceiros.iniciarNovoCadastro()
                Parceiros.escolherJornada(dados.jornada)
                Parceiros.preencherFormulario(dados)
                Parceiros.salvarParceiro()        
                Parceiros.validarCadastroCriado(dados.nomeEsperado)
    })
})