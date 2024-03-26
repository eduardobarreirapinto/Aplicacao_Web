// Criando um array de números
let numeros = [1, 2, 3, 4, 5];

// Acessando elementos do array
console.log(numeros[0]); // Saída: 1
console.log(numeros.length); // Saída: 5

// Array de objetos representando várias pessoas
let pessoas = [
    { nome: "Maria", idade: 25 },
    { nome: "João", idade: 30 },
    { nome: "Ana", idade: 28 }
];
console.log(pessoas[0]);
console.log(pessoas[0].nome); // Saída: Maria
console.log(pessoas[2].idade); // Saída: Maria
console.log(pessoas.length); // Saída: 3

// Array bidimensional representando uma matriz
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriz[1][2]); // Saída: 6 (segunda linha, terceiro elemento)
console.log(matriz.length); // Saída: 3 (número de linhas na matriz)

// Array de funções
let funcoes = [
    function() { console.log("Função 1"); },
    function() { console.log("Função 2"); },
    function() { console.log("Função 3"); }
];

funcoes[0](); // Saída: Função 1
funcoes[2](); // Saída: Função 3
