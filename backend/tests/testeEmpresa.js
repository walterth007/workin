
const Empresa = require("../src/models/Empresa");

const empresa = new Empresa({
    usuarioId: 1,
    razaoSocial: "Marchesan S.A.",
    nomeFantasia: "Marchesan",
    cnpj: "12345678000199",
    descricao: "Empresa do setor industrial."
});

console.log(empresa);
