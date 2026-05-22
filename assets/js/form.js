// =========================================================
// ADICIONAR NOVA VAGA NO FORMULÁRIO
// =========================================================
function adicionarVaga() {

    // ÁREA DAS VAGAS
    const areaVagas =
      document.getElementById("areaVagas");
  
    // NOVA VAGA
    const novaVaga = `
  
      <div class="vaga-form">
  
        <h2>Vaga</h2>
  
        <!-- TÍTULO -->
        <div class="grupo-form">
  
          <label>Tipo da Vaga</label>
  
          <input 
            type="text" 
            class="tituloVaga"
            placeholder="Ex: Soldador"
          >
  
        </div>
  
        <!-- REQUISITOS -->
        <div class="grupo-form">
  
          <label>Requisitos</label>
  
          <textarea 
            class="requisitosVaga"
            placeholder="Um requisito por linha"
          ></textarea>
  
        </div>
  
        <!-- HORÁRIO -->
        <div class="grupo-form">
  
          <label>Horário</label>
  
          <input 
            type="text" 
            class="horarioVaga"
            placeholder="08h às 18h"
          >
  
        </div>
  
        <!-- REGIME -->
        <div class="grupo-form">
  
          <label>Regime</label>
  
          <input 
            type="text" 
            class="regimeVaga"
            placeholder="CLT"
          >
  
        </div>
  
        <!-- CONTATO -->
        <div class="grupo-form">
  
          <label>Contato</label>
  
          <input 
            type="text" 
            class="contatoVaga"
            placeholder="(16) 99999-9999"
          >
  
        </div>
  
      </div>
  
    `;
  
    // ADICIONA SEM APAGAR AS OUTRAS
    areaVagas.insertAdjacentHTML("beforeend", novaVaga);
  
  }
  
  // =========================================================
  // CADASTRAR EMPRESA
  // =========================================================
  function cadastrarEmpresa(){
  
    // =======================================================
    // DADOS EMPRESA
    // =======================================================
    const nome =
      document.getElementById("nomeEmpresa").value;
  
    const endereco =
      document.getElementById("enderecoEmpresa").value;
  
    // =======================================================
    // INPUT IMAGEM
    // =======================================================
    const inputLogo =
      document.getElementById("logoEmpresa");
  
    const arquivo =
      inputLogo.files[0];
  
    // =======================================================
    // VALIDA IMAGEM
    // =======================================================
    if(!arquivo){
  
      alert("Selecione uma logo!");
  
      return;
  
    }
  
    // =======================================================
    // PEGAR TODAS AS VAGAS
    // =======================================================
    const titulos =
      document.querySelectorAll(".tituloVaga");
  
    const requisitos =
      document.querySelectorAll(".requisitosVaga");
  
    const horarios =
      document.querySelectorAll(".horarioVaga");
  
    const regimes =
      document.querySelectorAll(".regimeVaga");
  
    const contatos =
      document.querySelectorAll(".contatoVaga");
  
    // =======================================================
    // ARRAY DAS VAGAS
    // =======================================================
    let vagas = [];
  
    // =======================================================
    // PERCORRE TODAS AS VAGAS
    // =======================================================
    for(let i = 0; i < titulos.length; i++){
  
      // CRIA VAGA
      const vaga = {
  
        titulo: titulos[i].value,
  
        requisitos:
          requisitos[i].value.split("\n"),
  
        horario: horarios[i].value,
  
        regime: regimes[i].value,
  
        contato: contatos[i].value
  
      };
  
      // ADICIONA
      vagas.push(vaga);
  
    }
  
    // =======================================================
    // LER IMAGEM
    // =======================================================
    const leitor = new FileReader();
  
    leitor.onload = function(evento){
  
      // LOGO BASE64
      const logoBase64 =
        evento.target.result;
  
      // =====================================================
      // EMPRESA
      // =====================================================
      const empresa = {
  
        nome: nome,
  
        endereco: endereco,
  
        logo: logoBase64,
  
        vagas: vagas
  
      };
  
      // =====================================================
      // LOCAL STORAGE
      // =====================================================
      let empresas = JSON.parse(
  
        localStorage.getItem("empresas")
  
      ) || [];
  
      // ADICIONA
      empresas.push(empresa);
  
      // SALVA
      localStorage.setItem(
  
        "empresas",
  
        JSON.stringify(empresas)
  
      );
  
      console.log(empresas);
  
      alert("Empresa cadastrada!");
  
    };
  
    // =======================================================
    // CONVERTE IMAGEM
    // =======================================================
    leitor.readAsDataURL(arquivo);
  
  }