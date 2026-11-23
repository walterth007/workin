
class Usuario {
    constructor({
        id = null,
        nome,
        email,
        senhaHash,
        tipo,
        ativo = true,
        criadoEm = new Date()
    }) {
        this.id = id;
        this.nome = nome;
        this.email = email.toLowerCase().trim();
        this.senhaHash = senhaHash;
        this.tipo = tipo;
        this.ativo = ativo;
        this.criadoEm = criadoEm;
    }

    static TIPOS = {
        CANDIDATO: "candidato",
        EMPRESA: "empresa",
        ADMINISTRADOR: "administrador"
    };
}

module.exports = Usuario;
