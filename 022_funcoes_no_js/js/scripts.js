function primeiraFuncao() {

  console.log("Hello World das funções");

}

primeiraFuncao();

function dizerNome(nome) {

  console.log("O nome é: " + nome);

}

dizerNome("Matheus");
dizerNome("Pedro");
dizerNome("Xavier");

let nomeDoBancoDeDados = "João";

dizerNome(nomeDoBancoDeDados);

function soma(a, b) {
  var soma = a + b;
  return soma;
}

let somaUm = soma(2, 5);

console.log(somaUm);

let somaDois = soma(5, 5);

console.log(somaDois);

console.log(soma(4, 5));