
const PerfilCandidato = require("../models/PerfilCandidato");

class PerfilCandidatoRepository {
    constructor() {
        this.perfis = [];
        this.proximoId = 1;
    }

    async criar(dadosPerfil) {
        const perfilExistente = this.perfis.find(
            perfil => perfil.usuarioId === dadosPerfil.usuarioId
        );

        if (perfilExistente) {
            throw new Error("Este usuário já possui um perfil.");
        }

        const novoPerfil = new PerfilCandidato({
            ...dadosPerfil,
            id: this.proximoId++
        });

        this.perfis.push(novoPerfil);

        return novoPerfil;
    }

    async buscarPorId(id) {
        return this.perfis.find(
            perfil => perfil.id === id
        ) || null;
    }

    async buscarPorUsuarioId(usuarioId) {
        return this.perfis.find(
            perfil => perfil.usuarioId === usuarioId
        ) || null;
    }

    async listarTodos() {
        return [...this.perfis];
    }

    async atualizar(id, novosDados) {
        const perfil = await this.buscarPorId(id);

        if (!perfil) {
            throw new Error("Perfil não encontrado.");
        }

        const { id: idIgnorado, usuarioId: usuarioIgnorado, ...dadosAtualizaveis } = novosDados;

        Object.assign(perfil, dadosAtualizaveis);

        perfil.atualizadoEm = new Date();

        return perfil;
    }

    async excluir(id) {
        const indice = this.perfis.findIndex(
            perfil => perfil.id === id
        );

        if (indice === -1) {
            throw new Error("Perfil não encontrado.");
        }

        const [perfilRemovido] = this.perfis.splice(indice, 1);

        return perfilRemovido;
    }
}

module.exports = PerfilCandidatoRepository;
