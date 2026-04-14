import Login from "../../../pages/login"
import Dashboard from "../../../pages/dashboard"
import Parceiros from "../../../pages/parceiros/cadastro-parceiros" 
import Fiscal from "../../../pages/parceiros/cadastro-contabil" // Ajuste o caminho da pasta!

const PARCEIRO_TESTE = 'AGROMAXIMUS COMERCIO E REPR.AGRICOLA LTD'

describe('Fiscal e Conta Contábil', () => {
    
    before(() => {
        Login.visitarPagina()
        Login.preencherCredenciais()
        Dashboard.vericarAcessoDashboard()
    })

    it('Acessar Fiscal e testar conta contábil com código reduzido (Cancelando no final)', () => {
        Parceiros.acessarPagina()

        // 1. Acessa o parceiro e entra no modo de edição fiscal
        Fiscal.acessarParceiro(PARCEIRO_TESTE)
        Fiscal.clicarEditarFiscal()

        // 2. Preenche o campo e seleciona a opção gerada
        Fiscal.preencherContaContabil(
            '19804', 
            '19804 - Descrição: Agromaximus Comercio e Repr. Agri. Ltda. - Número Conta: 1.1.3.07.0867'
        )
        // 3. Cancela a ação
        Fiscal.cancelarEdicao()
    })
})