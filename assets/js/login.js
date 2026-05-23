// =========================================================
// MOSTRAR LOGIN
// =========================================================
function mostrarLogin(){

  document
    .getElementById("loginBox")
    .classList.remove("hidden");

  document
    .getElementById("cadastroBox")
    .classList.add("hidden");

  document
    .getElementById("btnLogin")
    .classList.add("ativo");

  document
    .getElementById("btnCadastro")
    .classList.remove("ativo");

}

// =========================================================
// MOSTRAR CADASTRO
// =========================================================
function mostrarCadastro(){

  document
    .getElementById("cadastroBox")
    .classList.remove("hidden");

  document
    .getElementById("loginBox")
    .classList.add("hidden");

  document
    .getElementById("btnCadastro")
    .classList.add("ativo");

  document
    .getElementById("btnLogin")
    .classList.remove("ativo");

}

// =========================================================
// LOGIN
// =========================================================
function login(){

  const email =
    document.getElementById("email").value;

  const senha =
    document.getElementById("senha").value;

  if(email === "" || senha === ""){

    alert("Preencha todos os campos.");

    return;
  }

  alert("Login realizado com sucesso!");

  window.location.href = "index.html";

}

// =========================================================
// CADASTRO
// =========================================================
function cadastrar(){

  const nome =
    document.getElementById("nomeCadastro").value;

  const email =
    document.getElementById("emailCadastro").value;

  const senha =
    document.getElementById("senhaCadastro").value;

  if(
    nome === "" ||
    email === "" ||
    senha === ""
  ){

    alert("Preencha todos os campos.");

    return;
  }

  alert("Conta criada com sucesso!");

  mostrarLogin();

}

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
// MOSTRAR LOGIN
// =========================================================
function mostrarLogin(){

  document
    .getElementById("loginBox")
    .classList.remove("hidden");

  document
    .getElementById("cadastroBox")
    .classList.add("hidden");

  document
    .getElementById("btnLogin")
    .classList.add("ativo");

  document
    .getElementById("btnCadastro")
    .classList.remove("ativo");

}

// =========================================================
// MOSTRAR CADASTRO
// =========================================================
function mostrarCadastro(){

  document
    .getElementById("cadastroBox")
    .classList.remove("hidden");

  document
    .getElementById("loginBox")
    .classList.add("hidden");

  document
    .getElementById("btnCadastro")
    .classList.add("ativo");

  document
    .getElementById("btnLogin")
    .classList.remove("ativo");

}

// =========================================================
// LOGIN
// =========================================================
function login(){

  alert("Login realizado!");

}

// =========================================================
// CADASTRO
// =========================================================
function cadastrar(){

  alert("Cadastro realizado!");

}


