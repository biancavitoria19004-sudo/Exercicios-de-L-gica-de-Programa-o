alert('Boas-vindas á calculadora!')

let dentroDaCalculadora = true;

function selecionarOpcao() {
  const opcao = prompt(`
    1 - Somar números
    2 - Subtrair dois números
    3 - Soma de porcentagem
    4 - Multiplicação de dois números
    5 - Divisão de dois números
    6 - Sair
  `);

  return Number(opcao);
}

function somarNumeros() {
  const quantidadeDeNumeros = Number(prompt('Digite quantos números você deseja somar: '))

  let somaTotal = 0;

  for (let contador = 0; contador < quantidadeDeNumeros; contador++) {
    const numeroSoma = Number(prompt(`Digite o ${contador + 1} número`))

    somaTotal = somaTotal + numeroSoma
  }

  return somaTotal;
}

function subtrairDoisNumeros(numero1, numero2) {
  return numero1 - numero2;
}

function somarPorcentagem(valor, porcentagem) {
  return valor + (valor * (porcentagem / 100))
}

function multiplicarDoisNumeros(numero1, numero2) {
  return numero1 * numero2;
}

function dividirDoisNumeros(numero1, numero2) {
  return numero1 / numero2;
}

while (dentroDaCalculadora) {
  const opcao = selecionarOpcao()

  switch (opcao) {
    case "1":
      const resultadoSoma = somarNumeros()
      alert(`A soma de todos os números é: ${resultadoSoma}`)
      break;
    case "2":
      const n1 = Number(prompt('Digite o primeiro número: '));
      const n2 = Number(prompt('Digite o segundo número: '));

      const subtracaoTotal = subtrairDoisNumeros(n1, n2)

      alert(`O número ${n1} menos o número ${n2} é igual: ${subtracaoTotal}`)
      break;
    case "3":
      const numero = Number(prompt('Digite o número a ser atribuido: '))
      const porcentagem = Number(prompt('Quantos porcento você deseja adicionado ao valor?'))

      const somaTotal = somarPorcentagem(numero, porcentagem);

      alert(`O número ${numero} acrescentando ${porcentagem}% é igual: ${somaTotal}`)
      break;
    case "4":
      const numero1 = Number(prompt('Digite o primeiro número: '));
      const numero2 = Number(prompt('Digite o segundo número: '));

      const multiplicacaoTotal = multiplicarDoisNumeros(numero1, numero2)

      alert(`O número ${num1} multiplicado pelo número ${num2} é igual: ${multiplicacaoTotal}`)
      break;
    case "5":
      const number1 = Number(prompt('Digite o primeiro número: '));
      const number2 = Number(prompt('Digite o segundo número: '));

      const divisaoTotal = dividirDoisNumeros(number1, number2);

      alert(`O número ${num1} dividido pelo número ${num2} é igual: ${divisaoTotal}`)
      break;
    case "6":
      dentroDaCalculadora = false;
      break;
    default:
      alert('Opção inválida! Selecione algum número do menu!')
      break;
  }
}

