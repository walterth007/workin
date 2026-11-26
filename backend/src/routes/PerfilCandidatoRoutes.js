
const express = require("express");

module.exports = (perfilCandidatoController) => {
    const router = express.Router();

    // Criar perfil do candidato
    router.post("/", perfilCandidatoController.criar);

    // Consultar o próprio perfil
    router.get("/meu-perfil", perfilCandidatoController.buscarMeuPerfil);

    // Atualizar o próprio perfil
    router.put("/meu-perfil", perfilCandidatoController.atualizarMeuPerfil);

    // Excluir o próprio perfil
    router.delete("/meu-perfil", perfilCandidatoController.excluirMeuPerfil);

    return router;
};
