
const Empresa = require("../models/Empresa");
const Usuario = require("../models/Usuario");

class EmpresaService {
    constructor(empresaRepository, usuarioRepository) {
        this.empresaRepository = empresaRepository;
        this.usuarioRepository = usuarioRepository;
    }

    // Cadastrar uma nova empresa
    async criarEmpresa(dadosEmpresa) {
        const {
            usuarioId,
            razaoSocial,
            nomeFantasia,
            cnpj,
            descricao
        } = dadosEmpresa;

        if (!usuarioId || !razaoSocial || !nomeFantasia || !cnpj) {
            throw new Error("Preencha todos os campos obrigatórios.");
        }

        const usuario = await this.usuarioRepository.buscarPorId(usuarioId);

        if (!usuario) {
            throw new Error("Usuário não encontrado.");
        }

        if (usuario.tipo !== Usuario.TIPOS.EMPRESA) {
            throw new Error("Somente usuários do tipo empresa podem cadastrar empresas.");
        }

        if (!usuario.ativo) {
            throw new Error("Este usuário está inativo.");
        }

        const empresaExistente =
            await this.empresaRepository.buscarPorUsuarioId(usuarioId);

        if (empresaExistente) {
            throw new Error("Este usuário já possui uma empresa cadastrada.");
        }

        const cnpjLimpo = cnpj.replace(/\D/g, "");

        if (cnpjLimpo.length !== 14) {
            throw new Error("O CNPJ deve conter 14 números.");
        }

        return await this.empresaRepository.criar({
            usuarioId,
            razaoSocial: razaoSocial.trim(),
            nomeFantasia: nomeFantasia.trim(),
            cnpj: cnpjLimpo,
            descricao: descricao || "",
            status: Empresa.STATUS.PENDENTE
        });
    }

    // Buscar empresa pelo ID
    async buscarEmpresaPorId(id) {
        if (!id) {
            throw new Error("Informe o ID da empresa.");
        }

        const empresa = await this.empresaRepository.buscarPorId(id);

        if (!empresa) {
            throw new Error("Empresa não encontrada.");
        }

        return empresa;
    }

    // Listar empresas pendentes
    async listarEmpresasPendentes() {
        return await this.empresaRepository.listarPendentes();
    }

    // Aprovar empresa
    async aprovarEmpresa(empresaId, administrador) {
        this.validarAdministrador(administrador);

        const empresa = await this.buscarEmpresaPorId(empresaId);

        if (empresa.status !== Empresa.STATUS.PENDENTE) {
            throw new Error("Somente empresas pendentes podem ser aprovadas.");
        }

        return await this.empresaRepository.atualizarStatus(
            empresaId,
            Empresa.STATUS.APROVADA,
            administrador.id
        );
    }

    // Rejeitar empresa
    async rejeitarEmpresa(empresaId, administrador) {
        this.validarAdministrador(administrador);

        const empresa = await this.buscarEmpresaPorId(empresaId);

        if (empresa.status !== Empresa.STATUS.PENDENTE) {
            throw new Error("Somente empresas pendentes podem ser rejeitadas.");
        }

        return await this.empresaRepository.atualizarStatus(
            empresaId,
            Empresa.STATUS.REJEITADA,
            administrador.id
        );
    }

    // Verificar se o usuário é administrador
    validarAdministrador(administrador) {
        if (
            !administrador ||
            administrador.tipo !== Usuario.TIPOS.ADMINISTRADOR
        ) {
            throw new Error("Apenas administradores podem realizar esta ação.");
        }
    }

    // Verificar se uma empresa está autorizada a publicar vagas
    async verificarEmpresaAprovada(empresaId) {
        const empresa = await this.buscarEmpresaPorId(empresaId);

        if (empresa.status !== Empresa.STATUS.APROVADA) {
            throw new Error("Esta empresa ainda não foi aprovada.");
        }

        return empresa;
    }
}

module.exports = EmpresaService;
