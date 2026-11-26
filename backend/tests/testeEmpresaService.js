
const UsuarioRepository = require("../src/repositories/UsuarioRepository");
const EmpresaRepository = require("../src/repositories/EmpresaRepository");

const UsuarioService = require("../src/services/UsuarioService");
const EmpresaService = require("../src/services/EmpresaService");

const Usuario = require("../src/models/Usuario");

async function testarEmpresaService() {
    const usuarioRepository = new UsuarioRepository();
    const empresaRepository = new EmpresaRepository();

    const usuarioService = new UsuarioService(usuarioRepository);

    const empresaService = new EmpresaService(
        empresaRepository,
        usuarioRepository
    );

    // Criar usuário do tipo empresa
    const usuarioEmpresa = await usuarioService.criarUsuario({
        nome: "Empresa Teste",
        email: "empresa@email.com",
        senhaHash: "hash_teste",
        tipo: Usuario.TIPOS.EMPRESA
    });

    // Cadastrar empresa
    const empresa = await empresaService.criarEmpresa({
        usuarioId: usuarioEmpresa.id,
        razaoSocial: "Empresa Teste LTDA",
        nomeFantasia: "Empresa Teste",
        cnpj: "12345678000199",
        descricao: "Empresa de demonstração"
    });

    console.log("\nEMPRESA CADASTRADA:");
    console.log(empresa);

    // Tentar verificar antes da aprovação
    try {
        await empresaService.verificarEmpresaAprovada(empresa.id);
    } catch (erro) {
        console.log("\nERRO ESPERADO:", erro.message);
    }

    // Administrador simulado para o teste
    const administrador = {
        id: 999,
        tipo: Usuario.TIPOS.ADMINISTRADOR
    };

    // Aprovar empresa
    const empresaAprovada = await empresaService.aprovarEmpresa(
        empresa.id,
        administrador
    );

    console.log("\nEMPRESA APROVADA:");
    console.log(empresaAprovada);

    // Verificar novamente
    const autorizada =
        await empresaService.verificarEmpresaAprovada(empresa.id);

    console.log("\nEMPRESA AUTORIZADA A PUBLICAR VAGAS:");
    console.log(autorizada);

    // Testar tentativa de aprovação por usuário comum
    try {
        await empresaService.aprovarEmpresa(empresa.id, usuarioEmpresa);
    } catch (erro) {
        console.log("\nERRO ESPERADO:", erro.message);
    }
}

testarEmpresaService().catch(console.error);
