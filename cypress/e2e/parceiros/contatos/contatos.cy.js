import Login from "../../../pages/login"
import Dashboard from "../../../pages/dashboard"
import Parceiros from "../../../pages/parceiros/cadastro-parceiros" 
import Contatos from "../../../pages/parceiros/contatos"


const dadosContato = {
    nomeContato: 'TESTE NAME',
    email: 'email@example.com',
    pais: 'Estados Unidos',
    celular: '1234567890'
}


describe('Criar contato', () => {
    before (() => {
        Login.visitarPagina()

        Login.preencherCredenciais()

        Dashboard.vericarAcessoDashboard()
    })

    it('Acessar Contato e criar novo contato', () => {
        Parceiros.acessarPagina()
        Contatos.criarContato(dadosContato)

    })
})
