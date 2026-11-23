
class PerfilCandidato {
    constructor({
        id = null,
        usuarioId,
        telefone = "",
        dataNascimento = null,
        endereco = "",
        resumo = "",
        formacao = "",
        experiencia = "",
        habilidades = [],
        curriculo = null,
        atualizadoEm = new Date()
    }) {
        this.id = id;
        this.usuarioId = usuarioId;
        this.telefone = telefone;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
        this.resumo = resumo;
        this.formacao = formacao;
        this.experiencia = experiencia;
        this.habilidades = habilidades;
        this.curriculo = curriculo;
        this.atualizadoEm = atualizadoEm;
    }
}

module.exports = PerfilCandidato;
