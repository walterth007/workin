// =========================================================
// DADOS DAS EMPRESAS
// =========================================================
const empresas = [

  // =======================================================
  // MARCHESAN
  // =======================================================
  {
    nome: "Marchesan S.A.",

    logo: "assets/img/marchesan-sf.png",

    endereco: "📍 João Marchesan, 1979 - Jardim Pereira",

    vagas: [

      {
        titulo: "Inspetor de Qualidade",

        quantidade: "+15",

        requisitos: [
          "Ensino Médio Completo",
          "Técnico Mecânico",
          "Leitura de desenho técnico",
          "Metrologia"
        ],

        horario: "08h às 15h",

        regime: "CLT",

        contato: "(16) 3221-6500"
      },

      {
        titulo: "Soldador",

        quantidade: "+25",

        requisitos: [
          "Solda MIG/TIG",
          "Experiência na área"
        ],

        horario: "07h às 17h",

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

    logo: "assets/img/baldan.png",

    endereco: "📍 Av. Baldan, Distrito Industrial - Matão/SP",

    vagas: [

      {
        titulo: "Auxiliar de Produção",

        quantidade: "+30",

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

        quantidade: "+12",

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
  // CITROSUCO
  // =======================================================
  {
    nome: "Citrosuco",

    logo: "assets/img/citrosuco.png",

    endereco: "📍 Rodovia Washington Luís - Matão/SP",

    vagas: [

      {
        titulo: "Motorista",

        quantidade: "+18",

        requisitos: [
          "CNH E",
          "Experiência com caminhão"
        ],

        horario: "Turnos",

        regime: "CLT",

        contato: "(16) 3382-5000"
      },

      {
        titulo: "Técnico de Segurança",

        quantidade: "+10",

        requisitos: [
          "Curso Técnico",
          "Experiência na área"
        ],

        horario: "08h às 18h",

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

    logo: "assets/img/ldc.png",

    endereco: "📍 Distrito Industrial - Matão/SP",

    vagas: [

      {
        titulo: "Eletricista Industrial",

        quantidade: "+9",

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

        quantidade: "+14",

        requisitos: [
          "Mecânica Industrial",
          "Experiência"
        ],

        horario: "07h às 17h",

        regime: "CLT",

        contato: "(16) 3333-4444"
      }

    ]
  },

  // =======================================================
  // PREDILECTA
  // =======================================================
  {
    nome: "Predilecta Alimentos",

    logo: "assets/img/predilecta.png",

    endereco: "📍 Via Predilecta, 50 - Matão/SP",

    vagas: [

      {
        titulo: "Auxiliar de Produção",

        quantidade: "+40",

        requisitos: [
          "Ensino Médio Completo",
          "Disponibilidade de horário"
        ],

        horario: "Turnos",

        regime: "CLT",

        contato: "(16) 3383-4100"
      },

      {
        titulo: "Analista Administrativo",

        quantidade: "+8",

        requisitos: [
          "Pacote Office",
          "Boa comunicação"
        ],

        horario: "08h às 18h",

        regime: "CLT",

        contato: "(16) 3383-4100"
      }

    ]
  },

  // =======================================================
  // GRUPO BASSI
  // =======================================================
  {
    nome: "Grupo Bassi",

    logo: "assets/img/bassi.png",

    endereco: "📍 Av. Angelim Ré, 1503 - Matão/SP",

    vagas: [

      {
        titulo: "Soldador",

        quantidade: "+20",

        requisitos: [
          "Solda MIG",
          "Experiência"
        ],

        horario: "07h às 17h",

        regime: "CLT",

        contato: "(16) 3384-3681"
      },

      {
        titulo: "Operador Industrial",

        quantidade: "+16",

        requisitos: [
          "Ensino Médio",
          "Experiência industrial"
        ],

        horario: "Turnos",

        regime: "CLT",

        contato: "(16) 3384-3681"
      }

    ]
  },

  // =======================================================
  // CAMBUHY
  // =======================================================
  {
    nome: "Cambuhy Agrícola",

    logo: "assets/img/cambuhy.png",

    endereco: "📍 Rodovia Washington Luís KM 307 - Matão/SP",

    vagas: [

      {
        titulo: "Operador Agrícola",

        quantidade: "+22",

        requisitos: [
          "CNH B",
          "Experiência agrícola"
        ],

        horario: "08h às 17h",

        regime: "CLT",

        contato: "(16) 3383-3000"
      },

      {
        titulo: "Motorista",

        quantidade: "+11",

        requisitos: [
          "CNH D",
          "Experiência"
        ],

        horario: "Turnos",

        regime: "CLT",

        contato: "(16) 3383-3000"
      }

    ]
  },

  // =======================================================
  // ROTHOBRAS
  // =======================================================
  {
    nome: "Rothobras",

    logo: "assets/img/rothobras.png",

    endereco: "📍 Distrito Industrial Silvania - Matão/SP",

    vagas: [

      {
        titulo: "Operador de Máquinas",

        quantidade: "+13",

        requisitos: [
          "Experiência industrial",
          "Disponibilidade"
        ],

        horario: "07h às 17h",

        regime: "CLT",

        contato: "(16) 3394-3579"
      },

      {
        titulo: "Auxiliar de Almoxarifado",

        quantidade: "+6",

        requisitos: [
          "Organização",
          "Pacote Office"
        ],

        horario: "08h às 18h",

        regime: "CLT",

        contato: "(16) 3394-3579"
      }

    ]
  }

];

// =========================================================
// VARIÁVEIS
// =========================================================
let empresaAtual = 0;

// =========================================================
// MENU
// =========================================================
const menuIcon =
  document.querySelector(".menu-icon");

const menuLateral =
  document.querySelector(".menu-lateral");

menuIcon.addEventListener("click", abrirMenu);

function abrirMenu(){

  menuLateral.classList.remove("hidden");

}

function fecharMenu(){

  menuLateral.classList.add("hidden");

}

// =========================================================
// CARREGAR EMPRESAS
// =========================================================
function carregarEmpresas(){

  const container =
    document.getElementById("cardsEmpresas");

  container.innerHTML = "";

  empresas.forEach((empresa, index) => {

    container.innerHTML += `

      <div class="card">

        <h1>

          ${empresa.nome}

        </h1>

        <div class="logo-empresa">

          <img 
            src="${empresa.logo}" 
            alt="${empresa.nome}"
          >

        </div>

        <p>

          ${empresa.endereco}

        </p>

        <div class="bottom">

          <span>

            👜 ${empresa.vagas.length} vagas abertas

          </span>

          <button onclick="abrirVagas(${index})">

            Detalhes →

          </button>

        </div>

      </div>

    `;

  });

}

// =========================================================
// ABRIR VAGAS
// =========================================================
function abrirVagas(index){

  empresaAtual = index;

  const empresa =
    empresas[index];

  document
    .getElementById("telaVagas")
    .classList.remove("hidden");

  const container =
    document.getElementById("listaVagas");

  container.innerHTML = "";

  empresa.vagas.forEach((vaga, vagaIndex) => {

    container.innerHTML += `

      <div 
        class="vaga-item"
        onclick="abrirDetalhe(${vagaIndex})"
      >

        ${vaga.titulo}

        <span>

          ${vaga.quantidade}

        </span>

      </div>

    `;

  });

}

// =========================================================
// ABRIR DETALHE
// =========================================================
function abrirDetalhe(index){

  const vaga =
    empresas[empresaAtual].vagas[index];

  document
    .getElementById("telaDetalhe")
    .classList.remove("hidden");

  document
    .getElementById("tituloVaga")
    .innerText = vaga.titulo;

  const lista =
    document.getElementById("requisitos");

  lista.innerHTML = "";

  vaga.requisitos.forEach(req => {

    lista.innerHTML += `

      <li>${req}</li>

    `;

  });

  document
    .getElementById("horario")
    .innerText = vaga.horario;

  document
    .getElementById("regime")
    .innerText = vaga.regime;

  document
    .getElementById("contato")
    .innerText = vaga.contato;

}

// =========================================================
// INICIAR
// =========================================================
carregarEmpresas();