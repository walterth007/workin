
const Usuario = require("../models/Usuario");

class UsuarioRepository {
    constructor() {
        // Armazenamento temporário em memória
        this.usuarios = [];
        this.proximoId = 1;
    }

    async criar(dadosUsuario) {
        const emailExistente = this.usuarios.find(
            usuario => usuario.email === dadosUsuario.email.toLowerCase().trim()
        );

        if (emailExistente) {
            throw new Error("Este e-mail já está cadastrado.");
        }

        const novoUsuario = new Usuario({
            ...dadosUsuario,
            id: this.proximoId++
        });

        this.usuarios.push(novoUsuario);

        return novoUsuario;
    }

    async buscarPorId(id) {
        return this.usuarios.find(
            usuario => usuario.id === id
        ) || null;
    }

    async buscarPorEmail(email) {
        const emailNormalizado = email.toLowerCase().trim();

        return this.usuarios.find(
            usuario => usuario.email === emailNormalizado
        ) || null;
    }

    async listarTodos() {
        return [...this.usuarios];
    }
}

module.exports = UsuarioRepository;
