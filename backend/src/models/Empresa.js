
class Empresa {
    constructor({
        id = null,
        usuarioId,
        razaoSocial,
        nomeFantasia,
        cnpj,
        descricao = "",
        status = Empresa.STATUS.PENDENTE,
        criadaEm = new Date(),
        aprovadaEm = null,
        aprovadaPor = null
    }) {
        this.id = id;
        this.usuarioId = usuarioId;
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj;
        this.descricao = descricao;
        this.status = status;
        this.criadaEm = criadaEm;
        this.aprovadaEm = aprovadaEm;
        this.aprovadaPor = aprovadaPor;
    }

    static STATUS = {
        PENDENTE: "pendente",
        APROVADA: "aprovada",
        REJEITADA: "rejeitada"
    };
}

module.exports = Empresa;
