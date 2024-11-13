// criar elemento
const el = document.createElement("div");

el.classList = "div-criada";

console.log(el);

const container = document.querySelector("#container");

// inserindo elemento filho
container.appendChild(el);

// inserBefore - insere antes

const el2 = document.createElement("div");

el2.classList = "div-before";

const el3 = document.querySelector("#container .div-criada");

console.log(el3);

container.insertBefore(el2, el3);