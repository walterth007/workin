
const PerfilCandidatoRepository = require("../src/repositories/PerfilCandidatoRepository");

async function testarPerfilRepository() {
    const perfilRepository = new PerfilCandidatoRepository();

    // Criando perfil
    const perfil = await perfilRepository.criar({
        usuarioId: 1,
        telefone: "16999999999",
        endereco: "Matão - SP",
        resumo: "Estudante de Desenvolvimento de Software.",
        formacao: "Desenvolvimento de Software Multiplataforma",
        habilidades: ["JavaScript", "HTML", "CSS"]
    });

    console.log("PERFIL CADASTRADO:");
    console.log(perfil);

    // Buscando pelo usuário
    console.log("BUSCANDO PERFIL:");
    console.log(
        await perfilRepository.buscarPorUsuarioId(1)
    );

    // Atualizando perfil
    console.log("ATUALIZANDO PERFIL:");

    const perfilAtualizado = await perfilRepository.atualizar(
        perfil.id,
        {
            resumo: "Estudante interessado em desenvolvimento web.",
            habilidades: ["JavaScript", "HTML", "CSS", "C#"]
        }
    );

    console.log(perfilAtualizado);

    // Listando perfis
    console.log("TODOS OS PERFIS:");
    console.log(await perfilRepository.listarTodos());
}

testarPerfilRepository().catch(console.error);
