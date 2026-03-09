
// ================= PRATICANDO A LÓGICA 5.3 =================


// EXERCICIO 1 // PREENCHER E INSERIR
{
  let numeros = [];

  for (let i = 0; i < 5; i++) {
    numeros[i] = Number(prompt("Digite um número:"));
  }

  console.log("Números digitados:");

  for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
  }
}

// EXERCICIO 2 // SOMA DOS ELEMENTOS
{
  let numerosInteiros = [];
  let soma = 0;

  for (let numero of numerosInteiros) {
    soma += numero;
  }

  console.log("Soma:", soma);
}

// EXERCICIO 3 // APENAS OS PARES
{
  let numerosPares = [];

  for (let i = 0; i < 8; i++) {
    numerosPares[i] = Number(prompt("Digite um número:"));
  }

  console.log("Números pares:");

  for (let i = 0; i < numerosPares.length; i++) {
    if (numerosPares[i] % 2 === 0) {
      console.log(numerosPares[i]);
    }
  }
}

// EXERCICIO 4 // ENCONTRANDO O MAIOR VALOR
{
  let valores = [];

  for (let i = 0; i < 7; i++) {
    valores[i] = Number(prompt("Digite um número:"));
  }
  let maior = valores[0];

  for (let i = 1; i < valores.length; i++) {
    if (valores[i] > maior) {
      maior = valores[i];
    }
  }

  console.log("O maior número é:", maior);
}

// EXERCICIO 5 // MÉDIA DA TURMA
{
  let notas = [];
  let soma = 0;

  for (let i = 0; i < 5; i++) {
    notas[i] = Number(prompt("Digite uma nota:"));
    soma = soma + notas[i];
  }

  let media = soma / 5

  alert("Média:" + media);
}

// EXERCICIO 6 // CONTANDO ÍMPARES
{
  let numeros = [];
  let numerosImpares = 0;

  for (let i = 0; i < 7; i++) {
    numeros[i] = Number(prompt("Digite um número:"));

    if (numeros[i] % 2 !== 0) {
      numerosImpares++;
    }
  }

  alert("Qantidade de números ímpares: " + numerosImpares);
}

// EXERCICIO 7 //  PROCURANDO UM NÚMERO
{
  let posicoes = [];
  let buscarNumero = 0;

  for (let i = 0; i < 10; i++) {
    posicoes[i] = Number(prompt("Digite um número:"));
  }

  buscarNumero = Number(prompt("Número que deseja buscar :"));

  let encontrado = false;

  for (let i = 0; i < 10; i++) {
    if (posicoes[i] === buscarNumero) {
      encontrado = true;
    }
  }

  if (encontrado) {
    alert("Número encontrado!");
  } else {
    alert("Número não encontrado.")
  }
}

// EXERCICIO 8 // NOMES COM A LETRA 'A'
{
  let nomes = [];
  let nomesQueComecamComA = 0;

  for (let i = 0; i < 5; i++) {
    nomes[i] = prompt("Digite um nome:");
  }

  for (let i = 0; i < 5; i++) {
    if (nomes[i][0] === "A") {
      alert(nomes[i]);
    }
  }
}

// EXERCICIO 9 // VETOR INVERTIDO
{
  let numeros = [];

  for (let i = 0; i < 6; i++) {
    numeros[i] = Number(prompt("Digite um número"));
  }

  for (let i = 5; i >= 0; i--) {
    alert(numeros[i]);
  }
}

// EXERCICIO 10 // ALUNOS APROVADOS
{
  let notas = [];
  let aprovados = 0;

  for (let i = 0; i < 8; i++) {
    notas[i] = Number(prompt("Digite uma nota"));

    if (notas[i] >= 7) {
      aprovados++;
    }
  }
  alert("Quantidade de alunos aprovados: " + aprovados);
}