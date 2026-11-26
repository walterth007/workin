
const Usuario = require("../models/Usuario");

class UsuarioService {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    async criarUsuario(dadosUsuario) {
        const { nome, email, senhaHash, tipo } = dadosUsuario;

        // Validar campos obrigatórios
        if (!nome || !email || !senhaHash || !tipo) {
            throw new Error("Todos os campos são obrigatórios.");
        }

        // Validar nome
        if (nome.trim().length < 3) {
            throw new Error("O nome deve ter pelo menos 3 caracteres.");
        }

        // Validar formato do e-mail
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!emailValido) {
            throw new Error("Informe um e-mail válido.");
        }

        // Validar tipo de usuário
        const tiposPermitidos = [
            Usuario.TIPOS.CANDIDATO,
            Usuario.TIPOS.EMPRESA
        ];

        if (!tiposPermitidos.includes(tipo)) {
            throw new Error("Tipo de usuário inválido ou não permitido.");
        }

        // Verificar se o e-mail já existe
        const usuarioExistente =
            await this.usuarioRepository.buscarPorEmail(email);

        if (usuarioExistente) {
            throw new Error("Este e-mail já está cadastrado.");
        }

        // Criar usuário
        return await this.usuarioRepository.criar({
            nome: nome.trim(),
            email: email.toLowerCase().trim(),
            senhaHash,
            tipo
        });
    }

    async buscarUsuarioPorId(id) {
        if (!id) {
            throw new Error("Informe o ID do usuário.");
        }

        const usuario = await this.usuarioRepository.buscarPorId(id);

        if (!usuario) {
            throw new Error("Usuário não encontrado.");
        }

        return usuario;
    }

    async listarUsuarios() {
        return await this.usuarioRepository.listarTodos();
    }
}

module.exports = UsuarioService;
