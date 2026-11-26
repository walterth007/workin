
const VagaRepository = require("../src/repositories/VagaRepository");
const Vaga = require("../src/models/Vaga");

async function testarVagaRepository() {
    const vagaRepository = new VagaRepository();

    // Criando primeira vaga
    const vaga1 = await vagaRepository.criar({
        empresaId: 1,
        titulo: "Desenvolvedor JavaScript Júnior",
        descricao: "Desenvolvimento de aplicações web.",
        requisitos: ["JavaScript", "HTML", "CSS"],
        salario: 2500,
        modalidade: Vaga.MODALIDADES.HIBRIDO,
        tipoContrato: "CLT",
        localizacao: "Matão - SP",
        status: Vaga.STATUS.ABERTA
    });

    // Criando segunda vaga
    await vagaRepository.criar({
        empresaId: 1,
        titulo: "Estágio em Desenvolvimento",
        descricao: "Auxílio no desenvolvimento de sistemas.",
        requisitos: ["Lógica de programação"],
        salario: 1200,
        modalidade: Vaga.MODALIDADES.PRESENCIAL,
        tipoContrato: "Estágio",
        localizacao: "Matão - SP",
        status: Vaga.STATUS.ABERTA
    });

    // Criando terceira vaga
    await vagaRepository.criar({
        empresaId: 2,
        titulo: "Analista de Sistemas",
        descricao: "Análise e manutenção de sistemas.",
        requisitos: ["SQL", "JavaScript"],
        salario: 3500,
        modalidade: Vaga.MODALIDADES.REMOTO,
        tipoContrato: "CLT",
        localizacao: "São Paulo - SP",
        status: Vaga.STATUS.RASCUNHO
    });

    console.log("TODAS AS VAGAS:");
    console.log(await vagaRepository.listarTodas());

    console.log("VAGAS ABERTAS:");
    console.log(await vagaRepository.listarAbertas());

    console.log("VAGAS DA EMPRESA 1:");
    console.log(await vagaRepository.listarPorEmpresa(1));

    console.log("PESQUISA POR JAVASCRIPT:");
    console.log(await vagaRepository.buscarPorTitulo("JavaScript"));

    console.log("ATUALIZANDO VAGA:");
    console.log(
        await vagaRepository.atualizar(vaga1.id, {
            salario: 3000
        })
    );
}

testarVagaRepository().catch(console.error);
