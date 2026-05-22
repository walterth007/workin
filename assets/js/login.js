// =========================================================
// MOSTRAR CADASTRO
// =========================================================
function mostrarCadastro(){

    document
      .getElementById("cadastroBox")
      .classList.toggle("hidden");
  
  }
  
  // =========================================================
  // CADASTRAR
  // =========================================================
  function cadastrar(){
  
    // PEGA DADOS
    const nome =
      document.getElementById("nomeCadastro").value;
  
    const email =
      document.getElementById("emailCadastro").value;
  
    const senha =
      document.getElementById("senhaCadastro").value;
  
    // VALIDAÇÃO
    if(nome === "" || email === "" || senha === ""){
  
      alert("Preencha todos os campos.");
  
      return;
    }
  
    // USUÁRIO
    const usuario = {
  
      nome,
      email,
      senha
    };
  
    // SALVA
    localStorage.setItem(
  
      "usuario",
  
      JSON.stringify(usuario)
    );
  
    alert("Conta criada com sucesso!");
  
  }
  
  // =========================================================
  // LOGIN
  // =========================================================
  function login(){
  
    // PEGA DADOS
    const email =
      document.getElementById("email").value;
  
    const senha =
      document.getElementById("senha").value;
  
    // PEGA USUÁRIO
    const usuario =
      JSON.parse(localStorage.getItem("usuario"));
  
    // VERIFICA
    if(
  
      usuario &&
      email === usuario.email &&
      senha === usuario.senha
  
    ){
  
      alert("Login realizado!");
  
      // REDIRECIONA
      window.location.href = "index.html";
  
    }
  
    else{
  
      alert("Email ou senha inválidos.");
  
    }
  
  }