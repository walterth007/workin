
const express = require("express");

// Models não precisam ser instanciados aqui.

// Repositories
const UsuarioRepository = require("./src/repositories/UsuarioRepository");
const EmpresaRepository = require("./src/repositories/EmpresaRepository");
const PerfilCandidatoRepository = require("./src/repositories/PerfilCandidatoRepository");
const VagaRepository = require("./src/repositories/VagaRepository");
const CandidaturaRepository = require("./src/repositories/CandidaturaRepository");

// Services
const UsuarioService = require("./src/services/UsuarioService");
const EmpresaService = require("./src/services/EmpresaService");
const PerfilCandidatoService = require("./src/services/PerfilCandidatoService");
const VagaService = require("./src/services/VagaService");
const CandidaturaService = require("./src/services/CandidaturaService");

// Controllers
const UsuarioController = require("./src/controllers/UsuarioController");
const EmpresaController = require("./src/controllers/EmpresaController");
const PerfilCandidatoController = require("./src/controllers/PerfilCandidatoController");
const VagaController = require("./src/controllers/VagaController");
const CandidaturaController = require("./src/controllers/CandidaturaController");

// Routes
const UsuarioRoutes = require("./src/routes/UsuarioRoutes");
const EmpresaRoutes = require("./src/routes/EmpresaRoutes");
const PerfilCandidatoRoutes = require("./src/routes/PerfilCandidatoRoutes");
const VagaRoutes = require("./src/routes/VagaRoutes");
const CandidaturaRoutes = require("./src/routes/CandidaturaRoutes");

const app = express();

// Permite receber JSON nas requisições
app.use(express.json());

// 1. Instanciando os Repositories
const usuarioRepository = new UsuarioRepository();
const empresaRepository = new EmpresaRepository();
const perfilCandidatoRepository = new PerfilCandidatoRepository();
const vagaRepository = new VagaRepository();
const candidaturaRepository = new CandidaturaRepository();

// 2. Instanciando os Services
const usuarioService = new UsuarioService(usuarioRepository);

const empresaService = new EmpresaService(
    empresaRepository,
    usuarioRepository
);

const perfilCandidatoService = new PerfilCandidatoService(
    perfilCandidatoRepository,
    usuarioRepository
);

const vagaService = new VagaService(
    vagaRepository,
    empresaRepository
);

const candidaturaService = new CandidaturaService(
    candidaturaRepository,
    usuarioRepository,
    perfilCandidatoRepository,
    vagaRepository,
    empresaRepository
);

// 3. Instanciando os Controllers
const usuarioController = new UsuarioController(usuarioService);
const empresaController = new EmpresaController(empresaService);

const perfilCandidatoController = new PerfilCandidatoController(
    perfilCandidatoService
);

const vagaController = new VagaController(
    vagaService,
    empresaRepository
);

const candidaturaController = new CandidaturaController(
    candidaturaService
);

// 4. Registrando as Routes
app.use("/api/usuarios", UsuarioRoutes(usuarioController));
app.use("/api/empresas", EmpresaRoutes(empresaController));

app.use(
    "/api/perfis-candidatos",
    PerfilCandidatoRoutes(perfilCandidatoController)
);

app.use("/api/vagas", VagaRoutes(vagaController));

app.use(
    "/api/candidaturas",
    CandidaturaRoutes(candidaturaController)
);

// Rota inicial para verificar se o servidor está funcionando
app.get("/", (req, res) => {
    res.status(200).json({
        mensagem: "API WorkIN funcionando!"
    });
});

// Rota para endereços inexistentes
app.use((req, res) => {
    res.status(404).json({
        mensagem: "Rota não encontrada."
    });
});

// Inicialização do servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor WorkIN rodando na porta ${PORT}`);
});
