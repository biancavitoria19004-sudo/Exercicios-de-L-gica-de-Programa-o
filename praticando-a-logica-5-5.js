
// ================ PRATICANDO A LÓGICA 5.5 =================


// EXERCICIO 1 // MENSAGEM DE BOAS-VINDAS

{
  function mostrarBoasVindas() {
    alert("Bem vindo ao nosso programa!")
  }
  mostrarBoasVindas();

  // EXERCICIO 2 // SAUDAÇÃO PERSONALIZADA

  function saudarUsuario(nome) {
    alert("Olá," + nome + "! Tenha um bom dia!");
  }

  let nomeUsuario = prompt("Digite seu nome:");
  saudarUsuario(nomeUsuario);

  // EXERCICIO 3 // DOBRO DE UM NÚMERO

  function calcularDobro(numero) {
    return numero * 2;
  }

  let valor = Number(prompt("Digite um número:"));
  let resultado = calcularDobro(valor);

  alert("O dobro do número é: " + resultado);
}

// EXERCICIO 4 // MÉDIA DE TRÊS NÚMEROS

{
  function calcularMedia() {
    return (nota1 + nota2 + nota3) / 3;
  }

  let nota1 = Number(prompt("Digite a nota 1:"));
  let nota2 = Number(prompt("Digite a nota 2:"));
  let nota3 = Number(prompt("Digite a nota 3:"));

  let media = calcularMedia(nota1, nota2, nota3);

  alert("Média:" + media);
}

// EXERCICIO 5 // VERIFICADOR DE PAR OU ÍMPAR

{
  function verificarParidade(numero) {
    if (numero % 2 === 0) {
      alert("Par");
    } else {
      alert("Ímpar");
    }
  }

  let valor = Number(prompt("Digite um número:"));
  verificarParidade(valor);

  // EXERCICIO 6 // MAIOR DE DOIS NÚMEROS

  function encontrarMaior(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }

  let numero1 = Number(prompt("Digite o primeiro número:"));
  let numero2 = Number(prompt("Digite o segundo número:"));

  let maior = encontrarMaior(numero1, numero2);

  alert("O maior número é:" + maior);
}

// EXERCICIO 7 // TABUADA COM FUNÇÃO

{
  function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      console.log(numero + " x " + i + " = " + (numero * i));
    }
  }

  let valor = Number(prompt("Digite um número:"));
  mostrarTabuada(valor);
}

// EXERCICIO 8 // CONTAGEM REGRESSIVA COM FUNÇÃO

{
  function contagemRegressiva(inicio) {
    for (let i = inicio; i >= 0; i--) {
      console.log(i);
    }
  }

  let numero = Number(prompt("Digite um número para iniciar a contagem:"));
  contagemRegressiva(numero);
}

// EXERCICIO 9 // SOMAR ELEMENTOS DE UM VETOR

{
  function somarVetor(vetor) {
    let soma = 0;

    for (let i = 0; i < vetor.length; i++) {
      soma = soma + vetor[i];
    }
    return soma;
  }

  let numeros = [];
  let resultado = somarVetor(numeros);

  alert("Soma dos elementos: " + resultado);
}

// EXERCICIO 10 // ENCONTRAR O MENOR VALOR EM UM VETOR

{
  function encontrarMenor(vetor) {
    let menor = vetor[0];

    for (let i = 1; i < vetor.length; i++) {
      if (vetor[i] < menor) {
        menor = vetor[i];
      }
    }

    return menor;
  }

  let numeros = [8, 3, 12, 5, 2];
  let resultado = encontrarMenor(numeros);

  alert("O menor valor é: " + resultado);
}

// EXERCICIO 11 // CONTAR PARES EM UM VETOR

{
  function contarPares(numeros) {
    let pares = 0;

    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 === 0) {
        pares++;
      }
    }
    return pares;
  }
}

// EXERCICIO 12 // SITUAÇÃO DO ALUNO 

{
  function verificarAprovacao(media) {
    if (media >= 6) {
      return "Aprovado";
    } else {
      return "Reprovado";
    }
  }
}

// EXERCICIO 13 // CALCULADORA SIMPLES

{
  function calculadora(numero1, numero2, operacao) {

    if (operacao === "+") {
      return numero1 + numero2;
    }

    if (operacao === "-") {
      return numero1 - numero2;
    }

    if (operacao === "*") {
      return numero1 * numero2;
    }

    if (operacao === "/") {
      return numero1 / numero2;
    }

  }
  const numero1 = Number(prompt("Digite o primeiro número:"));
  const numero2 = Number(prompt("Digite o segundo número:"));
  const operacao = prompt("Digite a operação (+, -, *, /):");

  const resultado = calculadora(numero1, numero2, operacao);

  alert("Resultado: " + resultado);
}

// EXERCICIO 14 // LIMPADOR DE TELA

{
  function limparTela() {
    for (let i = 0; i < 50; i++) {
      console.log("");
    }
  }
}

// EXERCICIO 15 // REFATORANDO O DESAFIO

{
  function somar(a, b) {
    return a + b;
  }

  function subtrair(a, b) {
    return a - b;
  }

  function multiplicar(a, b) {
    return a * b;
  }

  function dividir(a, b) {
    return a / b;
  }

  {
    const opcao = prompt(`
    1 - Somar números
    2 - Subtrair números
    3 - Multiplicar números
    4 - Dividir números
    5 - Sair
  `);

    if (opcao >= 1 && opcao <= 4) {
      const n1 = Number(prompt("Digite o primeiro número:"));
      const n2 = Number(prompt("Digite o segundo número:"));

      let resultado;

      if (opcao == 1) resultado = somar(n1, n2);
      if (opcao == 2) resultado = subtrair(n1, n2);
      if (opcao == 3) resultado = multiplicar(n1, n2);
      if (opcao == 4) resultado = dividir(n1, n2);

      alert("Resultado: " + resultado);
    }
  }
}
