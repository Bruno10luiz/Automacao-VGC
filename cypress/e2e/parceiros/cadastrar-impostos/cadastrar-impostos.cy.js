import Login from "../../../pages/login"
import Dashboard from "../../../pages/dashboard"
import Parceiros from "../../../pages/parceiros/cadastro-parceiros" 
// Importe a sua nova página de impostos
import Impostos from "../../../pages/parceiros/cadastro-imposto" 

describe('Impostos',() => {

    beforeEach(() =>{
        Login.visitarPagina()
        Login.preencherCredenciais()    
        Dashboard.vericarAcessoDashboard()
        Parceiros.acessarPagina()
        Impostos.acessarParceiro() 
    })

    it('Cadastrar Impostos Presumido ICMS DEB', () => {
        
        const dadosImposto = {
            buscaTipo: 'presumido',
            nomeExatoLista: 'Presumido ICMS DEB',
            nota: 'Nenhum',
            financeiro: 'Nenhum',
            estoque: 'Nenhum'
        }
        
        Impostos.cadastrarNovoImposto(dadosImposto)
    })

    it('Cadastrar Impostos Teste 01/12 - 2', () => {
        const dadosImposto = {
            buscaTipo: 'teste 01/12',
            nomeExatoLista: 'Teste 01/12 - 2',
            nota: 'Nenhum',
            financeiro: 'Subtrair',
            estoque: 'Subtrair'
        }
        
        Impostos.cadastrarNovoImposto(dadosImposto)
    })
    

    /*
    it('Cadastrar Outro Imposto (Exemplo do código comentado)', () => {
        Impostos.cadastrarNovoImposto({
            buscaTipo: 'algum outro imposto',
            nomeExatoLista: 'Nome Exato - X',
            nota: 'Subtrair',
            financeiro: 'Subtrair',
            estoque: 'Subtrair'
        })
    })
    */
})