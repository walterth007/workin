
class UsuarioController {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;

        this.criar = this.criar.bind(this);
        this.buscarPorId = this.buscarPorId.bind(this);
        this.listarTodos = this.listarTodos.bind(this);
    }

    removerDadosSensiveis(usuario) {
        if (!usuario) {
            return null;
        }

        const {
            senhaHash,
            ...dadosPublicos
        } = usuario;

        return dadosPublicos;
    }

    async criar(req, res) {
        try {
            const usuario = await this.usuarioService.criarUsuario(
                req.body
            );

            return res.status(201).json({
                mensagem: "Usuário criado com sucesso.",
                usuario: this.removerDadosSensiveis(usuario)
            });
        } catch (erro) {
            return res.status(400).json({
                mensagem: erro.message
            });
        }
    }

    async buscarPorId(req, res) {
        try {
            const usuario = await this.usuarioService.buscarUsuarioPorId(
                Number(req.params.id)
            );

            if (!usuario) {
                return res.status(404).json({
                    mensagem: "Usuário não encontrado."
                });
            }

            return res.status(200).json(
                this.removerDadosSensiveis(usuario)
            );
        } catch (erro) {
            return res.status(400).json({
                mensagem: erro.message
            });
        }
    }

    async listarTodos(req, res) {
        try {
            const usuarios = await this.usuarioService.listarUsuarios();

            const usuariosPublicos = usuarios.map(usuario =>
                this.removerDadosSensiveis(usuario)
            );

            return res.status(200).json(usuariosPublicos);
        } catch (erro) {
            return res.status(500).json({
                mensagem: "Erro ao listar usuários."
            });
        }
    }
}

module.exports = UsuarioController;
