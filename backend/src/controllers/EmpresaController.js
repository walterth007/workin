
class EmpresaController {
    constructor(empresaService) {
        this.empresaService = empresaService;

        this.criar = this.criar.bind(this);
        this.buscarPorId = this.buscarPorId.bind(this);
        this.listarPendentes = this.listarPendentes.bind(this);
        this.aprovar = this.aprovar.bind(this);
        this.rejeitar = this.rejeitar.bind(this);
    }

    validarId(id) {
        const empresaId = Number(id);

        if (!Number.isInteger(empresaId) || empresaId <= 0) {
            throw new Error("ID da empresa inválido.");
        }

        return empresaId;
    }

    async criar(req, res) {
        try {
            if (!req.usuario) {
                return res.status(401).json({
                    mensagem: "Usuário não autenticado."
                });
            }

            const empresa = await this.empresaService.criarEmpresa({
                ...req.body,
                usuarioId: req.usuario.id
            });

            return res.status(201).json({
                mensagem: "Empresa cadastrada com sucesso. Aguarde a aprovação.",
                empresa
            });

        } catch (erro) {
            return res.status(400).json({
                mensagem: erro.message
            });
        }
    }

    async buscarPorId(req, res) {
        try {
            const id = this.validarId(req.params.id);

            const empresa = await this.empresaService.buscarEmpresaPorId(id);

            return res.status(200).json(empresa);

        } catch (erro) {
            const status = erro.message === "Empresa não encontrada."
                ? 404
                : 400;

            return res.status(status).json({
                mensagem: erro.message
            });
        }
    }

    async listarPendentes(req, res) {
        try {
            if (!req.usuario) {
                return res.status(401).json({
                    mensagem: "Usuário não autenticado."
                });
            }

            if (req.usuario.tipo !== "administrador") {
                return res.status(403).json({
                    mensagem: "Apenas administradores podem listar empresas pendentes."
                });
            }

            const empresas =
                await this.empresaService.listarEmpresasPendentes();

            return res.status(200).json(empresas);

        } catch (erro) {
            return res.status(500).json({
                mensagem: erro.message
            });
        }
    }

    async aprovar(req, res) {
        try {
            if (!req.usuario) {
                return res.status(401).json({
                    mensagem: "Usuário não autenticado."
                });
            }

            const id = this.validarId(req.params.id);

            const empresa = await this.empresaService.aprovarEmpresa(
                id,
                req.usuario
            );

            return res.status(200).json({
                mensagem: "Empresa aprovada com sucesso.",
                empresa
            });

        } catch (erro) {
            return res.status(400).json({
                mensagem: erro.message
            });
        }
    }

    async rejeitar(req, res) {
        try {
            if (!req.usuario) {
                return res.status(401).json({
                    mensagem: "Usuário não autenticado."
                });
            }

            const id = this.validarId(req.params.id);

            const empresa = await this.empresaService.rejeitarEmpresa(
                id,
                req.usuario
            );

            return res.status(200).json({
                mensagem: "Empresa rejeitada.",
                empresa
            });

        } catch (erro) {
            return res.status(400).json({
                mensagem: erro.message
            });
        }
    }
}

module.exports = EmpresaController;
