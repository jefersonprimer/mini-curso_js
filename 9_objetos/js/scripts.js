let Pessoa = {
  nome: "Jeferson",
  idade: 21,
  profissao: "Programador",
  estaTrabalhando: true,
};

console.log(Pessoa);

console.log(typeof Pessoa);

console.log(Pessoa.nome);
console.log(Pessoa.idade);
console.log(Pessoa.profissao);

console.log("O meu nome é " + Pessoa.nome);

Pessoa.nome = "Gabriel";

console.log(Pessoa.nome);

console.log(Pessoa);

Pessoa.graduacao = true;

console.log(Pessoa);