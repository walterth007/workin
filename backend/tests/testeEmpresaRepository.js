
const EmpresaRepository = require("../src/repositories/EmpresaRepository");
const Empresa = require("../src/models/Empresa");

async function testarEmpresaRepository() {
    const empresaRepository = new EmpresaRepository();

    // Criando uma empresa
    const empresa = await empresaRepository.criar({
        usuarioId: 2,
        razaoSocial: "Empresa Teste LTDA",
        nomeFantasia: "Empresa Teste",
        cnpj: "12345678000199",
        descricao: "Empresa do setor tecnológico."
    });

    console.log("EMPRESA CADASTRADA:");
    console.log(empresa);

    // Buscando empresa pelo usuário responsável
    console.log("BUSCANDO POR USUÁRIO:");
    console.log(
        await empresaRepository.buscarPorUsuarioId(2)
    );

    // Listando empresas pendentes
    console.log("EMPRESAS PENDENTES:");
    console.log(
        await empresaRepository.listarPendentes()
    );

    // Simulando aprovação administrativa
    console.log("APROVANDO EMPRESA:");

    const empresaAprovada = await empresaRepository.atualizarStatus(
        empresa.id,
        Empresa.STATUS.APROVADA,
        10
    );

    console.log(empresaAprovada);
}

testarEmpresaRepository().catch(console.error);
