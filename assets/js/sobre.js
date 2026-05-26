// =========================================================
// MENU
// =========================================================
const menu =
  document.querySelector(".menu-lateral");

const overlay =
  document.getElementById("overlay");

// =========================================================
// ABRIR MENU
// =========================================================
function abrirMenu(){

  menu.classList.remove("hidden");

  overlay.classList.remove("hidden");

}

// =========================================================
// FECHAR MENU
// =========================================================
function fecharMenu(){

  menu.classList.add("hidden");

  overlay.classList.add("hidden");

}

// =========================================================
// FECHAR AO CLICAR FORA
// =========================================================
overlay.addEventListener("click", fecharMenu);

// =========================================================
// ANIMAÇÃO
// =========================================================
const cards =
  document.querySelectorAll(
    ".sobre-card, .equipe-card"
  );

function revelarCards(){

  cards.forEach(card => {

    const topo =
      card.getBoundingClientRect().top;

    if(topo < window.innerHeight - 100){

      card.style.opacity = "1";

      card.style.transform =
        "translateY(0px)";

    }

  });

}

cards.forEach(card => {

  card.style.opacity = "0";

  card.style.transform =
    "translateY(40px)";

  card.style.transition =
    "0.5s ease";

});

window.addEventListener(
  "scroll",
  revelarCards
);

window.addEventListener(
  "load",
  revelarCards
);