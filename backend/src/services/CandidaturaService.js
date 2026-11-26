
const Usuario = require("../models/Usuario");
const Vaga = require("../models/Vaga");
const Empresa = require("../models/Empresa");
const Candidatura = require("../models/Candidatura");

class CandidaturaService {
    constructor(
        candidaturaRepository,
        usuarioRepository,
        perfilCandidatoRepository,
        vagaRepository,
        empresaRepository
    ) {
        this.candidaturaRepository = candidaturaRepository;
        this.usuarioRepository = usuarioRepository;
        this.perfilCandidatoRepository = perfilCandidatoRepository;
        this.vagaRepository = vagaRepository;
        this.empresaRepository = empresaRepository;
    }

    // Verificar se o usuário é um candidato ativo
    async validarCandidato(usuario) {
        if (!usuario || usuario.tipo !== Usuario.TIPOS.CANDIDATO) {
            throw new Error("Apenas candidatos podem realizar esta ação.");
        }

        const candidato = await this.usuarioRepository.buscarPorId(usuario.id);

        if (!candidato || !candidato.ativo) {
            throw new Error("Candidato não encontrado ou inativo.");
        }

        return candidato;
    }

    // Verificar se o usuário é uma empresa aprovada
    async validarEmpresa(usuario) {
        if (!usuario || usuario.tipo !== Usuario.TIPOS.EMPRESA) {
            throw new Error("Apenas empresas podem realizar esta ação.");
        }

        const usuarioEmpresa = await this.usuarioRepository.buscarPorId(usuario.id);

        if (!usuarioEmpresa || !usuarioEmpresa.ativo) {
            throw new Error("Usuário empresarial não encontrado ou inativo.");
        }

        const empresa = await this.empresaRepository.buscarPorUsuarioId(
            usuario.id
        );

        if (!empresa || empresa.status !== Empresa.STATUS.APROVADA) {
            throw new Error("A empresa não está aprovada.");
        }

        return empresa;
    }

    // Criar uma candidatura
    async criarCandidatura(usuario, dadosCandidatura) {
        const candidato = await this.validarCandidato(usuario);

        const { vagaId, mensagem = "" } = dadosCandidatura;

        if (!vagaId) {
            throw new Error("Informe a vaga desejada.");
        }

        const perfil = await this.perfilCandidatoRepository.buscarPorUsuarioId(
            candidato.id
        );

        if (!perfil) {
            throw new Error("Complete seu perfil antes de se candidatar.");
        }

        const vaga = await this.vagaRepository.buscarPorId(vagaId);

        if (!vaga) {
            throw new Error("Vaga não encontrada.");
        }

        if (vaga.status !== Vaga.STATUS.ABERTA) {
            throw new Error("Esta vaga não está disponível para candidaturas.");
        }

        const empresa = await this.empresaRepository.buscarPorId(vaga.empresaId);

        if (!empresa || empresa.status !== Empresa.STATUS.APROVADA) {
            throw new Error("A empresa responsável pela vaga não está aprovada.");
        }

        const candidaturasExistentes =
            await this.candidaturaRepository.listarPorCandidato(candidato.id);

        const jaSeCandidatou = candidaturasExistentes.some(
            candidatura => candidatura.vagaId === vagaId
        );

        if (jaSeCandidatou) {
            throw new Error("Você já se candidatou a esta vaga.");
        }

        return await this.candidaturaRepository.criar({
            candidatoId: candidato.id,
            vagaId,
            mensagem: mensagem.trim(),
            status: Candidatura.STATUS.ENVIADA
        });
    }

    // Listar as candidaturas do próprio candidato
    async listarMinhasCandidaturas(usuario) {
        const candidato = await this.validarCandidato(usuario);

        return await this.candidaturaRepository.listarPorCandidato(
            candidato.id
        );
    }

    // Listar candidatos inscritos em uma vaga da empresa
    async listarCandidaturasDaVaga(usuario, vagaId) {
        const empresa = await this.validarEmpresa(usuario);

        const vaga = await this.vagaRepository.buscarPorId(vagaId);

        if (!vaga || vaga.empresaId !== empresa.id) {
            throw new Error("Vaga não encontrada ou não pertence à sua empresa.");
        }

        return await this.candidaturaRepository.listarPorVaga(vagaId);
    }

    // Atualizar o status de uma candidatura
    async atualizarStatus(usuario, candidaturaId, novoStatus) {
        const empresa = await this.validarEmpresa(usuario);

        const candidatura = await this.candidaturaRepository.buscarPorId(
            candidaturaId
        );

        if (!candidatura) {
            throw new Error("Candidatura não encontrada.");
        }

        const vaga = await this.vagaRepository.buscarPorId(candidatura.vagaId);

        if (!vaga || vaga.empresaId !== empresa.id) {
            throw new Error("Esta candidatura não pertence à sua empresa.");
        }

        const statusPermitidos = [
            Candidatura.STATUS.EM_ANALISE,
            Candidatura.STATUS.ENTREVISTA,
            Candidatura.STATUS.APROVADA,
            Candidatura.STATUS.REJEITADA
        ];

        if (!statusPermitidos.includes(novoStatus)) {
            throw new Error("Status de candidatura inválido.");
        }

        if (
            candidatura.status === Candidatura.STATUS.APROVADA ||
            candidatura.status === Candidatura.STATUS.REJEITADA ||
            candidatura.status === Candidatura.STATUS.CANCELADA
        ) {
            throw new Error("Esta candidatura já foi finalizada.");
        }

        return await this.candidaturaRepository.atualizarStatus(
            candidaturaId,
            novoStatus
        );
    }

    // Cancelar a própria candidatura
    async cancelarCandidatura(usuario, candidaturaId) {
        const candidato = await this.validarCandidato(usuario);

        const candidatura = await this.candidaturaRepository.buscarPorId(
            candidaturaId
        );

        if (!candidatura) {
            throw new Error("Candidatura não encontrada.");
        }

        if (candidatura.candidatoId !== candidato.id) {
            throw new Error("Você não pode cancelar a candidatura de outra pessoa.");
        }

        if (
            candidatura.status === Candidatura.STATUS.APROVADA ||
            candidatura.status === Candidatura.STATUS.REJEITADA ||
            candidatura.status === Candidatura.STATUS.CANCELADA
        ) {
            throw new Error("Esta candidatura não pode mais ser cancelada.");
        }

        return await this.candidaturaRepository.atualizarStatus(
            candidaturaId,
            Candidatura.STATUS.CANCELADA
        );
    }
}

module.exports = CandidaturaService;
