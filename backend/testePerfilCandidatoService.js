
const Usuario = require("./src/models/Usuario");

const UsuarioRepository = require("./src/repositories/UsuarioRepository");
const PerfilCandidatoRepository = require("./src/repositories/PerfilCandidatoRepository");

const UsuarioService = require("./src/services/UsuarioService");
const PerfilCandidatoService = require("./src/services/PerfilCandidatoService");

async function testarPerfilCandidatoService() {
    const usuarioRepository = new UsuarioRepository();
    const perfilRepository = new PerfilCandidatoRepository();

    const usuarioService = new UsuarioService(usuarioRepository);

    const perfilService = new PerfilCandidatoService(
        perfilRepository,
        usuarioRepository
    );

    const candidato = await usuarioService.criarUsuario({
        nome: "Candidato Teste",
        email: "candidato@email.com",
        senhaHash: "hash_candidato",
        tipo: Usuario.TIPOS.CANDIDATO
    });

    console.log("\nCANDIDATO CRIADO:");
    console.log(candidato);

    const perfil = await perfilService.criarPerfil(candidato, {
        telefone: "16999999999",
        dataNascimento: "2005-05-20",
        endereco: "Matão - SP",
        resumo: "Estudante de Desenvolvimento de Software.",
        formacao: "Desenvolvimento de Software Multiplataforma",
        experiencia: "Projetos acadêmicos",
        habilidades: ["JavaScript", "HTML", "CSS", "C#"],
        curriculo: null
    });

    console.log("\nPERFIL CRIADO:");
    console.log(perfil);

    console.log("\nCONSULTANDO PERFIL:");
    console.log(await perfilService.buscarMeuPerfil(candidato));

    const perfilAtualizado = await perfilService.atualizarMeuPerfil(
        candidato,
        {
            resumo: "Estudante interessado em desenvolvimento web.",
            habilidades: ["JavaScript", "HTML", "CSS", "C#", "Node.js"]
        }
    );

    console.log("\nPERFIL ATUALIZADO:");
    console.log(perfilAtualizado);

    try {
        await perfilService.criarPerfil(candidato, {
            resumo: "Tentativa de criar outro perfil"
        });
    } catch (erro) {
        console.log("\nERRO ESPERADO:", erro.message);
    }

    const usuarioEmpresa = await usuarioService.criarUsuario({
        nome: "Empresa Teste",
        email: "empresa@email.com",
        senhaHash: "hash_empresa",
        tipo: Usuario.TIPOS.EMPRESA
    });

    try {
        await perfilService.buscarMeuPerfil(usuarioEmpresa);
    } catch (erro) {
        console.log("\nERRO ESPERADO:", erro.message);
    }

    console.log("\nEXCLUINDO PERFIL:");
    console.log(await perfilService.excluirMeuPerfil(candidato));

    try {
        await perfilService.buscarMeuPerfil(candidato);
    } catch (erro) {
        console.log("\nERRO ESPERADO:", erro.message);
    }
}

testarPerfilCandidatoService().catch(console.error);
