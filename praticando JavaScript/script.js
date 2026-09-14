// let nome = "diogo";
// let idade = 30;

// //*concatenação

// console.log("nome: " + nome +" ,idade" + idade);

// //*interpolação

// console.log(`nome: ${nome}, idade: ${idade}`);
// console.log(typeof nome);
// console.log(typeof idade);

// let soma = "5" + 3;
// let sub = "5" - 3;

// console.log(soma);
// console.log(sub);

// //* convertendo valores 

// let numero = "53";
// let convertido = Number(numero); // comverte o valor para numero

// console.log(typeof convertido);

// //* operadores relaconais 


//? "10" == 10 -> true; // valida igualdade de valor (somente valor)
//? "10"=== 10 -> false; //valida igualdade de valor e tipo de dado

// //* estrutura de repetição

// let frutas = ["Maça", "Acerola", "Banana", "Uva"];

// console.log(frutas);

// frutas.forEach(function(fruta) { // para cada coisa dentro de fruta, um aação acontecera (vai imprimir cada coisa )
//     console.log(`fruta: ${fruta}`);
    
// } )

// frutas.forEach(fruta => console.log(fruta));

// //* funções nativas js

//?map() = percorre um alista e cria uma nova lista com base em uma condição

// let numeros = [1, 2, 3, 4];

// let numerosDobrados = numeros.map(function(num) {
//     return num * 2;
// })

// console.log(numerosDobrados);


//? ou assim 
//? arrow function com retorno implicito

// let numerosDobradosArrow = numeros.map(num => num*2)
// console.log(numerosDobradosArrow);

//*filter = filtra os elementos com base em uma condição

// let numeros = [5, 10, 15, 20];

// let maioresQueDez = numeros.filter(num => num > 10);
//? maioresQueDez = [15, 20]
// console.log(maioresQueDez);

//*reduce = reduz os valores de uma array para um unico valor

// let numeros = [1, 2, 3, 4]

// let soma = numeros.reduce((acumulador, axuiliar) => acumulador + axuiliar, 0);
// //?acumulador começa em zero e soma com o auxiliar até o ultimo valor do array
// console.log(soma);

//* find = retorna o primeiro elemento que atende a condição

// let produtos = [
//     {id: 1, nome: "teclado", preco: 50},
//     {id: 2, nome: "mouse", preco: 30},
//     {id: 2, nome: "Caderno", preco: 30},
// ];

// let item = produtos.find( produto = produto.id === 2);

// console.log(item);
