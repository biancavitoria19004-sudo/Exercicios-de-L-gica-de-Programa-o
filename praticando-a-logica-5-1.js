// ========= PRATICANDO A LÓGICA 5.1 ============ //


// Exercicio 1 // Olá, mundo!

console.log("Olá, mundo!");


// Exercicio 2 // Nome e Sobrenome 

const nome = prompt("Digite seu nome");
const sobrenome = prompt("Digite seu sobrenome");

console.log(`${nome} ${sobrenome}`);


// Exercicio 3 // Soma de dois numeros

const numero1 = Number(prompt("Digite o primeiro numero"));
const numero2 = Number(prompt("Digite o segundo numero"));
const soma = numero1 + numero2;

console.log("Soma:", soma);
alert(`A soma dos numeros é: ${soma}`);


// Exercicio 4 // Calculadora de Média

const nota1 = Number(prompt("Digite a primeira nota"));
const nota2 = Number(prompt("Digite a segunda nota"));
const nota3 = Number(prompt("Digite a terceira nota"));
const media = (nota1 + nota2 + nota3) / 3;

console.log(`A média das notas é: ${media}`);
alert(`A média das notas é: ${media}`);


// Exercicio 5 // Sucessor ou Antecessor

const numero = Number(prompt("Digite um numero"));
const antecessor = numero - 1;
const sucessor = numero + 1;

console.log(`O antecessor de ${numero} é ${antecessor}`);
alert(`O antecessor de ${numero} é ${antecessor}`)


// Exercicio 6 // Aumento Salarial

const salario = Number(prompt("Digite o salario atual"));
const novoSalario = salario * 1.15;

console.log(`O novo salario com aumento de 15% é: ${novoSalario}`);
alert(`O novo salario com aumento de 15% é: ${novoSalario}`);


// Exercicio 7 // Conversor de Moedas

const valorReais = Number(prompt("Digite o valor em reais"));
const valorDolares = valorReais / 5.00;


alert(`O valor em dólares é: ${valorDolares.toFixed(2)}`);


// Exercicio 8 // Par ou Ímpar

const numeroParImpar = Number(prompt("Digite um numero"));
const resultado = numeroParImpar % 2 === 0 ? "Par" : "Ímpar";

alert(`O numero ${numeroParImpar} é ${resultado}`);


// Exercicio 9 // Maior de Idade

const idade = Number(prompt("Digite sua idade"));
if (idade >= 18) {
  alert("Você é maior de idade.");
} else {
  alert("Você é menor de idade.");
}


// Exercicio 10 // Qual é o maior?

const numeroA = Number(prompt("Digite o primeiro numero"));
const numeroB = Number(prompt("Digite o segundo numero"));

if (numeroA > numeroB) {
  alert(`O número ${numeroA} é maior que o número ${numeroB}`);
} else if (numeroB > numeroA) {
  alert(`O número  ${numeroB} é maior que o número ${numeroA}`);
}
else {
  alert(`Os números ${numeroA} e ${numeroB} são iguais`);
}


// Exercicio 11 // Aprovado ou Reprovado?

const primeiraNota = Number(prompt("Digite a primeira nota"));
const segundaNota = Number(prompt("Digite a segunda nota"));

const mediaFinal = (primeiraNota + segundaNota) / 2;

if (mediaFinal >= 7) {
  alert("Aprovado");
} else if (mediaFinal <= 5) {
  alert("Reprovado");
} else {
  alert("Recuperação");
}


// Exercicio 12 // Positivo, Negativo ou Zero?

const numeroPosNegZero = Number(prompt("Digite um numero"));

if (numeroPosNegZero > 0) {
  console.log("O numero é positivo");
} else if (numeroPosNegZero < 0) {
  console.log("O numero é negativo");
} else {
  console.log("O numero é zero");
}


// Exercicio 13 // Categoria de Nadador

const idadeNadador = Number(prompt("Digite a idade do nadador"));

if (idadeNadador >= 5 && idadeNadador <= 7) {
  console.log("Categoria: Infantil A");
} else if (idadeNadador >= 8 && idadeNadador <= 10) {
  console.log("Categoria: Infantil B");
} else if (idadeNadador >= 11 && idadeNadador <= 13) {
  console.log("Categoria: Juvenil A");
} else if (idadeNadador >= 14 && idadeNadador <= 17) {
  console.log("Categoria: Juvenil B");
} else if (idadeNadador >= 18) {
  console.log("Categoria: Adulto");
}


// Exercicio 14 // Login Simples

const usuario = prompt("Digite seu nome de usuário");
const senha = prompt("Digite sua senha");

if (usuario === "admin" && senha === "1234") {
  alert("Login efetuado com sucesso!");
} else {
  alert("Login com falha na autenticação.");
}


// Exercicio 15 // Calculadora de IMC

const peso = Number(prompt("Digite seu peso em kg"));
const altura = Number(prompt("Digite sua altura em metros"));
const imc = peso / (altura * altura);

alert(`Seu IMC é: ${imc.toFixed(2)}`);


