
class VagaController {
    constructor(vagaService, empresaRepository) {
        this.vagaService = vagaService;
        this.empresaRepository = empresaRepository;

        this.criar = this.criar.bind(this);
        this.buscarPorId = this.buscarPorId.bind(this);
        this.listarAbertas = this.listarAbertas.bind(this);
        this.listarPorEmpresa = this.listarPorEmpresa.bind(this);
        this.publicar = this.publicar.bind(this);
        this.atualizar = this.atualizar.bind(this);
        this.pausar = this.pausar.bind(this);
        this.encerrar = this.encerrar.bind(this);
        this.excluir = this.excluir.bind(this);
    }

    async obterEmpresaAutenticada(req) {
        if (!req.usuario) {
            throw new Error("Usuário não autenticado.");
        }

        if (req.usuario.tipo !== "empresa") {
            throw new Error("Apenas empresas podem realizar esta ação.");
        }

        const empresa = await this.empresaRepository.buscarPorUsuarioId(
            req.usuario.id
        );

        if (!empresa) {
            throw new Error("Empresa não encontrada.");
        }

        return empresa;
    }

    async criar(req, res) {
        try {
            const empresa = await this.obterEmpresaAutenticada(req);

            const vaga = await this.vagaService.criarVaga({
                ...req.body,
                empresaId: empresa.id
            });

            return res.status(201).json({
                mensagem: "Vaga criada com sucesso.",
                vaga
            });

        } catch (erro) {
            return res.status(400).json({
                mensagem: erro.message
            });
        }
    }

    async buscarPorId(req, res) {
        try {
            const vaga = await this.vagaService.buscarVagaPorId(
                Number(req.params.id)
            );

            return res.status(200).json(vaga);

        } catch (erro) {
            return res.status(404).json({
                mensagem: erro.message
            });
        }
    }

    async listarAbertas(req, res) {
        try {
            const vagas = await this.vagaService.listarVagasAbertas();

            return res.status(200).json(vagas);

        } catch (erro) {
            return res.status(500).json({
                mensagem: "Erro ao listar vagas."
            });
        }
    }

    async listarPorEmpresa(req, res) {
        try {
            const empresa = await this.obterEmpresaAutenticada(req);

            const vagas = await this.vagaService.listarVagasPorEmpresa(
                empresa.id
            );

            return res.status(200).json(vagas);

        } catch (erro) {
            return res.status(400).json({
                mensagem: erro.message
            });
        }
    }

    async publicar(req, res) {
        try {
            const empresa = await this.obterEmpresaAutenticada(req);

            const vaga = await this.vagaService.publicarVaga(
                Number(req.params.id),
                empresa.id
            );

            return res.status(200).json({
                mensagem: "Vaga publicada com sucesso.",
                vaga
            });

        } catch (erro) {
            return res.status(400).json({
                mensagem: erro.message
            });
        }
    }

    async atualizar(req, res) {
        try {
            const empresa = await this.obterEmpresaAutenticada(req);

            const vaga = await this.vagaService.atualizarVaga(
                Number(req.params.id),
                empresa.id,
                req.body
            );

            return res.status(200).json({
                mensagem: "Vaga atualizada com sucesso.",
                vaga
            });

        } catch (erro) {
            return res.status(400).json({
                mensagem: erro.message
            });
        }
    }

    async pausar(req, res) {
        try {
            const empresa = await this.obterEmpresaAutenticada(req);

            const vaga = await this.vagaService.pausarVaga(
                Number(req.params.id),
                empresa.id
            );

            return res.status(200).json({
                mensagem: "Vaga pausada com sucesso.",
                vaga
            });

        } catch (erro) {
            return res.status(400).json({
                mensagem: erro.message
            });
        }
    }

    async encerrar(req, res) {
        try {
            const empresa = await this.obterEmpresaAutenticada(req);

            const vaga = await this.vagaService.encerrarVaga(
                Number(req.params.id),
                empresa.id
            );

            return res.status(200).json({
                mensagem: "Vaga encerrada com sucesso.",
                vaga
            });

        } catch (erro) {
            return res.status(400).json({
                mensagem: erro.message
            });
        }
    }

    async excluir(req, res) {
        try {
            const empresa = await this.obterEmpresaAutenticada(req);

            await this.vagaService.excluirVaga(
                Number(req.params.id),
                empresa.id
            );

            return res.status(200).json({
                mensagem: "Vaga excluída com sucesso."
            });

        } catch (erro) {
            return res.status(400).json({
                mensagem: erro.message
            });
        }
    }
}

module.exports = VagaController;
