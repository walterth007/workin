
const UsuarioRepository = require("./src/repositories/UsuarioRepository");

async function testarRepository() {
    const usuarioRepository = new UsuarioRepository();

    // Criando um candidato
    const candidato = await usuarioRepository.criar({
        nome: "Walter",
        email: "walter@email.com",
        senhaHash: "hash_exemplo_123",
        tipo: "candidato"
    });

    // Criando uma empresa
    const empresa = await usuarioRepository.criar({
        nome: "Empresa Teste",
        email: "empresa@email.com",
        senhaHash: "hash_exemplo_456",
        tipo: "empresa"
    });

    console.log("USUÁRIOS CADASTRADOS:");
    console.log(await usuarioRepository.listarTodos());

    console.log("BUSCANDO POR ID:");
    console.log(await usuarioRepository.buscarPorId(1));

    console.log("BUSCANDO POR EMAIL:");
    console.log(await usuarioRepository.buscarPorEmail("empresa@email.com"));
}

testarRepository().catch(console.error);
