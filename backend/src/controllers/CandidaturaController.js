
class CandidaturaController {
    constructor(candidaturaService) {
        this.candidaturaService = candidaturaService;

        this.criar = this.criar.bind(this);
        this.listarMinhas = this.listarMinhas.bind(this);
        this.listarDaVaga = this.listarDaVaga.bind(this);
        this.atualizarStatus = this.atualizarStatus.bind(this);
        this.cancelar = this.cancelar.bind(this);
    }

    verificarAutenticacao(req, res) {
        if (!req.usuario) {
            res.status(401).json({
                mensagem: "Usuário não autenticado."
            });

            return false;
        }

        return true;
    }

    validarId(id, mensagem) {
        const numero = Number(id);

        if (!Number.isInteger(numero) || numero <= 0) {
            throw new Error(mensagem);
        }

        return numero;
    }

    async criar(req, res) {
        try {
            if (!this.verificarAutenticacao(req, res)) return;

            const candidatura =
                await this.candidaturaService.criarCandidatura(
                    req.usuario,
                    req.body
                );

            return res.status(201).json({
                mensagem: "Candidatura realizada com sucesso.",
                candidatura
            });

        } catch (erro) {
            return res.status(400).json({
                mensagem: erro.message
            });
        }
    }

    async listarMinhas(req, res) {
        try {
            if (!this.verificarAutenticacao(req, res)) return;

            const candidaturas =
                await this.candidaturaService.listarMinhasCandidaturas(
                    req.usuario
                );

            return res.status(200).json(candidaturas);

        } catch (erro) {
            return res.status(400).json({
                mensagem: erro.message
            });
        }
    }

    async listarDaVaga(req, res) {
        try {
            if (!this.verificarAutenticacao(req, res)) return;

            const vagaId = this.validarId(
                req.params.vagaId,
                "ID da vaga inválido."
            );

            const candidaturas =
                await this.candidaturaService.listarCandidaturasDaVaga(
                    req.usuario,
                    vagaId
                );

            return res.status(200).json(candidaturas);

        } catch (erro) {
            return res.status(400).json({
                mensagem: erro.message
            });
        }
    }

    async atualizarStatus(req, res) {
        try {
            if (!this.verificarAutenticacao(req, res)) return;

            const candidaturaId = this.validarId(
                req.params.id,
                "ID da candidatura inválido."
            );

            const { status } = req.body;

            if (!status) {
                return res.status(400).json({
                    mensagem: "Informe o novo status da candidatura."
                });
            }

            const candidatura =
                await this.candidaturaService.atualizarStatus(
                    req.usuario,
                    candidaturaId,
                    status
                );

            return res.status(200).json({
                mensagem: "Status da candidatura atualizado.",
                candidatura
            });

        } catch (erro) {
            return res.status(400).json({
                mensagem: erro.message
            });
        }
    }

    async cancelar(req, res) {
        try {
            if (!this.verificarAutenticacao(req, res)) return;

            const candidaturaId = this.validarId(
                req.params.id,
                "ID da candidatura inválido."
            );

            const candidatura =
                await this.candidaturaService.cancelarCandidatura(
                    req.usuario,
                    candidaturaId
                );

            return res.status(200).json({
                mensagem: "Candidatura cancelada com sucesso.",
                candidatura
            });

        } catch (erro) {
            return res.status(400).json({
                mensagem: erro.message
            });
        }
    }
}

module.exports = CandidaturaController;
