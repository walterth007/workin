
const express = require("express");

module.exports = (usuarioController) => {
    const router = express.Router();

    // Criar usuário
    router.post("/", usuarioController.criar);

    // Listar usuários
    router.get("/", usuarioController.listarTodos);

    // Buscar usuário por ID
    router.get("/:id", usuarioController.buscarPorId);

    return router;
};
