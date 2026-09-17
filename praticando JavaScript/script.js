//*concatenação

// let nome = "diogo";
// let idade = 30;


// console.log("nome: " + nome +" ,idade" + idade);

// //*interpolação

// console.log(`nome: ${nome}, idade: ${idade}`);
// console.log(typeof nome);
// console.log(typeof idade);

// let soma = "5" + 3;
// let sub = "5" - 3;

// console.log(soma);
// console.log(sub);

//* convertendo valores 

// let numero = "53";
// let convertido = Number(numero); // comverte o valor para numero

// console.log(typeof convertido);

// //* operadores relaconais 


//? "10" == 10 -> true; // valida igualdade de valor (somente valor)
//? "10"=== 10 -> false; //valida igualdade de valor e tipo de dado

// //* estrutura de repetição

// let frutas = ["Maça", "Acerola", "Banana", "Uva"];

// console.log(frutas);

// frutas.forEach(function(fruta) { // para cada coisa dentro de fruta, um ação acontecera (vai imprimir cada coisa )
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

// //* diferença entre filter e find

////?find - retorna somente o primeiro elemento que ele encontra com a condição; filter - retorna todos os elementos que encontra com a condição
// let itemFiltrado = produtos.filter(produto => produto.id === 2);
// console.log(itemFiltrado);

//* split - divide a string em partes, transformando em uma array

// let frase = "JS é top";

// let palavras = frase.split(" ");
// console.log(palavras)

//* trim- remove espaços no inicio e no fim de uma string

// let nome = "     Paulo        ";

// let nomeLimpo = nome.trim();
// console.log(nome);
// console.log(nomeLimpo);

//*includes - verifica se existe um valor dentro de uma lista, e retorna um booleano
// let frutas = ["maçã", "banana"];

// let frutasIncludes = frutas.includes("maçã");
// console.log(frutasIncludes); //? true

//* toLowerCase() - Transforma o texto em minusculo
//* toUpperCase() - Transforma o texto em maiusculo

// let nome = "KESSIA";
// let cargo = "instrutora";

// console.log(nome.toLowerCase()); 
// console.log(cargo.toUpperCase());

//* some - verifica se pelo menos um item atende a condição, retorna booleano

// let numeros = [1, 3, 5, 8];

// let temPar = numeros.some(num => num % 2 === 0); //? ve se pelo menos um item da lista atende o requisisto (no caso, se pelo menos um numero é par)
// console.log(temPar); //?true

//* every - verifica se todos os itens atendem a condição, retorna uma booleano

// let numeros = [1, 3, 5, 8];

// let TodosPar = numeros.every(num => num % 2 === 0); //? ve se todos os item da lista atendem o requisisto (no caso, se pelo menos um numero é par)
// console.log(temPar); //?false

//* sort - ordena os elementos da array

// let numeros = [3, 10, 5, 2, 4];
// let letras = ["c", "a", "x", "h"];

// //? para letras
// letras.sort();
// console.log(letras);

// //? para numeros
// numeros.sort((a, b) => a - b);
// console.log(numeros);

//* reverse - inverte a ordem dos elementos no array

// let numeros = [1, 2, 3]

// numeros.reverse();
// console.log(numeros) //? [3, 2, 1]

//* join - junta os elementos de um aarray em uma string
// let palavras = ["JS", "é", "top"]

// let frase = palavras.join(" ");
// console.log(frase);

// //! adicionando e removendo elementos
// //*push, pop, shift, unshift

// let lista = ["A","B"];

// //*push - adiciona elementos no final da array

// lista.push("C");
// console.log(lista);

// //* pop - remove o elemento no final da lista

// lista.pop();
// console.log(lista);

// //* shift - remove o elemento no começo da lista

// lista.shift();
// console.log(lista);

// //* unshift - adicionar elementos no inicio da lista

// lista.unshift("A");
// console.log(lista);

//* slice -> cria uma copia de uma parte de uma lista

/*  
    array.slice (inicial,final)
    inicial - indica onde começa
    final - onde termina (não inclui a posição/indice/index)
 */
// let numeros = [1, 2, 3, 4]

// let parte = numeros.slice (1, 3); //? posições do array
// console.log(parte); //? [2, 3]

//* splice - remove e adiciona elementos em qualquer posição

/*
    array.splice(index,count,item1, ..., itemX)
    index - indice (posição do elemento no array)
    count - número de elementos a serem removidos (pode ser 0)
    item1, ..., itemX - itens a serem adicionados
*/

// let numeros = [1, 2, 3, 4];

// //? removendo elementos, sem adicionar
// numeros.splice(1,1);
// console.log(numeros)

// //? removendo elementos e adicionando mais dois elementos
// let frutas = ["Banana","Laranja","Maçã","Manga"];

// frutas.splice(0,3, "limão", "Kiwi");
// console.log(frutas);

// //? adicionando elementos sem remover nenhum outro
// frutas.splice(2,0, "Maçã", "Kiwi")
// console.log(frutas);

//*replace- substitui um aparte de uma string

/*
REPLACE(VALORpROCURADO,"valorQuesubstitui")
*/
// let texto = ["Olá, mundo!"];

// let novoTexto = texto.replace("mundo", "cliente");
// console.log(novoTexto);

//! nossa funções
//*função comun
// function exibirMensagem() 
// {
//     console.log("bem vindo(a)!");
// }

// exibirMensagem();

//* função com parâmentros

// function comprimentar(nome) {
//     console.log(`Ola, ${nome}!`)
// }

// comprimentar("Ana");
// comprimentar("Carlos");

//* função com mais de um parametro

// function somar(n1, n2) {
//     let soma = n1 + n2
//     console.log(`${soma}`)
// }

// somar(2,5);

//? outra forma de fazer a função somar
// const somar = (n1, n2) => n1 + n2;
// console.log(somar(1,2));

//* prompt - recebe/solicita uma infomração do usúario

//? valor recebido pelo prompt() normalmente é string

let nome = prompt("Digite o seu nome");
console.log(nome);
alert(nome);

//? recebendo um numero e convertendo
//? number - converte de forma generica
let idade = Number(prompt("digite sua idade: "));

//? ParseInt() - converte o valor para um número inteiro
idade = parseInt(prompt("Digite sua idade: "));

//?parsefloat() - converte o valor para número decimal/ponto futuante
idade = parseFloat(prompt("Digite sua idade: "))