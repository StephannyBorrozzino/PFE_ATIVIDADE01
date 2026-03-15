const botoes = document.querySelectorAll(".botaoAddCart");
const contadorCarrinho = document.querySelector(".contadorCart");

var quantCarrinho = 0;
var totalCarrinho = 0;
var listaNomeCarrinho = [];
var listaPrecoCarrinho = [];
var mensagem = "";

botoes.forEach(botao => {
    botao.addEventListener("click", () => {

        const nome = botao.dataset.nome;
        const preco = Number(botao.dataset.preco);

        listaNomeCarrinho.push(nome);
        listaPrecoCarrinho.push(preco);

        quantCarrinho++;
        totalCarrinho += preco;

        contadorCarrinho.textContent = quantCarrinho;

        alert(`Produto Adicionado com Sucesso! 👍 \n ${nome} - R$ ${preco.toFixed(2)}`)
    });
});

function finalizarCompra() {
    if (quantCarrinho == 0) {
        alert(`Coloque itens no carrinho primeiro antes de finalizar!`);
    } else {
        mensagem = "";

        for (let i = 0; i < listaNomeCarrinho.length; i++) {
            mensagem += listaNomeCarrinho[i] + " -  R$ " + listaPrecoCarrinho[i].toFixed(2) + "\n ";
        }

        alert(`Compra Finalizada com Sucesso! \n Obrigada por comprar na Loja Midnight Geek ⭐ \n Total no carrinho: R$ ${totalCarrinho.toFixed(2)} \n \n Produtos: \n ${mensagem}`);
        quantCarrinho = 0;
        totalCarrinho = 0;
        listaNomeCarrinho = [];
        listaPrecoCarrinho = [];
        mensagem = "";
        contadorCarrinho.textContent = quantCarrinho;
    }
}

// botão voltar ao topo

const botao = document.getElementById("botaoTopo");

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        botao.classList.add("mostrar");
    } else {
        botao.classList.remove("mostrar");
    }
});

botao.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});