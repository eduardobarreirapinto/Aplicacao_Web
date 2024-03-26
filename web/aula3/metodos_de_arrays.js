
// push -> Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.
let array = [1, 2, 3];
console.log(array.slice(1,2));
array.push(4);
console.log(array); // Saída: [1, 2, 3, 4]

//pop -> Remove o último elemento de um array e retorna esse elemento.
array = [1, 2, 3];
let ultimoElemento = array.pop();
console.log(ultimoElemento); // Saída: 3
console.log(array); // Saída: [1, 2]

//shift -> Remove o primeiro elemento de um array e retorna esse elemento.
array = [1, 2, 3];
let primeiroElemento = array.shift();
console.log(primeiroElemento); // Saída: 1
console.log(array); // Saída: [2, 3]

//unshift ->  Adiciona um ou mais elementos ao início de um array e retorna o novo comprimento do array.
array = [2, 3];
array.unshift(1);
console.log(array); // Saída: [1, 2, 3]

//splice() - > Altera o conteúdo de um array, removendo elementos existentes e/ou adicionando novos elementos.
array = [1, 2, 3, 4, 5];
array.splice(2, 1); // Remove o elemento na posição 2
console.log(array); // Saída: [1, 2, 4, 5]

//forEach() -> Executa uma função fornecida uma vez para cada elemento do array.
array = [1, 2, 3];
array.forEach(function(elemento) {
    console.log(elemento);
});
// Saída:
// 1
// 2
// 3
console.log(array);

//map() -> Cria um novo array com os resultados da chamada de uma função para cada elemento do array.
array = [1, 2, 3];
let dobrados = array.map(function(elemento) {
    return elemento * 2;
});
console.log(dobrados); // Saída: [2, 4, 6]
