import Login from "../../../pages/login"
import Dashboard from "../../../pages/dashboard"
import Parceiros from "../../../pages/parceiros/cadastro-parceiros" 
import DadosBancarios from "../../../pages/parceiros/cadastro-bancario"

const PARCEIRO_TESTE = '50.071.289 DAVID DE SOUZA SILVA'

describe('Procurar Conta Contábil', () => {
    
    beforeEach(() => {
        Login.visitarPagina()
        Login.preencherCredenciais()
        Dashboard.vericarAcessoDashboard()
    })

    it('Acessar Dados Bancários e criar novo dado bancário com todas informações: Corrente', () => {
        Parceiros.acessarPagina()
        DadosBancarios.acessarParceiro(PARCEIRO_TESTE)
        DadosBancarios.clicarNovoDadoBancario()

        DadosBancarios.marcarOpcoesIniciais()
        DadosBancarios.preencherBanco('Banco do Brasil', 'BANCO DO BRASIL S/A (1)')
        

        DadosBancarios.preencherDetalhesConta({
            agencia: '1234',
            numeroConta: '56789-0',
            tipoConta: 'Corrente',
            chavePix: '12345678900',
            identificacao: 'Dado Bancário Teste'
        })
        DadosBancarios.salvar()
    })

    it('Acessar Dados Bancários e criar novo dado bancário com todas informações: Poupança', () => {
        Parceiros.acessarPagina()
        DadosBancarios.acessarParceiro(PARCEIRO_TESTE)
        DadosBancarios.clicarNovoDadoBancario()

        DadosBancarios.marcarOpcoesIniciais()
        DadosBancarios.preencherBanco('Banco do Brasil', 'BANCO DO BRASIL S/A (1)')

        DadosBancarios.preencherDetalhesConta({
            agencia: '1234',
            numeroConta: '56789-0',
            tipoConta: 'Poupança', 
            chavePix: '12345678900',
            identificacao: 'Dado Bancário Teste'
        })
        DadosBancarios.salvar()
    })

    it('Acessar Dados Bancários e criar novo dado bancário com apenas informações obrigatórias', () => {
        Parceiros.acessarPagina()
        DadosBancarios.acessarParceiro(PARCEIRO_TESTE)
        DadosBancarios.clicarNovoDadoBancario()

        DadosBancarios.preencherBanco('Banco do Brasil', 'BANCO DO BRASIL S/A (1)')
        DadosBancarios.salvar()
    })

    /*it('Acessar Dados Bancários e tentar criar novo dado bancário sem preencher campos obrigatórios', () => {
        Parceiros.acessarPagina()
        DadosBancarios.acessarParceiro(PARCEIRO_TESTE)
        DadosBancarios.clicarNovoDadoBancario()

        DadosBancarios.salvar()
        DadosBancarios.validarMensagemDeErro('Banco é obrigatório')
    })*/
})