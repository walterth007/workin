
const express = require("express");

module.exports = (vagaController) => {
    const router = express.Router();

    // Listar vagas abertas
    router.get("/", vagaController.listarAbertas);

    // Listar vagas da empresa autenticada
    router.get("/minhas-vagas", vagaController.listarPorEmpresa);

    // Buscar vaga por ID
    router.get("/:id", vagaController.buscarPorId);

    // Criar vaga
    router.post("/", vagaController.criar);

    // Publicar vaga
    router.patch("/:id/publicar", vagaController.publicar);

    // Atualizar vaga
    router.put("/:id", vagaController.atualizar);

    // Pausar vaga
    router.patch("/:id/pausar", vagaController.pausar);

    // Encerrar vaga
    router.patch("/:id/encerrar", vagaController.encerrar);

    // Excluir vaga
    router.delete("/:id", vagaController.excluir);

    return router;
};
