
const CandidaturaRepository = require("./src/repositories/CandidaturaRepository");
const Candidatura = require("./src/models/Candidatura");

async function testarCandidaturaRepository() {
    const candidaturaRepository = new CandidaturaRepository();

    // Criando candidaturas
    const candidatura1 = await candidaturaRepository.criar({
        candidatoId: 1,
        vagaId: 5,
        mensagem: "Tenho interesse nesta oportunidade."
    });

    await candidaturaRepository.criar({
        candidatoId: 2,
        vagaId: 5,
        mensagem: "Tenho experiência na área."
    });

    await candidaturaRepository.criar({
        candidatoId: 1,
        vagaId: 8,
        mensagem: "Gostaria de participar do processo."
    });

    console.log("TODAS AS CANDIDATURAS:");
    console.log(await candidaturaRepository.listarTodas());

    console.log("CANDIDATURAS DO CANDIDATO 1:");
    console.log(await candidaturaRepository.listarPorCandidato(1));

    console.log("CANDIDATOS DA VAGA 5:");
    console.log(await candidaturaRepository.listarPorVaga(5));

    console.log("ATUALIZANDO STATUS:");

    const atualizada = await candidaturaRepository.atualizarStatus(
        candidatura1.id,
        Candidatura.STATUS.EM_ANALISE
    );

    console.log(atualizada);

    console.log("CANDIDATURAS EM ANÁLISE:");
    console.log(
        await candidaturaRepository.listarPorStatus(
            Candidatura.STATUS.EM_ANALISE
        )
    );

    // Testando inscrição duplicada
    try {
        await candidaturaRepository.criar({
            candidatoId: 1,
            vagaId: 5,
            mensagem: "Tentativa de inscrição duplicada."
        });
    } catch (erro) {
        console.log("ERRO ESPERADO:", erro.message);
    }
}

testarCandidaturaRepository().catch(console.error);
