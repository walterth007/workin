// =========================================================
// MENU
// =========================================================
const menuLateral =
  document.querySelector(".menu-lateral");

// ABRIR MENU
function abrirMenu(){

  menuLateral.classList.remove("hidden");

}

// FECHAR MENU
function fecharMenu(){

  menuLateral.classList.add("hidden");

}

// =========================================================
// VAGAS
// =========================================================
const vagas = [

  {
    titulo: "Inspetor de Qualidade",
    empresa: "Marchesan S.A.",
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
    empresa: "Marchesan S.A.",
    local: "Matão - SP",

    requisitos: [
      "Solda MIG/TIG",
      "Experiência na área"
    ],

    horario: "07h às 17h",
    regime: "CLT",
    contato: "(16) 3221-6500"
  }

];

// =========================================================
// MOSTRAR VAGAS
// =========================================================
function mostrarVagas(lista){

  const container =
    document.querySelector(".vagas-container");

  container.innerHTML = "";

  lista.forEach((vaga, index) => {

    container.innerHTML += `

      <div class="vaga-card">

        <h2>${vaga.titulo}</h2>

        <span class="empresa">

          ${vaga.empresa}

        </span>

        <p>

          📍 ${vaga.local}

        </p>

        <button onclick="abrirDetalhes(${index})">

          Ver Detalhes

        </button>

      </div>

    `;

  });

}

// =========================================================
// DETALHES
// =========================================================
function abrirDetalhes(index){

  const vaga = vagas[index];

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
          onclick="voltarVagas()"
        >

          ⬅ Voltar

        </button>

        <h1>${vaga.titulo}</h1>

        <span class="empresa">

          ${vaga.empresa}

        </span>

        <p>📍 ${vaga.local}</p>

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
// VOLTAR
// =========================================================
function voltarVagas(){

  mostrarVagas(vagas);

}

// =========================================================
// PESQUISA
// =========================================================
function pesquisarVagas(){

  const texto =
    document
      .getElementById("pesquisa")
      .value
      .toLowerCase();

  const filtradas = vagas.filter(vaga => {

    return vaga.titulo
      .toLowerCase()
      .includes(texto);

  });

  mostrarVagas(filtradas);

}

// =========================================================
// INICIAR
// =========================================================
mostrarVagas(vagas);