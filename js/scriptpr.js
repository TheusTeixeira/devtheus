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
  alert('Produto adicionado ao carrinho: ' + nome); // Exibe uma mensagem de alerta
}
