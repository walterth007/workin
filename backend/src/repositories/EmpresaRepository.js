
const Empresa = require("../models/Empresa");

class EmpresaRepository {
    constructor() {
        this.empresas = [];
        this.proximoId = 1;
    }

    async criar(dadosEmpresa) {
        const cnpjExistente = this.empresas.find(
            empresa => empresa.cnpj === dadosEmpresa.cnpj
        );

        if (cnpjExistente) {
            throw new Error("Este CNPJ já está cadastrado.");
        }

        const novaEmpresa = new Empresa({
            ...dadosEmpresa,
            id: this.proximoId++
        });

        this.empresas.push(novaEmpresa);

        return novaEmpresa;
    }

    async buscarPorId(id) {
        return this.empresas.find(
            empresa => empresa.id === id
        ) || null;
    }

    async buscarPorUsuarioId(usuarioId) {
        return this.empresas.find(
            empresa => empresa.usuarioId === usuarioId
        ) || null;
    }

    async listarTodas() {
        return [...this.empresas];
    }

    async listarPendentes() {
        return this.empresas.filter(
            empresa => empresa.status === Empresa.STATUS.PENDENTE
        );
    }

    async atualizarStatus(id, novoStatus, administradorId) {
        const empresa = await this.buscarPorId(id);

        if (!empresa) {
            throw new Error("Empresa não encontrada.");
        }

        empresa.status = novoStatus;

        if (novoStatus === Empresa.STATUS.APROVADA) {
            empresa.aprovadaEm = new Date();
            empresa.aprovadaPor = administradorId;
        } else {
            empresa.aprovadaEm = null;
            empresa.aprovadaPor = null;
        }

        return empresa;
    }
}

module.exports = EmpresaRepository;
