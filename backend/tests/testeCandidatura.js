
const Candidatura = require("../src/models/Candidatura");

const candidatura = new Candidatura({
    candidatoId: 1,
    vagaId: 5,
    mensagem: "Tenho interesse na oportunidade e conhecimentos em JavaScript, HTML e CSS."
});

console.log(candidatura);
