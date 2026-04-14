import Login from "../../../pages/login"
import Dashboard from "../../../pages/dashboard"
import Parceiros from "../../../pages/parceiros/cadastro-parceiros" 
import EditarParceiro from "../../../pages/parceiros/editar-parceiros"

const PARCEIRO_ORIGINAL = '50.071.289 DAVID DE SOUZA SILVA'
const PARCEIRO_ATUALIZADO = '50.071.289 DAVID DE SOUZA SILVA ATUALIZADO'

describe('Edição de Parceiro', () => {
    
    before (() => {
        Login.visitarPagina()
        Login.preencherCredenciais()
        Dashboard.vericarAcessoDashboard()
    })

    it('Atualizando Nome do parceiro, matriz não pode atualizar sozinha', () => {
        Parceiros.acessarPagina()
        
        // 1. Acessa o parceiro alvo
        EditarParceiro.acessarParceiro(PARCEIRO_ORIGINAL)
        
        // 2. Abre a edição e muda o nome
        EditarParceiro.abrirEdicao()
        EditarParceiro.atualizarNome(PARCEIRO_ATUALIZADO)
        EditarParceiro.salvarAtualizacao()
        
        // 3. Reabre o formulário para validar a regra de negócio da Matriz
        EditarParceiro.abrirEdicao()
        EditarParceiro.validarMatrizNaoAtualizada()

        // 4. TEARDOWN: Desfazendo a edição
        EditarParceiro.atualizarNome(PARCEIRO_ORIGINAL)
        EditarParceiro.salvarAtualizacao()
    })
})