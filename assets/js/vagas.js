// =========================================================
// MENU
// =========================================================
const menuIcon =
  document.querySelector(".menu-icon");

const menuLateral =
  document.querySelector(".menu-lateral");

// =========================================================
// ABRIR MENU
// =========================================================
function abrirMenu(){

  menuLateral.classList.remove("hidden");

}

// =========================================================
// FECHAR MENU
// =========================================================
function fecharMenu(){

  menuLateral.classList.add("hidden");

}

// =========================================================
// EVENTO MENU
// =========================================================
menuIcon.addEventListener("click", abrirMenu);

// =========================================================
// SAIR
// =========================================================
function sairSistema(){

  window.location.href = "login.html";

}

// =========================================================
// EMPRESAS E VAGAS
// =========================================================
const empresas = [

  // =======================================================
  // MARCHESAN
  // =======================================================
  {
    nome: "Marchesan S.A.",

    vagas: [

      {
        titulo: "Inspetor de Qualidade",

        local: "Matão - SP",

        requisitos: [
          "Ensino Médio Completo",
          "Leitura de desenho técnico",
          "Metrologia"
        ],

        horario: "08h às 18h",

        regime: "CLT",

        contato: "(16) 3221-6500"
      },

      {
        titulo: "Soldador",

        local: "Matão - SP",

        requisitos: [
          "Solda MIG/TIG",
          "Experiência na área"
        ],

        horario: "07h às 17h",

        regime: "CLT",

        contato: "(16) 3221-6500"
      },

      {
        titulo: "Operador de Máquinas",

        local: "Matão - SP",

        requisitos: [
          "Experiência industrial",
          "Noções de segurança"
        ],

        horario: "07h às 16h",

        regime: "CLT",

        contato: "(16) 3221-6500"
      },

      {
        titulo: "Projetista Hidráulico",

        local: "Matão - SP",

        requisitos: [
          "AutoCAD",
          "Projetos hidráulicos"
        ],

        horario: "08h às 18h",

        regime: "CLT",

        contato: "(16) 3221-6500"
      },

      {
        titulo: "Projetista de Produto",

        local: "Matão - SP",

        requisitos: [
          "SolidWorks",
          "Desenvolvimento de produto"
        ],

        horario: "08h às 18h",

        regime: "CLT",

        contato: "(16) 3221-6500"
      }

    ]
  },

  // =======================================================
  // BALDAN
  // =======================================================
  {
    nome: "Baldan Implementos",

    vagas: [

      {
        titulo: "Auxiliar de Produção",

        local: "Matão - SP",

        requisitos: [
          "Ensino Médio Completo",
          "Disponibilidade de horário"
        ],

        horario: "07h às 17h",

        regime: "CLT",

        contato: "(16) 3383-9999"
      },

      {
        titulo: "Torneiro Mecânico",

        local: "Matão - SP",

        requisitos: [
          "Curso de Torno",
          "Experiência na função"
        ],

        horario: "08h às 18h",

        regime: "CLT",

        contato: "(16) 3383-9999"
      }

    ]
  },

  // =======================================================
  // LBR
  // =======================================================
  {
    nome: "LBR",

    vagas: [

      {
        titulo: "Analista Administrativo",

        local: "Matão - SP",

        requisitos: [
          "Pacote Office",
          "Boa comunicação"
        ],

        horario: "08h às 17h",

        regime: "CLT",

        contato: "(16) 4002-8922"
      },

      {
        titulo: "Auxiliar de Limpeza",

        local: "Matão - SP",

        requisitos: [
          "Organização",
          "Comprometimento"
        ],

        horario: "06h às 15h",

        regime: "CLT",

        contato: "(16) 4002-8922"
      }

    ]
  },

  // =======================================================
  // CITROSUCO
  // =======================================================
  {
    nome: "Citrosuco",

    vagas: [

      {
        titulo: "Técnico de Segurança",

        local: "Matão - SP",

        requisitos: [
          "Curso Técnico",
          "Experiência na área"
        ],

        horario: "08h às 18h",

        regime: "CLT",

        contato: "(16) 3382-5000"
      },

      {
        titulo: "Motorista",

        local: "Matão - SP",

        requisitos: [
          "CNH E",
          "Experiência com caminhão"
        ],

        horario: "Turnos",

        regime: "CLT",

        contato: "(16) 3382-5000"
      }

    ]
  },

  // =======================================================
  // LOUIS DREYFUS
  // =======================================================
  {
    nome: "Louis Dreyfus Company",

    vagas: [

      {
        titulo: "Eletricista Industrial",

        local: "Matão - SP",

        requisitos: [
          "NR10",
          "Experiência industrial"
        ],

        horario: "08h às 18h",

        regime: "CLT",

        contato: "(16) 3333-4444"
      },

      {
        titulo: "Mecânico Industrial",

        local: "Matão - SP",

        requisitos: [
          "Mecânica Industrial",
          "Experiência na função"
        ],

        horario: "07h às 17h",

        regime: "CLT",

        contato: "(16) 3333-4444"
      }

    ]
  }

];

// =========================================================
// MOSTRAR VAGAS
// =========================================================
function mostrarVagas(listaEmpresas = empresas){

  const container =
    document.querySelector(".vagas-container");

  container.innerHTML = "";

  listaEmpresas.forEach((empresa, empresaIndex) => {

    container.innerHTML += `

      <div class="empresa-titulo">

        ${empresa.nome}

      </div>

    `;

    empresa.vagas.forEach((vaga, vagaIndex) => {

      container.innerHTML += `

        <div class="vaga-card">

          <h2>

            ${vaga.titulo}

          </h2>

          <span class="empresa">

            ${empresa.nome}

          </span>

          <p>

            📍 ${vaga.local}

          </p>

          <button
            onclick="abrirDetalhes(${empresaIndex}, ${vagaIndex})"
          >

            Ver Detalhes

          </button>

        </div>

      `;

    });

  });

}

// =========================================================
// ABRIR DETALHES
// =========================================================
function abrirDetalhes(empresaIndex, vagaIndex){

  const empresa =
    empresas[empresaIndex];

  const vaga =
    empresa.vagas[vagaIndex];

  let requisitosHTML = "";

  vaga.requisitos.forEach(req => {

    requisitosHTML += `

      <li>${req}</li>

    `;

  });

  document.querySelector(".vagas-container")
    .innerHTML = `

      <div class="detalhe-vaga">

        <button
          class="btn-voltar"
          onclick="mostrarVagas()"
        >

          ⬅ Voltar

        </button>

        <h1>

          ${vaga.titulo}

        </h1>

        <span>

          ${empresa.nome}

        </span>

        <p>

          📍 ${vaga.local}

        </p>

        <div class="detalhes-box">

          <h3>Requisitos</h3>

          <ul>

            ${requisitosHTML}

          </ul>

          <p>

            <strong>Horário:</strong>
            ${vaga.horario}

          </p>

          <p>

            <strong>Regime:</strong>
            ${vaga.regime}

          </p>

          <p>

            <strong>Contato:</strong>
            ${vaga.contato}

          </p>

        </div>

      </div>

    `;

}

// =========================================================
// PESQUISAR
// =========================================================
function pesquisarVagas(){

  const texto =
    document
      .getElementById("pesquisa")
      .value
      .toLowerCase();

  const empresasFiltradas = [];

  empresas.forEach(empresa => {

    const vagasFiltradas =
      empresa.vagas.filter(vaga => {

        return (

          vaga.titulo
            .toLowerCase()
            .includes(texto)

          ||

          empresa.nome
            .toLowerCase()
            .includes(texto)

        );

      });

    if(vagasFiltradas.length > 0){

      empresasFiltradas.push({

        nome: empresa.nome,

        vagas: vagasFiltradas

      });

    }

  });

  mostrarVagas(empresasFiltradas);

}

// =========================================================
// INICIAR
// =========================================================
mostrarVagas();