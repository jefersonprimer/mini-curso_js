// adicionar atributo
const title = document.querySelector("#title");

title.setAttribute("class", "testando-atributo");

console.log(title);

const btn = document.querySelector("#btn");

btn.setAttribute("disabled", "disabled");

const subtitle = document.querySelector(".subtitle");

subtitle.setAttribute("id", "titulo-2");

// remover atributo
const lista = document.querySelector("#lista");

lista.removeAttribute("id");