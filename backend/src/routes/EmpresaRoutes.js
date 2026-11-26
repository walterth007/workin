
const express = require("express");

module.exports = (empresaController) => {
    const router = express.Router();

    // Cadastrar empresa
    router.post("/", empresaController.criar);

    // Listar empresas pendentes de aprovação
    router.get("/pendentes", empresaController.listarPendentes);

    // Buscar empresa por ID
    router.get("/:id", empresaController.buscarPorId);

    // Aprovar empresa
    router.patch("/:id/aprovar", empresaController.aprovar);

    // Rejeitar empresa
    router.patch("/:id/rejeitar", empresaController.rejeitar);

    return router;
};
