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

    it('Acessar Parceiros e validar exclusão de conta principal bancária', () => {
        Parceiros.acessarPagina()
        
        // Usa o método genérico para entrar no parceiro
        DadosBancarios.acessarParceiro(PARCEIRO_TESTE)

        // Fluxo de exclusão
        DadosBancarios.clicarExcluirContaPrincipal()
        DadosBancarios.confirmarExclusaoModal()
        
        // Validação
        DadosBancarios.validarPopupAlertaVisivel()
    })
})