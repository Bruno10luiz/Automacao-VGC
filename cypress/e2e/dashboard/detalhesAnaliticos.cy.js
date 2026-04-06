import Login from "../../pages/login"
import Dashboard from "../../pages/dashboard"


describe('Detalhes Analiticos',  () => {

    before(() => {
        //arrange
        Login.visitarPagina()

        Login.preencherCredenciais()

        Dashboard.vericarAcessoDashboard()

    })

    it('Acessar detalhes analiticos de parceiros', () => {
        //act
        Dashboard.verificarDetalhesParceiros()
        

    })

})