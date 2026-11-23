
const PerfilCandidato = require("./src/models/PerfilCandidato");

const perfil = new PerfilCandidato({
    usuarioId: 1,
    telefone: "16999999999",
    dataNascimento: "2005-05-15",
    endereco: "Matão - SP",
    resumo: "Estudante de Desenvolvimento de Software.",
    formacao: "Desenvolvimento de Software Multiplataforma",
    experiencia: "Em busca da primeira oportunidade.",
    habilidades: [
        "JavaScript",
        "HTML",
        "CSS",
        "C#"
    ]
});

console.log(perfil);
