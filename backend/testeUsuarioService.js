
const UsuarioRepository = require("./src/repositories/UsuarioRepository");
const UsuarioService = require("./src/services/UsuarioService");

async function testarUsuarioService() {
    const usuarioRepository = new UsuarioRepository();

    const usuarioService = new UsuarioService(usuarioRepository);

    // Criando um candidato
    const candidato = await usuarioService.criarUsuario({
        nome: "Walter Araujo",
        email: "walter@email.com",
        senhaHash: "hash_exemplo_123",
        tipo: "candidato"
    });

    console.log("USUÁRIO CRIADO:");
    console.log(candidato);

    // Buscando usuário
    console.log("BUSCANDO USUÁRIO:");

    const usuarioEncontrado =
        await usuarioService.buscarUsuarioPorId(candidato.id);

    console.log(usuarioEncontrado);

    // Listando usuários
    console.log("LISTA DE USUÁRIOS:");

    console.log(await usuarioService.listarUsuarios());

    // Testando e-mail duplicado
    try {
        await usuarioService.criarUsuario({
            nome: "Outro Usuário",
            email: "walter@email.com",
            senhaHash: "hash_exemplo_456",
            tipo: "candidato"
        });
    } catch (erro) {
        console.log("ERRO ESPERADO:", erro.message);
    }

    // Testando tipo inválido
    try {
        await usuarioService.criarUsuario({
            nome: "Administrador Teste",
            email: "admin@email.com",
            senhaHash: "hash_exemplo_789",
            tipo: "administrador"
        });
    } catch (erro) {
        console.log("ERRO ESPERADO:", erro.message);
    }
}

testarUsuarioService().catch(console.error);
