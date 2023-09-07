const botao = document.querySelector("button");

//Adicione uma função (somar) ao clique desse botão
//Só adicione a função se o botão existir na tela.
//Na função do botão, pegue o total que estiver dentro da div e adicione + 1.
function somar() {}
const div = document.querySelector("div");
//Na função do botão, pegue o total que estiver dentro da div e adicione + 1.
//Mude o valor da div para o novo total.
//Mude o valor apenas se o total for menor que 10.
//Quando não for mais possível adicionar, mostre uma mensagem no console.
const total = Number(div.innerText) + 1;
if (total < 10) {
  div.innerText = total;
} else {
  console.log("Não é possivel adicionar mais");
}

if (botao) {
  botao.addEventListener("click", somar);
}
