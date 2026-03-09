
// ============= PRATICANDO A LÓGICA 5.2 =============== //

// Exercicio 16 // Calculadora de Desconto

const precoOriginal = Number(prompt("Digite o preço original do produto:"));
const porcentagem = Number(prompt("Digite a porcentagem de desconto:"));

const desconto = precoOriginal * (porcentagem / 100);
const precoComDesconto = precoOriginal - desconto;

alert(`Valor do desconto: R$ ${desconto.toFixed(2)}`);
alert(`Preço final: R$ ${precoComDesconto.toFixed(2)}`);


// Exercicio 17 // Conversor de Temperatura 

const temperaturaCelsius = Number(prompt("Digite a temperatura em Celsius:"));
const temperaturaFahrenheit = (temperaturaCelsius * 1.8) + 32;

alert(`A temperatura em Fahrenheit é: ${temperaturaFahrenheit}°F`);

// Exercicio 18 // Aluguel de Carro

const diasAluguel = Number(prompt("Digite o número de dias de aluguel:"));
const custoDiario = 60;
const kmRodados = Number(prompt("Digite o número de km rodados:"));
const custoKm = kmRodados * 0.15;
const custoTotal = diasAluguel * custoDiario + custoKm;

alert(`O custo total do aluguel é: R$ ${custoTotal.toFixed(2)}`);


// Exercicio 19 // Situação de Votação

const idadeVotacao = Number(prompt("Digite sua idade:"));

if (idadeVotacao < 16) {
  alert("Não votante");
} else if (idadeVotacao >= 16 && idadeVotacao < 18) {
  alert("Voto opcional");
} else {
  alert("Voto obrigatório");
}


// Exercicio 20 // IMC com Classificação

const seuPeso = Number(prompt("Digite seu peso em kg"));
const suaAltura = Number(prompt("Digite sua altura em metros"));
const seuImc = seuPeso / (suaAltura * suaAltura);

if (seuImc < 18.5) {
  alert("Abaixo do peso");
} else if (seuImc < 25) {
  alert("Peso normal");
} else if (seuImc < 30) {
  alert("Sobrepeso");
} else {
  alert("Obesidade");
}


// Exercicio 21 // Formas de Pagamento

const valorProduto = Number(prompt("Digite o valor do produto:"));
const formaPagamento = prompt("Digite a forma de pagamento:").toLowerCase();

let valorFinal;

if (formaPagamento === "a vista") {
  valorFinal = valorProduto * 0.90; // 10% de desconto
} else if (formaPagamento === "2x no cartao") {
  valorFinal = valorProduto * 1.05; // 5% de juros
} else if (formaPagamento === "3x ou mais no cartao") {
  valorFinal = valorProduto * 1.20; // 20% de juros
}

alert(`O valor final a ser pago é: R$ ${valorFinal.toFixed(2)}`);


// Exercicio 22 // É um Triângulo?

const ladoA = Number(prompt("Digite o comprimento do lado A:"));
const ladoB = Number(prompt("Digite o comprimento do lado B:"));
const ladoC = Number(prompt("Digite o comprimento do lado C:"));

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
  console.log("As retas podem formar um triângulo.");
} else {
  console.log("As retas não podem formar um triângulo.");
}


// Exercicio 23 // Maior de Três

const primeiroNumero = Number(prompt("Digite o primeiro numero:"));
const segundoNumero = Number(prompt("Digite o segundo numero:"));
const terceiroNumero = Number(prompt("Digite o terceiro numero:"));

if (primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero) {
  alert(`O número ${primeiroNumero} é o maior.`);
} else if (segundoNumero > primeiroNumero && segundoNumero > terceiroNumero) {
  alert(`O número ${segundoNumero} é o maior.`);
} else if (terceiroNumero > primeiroNumero && terceiroNumero > segundoNumero) {
  alert(`O número ${terceiroNumero} é o maior.`);
}


// Exercicio 24 // Ordem Crescente

const num1 = Number(prompt("Digite o primeiro numero:"));
const num2 = Number(prompt("Digite o segundo numero:"));

if (num1 < num2) {
  console.log(`Ordem crescente: ${num1}, ${num2}`);
} else if (num2 < num1) {
  console.log(`Ordem crescente: ${num2}, ${num1}`);
}


// Exercicio 25 // Ano Bissexto

const ano = Number(prompt("Digite um ano:"));

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
  console.log(`${ano} é um ano bissexto.`);
} else {
  console.log(`${ano} não é um ano bissexto.`);
}


// Exercicio 26 // Alistamento Militar

const anoNascimento = Number(prompt("Digite seu ano de nascimento:"));
const anoAtual = new Date().getFullYear();
const Idade = anoAtual - anoNascimento;

console.log(`Você tem ${Idade} anos em ${anoAtual}.`);

if (Idade < 18) {
  alert(`Ainda vai se alistar. Faltam ${18 - Idade} anos.`);
} else if (Idade === 18) {
  alert("Está na hora de se alistar.");
} else {
  alert(`Já passou do prazo. Passaram ${Idade - 18} anos.`);
}


// Exercicio 27 // Média com Status

const nota1Media = Number(prompt("Digite a primeira nota:"));
const nota2Media = Number(prompt("Digite a segunda nota:"));
const mediaAluno = (nota1Media + nota2Media) / 2;

if (mediaAluno < 5) {
  alert(`Reprovado ${mediaAluno.toFixed(2)}`);
} else if (mediaAluno >= 5 && mediaAluno < 7) {
  alert(`Recuperação ${mediaAluno.toFixed(2)}`);
} else if (mediaAluno >= 7) {
  alert(`Aprovado ${mediaAluno.toFixed(2)}`);
}


// Exercicio 28 // Pedra, Papel e Tesoura

const jogador1 = prompt("Jogador1 Pedra, Papel, Tesoura:").toLowerCase();
const jogador2 = prompt("Jogador2 Pedra, Papel, Tesoura:").toLowerCase();

if (jogador1 === jogador2) {
  alert("EMPATE!");
} else if ((jogador1 === "pedra" && jogador2 === "tesoura") ||
  (jogador1 === "papel" && jogador2 === "pedra") ||
  (jogador1 === "tesoura" && jogador2 === "papel")) {
  alert("Jogador 1 VENCEU!");
} else {
  alert("Jogador 2 VENCEU!");
}


// Exercicio 29 // Preço da Passagem

const distancia = Number(prompt("Digite a distância da viagem em km:"));
let precoPassagem;

if (distancia <= 200) {
  precoPassagem = distancia * 0.50;
} else if (distancia > 200) {
  precoPassagem = distancia * 0.45;
}

alert(`O preço da passagem é: R$ ${precoPassagem.toFixed(2)}`);


// Exercicio 30 // Empréstimo Bancário

const valorCasa = Number(prompt("Digite o valor da casa:"));
const salarioComprador = Number(prompt("Digite o salário do comprador:"));
const anosFinanciamento = Number(prompt("Digite o número de anos para financiamento:"));

const prestacaoMensal = valorCasa / (anosFinanciamento * 12);
const limitePrestacao = salarioComprador * 0.30;

if (prestacaoMensal > limitePrestacao) {
  alert("Empréstimo negado. A prestação excede 30% do salário.");
} else {
  alert("Empréstimo aprovado.");
}

