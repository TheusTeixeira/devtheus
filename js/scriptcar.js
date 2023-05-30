// Array para armazenar os produtos adicionados ao carrinho
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nome, preco) {
  let produtoExistente = carrinho.find(function(item) {
    return item.nome === nome;
  });

  if (produtoExistente) {
    // Atualiza a quantidade e o valor do produto existente
    produtoExistente.quantidade++;
    produtoExistente.valor = produtoExistente.quantidade * preco;
  } else {
    // Adiciona o produto ao carrinho
    carrinho.push({ nome, preco, quantidade: 1, valor: preco });
  }

  localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Armazena o carrinho no localStorage
  atualizarCarrinho(); // Atualiza a exibição do carrinho
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
  var carrinhoElement = document.getElementById("carrinho");
  carrinhoElement.innerHTML = "";

  carrinho.forEach(function(item) {
    var produtoElement = document.createElement("div");
    produtoElement.innerHTML = `
      <p>${item.nome} - Preço: R$${item.preco} - Quantidade: ${item.quantidade}</p>
    `;

    carrinhoElement.appendChild(produtoElement);
  });
}

// Chama a função para atualizar a exibição do carrinho inicialmente
atualizarCarrinho();

