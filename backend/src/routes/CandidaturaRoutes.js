
const express = require("express");

module.exports = (candidaturaController) => {
    const router = express.Router();

    // Criar candidatura
    router.post("/", candidaturaController.criar);

    // Listar candidaturas do candidato autenticado
    router.get("/minhas-candidaturas", candidaturaController.listarMinhas);

    // Listar candidaturas recebidas em uma vaga
    router.get("/vaga/:vagaId", candidaturaController.listarDaVaga);

    // Atualizar status de uma candidatura
    router.patch("/:id/status", candidaturaController.atualizarStatus);

    // Cancelar candidatura
    router.patch("/:id/cancelar", candidaturaController.cancelar);

    return router;
};
