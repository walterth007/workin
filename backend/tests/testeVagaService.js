
const UsuarioRepository = require("../src/repositories/UsuarioRepository");
const EmpresaRepository = require("../src/repositories/EmpresaRepository");
const VagaRepository = require("../src/repositories/VagaRepository");

const UsuarioService = require("../src/services/UsuarioService");
const EmpresaService = require("../src/services/EmpresaService");
const VagaService = require("../src/services/VagaService");

const Usuario = require("../src/models/Usuario");

async function testarVagaService() {
    const usuarioRepository = new UsuarioRepository();
    const empresaRepository = new EmpresaRepository();
    const vagaRepository = new VagaRepository();

    const usuarioService = new UsuarioService(usuarioRepository);

    const empresaService = new EmpresaService(
        empresaRepository,
        usuarioRepository
    );

    const vagaService = new VagaService(
        vagaRepository,
        empresaRepository
    );

    // 1. Criar usuário empresarial
    const usuarioEmpresa = await usuarioService.criarUsuario({
        nome: "Empresa Teste",
        email: "empresa@email.com",
        senhaHash: "hash_teste",
        tipo: Usuario.TIPOS.EMPRESA
    });

    // 2. Cadastrar empresa
    const empresa = await empresaService.criarEmpresa({
        usuarioId: usuarioEmpresa.id,
        razaoSocial: "Empresa Teste LTDA",
        nomeFantasia: "Empresa Teste",
        cnpj: "12345678000199"
    });

    // 3. Simular aprovação administrativa
    const administrador = {
        id: 999,
        tipo: Usuario.TIPOS.ADMINISTRADOR
    };

    await empresaService.aprovarEmpresa(empresa.id, administrador);

    // 4. Criar vaga
    const vaga = await vagaService.criarVaga({
        empresaId: empresa.id,
        titulo: "Desenvolvedor Júnior",
        descricao: "Vaga para desenvolvedor iniciante.",
        requisitos: ["JavaScript", "HTML", "CSS"],
        salario: 2500,
        modalidade: "hibrido",
        tipoContrato: "CLT",
        localizacao: "Matão - SP"
    });

    console.log("\nVAGA CRIADA:");
    console.log(vaga);

    // 5. Publicar vaga
    const vagaPublicada = await vagaService.publicarVaga(
        vaga.id,
        empresa.id
    );

    console.log("\nVAGA PUBLICADA:");
    console.log(vagaPublicada);

    // 6. Listar vagas abertas
    console.log("\nVAGAS ABERTAS:");
    console.log(await vagaService.listarVagasAbertas());

    // 7. Pausar vaga
    const vagaPausada = await vagaService.pausarVaga(
        vaga.id,
        empresa.id
    );

    console.log("\nVAGA PAUSADA:");
    console.log(vagaPausada);

    // 8. Encerrar vaga
    const vagaEncerrada = await vagaService.encerrarVaga(
        vaga.id,
        empresa.id
    );

    console.log("\nVAGA ENCERRADA:");
    console.log(vagaEncerrada);

    // 9. Tentar alterar usando outra empresa
    try {
        await vagaService.excluirVaga(vaga.id, 999);
    } catch (erro) {
        console.log("\nERRO ESPERADO:", erro.message);
    }
}

testarVagaService().catch(console.error);
