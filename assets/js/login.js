// =========================================================
// MENU
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
// TROCAR LOGIN / CADASTRO
// =========================================================
const tabs =
  document.querySelectorAll(".tab");

const areaLogin =
  document.getElementById("form-login-area");

const areaCadastro =
  document.getElementById("form-cadastro-area");

// LOGIN
function mostrarLogin(){

  tabs[0].classList.add("active");

  tabs[1].classList.remove("active");

  areaLogin.classList.remove("hidden");

  areaCadastro.classList.add("hidden");

}

// CADASTRO
function mostrarCadastro(){

  tabs[1].classList.add("active");

  tabs[0].classList.remove("active");

  areaCadastro.classList.remove("hidden");

  areaLogin.classList.add("hidden");

}

// =========================================================
// MOSTRAR / ESCONDER SENHA
// =========================================================
function toggleSenha(idInput, botao){

  const input =
    document.getElementById(idInput);

  const icone =
    botao.querySelector("i");

  if(input.type === "password"){

    input.type = "text";

    icone.classList.remove("fa-eye");

    icone.classList.add("fa-eye-slash");

  }else{

    input.type = "password";

    icone.classList.remove("fa-eye-slash");

    icone.classList.add("fa-eye");

  }

}

// =========================================================
// LOGIN
// =========================================================
document
  .getElementById("formLogin")
  .addEventListener("submit", function(event){

    event.preventDefault();

    const email =
      document.getElementById("emailLogin").value;

    const senha =
      document.getElementById("senhaLogin").value;

    if(email === "" || senha === ""){

      alert("Preencha todos os campos.");

      return;

    }

    alert("Login realizado com sucesso!");

    window.location.href = "index.html";

});

// =========================================================
// CADASTRO
// =========================================================
document
  .getElementById("formCadastro")
  .addEventListener("submit", function(event){

    event.preventDefault();

    const nome =
      document.getElementById("nomeCadastro").value;

    const email =
      document.getElementById("emailCadastro").value;

    const senha =
      document.getElementById("senhaCadastro").value;

    if(
      nome === ""
      ||
      email === ""
      ||
      senha === ""
    ){

      alert("Preencha todos os campos.");

      return;

    }

    alert("Cadastro realizado com sucesso!");

    mostrarLogin();

});