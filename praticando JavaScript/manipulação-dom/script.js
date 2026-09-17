const elementos = document.querySelectorAll(".texto");

//percorrendo a lista e imprimindo cad aum dos elementos
elementos.forEach(elemento => console.log(elemento));

//elementos a lista e pegando o texto do elemento (innerText)
elementos.forEach(elemento => console.log(elemento.innerText));

//alterando textos 
elementos.forEach(elemento => {
    elemento.innerText = "Alterado";

    elemento.textContent = "Alterado"; // vem com formatação
})

//trocando as tags - innerHTML

elementos.forEach(elemento => {
    elemento.innerHTML = "<h2>item</h2>"
})

//trocar a cor do elemento
elementos.forEach(elemento => {
    elemento.style.color = "#0000FF"
})

//*eventos com js
//eventos sao ações do usuario
//evento click

// const botao = document.getElementById("btn");

// botao.addEventListener ("click", () => {
//     alert("Você clicou");
// })

//evento de digitação (input / keyup)

const campo = document.getElementById("campo");
const resultado = document.getElementById("resultado");

//input
//evento input - dispara sempre que digita, em tempo real

// campo.addEventListener("input", () => {
//     resultado.innerText = campo.value //value -oque esta sendo digitado dentro do campo
// })

//keyup - so dispara quando solta a tecla

// campo.addEventListener("keyup", () => {
//     resultado.innerText = campo.value //value -oque esta sendo digitado dentro do campo
// })

//evento de mouse
const elemento = document.getElementById("troca-cor");
const botao = document.getElementById("btn");

// //mouseover => quando passar o mouse pelo elemento
// elemento.addEventListener("mouseover", () => {
//     elemento.style.backgroundColor = "#FF0000";
// })

// //mouseout -> quando o mause sai do elemento
// elemento.addEventListener("mouseout", () => {
//     // elemento.style.backgroundColor = "#0000FF";
//     elemento.style.backgroundColor = "";
// })

//mousemove
//pega a posição do mouse

// document.addEventListener("mousemove", (evento) => {
//     console.log(`posição X: ${evento.clientX}, Posição Y: ${evento.clientY}`);
    
// } )

//evento de formulario (submit)

const form = document.querySelector("form"); // pegando direto pela tag form

form.addEventListener("submit", (e) => {
    e.preventDefault(); // bloquea o comportamento padrao do formulario que é recarregar a pagina ao enviar o submit
    const nome = document.getElementById("nome").value
    
    console.log(`Nome: ${nome}`);
    
})