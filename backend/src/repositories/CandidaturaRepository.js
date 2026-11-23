
const Candidatura = require("../models/Candidatura");

class CandidaturaRepository {
    constructor() {
        this.candidaturas = [];
        this.proximoId = 1;
    }

    async criar(dadosCandidatura) {
        const candidaturaExistente = this.candidaturas.find(
            candidatura =>
                candidatura.candidatoId === dadosCandidatura.candidatoId &&
                candidatura.vagaId === dadosCandidatura.vagaId
        );

        if (candidaturaExistente) {
            throw new Error("Este candidato já se inscreveu nesta vaga.");
        }

        const novaCandidatura = new Candidatura({
            ...dadosCandidatura,
            id: this.proximoId++
        });

        this.candidaturas.push(novaCandidatura);

        return novaCandidatura;
    }

    async buscarPorId(id) {
        return this.candidaturas.find(
            candidatura => candidatura.id === id
        ) || null;
    }

    async listarTodas() {
        return [...this.candidaturas];
    }

    async listarPorCandidato(candidatoId) {
        return this.candidaturas.filter(
            candidatura => candidatura.candidatoId === candidatoId
        );
    }

    async listarPorVaga(vagaId) {
        return this.candidaturas.filter(
            candidatura => candidatura.vagaId === vagaId
        );
    }

    async listarPorStatus(status) {
        return this.candidaturas.filter(
            candidatura => candidatura.status === status
        );
    }

    async atualizarStatus(id, novoStatus) {
        const candidatura = await this.buscarPorId(id);

        if (!candidatura) {
            throw new Error("Candidatura não encontrada.");
        }

        candidatura.status = novoStatus;
        candidatura.atualizadaEm = new Date();

        return candidatura;
    }

    async excluir(id) {
        const indice = this.candidaturas.findIndex(
            candidatura => candidatura.id === id
        );

        if (indice === -1) {
            throw new Error("Candidatura não encontrada.");
        }

        const [candidaturaRemovida] = this.candidaturas.splice(indice, 1);

        return candidaturaRemovida;
    }
}

module.exports = CandidaturaRepository;
