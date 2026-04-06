import Login from '../pages/login'
import Dashboard from '../pages/dashboard'


describe('Login',  () => {

    before(() => {
        //Arrange
        Login.visitarPagina()
    
    })

    it.only('Login feito com sucesso', () => {

        //act
        Login.preencherCredenciais()

        //assert
        Dashboard.vericarAcessoDashboard()
        

    })

})