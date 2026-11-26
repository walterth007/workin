
class CandidaturaController {
    constructor(candidaturaService) {
        this.candidaturaService = candidaturaService;

        this.criar = this.criar.bind(this);
        this.listarMinhas = this.listarMinhas.bind(this);
        this.listarDaVaga = this.listarDaVaga.bind(this);
        this.atualizarStatus = this.atualizarStatus.bind(this);
        this.cancelar = this.cancelar.bind(this);
    }

    async criar(req, res) {
        try {
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
            const candidaturas =
                await this.candidaturaService.listarCandidaturasDaVaga(
                    req.usuario,
                    Number(req.params.vagaId)
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
            const { status } = req.body;

            const candidatura =
                await this.candidaturaService.atualizarStatus(
                    req.usuario,
                    Number(req.params.id),
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
            const candidatura =
                await this.candidaturaService.cancelarCandidatura(
                    req.usuario,
                    Number(req.params.id)
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
