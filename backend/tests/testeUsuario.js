
const Usuario = require("../src/models/Usuario");

// Criando um usuário candidato
const candidato = new Usuario({
    nome: "Walter",
    email: "WALTER@EMAIL.COM",
    senhaHash: "hash_exemplo_123",
    tipo: Usuario.TIPOS.CANDIDATO
});

// Exibindo os dados
console.log(candidato);
