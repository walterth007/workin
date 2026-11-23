
class Candidatura {
    constructor({
        id = null,
        candidatoId,
        vagaId,
        status = Candidatura.STATUS.ENVIADA,
        mensagem = "",
        criadaEm = new Date(),
        atualizadaEm = new Date()
    }) {
        this.id = id;
        this.candidatoId = candidatoId;
        this.vagaId = vagaId;
        this.status = status;
        this.mensagem = mensagem;
        this.criadaEm = criadaEm;
        this.atualizadaEm = atualizadaEm;
    }

    static STATUS = {
        ENVIADA: "enviada",
        EM_ANALISE: "em_analise",
        ENTREVISTA: "entrevista",
        APROVADA: "aprovada",
        REJEITADA: "rejeitada",
        CANCELADA: "cancelada"
    };
}

module.exports = Candidatura;
