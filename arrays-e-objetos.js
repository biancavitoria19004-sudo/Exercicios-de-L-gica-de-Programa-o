
// ========== ARRAYS E OBJETOS ========= //

// EXERCICIO 1 // LISTA DE COMPRAS

{
  const item1 = prompt("Digite um item 1 da compra");
  const item2 = prompt("Digite um item 2 da compra");
  const item3 = prompt("Digite um item 3 da compra");
  const item4 = prompt("Digite um item 4 da compra");
  const item5 = prompt("Digite um item 5 da compra");

  const arrayCompras = [item1, item2, item3, item4, item5];
  console.log(arrayCompras);

  alert('Lista final de compras: ' + arrayCompras);

  const removerItem = prompt("Deseja remover algum item? sim ou não");
  console.log(removerItem);

  if (removerItem === 'sim') {
    const produto = prompt("Qual item você quer remover?");
    const temOproduto = arrayCompras.includes(produto);

    if (temOproduto === true) {
      const listaAtualizada = arrayCompras.filter(item => item !== produto)
      console.log(listaAtualizada);

      alert('Sua lista ficou assim sem o elemento retirado: ' + listaAtualizada);
    }
  } else {
    alert('Sua lista final de compras ficou assim: ' + arrayCompras);
  }
}

// EXERCICIO 2 // CADASTRO DE CONTATO

{
  const nome = prompt("escreva seu nome")
  const tel = prompt("digite seu numero")
  const email = prompt("escreva seu email")

  const cadastro = {
    nome: nome,
    tel: tel,
    email: email
  }

  alert(`
    nome: ${cadastro.nome}
    tel: ${cadastro.tel}
    email: ${cadastro.email}
    `)

  const mudanca = prompt("deseja alterar telefone ou email? digite tel ou email:")

  if (mudanca === "tel") {
    const atualizacaonumero = prompt("digite seu numero")
    cadastro.tel = atualizacaonumero
  } else if (mudanca === "email") {
    const atualizacaoemail = prompt("digite seu email")
    cadastro.email = atualizacaoemail
  } else {
    alert("opção inválida nenhum dado alterado!")
  }

  alert(`
    nome: ${cadastro.nome}
    tel: ${cadastro.tel}
    email: ${cadastro.email}
    `)
}

// EXERCICIO 3 // FILTRAR ADULTOS 

{
  const idade1 = Number(prompt("Digite a primeria idade:"));
  const idade2 = Number(prompt("Digite a segunda idade:"));
  const idade3 = Number(prompt("Digite a terceira idade:"));
  const idade4 = Number(prompt("Digite a quarta idade:"));
  const idade5 = Number(prompt("Digite a quinta idade:"));

  const array = [
    idade1,
    idade2,
    idade3,
    idade4,
    idade5
  ]

  alert(`Essas são as idades digitadas: ${array}`)

  const maiores18 = array.filter(idade => idade > 18)
  alert(`Os maiores de 18 anos são: ${maiores18}`)

  const menores18 = array.filter(idade => idade < 18)

  alert(`A quantidade de pessoas maiores de idade é: ${maiores18.length} (${maiores18}) e as menores de idade são: ${menores18.length} (${menores18})`)
}

// EXERCICIO 4 // CALCULADORA DE PREÇO

{
  const preco1 = Number(prompt("Digite o preço do produto 1"));
  const preco2 = Number(prompt("Digite o preço do produto 2"));
  const preco3 = Number(prompt("Digite o preço do produto 3"));
  const preco4 = Number(prompt("Digite o preço do produto 4"));

  const arrayPrecos = [preco1, preco2, preco3, preco4];
  const soma = preco1 + preco2 + preco3 + preco4;
  const media = soma / arrayPrecos.length;

  console.log("Preços:", arrayPrecos);
  console.log("Soma:", soma);
  console.log("Média:", media);

  const maior = Math.max(...arrayPrecos);

  const novoarray = arrayPrecos.filter(num => num !== maior);

  const maior1 = novoarray.reduce((acc, val) => acc + val, 0);
  const media2 = maior1 / novoarray.length
  alert(`a soma dos valores é: ${maior1} e a media é: ${media2}`)
}

// EXERCICIO 5 // INVENTÁRIO SIMPLES

{
  const nome = prompt("Digite o nome do produto");
  const quantidade = Number(prompt("Digite a quantidade do produto"));

  const produto = {
    nome: nome,
    quantidade: quantidade
  };

  if (produto.quantidade > 0) {
    alert("Em estoque");
  } else {
    alert("Fora de estoque");
  }

  const opcao = prompt("Repor ou retirar produto?");

  if (opcao === "repor") {
    let valor = Number(prompt("Quantos produtos quer repor?"));
    produto.quantidade += valor;
  }

  else if (opcao === "retirar") {
    let valor = Number(prompt("Quantos produtos quer retirar?"));
    produto.quantidade -= valor;
  }

  if (produto.quantidade > 0) {
    alert(produto.nome + " em estoque (" + produto.quantidade + ")");
  } else {
    alert(produto.nome + ": Fora de estoque");
  }
}

// EXERCICIO 6 // BUSCAR USUÁRIO

{
  const usuarios = [
    {
      nome: prompt("Digite o nome do usuário 1"),
      email: prompt("Digite o email do usuário 1"),
    },
    {
      nome: prompt("Digite o nome do usuário 2"),
      email: prompt("Digite o email do usuário 2"),
    },
    {
      nome: prompt("Digite o nome do usuário 3"),
      email: prompt("Digite o email do usuário 3"),
    }
  ]

  const emailBusca = prompt("Email do usuário que deseja buscar");
}

// EXERCICIO 7 // MARCAR TAREFAS

{
  const tarefas = []

  const tarefa1 = {
    texto: "Exercício de matemática",
    feita: false
  };
  const tarefa2 = {
    texto: "Exercício de história",
    feita: false
  };
  const tarefa3 = {
    texto: "Exercício de física",
    feita: false
  };

  tarefas.push(tarefa1, tarefa2, tarefa3);

  alert("Lista de tarefas antes:")
  console.log(tarefas)

  alert("Lista de tarefas depois:")
  console.log(tarefas)

  tarefas.splice(2, 1)

  alert("Lista de tarefas depois:")
  console.log(tarefas)

  const TarefasConcluidas = 0
}

// EXERCICIO 8 // CONTAGEM POR CATEGORIA

{
  const itens = []

  for (let i = 0; i < 6; i++) {
    const nome = prompt("Digite o nome do item:");
    const categoria = prompt("Digite a categoria do item:");

    itens.push({
      nome: nome,
      categoria: categoria
    });
  }

  console.log(itens);

  const contagem = {};

  for (let i = 0; i < itens.length; i++) {
    const categoria = itens[i].categoria;

    if (contagem[categoria]) {
      contagem[categoria] = contagem[categoria] + 1;
    } else {
      contagem[categoria] = 1;
    }
  }

  alert("Contagem por categoria:", contagem);

  const remover = prompt("Digite a categoria que deseja remover:");

  for (let i = itens.length - 1; i >= 0; i--) {
    if (itens[i].categoria === remover) {
      itens.splice(i, 1);
    }
  }

  alert("Lista após remoção:", itens);

  const novaContagem = {};

  for (let i = 0; i < itens.length; i++) {
    const categoria = itens[i].categoria;

    if (novaContagem[categoria]) {
      novaContagem[categoria]++;
    } else {
      novaContagem[categoria] = 1;
    }
  }

  alert("Contagem final:", novaContagem);
}

// EXERCICIO 9 // RANKING DE PONTUAÇÃO

{
  const competidores = [];

  for (let i = 0; i < 4; i++) {
    const nome = prompt("Digite o nome do competidor:");
    const pontos = Number(prompt("Digite os pontos do competidor:"));

    competidores.push({ nome, pontos });
  }

  console.log("Competidores:", competidores);

  function encontrarVencedor(lista) {
    const maior = lista[0];

    for (let i = 1; i < lista.length; i++) {
      if (lista[i].pontos > maior.pontos) {
        maior = lista[i];
      }
    }

    return maior;
  }

  const vencedor = encontrarVencedor(competidores);

  console.log("Maior pontuador:", vencedor.nome, "-", vencedor.pontos);

  const resposta = prompt("Deseja atualizar alguma pontuação? (sim/não)");

  if (resposta === "sim") {
    const nome = prompt("Digite o nome do competidor:");

    for (let i = 0; i < competidores.length; i++) {
      if (competidores[i].nome === nome) {
        competidores[i].pontos = Number(prompt("Digite a nova pontuação:"));
      }
    }

    vencedor = encontrarVencedor(competidores);

    console.log("Novo vencedor:", vencedor.nome, "-", vencedor.pontos);
  }
}

// EXERCICIO 10 // CARRINHO SIMPLES 

{
  const produtos = [];

  for (let i = 0; i < 5; i++) {
    const nome = prompt("Digite o nome do produto:");
    const preco = Number(prompt("Digite o preço do produto:"));

    produtos.push({ nome, preco });
  }

  console.log("Produtos:", produtos);

  let total = 0;

  for (let i = 0; i < produtos.length; i++) {
    total += produtos[i].preco;
  }

  console.log("Preço total:", total);

  if (total > 100) {
    alert("Frete grátis");
  } else {
    alert("Frete de R$10,00");
  }

  const remover = prompt("Digite o produto que deseja remover:");

  for (let i = produtos.length - 1; i >= 0; i--) {
    if (produtos[i].nome === remover) {
      produtos.splice(i, 1);
    }
  }

  console.log("Lista após remoção:", produtos);

  total = 0;

  for (let i = 0; i < produtos.length; i++) {
    total += produtos[i].preco;
  }

  console.log("Novo total:", total);

  if (total > 100) {
    alert("Frete grátis");
  } else {
    alert("Frete de R$10,00");
  }
}