
const Usuario = require("../src/models/Usuario");

const UsuarioRepository = require("../src/repositories/UsuarioRepository");
const EmpresaRepository = require("../src/repositories/EmpresaRepository");
const PerfilCandidatoRepository = require("../src/repositories/PerfilCandidatoRepository");
const VagaRepository = require("../src/repositories/VagaRepository");
const CandidaturaRepository = require("../src/repositories/CandidaturaRepository");

const UsuarioService = require("../src/services/UsuarioService");
const EmpresaService = require("../src/services/EmpresaService");
const VagaService = require("../src/services/VagaService");
const CandidaturaService = require("../src/services/CandidaturaService");

async function testarCandidaturaService() {
    // 1. Criar os Repositories
    const usuarioRepository = new UsuarioRepository();
    const empresaRepository = new EmpresaRepository();
    const perfilRepository = new PerfilCandidatoRepository();
    const vagaRepository = new VagaRepository();
    const candidaturaRepository = new CandidaturaRepository();

    // 2. Criar os Services
    const usuarioService = new UsuarioService(usuarioRepository);

    const empresaService = new EmpresaService(
        empresaRepository,
        usuarioRepository
    );

    const vagaService = new VagaService(
        vagaRepository,
        empresaRepository
    );

    const candidaturaService = new CandidaturaService(
        candidaturaRepository,
        usuarioRepository,
        perfilRepository,
        vagaRepository,
        empresaRepository
    );

    // 3. Criar usuário candidato
    const candidato = await usuarioService.criarUsuario({
        nome: "Candidato Teste",
        email: "candidato@email.com",
        senhaHash: "hash_candidato",
        tipo: Usuario.TIPOS.CANDIDATO
    });

    // 4. Criar perfil do candidato
    const perfil = await perfilRepository.criar({
        usuarioId: candidato.id,
        telefone: "16999999999",
        resumo: "Estudante de desenvolvimento de software",
        habilidades: ["JavaScript", "HTML", "CSS"]
    });

    console.log("\nPERFIL CRIADO:");
    console.log(perfil);

    // 5. Criar usuário empresarial
    const usuarioEmpresa = await usuarioService.criarUsuario({
        nome: "Empresa Teste",
        email: "empresa@email.com",
        senhaHash: "hash_empresa",
        tipo: Usuario.TIPOS.EMPRESA
    });

    // 6. Cadastrar empresa
    const empresa = await empresaService.criarEmpresa({
        usuarioId: usuarioEmpresa.id,
        razaoSocial: "Empresa Teste LTDA",
        nomeFantasia: "Empresa Teste",
        cnpj: "12345678000199",
        descricao: "Empresa de demonstração"
    });

    // 7. Aprovar empresa
    const administrador = {
        id: 999,
        tipo: Usuario.TIPOS.ADMINISTRADOR
    };

    await empresaService.aprovarEmpresa(empresa.id, administrador);

    // 8. Criar vaga
    const vaga = await vagaService.criarVaga({
        empresaId: empresa.id,
        titulo: "Desenvolvedor Júnior",
        descricao: "Vaga para desenvolvedor iniciante.",
        requisitos: ["JavaScript", "HTML", "CSS"],
        salario: 2500,
        modalidade: "hibrido",
        tipoContrato: "CLT",
        localizacao: "Matão - SP"
    });

    // 9. Publicar vaga
    await vagaService.publicarVaga(vaga.id, empresa.id);

    console.log("\nVAGA PUBLICADA:");
    console.log(await vagaService.buscarVagaPorId(vaga.id));

    // 10. Criar candidatura
    const candidatura = await candidaturaService.criarCandidatura(
        candidato,
        {
            vagaId: vaga.id,
            mensagem: "Tenho interesse nesta oportunidade!"
        }
    );

    console.log("\nCANDIDATURA CRIADA:");
    console.log(candidatura);

    // 11. Tentar candidatar novamente
    try {
        await candidaturaService.criarCandidatura(candidato, {
            vagaId: vaga.id,
            mensagem: "Tentativa duplicada"
        });
    } catch (erro) {
        console.log("\nERRO ESPERADO:", erro.message);
    }

    // 12. Listar candidaturas do candidato
    console.log("\nMINHAS CANDIDATURAS:");
    console.log(
        await candidaturaService.listarMinhasCandidaturas(candidato)
    );

    // 13. Empresa consultar candidatos da vaga
    console.log("\nCANDIDATURAS RECEBIDAS PELA EMPRESA:");
    console.log(
        await candidaturaService.listarCandidaturasDaVaga(
            usuarioEmpresa,
            vaga.id
        )
    );

    // 14. Empresa atualizar o status
    const candidaturaAtualizada =
        await candidaturaService.atualizarStatus(
            usuarioEmpresa,
            candidatura.id,
            "em_analise"
        );

    console.log("\nCANDIDATURA EM ANÁLISE:");
    console.log(candidaturaAtualizada);

    // 15. Candidato cancelar a própria candidatura
    const candidaturaCancelada =
        await candidaturaService.cancelarCandidatura(
            candidato,
            candidatura.id
        );

    console.log("\nCANDIDATURA CANCELADA:");
    console.log(candidaturaCancelada);

    // 16. Testar acesso indevido
    try {
        await candidaturaService.listarCandidaturasDaVaga(
            candidato,
            vaga.id
        );
    } catch (erro) {
        console.log("\nERRO ESPERADO:", erro.message);
    }
}

testarCandidaturaService().catch(console.error);
