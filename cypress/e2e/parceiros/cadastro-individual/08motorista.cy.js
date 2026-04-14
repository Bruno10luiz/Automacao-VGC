import Login from "../pages/login"
import Dashboard from "../../../pages/dashboard"
import Parceiros from "../../../pages/parceiros/cadastro-parceiros" 


describe('Parceiros',  () => {

    const dados = {
        cenario: 'Cadastro: Motorista', // Nome que vai aparecer no Cypress
        jornada: 'Motorista',
        tipoPessoa: 'JURÍDICA',
        cnpj: '44.652.127/0001-60',
        nomeEsperado: 'REFUGIO EVENTOS',
        razaoSocialEsperado: 'ESPACO REFUGIO EVENTOS LTDA',
        cepEsperado: '21741250',
        cidade: 'SAO GONCALO',
        bairroEsperado: 'JARDIM SULACAP',
        enderecoEsperado: 'MOTA MAIA',
        numeroEsperado: '24',
        nomeContato: 'TESTE NAME',
        telefone: '1234567890',
        celularEsperado: '2138670000',
        emailEsperado: 'espacorefugioeventos@gmail.com'
    }

    before(() => {
        //arrange
        Login.visitarPagina()

        Login.preencherCredenciais()

        Dashboard.vericarAcessoDashboard()

    })

    it('Acessar Parceiros e Fazer Cadastro motorista', () => {
        
               Parceiros.acessarPagina()
               Parceiros.iniciarNovoCadastro()
               Parceiros.escolherJornada(dados.jornada)
               Parceiros.preencherFormulario(dados)
               Parceiros.salvarParceiro()        
               Parceiros.validarCadastroCriado(dados.nomeEsperado)
    })
})