// inserir o elemento no body
const novoParagrafo = document.createElement("p");

const texto = document.createTextNode("Este é o conteúdo do paragráfo");

novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

const body = document.querySelector("body");

console.log(body);

body.appendChild(novoParagrafo);

// inserir em um container

const container = document.getElementById("container");

console.log(container);

const el = document.createElement("span");

el.appendChild(document.createTextNode("texto do span"));

console.log(el);

container.appendChild(el);