//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

//ADICIONANDO AMIGOS NA LISTA E LIMPANDO CAMPO DE ENTRADA
function adicionarAmigo() {
  let amigo = document.getElementById("amigo").value;
  if (amigo == "") {
    alert("Por favor, insira um nome.");
  } else {
    amigos.push(amigo);
    console.log(amigos);
  }
  limparCampo();
  listarAmigos();
}

function limparCampo() {
  let clear = document.querySelector("input");
  clear.value = "";
}

//LISTANDO AMIGOS

