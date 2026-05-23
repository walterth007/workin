// =========================================================
// MENU LATERAL
// =========================================================

// SELECIONA ELEMENTOS
const menuIcon =
  document.querySelector(".menu-icon");

const menuLateral =
  document.querySelector(".menu-lateral");

// =========================================================
// ABRIR MENU
// =========================================================
if(menuIcon){

  menuIcon.addEventListener("click", abrirMenu);

}

function abrirMenu(){

  menuLateral.classList.remove("hidden");

}

// =========================================================
// FECHAR MENU
// =========================================================
function fecharMenu(){

  menuLateral.classList.add("hidden");

}