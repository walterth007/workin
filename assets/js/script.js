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
// SAIR
// =========================================================
function sairSistema(){

  window.location.href = "login.html";

}

// =========================================================
// PESQUISA
// =========================================================
const pesquisaInput =
  document.getElementById("pesquisa");

pesquisaInput.addEventListener("keyup", pesquisarEmpresas);

// =========================================================
// PESQUISAR EMPRESAS
// =========================================================
function pesquisarEmpresas(){

  const texto =
    pesquisaInput.value.toLowerCase();

  const cards =
    document.querySelectorAll(".card");

  cards.forEach(card => {

    const titulo =
      card.querySelector("h1")
      .innerText
      .toLowerCase();

    if(titulo.includes(texto)){

      card.style.display = "flex";

    } else {

      card.style.display = "none";

    }

  });

}

// =========================================================
// BOTÕES DAS EMPRESAS
// =========================================================
const botoes =
  document.querySelectorAll(".btn-vagas");

botoes.forEach(botao => {

  botao.addEventListener("click", () => {

    window.location.href =
      "vagas.html";

  });

});

// =========================================================
// ANIMAÇÃO DOS CARDS
// =========================================================
const cards =
  document.querySelectorAll(".card");

cards.forEach((card, index) => {

  card.style.opacity = "0";

  card.style.transform =
    "translateY(40px)";

  setTimeout(() => {

    card.style.transition =
      "0.5s ease";

    card.style.opacity = "1";

    card.style.transform =
      "translateY(0)";

  }, index * 120);

});

// =========================================================
// SCROLL SUAVE
// =========================================================
document.querySelectorAll("a").forEach(link => {

  link.addEventListener("click", function(e){

    const href =
      this.getAttribute("href");

    if(href.startsWith("#")){

      e.preventDefault();

      document.querySelector(href)
        .scrollIntoView({

          behavior: "smooth"

        });

    }

  });

});

// =========================================================
// EFEITO NAVBAR
// =========================================================
window.addEventListener("scroll", () => {

  const navbar =
    document.querySelector(".navbar");

  if(window.scrollY > 20){

    navbar.style.boxShadow =
      "0 4px 12px rgba(0,0,0,0.15)";

  } else {

    navbar.style.boxShadow =
      "none";

  }

});

// =========================================================
// FECHAR MENU AO CLICAR FORA
// =========================================================
window.addEventListener("click", (e) => {

  if(

    !menuLateral.contains(e.target)
    &&
    !menuIcon.contains(e.target)

  ){

    menuLateral.classList.add("hidden");

  }

});

// =========================================================
// LOADING
// =========================================================
window.addEventListener("load", () => {

  document.body.style.opacity = "1";

});

// =========================================================
// EFEITO HOVER LOGO
// =========================================================
const logo =
  document.querySelector(".logo img");

logo.addEventListener("mouseover", () => {

  logo.style.transform =
    "scale(1.08)";

});

logo.addEventListener("mouseout", () => {

  logo.style.transform =
    "scale(1)";

});