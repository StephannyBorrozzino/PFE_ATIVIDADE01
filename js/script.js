const botoes = document.querySelectorAll(".botaoAddCart");
const contadorCarrinho = document.querySelector(".contadorCart");

var quantCarrinho = 0;
var totalCarrinho = 0;

botoes.forEach(botao => {
    botao.addEventListener("click", () => {

      const nome = botao.dataset.nome;
      const preco = Number(botao.dataset.preco);

    quantCarrinho++;
    totalCarrinho += preco;

    contadorCarrinho.textContent = quantCarrinho;

    alert("Produto Adicionado com Sucesso! 👍")
  });
});

function finalizarCompra(){
    if(quantCarrinho == 0){
        alert(`Coloque itens no carrinho primeiro antes de finalizar!`);
    }else {
        alert(`Compra Finalizada com Sucesso! \n Obrigada por compra na Loja Midnight Geek ⭐ \n Total no carrinho: R$ ${totalCarrinho.toFixed(2)}`);
        quantCarrinho = 0;
        totalCarrinho = 0;
    }
}