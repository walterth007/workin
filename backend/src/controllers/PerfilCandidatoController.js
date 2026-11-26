
class PerfilCandidatoController {
    constructor(perfilCandidatoService) {
        this.perfilCandidatoService = perfilCandidatoService;

        this.criar = this.criar.bind(this);
        this.buscarMeuPerfil = this.buscarMeuPerfil.bind(this);
        this.atualizarMeuPerfil = this.atualizarMeuPerfil.bind(this);
        this.excluirMeuPerfil = this.excluirMeuPerfil.bind(this);
    }

    async criar(req, res) {
        try {
            if (!req.usuario) {
                return res.status(401).json({
                    mensagem: "Usuário não autenticado."
                });
            }

            if (req.usuario.tipo !== "candidato") {
                return res.status(403).json({
                    mensagem: "Apenas candidatos podem criar um perfil."
                });
            }

            const perfil = await this.perfilCandidatoService.criarPerfil({
                ...req.body,
                usuarioId: req.usuario.id
            });

            return res.status(201).json({
                mensagem: "Perfil criado com sucesso.",
                perfil
            });

        } catch (erro) {
            return res.status(400).json({
                mensagem: erro.message
            });
        }
    }

    async buscarMeuPerfil(req, res) {
        try {
            if (!req.usuario) {
                return res.status(401).json({
                    mensagem: "Usuário não autenticado."
                });
            }

            const perfil = await this.perfilCandidatoService.buscarMeuPerfil(
                req.usuario.id
            );

            if (!perfil) {
                return res.status(404).json({
                    mensagem: "Perfil não encontrado."
                });
            }

            return res.status(200).json(perfil);

        } catch (erro) {
            return res.status(400).json({
                mensagem: erro.message
            });
        }
    }

    async atualizarMeuPerfil(req, res) {
        try {
            if (!req.usuario) {
                return res.status(401).json({
                    mensagem: "Usuário não autenticado."
                });
            }

            const perfil = await this.perfilCandidatoService.atualizarMeuPerfil(
                req.usuario.id,
                req.body
            );

            return res.status(200).json({
                mensagem: "Perfil atualizado com sucesso.",
                perfil
            });

        } catch (erro) {
            return res.status(400).json({
                mensagem: erro.message
            });
        }
    }

    async excluirMeuPerfil(req, res) {
        try {
            if (!req.usuario) {
                return res.status(401).json({
                    mensagem: "Usuário não autenticado."
                });
            }

            await this.perfilCandidatoService.excluirMeuPerfil(
                req.usuario.id
            );

            return res.status(200).json({
                mensagem: "Perfil excluído com sucesso."
            });

        } catch (erro) {
            return res.status(400).json({
                mensagem: erro.message
            });
        }
    }
}

module.exports = PerfilCandidatoController;
