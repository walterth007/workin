
const Usuario = require("../models/Usuario");

class PerfilCandidatoService {
    constructor(perfilCandidatoRepository, usuarioRepository) {
        this.perfilCandidatoRepository = perfilCandidatoRepository;
        this.usuarioRepository = usuarioRepository;
    }

    async validarCandidato(usuario) {
        if (!usuario || usuario.tipo !== Usuario.TIPOS.CANDIDATO) {
            throw new Error("Apenas candidatos podem realizar esta ação.");
        }

        const candidato = await this.usuarioRepository.buscarPorId(
            usuario.id
        );

        if (!candidato || !candidato.ativo) {
            throw new Error("Candidato não encontrado ou inativo.");
        }

        return candidato;
    }

    async criarPerfil(usuario, dadosPerfil) {
        const candidato = await this.validarCandidato(usuario);

        if (!dadosPerfil || typeof dadosPerfil !== "object") {
            throw new Error("Informe os dados do perfil.");
        }

        if (
            dadosPerfil.habilidades !== undefined &&
            !Array.isArray(dadosPerfil.habilidades)
        ) {
            throw new Error("As habilidades devem ser informadas em uma lista.");
        }

        const perfilExistente =
            await this.perfilCandidatoRepository.buscarPorUsuarioId(
                candidato.id
            );

        if (perfilExistente) {
            throw new Error("Este candidato já possui um perfil.");
        }

        return await this.perfilCandidatoRepository.criar({
            usuarioId: candidato.id,
            telefone: dadosPerfil.telefone || null,
            dataNascimento: dadosPerfil.dataNascimento || null,
            endereco: dadosPerfil.endereco || null,
            resumo: dadosPerfil.resumo || null,
            formacao: dadosPerfil.formacao || null,
            experiencia: dadosPerfil.experiencia || null,
            habilidades: dadosPerfil.habilidades || [],
            curriculo: dadosPerfil.curriculo || null
        });
    }

    async buscarMeuPerfil(usuario) {
        const candidato = await this.validarCandidato(usuario);

        const perfil =
            await this.perfilCandidatoRepository.buscarPorUsuarioId(
                candidato.id
            );

        if (!perfil) {
            throw new Error("Perfil do candidato não encontrado.");
        }

        return perfil;
    }

    async atualizarMeuPerfil(usuario, novosDados) {
        const candidato = await this.validarCandidato(usuario);

        if (!novosDados || typeof novosDados !== "object") {
            throw new Error("Informe os dados para atualização.");
        }

        const perfil =
            await this.perfilCandidatoRepository.buscarPorUsuarioId(
                candidato.id
            );

        if (!perfil) {
            throw new Error("Perfil do candidato não encontrado.");
        }

        const camposPermitidos = [
            "telefone",
            "dataNascimento",
            "endereco",
            "resumo",
            "formacao",
            "experiencia",
            "habilidades",
            "curriculo"
        ];

        const dadosAtualizados = {};

        for (const campo of camposPermitidos) {
            if (novosDados[campo] !== undefined) {
                dadosAtualizados[campo] = novosDados[campo];
            }
        }

        if (Object.keys(dadosAtualizados).length === 0) {
            throw new Error("Nenhum campo válido foi informado.");
        }

        if (
            dadosAtualizados.habilidades !== undefined &&
            !Array.isArray(dadosAtualizados.habilidades)
        ) {
            throw new Error("As habilidades devem ser informadas em uma lista.");
        }

        return await this.perfilCandidatoRepository.atualizar(
            perfil.id,
            dadosAtualizados
        );
    }

    async excluirMeuPerfil(usuario) {
        const candidato = await this.validarCandidato(usuario);

        const perfil =
            await this.perfilCandidatoRepository.buscarPorUsuarioId(
                candidato.id
            );

        if (!perfil) {
            throw new Error("Perfil do candidato não encontrado.");
        }

        return await this.perfilCandidatoRepository.excluir(perfil.id);
    }
}

module.exports = PerfilCandidatoService;
