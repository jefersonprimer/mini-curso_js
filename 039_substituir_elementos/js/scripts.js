// criar um elemento
const el = document.createElement("h3");

el.classList = "testando-classe";

const texto = document.createTextNode("Este é o texto do h3");

el.appendChild(texto);

console.log(el);

// selecionar o elemento que quero trocar
const title = document.querySelector("#title");

console.log(title);

// selecionar o pai do el
const pai = title.parentNode;

// trocar os elementos
pai.replaceChild(el, title);
