
const Vaga = require("../src/models/Vaga");

const vaga = new Vaga({
    empresaId: 1,
    titulo: "Desenvolvedor JavaScript Júnior",
    descricao: "Desenvolvimento e manutenção de aplicações web.",
    requisitos: [
        "Conhecimento em JavaScript",
        "Conhecimento em HTML e CSS",
        "Noções de Git"
    ],
    salario: 2500,
    modalidade: Vaga.MODALIDADES.HIBRIDO,
    tipoContrato: "CLT",
    localizacao: "Matão - SP",
    status: Vaga.STATUS.ABERTA
});

console.log(vaga);
