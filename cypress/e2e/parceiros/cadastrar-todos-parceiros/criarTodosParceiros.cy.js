import Login from "../../pages/login"
import Dashboard from "../../pages/dashboard"
import Parceiros from "../../pages/parceiros" // Importa a página nova

const massaDeDados = [
    {
        cenario: 'Cadastro: Produtor Rural ', // Nome que vai aparecer no Cypress
        jornada: 'Produtor Rural',
        tipoPessoa: 'JURÍDICA',
        cnpj: '50.071.289/0001-08',
        nomeEsperado: '50.071.289 DAVID DE SOUZA SILVA',
        razaoSocialEsperado: '50.071.289 DAVID DE SOUZA SILVA',
        cepEsperado: '24736590',
        cidade: 'SAO GONCALO',
        bairroEsperado: 'LAGOINHA',
        enderecoEsperado: 'MARECHAL POVOAS',
        numeroEsperado: '05',
        nomeContato: 'TESTE NAME',
        telefone: '1234567890',
        celularEsperado: '2197735570',
        emailEsperado: 'davidengproducao@gmail.com'
    },
    {
        cenario: 'Cadastro: Importador', // Nome que vai aparecer no Cypress
        jornada: 'Produtor Rural',
        tipoPessoa: 'JURÍDICA',
        cnpj: '50.071.289/0001-08',
        nomeEsperado: '50.071.289 DAVID DE SOUZA SILVA',
        razaoSocialEsperado: '50.071.289 DAVID DE SOUZA SILVA',
        cepEsperado: '24736590',
        cidade: 'SAO GONCALO',
        bairroEsperado: 'LAGOINHA',
        enderecoEsperado: 'MARECHAL POVOAS',
        numeroEsperado: '05',
        nomeContato: 'TESTE NAME',
        telefone: '1234567890',
        celularEsperado: '2197735570',
        emailEsperado: 'davidengproducao@gmail.com'
    },
    {
        cenario: 'Cadastro: Comerciante', // Nome que vai aparecer no Cypress
        jornada: 'Comerciante',
        tipoPessoa: 'JURÍDICA',
        cnpj: '17.522.276/0001-32',
        nomeEsperado: 'BRASEIRO SPETTUS',
        razaoSocialEsperado: 'JOSE FERNANDES OLIVEIRA NETO 02210930367',
        cepEsperado: '60325690',
        cidade: 'FORTALEZA',
        bairroEsperado: 'MONTE CASTELO',
        enderecoEsperado: 'HENRIQUE AUTRAN',
        numeroEsperado: '621',
        nomeContato: 'TESTE NAME',
        telefone: '1234567890',
        celularEsperado: '8589125844',
        emailEsperado: ''
    },
    {
        cenario: 'Cadastro: Torrador Externo', // Nome que vai aparecer no Cypress
        jornada: 'Torrador Mercado Externo',
        tipoPessoa: 'JURÍDICA',
        cpf: '207.184.720-20',
        nomeEsperado: '50.071.289 DAVID DE SOUZA SILVA',
        razaoSocialEsperado: '50.071.289 DAVID DE SOUZA SILVA',
        cepEsperado: '24736590',
        cidade: 'SAO GONCALO',
        bairroEsperado: 'LAGOINHA',
        enderecoEsperado: 'MARECHAL POVOAS',
        numeroEsperado: '05',
        nomeContato: 'TESTE NAME',
        telefone: '1234567890',
        celularEsperado: '2197735570',
        emailEsperado: 'davidengproducao@gmail.com'
    },
    {
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
    },
    {
        cenario: 'Cadastro: Corretor', // Nome que vai aparecer no Cypress
        jornada: 'Corretor',
        tipoPessoa: 'JURÍDICA',
        cnpj: '46.060.391/0001-30',
        nomeEsperado: 'LAMPIAO 10',
        razaoSocialEsperado: 'RIO FORMOSO 8 ENERGIA RENOVAVEL S.A.',
        cepEsperado: '24736590',
        cidade: 'SAO GONCALO',
        bairroEsperado: 'FLAMENGO',
        enderecoEsperado: 'DO FLAMENGO',
        numeroEsperado: '00078',
        nomeContato: 'TESTE NAME',
        telefone: '1234567890',
        celularEsperado: '2132359800',
        emailEsperado: 'impostos.diretos@neoenergia.com'
    },
    {
        cenario: 'Cadastro: Cooperativa', // Nome que vai aparecer no Cypress
        jornada: 'Cooperativa',
        tipoPessoa: 'JURÍDICA',
        cnpj: '16.985.833/0001-99',
        nomeEsperado: 'GRUPO LEO ROSTRO CORRETORES DE IMOVEIS',
        razaoSocialEsperado: 'LEO ROSTRO EMPREENDIMENTOS IMOBILIARIOS LTDA',
        cepEsperado: '88301650',
        cidade: 'ITAJAI',
        bairroEsperado: 'FAZENDA',
        enderecoEsperado: 'AGOSTINHO FERNANDES VIEIRA',
        numeroEsperado: '62',
        nomeContato: 'TESTE NAME',
        telefone: '1234567890',
        celularEsperado: '5130294987',
        emailEsperado: 'societario@audipers.com.br'
    },
    {
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
    },
    {
        cenario: 'Cadastro: Prestador de Serviço', // Nome que vai aparecer no Cypress
        jornada: 'Prestador de Serviço',
        tipoPessoa: 'JURÍDICA',
        cnpj: '52.567.367/0001-95',
        nomeEsperado: '52.567.367 TAMIRES DINO PARANHOS',
        razaoSocialEsperado: '52.567.367 TAMIRES DINO PARANHOS',
        cepEsperado: '13218783',
        cidade: 'CAMPINAS',
        bairroEsperado: 'IVOTURUCAIA',
        enderecoEsperado: 'VEREADOR DUILIO GARBATTI',
        numeroEsperado: '140',
        nomeContato: 'TESTE NAME',
        telefone: '1234567890',
        celularEsperado: '1144933020',
        emailEsperado: 'zigue1436@gmail.com'
    },
    {
        cenario: 'Cadastro: Exportador', // Nome que vai aparecer no Cypress
        jornada: 'Exportador',
        tipoPessoa: 'JURÍDICA',
        cnpj: '13.140.593/0001-33',
        nomeEsperado: 'ALFA CARNES',
        razaoSocialEsperado: 'ALFA CARNES COMERCIAL LTDA',
        cepEsperado: '05116000',
        cidade: 'SAO PAULO',
        bairroEsperado: 'VILA JAGUARA',
        enderecoEsperado: 'PAUVA',
        numeroEsperado: 'N.192',
        nomeContato: 'TESTE NAME',
        telefone: '1234567890',
        celularEsperado: '1136216258',
        emailEsperado: 'contpaulistanodp@gmail.com'
    },
    {
        cenario: 'Cadastro: Transportadora', // Nome que vai aparecer no Cypress
        jornada: 'Transportadora',
        tipoPessoa: 'JURÍDICA',
        cnpj: '55.019.365/0001-50',
        nomeEsperado: 'ANTUNES DETAILS LTDA',
        razaoSocialEsperado: 'ANTUNES DETAILS LTDA',
        cepEsperado: '89070410',
        cidade: 'BLUMENAU',
        bairroEsperado: 'BADENFURT',
        enderecoEsperado: 'FRANCISCO PASSOLD',
        numeroEsperado: '40',
        nomeContato: 'TESTE NAME',
        telefone: '1234567890',
        celularEsperado: '4792500708',
        emailEsperado: 'paulosantunes2017@gmail.com'
    },
    
    {
        cenario: 'Cadastro: Parceiro Uso/Consumo', // Nome que vai aparecer no Cypress
        jornada: 'Parceiro Uso/Consumo',
        tipoPessoa: 'JURÍDICA',
        cnpj: '23.165.305/0001-59',
        nomeEsperado: 'HELOISA PELICULAS',
        cepEsperado: '03728210',
        cidade: 'SAO PAULO',
        bairroEsperado: 'JARDIM CASTELO',
        enderecoEsperado: 'CARLOS BIGATTI',
        numeroEsperado: '44',
        nomeContato: 'TESTE NAME',
        telefone: '1234567890',
        celularEsperado: '1123737119',
        emailEsperado: 'camilaspcorte@hotmail.com'
    },
  
];

describe('Parceiros', () => {

    beforeEach(() => {
        Login.visitarPagina()
        Login.preencherCredenciais()
        Dashboard.vericarAcessoDashboard()
    })

    // O Cypress vai ler a massaDeDados e rodar o bloco abaixo 12 vezes automagicamente!
    massaDeDados.forEach((dados) => {
        
        it(dados.cenario, () => {
            Parceiros.acessarPagina()
            Parceiros.iniciarNovoCadastro()
            Parceiros.escolherJornada(dados.jornada) // Passa a variável
            Parceiros.preencherFormulario(dados) // Passa todas as variáveis
            Parceiros.salvarParceiro()
            Parceiros.validarCadastroCriado(dados.nomeEsperado) // Passa a variável
        })
        
    })
})