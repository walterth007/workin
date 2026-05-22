// =========================================================
// DADOS DAS VAGAS
// =========================================================
const vagas = [

  {
    titulo: "Inspetor de Qualidade",

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

    requisitos: [
      "Solda MIG/TIG",
      "Experiência na área"
    ],

    horario: "07h às 17h",

    regime: "CLT",

    contato: "(16) 3221-6500"
  },

  {
    titulo: "Operador de máquinas",

    requisitos: [
      "Experiência industrial",
      "Noções de segurança"
    ],

    horario: "08h às 18h",

    regime: "CLT",

    contato: "(16) 3221-6500"
  },

  {
    titulo: "Projetista Hidráulico",

    requisitos: [
      "AutoCAD",
      "Projetos hidráulicos"
    ],

    horario: "08h às 17h",

    regime: "CLT",

    contato: "(16) 3221-6500"
  },

  {
    titulo: "Projetista de Produto",

    requisitos: [
      "SolidWorks",
      "Desenvolvimento de produto"
    ],

    horario: "08h às 17h",

    regime: "CLT",

    contato: "(16) 3221-6500"
  }

];

// =========================================================
// MENU LATERAL
// =========================================================
const menuIcon =
  document.querySelector(".menu-icon");

const menuLateral =
  document.querySelector(".menu-lateral");

// =========================================================
// ABRIR MENU
// =========================================================
menuIcon.addEventListener("click", abrirMenu);

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
// ABRIR LISTA DE VAGAS
// =========================================================
function abrirVagas() {

  document
    .getElementById("telaEmpresa")
    .classList.add("hidden");

  document
    .getElementById("telaVagas")
    .classList.remove("hidden");

}

// =========================================================
// VOLTAR PARA EMPRESA
// =========================================================
function voltarEmpresa() {

  document
    .getElementById("telaVagas")
    .classList.add("hidden");

  document
    .getElementById("telaDetalhe")
    .classList.add("hidden");

  document
    .getElementById("telaEmpresa")
    .classList.remove("hidden");

}

// =========================================================
// VOLTAR PARA LISTA
// =========================================================
function voltarLista() {

  document
    .getElementById("telaDetalhe")
    .classList.add("hidden");

  document
    .getElementById("telaVagas")
    .classList.remove("hidden");

}

// =========================================================
// ABRIR DETALHE DA VAGA
// =========================================================
function abrirDetalhe(index) {

  const vaga = vagas[index];

  document
    .getElementById("telaVagas")
    .classList.add("hidden");

  document
    .getElementById("telaDetalhe")
    .classList.remove("hidden");

  // TÍTULO
  document
    .getElementById("tituloVaga")
    .innerText = vaga.titulo;

  // REQUISITOS
  const lista =
    document.getElementById("requisitos");

  lista.innerHTML = "";

  vaga.requisitos.forEach(req => {

    lista.innerHTML += `

      <li>${req}</li>

    `;

  });

  // HORÁRIO
  document
    .getElementById("horario")
    .innerText = vaga.horario;

  // REGIME
  document
    .getElementById("regime")
    .innerText = vaga.regime;

  // CONTATO
  document
    .getElementById("contato")
    .innerText = vaga.contato;

}

// =========================================================
// MENU
// =========================================================
function abrirInicio() {

  document
    .getElementById("telaEmpresa")
    .classList.remove("hidden");

  document
    .getElementById("telaMotivacao")
    .classList.remove("hidden");

  document
    .getElementById("telaVagas")
    .classList.add("hidden");

  document
    .getElementById("telaDetalhe")
    .classList.add("hidden");

  fecharMenu();

}

function abrirPaginaVagas() {

  document
    .getElementById("telaVagas")
    .classList.remove("hidden");

  document
    .getElementById("telaEmpresa")
    .classList.add("hidden");

  document
    .getElementById("telaMotivacao")
    .classList.add("hidden");

  document
    .getElementById("telaDetalhe")
    .classList.add("hidden");

  fecharMenu();

}

function abrirPerfil() {

  alert("Página de Perfil em desenvolvimento.");

  fecharMenu();

}

function sairSistema() {

  alert("Você saiu do sistema.");

  fecharMenu();

}