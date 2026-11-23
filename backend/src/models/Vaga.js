
class Vaga {
    constructor({
        id = null,
        empresaId,
        titulo,
        descricao,
        requisitos = [],
        salario = null,
        modalidade,
        tipoContrato,
        localizacao,
        status = Vaga.STATUS.RASCUNHO,
        criadaEm = new Date(),
        atualizadaEm = new Date()
    }) {
        this.id = id;
        this.empresaId = empresaId;
        this.titulo = titulo;
        this.descricao = descricao;
        this.requisitos = requisitos;
        this.salario = salario;
        this.modalidade = modalidade;
        this.tipoContrato = tipoContrato;
        this.localizacao = localizacao;
        this.status = status;
        this.criadaEm = criadaEm;
        this.atualizadaEm = atualizadaEm;
    }

    static STATUS = {
        RASCUNHO: "rascunho",
        ABERTA: "aberta",
        PAUSADA: "pausada",
        ENCERRADA: "encerrada"
    };

    static MODALIDADES = {
        PRESENCIAL: "presencial",
        REMOTO: "remoto",
        HIBRIDO: "hibrido"
    };
}

module.exports = Vaga;
