// =========================================================
// MENU LATERAL
// =========================================================
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
// SAIR
// =========================================================
function sairSistema(){

  window.location.href = "login.html";

}

// =========================================================
// TODAS AS EMPRESAS E VAGAS
// =========================================================
const empresas = [

  // =======================================================
  // TECNOLOGIA
  // =======================================================
  {
    nome: "Nexora Systems",
    setor: "💻 Tecnologia",

    vagas: [

      {
        titulo: "Desenvolvedor(a) Full Stack Pleno",

        descricao:
          "Experiência com React e Node.js.",

        local:
          "Anywhere Office • Brasil",

        requisitos: [
          "Mínimo de 3 anos de experiência",
          "Domínio sólido de React",
          "Node.js",
          "Banco SQL e NoSQL"
        ],

        horario:
          "Segunda a sexta • 09h às 18h",

        regime:
          "PJ • 100% Remoto",

        contato:
          "vagas@nexora.com.br"
      },

      {
        titulo:
          "Analista de Segurança da Informação",

        descricao:
          "Foco em testes de intrusão e adequação à LGPD.",

        local:
          "Campinas - SP",

        requisitos: [
          "Formação em TI",
          "CompTIA Security+",
          "CEH",
          "LGPD",
          "Testes de intrusão"
        ],

        horario:
          "08h às 17h",

        regime:
          "CLT • Híbrido",

        contato:
          "vagas@nexora.com.br"
      }

    ]
  },

  // =======================================================
  // METALÚRGICA
  // =======================================================
  {
    nome: "FerroVale Metalúrgica",
    setor: "⚙️ Metalúrgica e Indústria",

    vagas: [

      {
        titulo:
          "Operador(a) de Torno CNC",

        descricao:
          "Necessária experiência prévia na operação e preparação de máquinas.",

        local:
          "Joinville - SC",

        requisitos: [
          "Curso técnico em Mecânica",
          "Leitura de desenho técnico",
          "2 anos de experiência"
        ],

        horario:
          "14h às 22h",

        regime:
          "CLT • Presencial",

        contato:
          "rh@ferrovale.ind.br"
      }

    ]
  },

  // =======================================================
  // AGRO
  // =======================================================
  {
    nome: "AgroVerde Brasil",
    setor: "🌱 Agro e Agronegócio",

    vagas: [

      {
        titulo:
          "Engenheiro(a) Agrônomo(a)",

        descricao:
          "Gestão de grandes lavouras e otimização de insumos.",

        local:
          "Ribeirão Preto - SP",

        requisitos: [
          "CREA ativo",
          "Experiência com soja e milho",
          "CNH B",
          "Disponibilidade para viagens"
        ],

        horario:
          "Horário comercial",

        regime:
          "CLT • Campo",

        contato:
          "talentos@agroverde.com.br"
      },

      {
        titulo:
          "Técnico(a) Agrícola",

        descricao:
          "Monitoramento de pragas e manutenção de relatórios.",

        local:
          "Ribeirão Preto - SP",

        requisitos: [
          "Formação técnica",
          "Pacote Office",
          "Monitoramento de pragas"
        ],

        horario:
          "07h às 16h",

        regime:
          "CLT",

        contato:
          "talentos@agroverde.com.br"
      },

      {
        titulo:
          "Analista de Exportação Agro",

        descricao:
          "Conhecimento em documentação aduaneira e inglês fluente.",

        local:
          "São Paulo - SP",

        requisitos: [
          "Comércio Exterior",
          "Inglês fluente",
          "Certificados fitossanitários"
        ],

        horario:
          "08h às 18h",

        regime:
          "CLT • Híbrido",

        contato:
          "comex@agroverde.com.br"
      }

    ]
  },

  // =======================================================
  // SAÚDE
  // =======================================================
  {
    nome: "VitaCare Clínica",
    setor: "🏥 Saúde",

    vagas: [

      {
        titulo:
          "Enfermeiro(a) Plantonista",

        descricao:
          "Atuação em triagem e emergências.",

        local:
          "Curitiba - PR",

        requisitos: [
          "COREN ativo",
          "BLS/ACLS",
          "Experiência em triagem"
        ],

        horario:
          "12x36 • 19h às 07h",

        regime:
          "CLT",

        contato:
          "curriculos@vitacare.med.br"
      },

      {
        titulo:
          "Recepcionista de Clínica",

        descricao:
          "Atendimento ao público e agendamentos.",

        local:
          "Curitiba - PR",

        requisitos: [
          "Boa comunicação",
          "Informática",
          "Experiência em saúde"
        ],

        horario:
          "08h às 17h",

        regime:
          "CLT",

        contato:
          "curriculos@vitacare.med.br"
      }

    ]
  },

  // =======================================================
  // DESIGN
  // =======================================================
  {
    nome: "PixelForge Studio",
    setor: "🎨 Design e Marketing",

    vagas: [

      {
        titulo:
          "Diretor(a) de Arte",

        descricao:
          "Liderança criativa para campanhas digitais.",

        local:
          "Belo Horizonte - MG",

        requisitos: [
          "Portfólio robusto",
          "Adobe",
          "Experiência em agência"
        ],

        horario:
          "10h às 19h",

        regime:
          "PJ • Remoto",

        contato:
          "jobs@pixelforge.studio"
      }

    ]
  },

  // =======================================================
  // LOGÍSTICA
  // =======================================================
  {
    nome: "FastRoute Logística",
    setor: "📦 Logística e Transporte",

    vagas: [

      {
        titulo:
          "Motorista Carreteiro",

        descricao:
          "Viagens interestaduais e curso MOPP.",

        local:
          "Guarulhos - SP",

        requisitos: [
          "CNH E",
          "EAR",
          "MOPP atualizado"
        ],

        horario:
          "Variável",

        regime:
          "CLT",

        contato:
          "(11) 99999-0000"
      },

      {
        titulo:
          "Coordenador(a) de Frota",

        descricao:
          "Gestão de manutenção preventiva.",

        local:
          "Guarulhos - SP",

        requisitos: [
          "Logística",
          "Excel avançado",
          "Roteirização"
        ],

        horario:
          "08h às 18h",

        regime:
          "CLT",

        contato:
          "rh@fastroute.com.br"
      },

      {
        titulo:
          "Auxiliar de Almoxarifado",

        descricao:
          "Conferência de notas e separação.",

        local:
          "Guarulhos - SP",

        requisitos: [
          "Ensino médio",
          "Organização",
          "Picking e Packing"
        ],

        horario:
          "22h às 06h",

        regime:
          "CLT",

        contato:
          "rh@fastroute.com.br"
      }

    ]
  },

  // =======================================================
  // CONSTRUÇÃO
  // =======================================================
  {
    nome: "Constrular Engenharia",
    setor: "🏗️ Construção Civil",

    vagas: [

      {
        titulo:
          "Mestre de Obras",

        descricao:
          "Supervisão de equipes e cronograma.",

        local:
          "Goiânia - GO",

        requisitos: [
          "5 anos de experiência",
          "Projetos",
          "Liderança"
        ],

        horario:
          "07h às 17h",

        regime:
          "CLT",

        contato:
          "rh@constrular.eng.br"
      },

      {
        titulo:
          "Engenheiro(a) Civil",

        descricao:
          "Orçamentos e licitações.",

        local:
          "Goiânia - GO",

        requisitos: [
          "CREA ativo",
          "SINAPI",
          "Licitações"
        ],

        horario:
          "08h às 18h",

        regime:
          "PJ • Híbrido",

        contato:
          "rh@constrular.eng.br"
      }

    ]
  },

  // =======================================================
  // EDUCAÇÃO
  // =======================================================
  {
    nome: "EduNova Cursos",
    setor: "🎓 Educação",

    vagas: [

      {
        titulo:
          "Designer Instrucional",

        descricao:
          "Criação de materiais EAD.",

        local:
          "Florianópolis - SC",

        requisitos: [
          "Metodologias ativas",
          "Articulate",
          "Experiência EAD"
        ],

        horario:
          "09h às 18h",

        regime:
          "CLT • Remoto",

        contato:
          "vemser@edunova.edu.br"
      }

    ]
  },

  // =======================================================
  // ALIMENTAÇÃO
  // =======================================================
  {
    nome: "UrbanFood Express",
    setor: "☕ Alimentação",

    vagas: [

      {
        titulo:
          "Chefe de Cozinha",

        descricao:
          "Criação de cardápios executivos.",

        local:
          "Rio de Janeiro - RJ",

        requisitos: [
          "Gastronomia",
          "Gestão de equipe",
          "Fichas técnicas"
        ],

        horario:
          "15h às 23h20",

        regime:
          "CLT",

        contato:
          "curriculos@urbanfood.com.br"
      },

      {
        titulo:
          "Atendente de Salão",

        descricao:
          "Recepção e atendimento.",

        local:
          "Rio de Janeiro - RJ",

        requisitos: [
          "Boa comunicação",
          "Agilidade",
          "Experiência em restaurante"
        ],

        horario:
          "16h às 00h20",

        regime:
          "CLT",

        contato:
          "curriculos@urbanfood.com.br"
      },

      {
        titulo:
          "Entregador(a) Motoboy",

        descricao:
          "Entregas na região central.",

        local:
          "Rio de Janeiro - RJ",

        requisitos: [
          "Moto própria",
          "CNH A",
          "MEI"
        ],

        horario:
          "18h às 23h30",

        regime:
          "Prestador de serviço",

        contato:
          "(21) 98888-0000"
      }

    ]
  },

  // =======================================================
  // ENERGIA
  // =======================================================
  {
    nome: "EcoVolt Energia",
    setor: "⚡ Energia e Sustentabilidade",

    vagas: [

      {
        titulo:
          "Técnico(a) Instalador Solar",

        descricao:
          "Instalação de sistemas fotovoltaicos.",

        local:
          "Fortaleza - CE",

        requisitos: [
          "NR10",
          "NR35",
          "Fotovoltaicos"
        ],

        horario:
          "07h30 às 17h30",

        regime:
          "CLT",

        contato:
          "rh@ecovolt.com.br"
      },

      {
        titulo:
          "Consultor(a) de Vendas Técnicas",

        descricao:
          "Prospecção de clientes B2B.",

        local:
          "Fortaleza - CE",

        requisitos: [
          "Eficiência energética",
          "Vendas B2B",
          "Veículo próprio"
        ],

        horario:
          "Horário comercial",

        regime:
          "PJ",

        contato:
          "rh@ecovolt.com.br"
      }

    ]
  }

];

// =========================================================
// MOSTRAR VAGAS
// =========================================================
function mostrarVagas(lista = empresas){

  const container =
    document.querySelector(".vagas-container");

  container.innerHTML = "";

  lista.forEach((empresa, empresaIndex) => {

    container.innerHTML += `

      <div class="empresa-bloco">

        <div class="empresa-titulo">

          <h2>
            ${empresa.setor}
          </h2>

          <span>
            ${empresa.nome}
          </span>

        </div>

        <div class="vagas-grid">

          ${empresa.vagas.map((vaga, vagaIndex) => `

            <div class="vaga-card">

              <h3>

                ${vaga.titulo}

              </h3>

              <span class="empresa">

                ${empresa.nome}

              </span>

              <p>

                ${vaga.descricao}

              </p>

              <p>

                📍 ${vaga.local}

              </p>

              <button
                onclick="abrirDetalhes(${empresaIndex}, ${vagaIndex})"
              >

                Ver Detalhes

              </button>

            </div>

          `).join("")}

        </div>

      </div>

    `;

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

        <span class="empresa-detalhe">

          ${empresa.nome}

        </span>

        <div class="detalhes-box">

          <p>
            📍 <strong>Local:</strong>
            ${vaga.local}
          </p>

          <p>
            ⏰ <strong>Horário:</strong>
            ${vaga.horario}
          </p>

          <p>
            💼 <strong>Regime:</strong>
            ${vaga.regime}
          </p>

          <p>
            📧 <strong>Contato:</strong>
            ${vaga.contato}
          </p>

          <h3>

            Requisitos

          </h3>

          <ul>

            ${requisitosHTML}

          </ul>

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

          ||

          empresa.setor
            .toLowerCase()
            .includes(texto)

        );

      });

    if(vagasFiltradas.length > 0){

      empresasFiltradas.push({

        nome: empresa.nome,

        setor: empresa.setor,

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