//Object.keys(): Retorna um array contendo os nomes das chaves de um objeto.
let carro = { marca: 'Toyota', modelo: 'Corolla', ano: 2022 };
let propriedades = Object.keys(carro);
console.log(propriedades); // Saída: ['marca', 'modelo', 'ano']

//Object.values(): Retorna um array contendo os valores de um objeto.
carro = { marca: 'Toyota', modelo: 'Corolla', ano: 2022 };
let valores = Object.values(carro);
console.log(valores); // Saída: ['Toyota', 'Corolla', 2022]

//Object.entries(): Retorna um array contendo arrays com os pares chave/valor de um objeto.
carro = { marca: 'Toyota', modelo: 'Corolla', ano: 2022 };
let entradas = Object.entries(carro);
console.log(entradas); // Saída: [['marca', 'Toyota'], ['modelo', 'Corolla'], ['ano', 2022]]

//Object.assign(): Copia os valores de todas as propriedades de um ou mais objetos de origem para um objeto destino e retorna o objeto destino.
let destino = { a: 1 };
let origem = { b: 2, c: 3 };
Object.assign(destino, origem);
console.log(destino); // Saída: { a: 1, b: 2, c: 3 }

//Object.hasOwnProperty(): Retorna um booleano indicando se o objeto possui a propriedade especificada como uma propriedade própria.
carro = { marca: 'Toyota', modelo: 'Corolla', ano: 2022 };
console.log(carro.hasOwnProperty('marca')); // Saída: true
console.log(carro.hasOwnProperty('preco')); // Saída: false

//Object.freeze():Congela um objeto: outros códigos não podem excluir ou alterar suas propriedades.
carro = { marca: 'Toyota', modelo: 'Corolla', ano: 2022 };
Object.freeze(carro);
carro.modelo = 'Camry';
console.log(carro.modelo); // Saída: Corolla (não foi alterado)

//Object.seal(): Sela um objeto, impedindo a adição de novas propriedades e marcando todas as propriedades existentes como não configuráveis.
let carro = { marca: 'Toyota', modelo: 'Corolla', ano: 2022 };
Object.seal(carro);
carro.cor = 'Prata';
console.log(carro.cor); // Saída: undefined (não foi adicionado)