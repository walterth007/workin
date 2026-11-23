
const Vaga = require("../models/Vaga");

class VagaRepository {
    constructor() {
        this.vagas = [];
        this.proximoId = 1;
    }

    async criar(dadosVaga) {
        const novaVaga = new Vaga({
            ...dadosVaga,
            id: this.proximoId++
        });

        this.vagas.push(novaVaga);

        return novaVaga;
    }

    async buscarPorId(id) {
        return this.vagas.find(
            vaga => vaga.id === id
        ) || null;
    }

    async listarTodas() {
        return [...this.vagas];
    }

    async listarPorEmpresa(empresaId) {
        return this.vagas.filter(
            vaga => vaga.empresaId === empresaId
        );
    }

    async listarAbertas() {
        return this.vagas.filter(
            vaga => vaga.status === Vaga.STATUS.ABERTA
        );
    }

    async buscarPorTitulo(titulo) {
        const tituloNormalizado = titulo.toLowerCase().trim();

        return this.vagas.filter(
            vaga => vaga.titulo.toLowerCase().includes(tituloNormalizado)
        );
    }

    async atualizar(id, novosDados) {
        const vaga = await this.buscarPorId(id);

        if (!vaga) {
            throw new Error("Vaga não encontrada.");
        }

        const { id: idIgnorado, empresaId: empresaIgnorada, ...dadosAtualizaveis } = novosDados;

        Object.assign(vaga, dadosAtualizaveis);

        vaga.atualizadaEm = new Date();

        return vaga;
    }

    async excluir(id) {
        const indice = this.vagas.findIndex(
            vaga => vaga.id === id
        );

        if (indice === -1) {
            throw new Error("Vaga não encontrada.");
        }

        const [vagaRemovida] = this.vagas.splice(indice, 1);

        return vagaRemovida;
    }
}

module.exports = VagaRepository;
