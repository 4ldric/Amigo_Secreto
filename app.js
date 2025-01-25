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

function listarAmigos() {
  listagem = document.getElementById("listaAmigos");
  listagem.innerHTML = "";
  teste = amigos.map((nome) => (listagem.innerHTML += `<li>${nome}<li>`));
}

function sortearAmigo() {
  resultado = document.getElementById("resultado");
  if (amigos != "") {
    gerador = Math.random() * amigos.length;
    sorteio = Math.floor(gerador);

    resultado.innerHTML = `O seu amigo secreto e: ${amigos[sorteio]}`;
  } else {
    resultado.style.color = "red";
    resultado.innerHTML = "Primeiro insira os participantes para sortear!!";
  }
}
