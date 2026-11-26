
const Vaga = require("../models/Vaga");
const Empresa = require("../models/Empresa");

class VagaService {
    constructor(vagaRepository, empresaRepository) {
        this.vagaRepository = vagaRepository;
        this.empresaRepository = empresaRepository;
    }

    // Criar uma nova vaga
    async criarVaga(dadosVaga) {
        const {
            empresaId,
            titulo,
            descricao,
            requisitos,
            salario,
            modalidade,
            tipoContrato,
            localizacao
        } = dadosVaga;

        if (
            !empresaId ||
            !titulo ||
            !descricao ||
            !modalidade ||
            !tipoContrato
        ) {
            throw new Error("Preencha todos os campos obrigatórios.");
        }

        const empresa = await this.empresaRepository.buscarPorId(empresaId);

        if (!empresa) {
            throw new Error("Empresa não encontrada.");
        }

        if (empresa.status !== Empresa.STATUS.APROVADA) {
            throw new Error("A empresa precisa estar aprovada para criar vagas.");
        }

        if (titulo.trim().length < 3) {
            throw new Error("O título deve ter pelo menos 3 caracteres.");
        }

        if (!Object.values(Vaga.MODALIDADES).includes(modalidade)) {
            throw new Error("Modalidade de trabalho inválida.");
        }

        return await this.vagaRepository.criar({
            empresaId,
            titulo: titulo.trim(),
            descricao: descricao.trim(),
            requisitos: requisitos || [],
            salario: salario || null,
            modalidade,
            tipoContrato,
            localizacao: localizacao || "",
            status: Vaga.STATUS.RASCUNHO
        });
    }

    // Publicar uma vaga
    async publicarVaga(vagaId, empresaId) {
        const vaga = await this.buscarVagaPorId(vagaId);

        this.validarProprietario(vaga, empresaId);

        const empresa = await this.empresaRepository.buscarPorId(empresaId);

        if (!empresa || empresa.status !== Empresa.STATUS.APROVADA) {
            throw new Error("A empresa não está autorizada a publicar vagas.");
        }

        if (
            vaga.status !== Vaga.STATUS.RASCUNHO &&
            vaga.status !== Vaga.STATUS.PAUSADA
        ) {
            throw new Error("Esta vaga não pode ser publicada.");
        }

        return await this.vagaRepository.atualizar(vagaId, {
            status: Vaga.STATUS.ABERTA
        });
    }

    // Buscar vaga por ID
    async buscarVagaPorId(id) {
        if (!id) {
            throw new Error("Informe o ID da vaga.");
        }

        const vaga = await this.vagaRepository.buscarPorId(id);

        if (!vaga) {
            throw new Error("Vaga não encontrada.");
        }

        return vaga;
    }

    // Listar todas as vagas abertas
    async listarVagasAbertas() {
        return await this.vagaRepository.listarAbertas();
    }

    // Listar vagas de uma empresa
    async listarVagasPorEmpresa(empresaId) {
        if (!empresaId) {
            throw new Error("Informe a empresa.");
        }

        return await this.vagaRepository.listarPorEmpresa(empresaId);
    }

    // Atualizar uma vaga
    async atualizarVaga(vagaId, empresaId, novosDados) {
        const vaga = await this.buscarVagaPorId(vagaId);

        this.validarProprietario(vaga, empresaId);

        if (
            novosDados.titulo !== undefined &&
            novosDados.titulo.trim().length < 3
        ) {
            throw new Error("O título deve ter pelo menos 3 caracteres.");
        }

        if (
            novosDados.modalidade !== undefined &&
            !Object.values(Vaga.MODALIDADES).includes(novosDados.modalidade)
        ) {
            throw new Error("Modalidade inválida.");
        }

        // Impede alteração de campos protegidos
        const dadosPermitidos = {
            titulo: novosDados.titulo,
            descricao: novosDados.descricao,
            requisitos: novosDados.requisitos,
            salario: novosDados.salario,
            modalidade: novosDados.modalidade,
            tipoContrato: novosDados.tipoContrato,
            localizacao: novosDados.localizacao
        };

        Object.keys(dadosPermitidos).forEach((chave) => {
            if (dadosPermitidos[chave] === undefined) {
                delete dadosPermitidos[chave];
            }
        });

        return await this.vagaRepository.atualizar(vagaId, dadosPermitidos);
    }

    // Pausar uma vaga
    async pausarVaga(vagaId, empresaId) {
        const vaga = await this.buscarVagaPorId(vagaId);

        this.validarProprietario(vaga, empresaId);

        if (vaga.status !== Vaga.STATUS.ABERTA) {
            throw new Error("Somente vagas abertas podem ser pausadas.");
        }

        return await this.vagaRepository.atualizar(vagaId, {
            status: Vaga.STATUS.PAUSADA
        });
    }

    // Encerrar uma vaga
    async encerrarVaga(vagaId, empresaId) {
        const vaga = await this.buscarVagaPorId(vagaId);

        this.validarProprietario(vaga, empresaId);

        if (
            vaga.status !== Vaga.STATUS.ABERTA &&
            vaga.status !== Vaga.STATUS.PAUSADA
        ) {
            throw new Error("Esta vaga não pode ser encerrada.");
        }

        return await this.vagaRepository.atualizar(vagaId, {
            status: Vaga.STATUS.ENCERRADA
        });
    }

    // Excluir uma vaga
    async excluirVaga(vagaId, empresaId) {
        const vaga = await this.buscarVagaPorId(vagaId);

        this.validarProprietario(vaga, empresaId);

        return await this.vagaRepository.excluir(vagaId);
    }

    // Verificar se a vaga pertence à empresa
    validarProprietario(vaga, empresaId) {
        if (vaga.empresaId !== empresaId) {
            throw new Error("Você não tem permissão para alterar esta vaga.");
        }
    }
}

module.exports = VagaService;
