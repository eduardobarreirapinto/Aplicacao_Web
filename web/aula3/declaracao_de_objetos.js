
// Criando um objeto representando um estudante
let estudante = {
    nome: "Eduardo",
    idade: 44,
    curso: "Programação web",
    universidade: "Inmetro_IFF"
};

// Acessando propriedades do objeto
console.log(estudante.nome); // Saída: Maria
console.log(estudante.idade); // Saída: 20

// Objeto representando um livro
let livro = {
    titulo: "JavaScript: The Good Parts",
    autor: {
        nome: "Douglas Crockford",
        idade: 65,
        nacionalidade: "Estadunidense"
    },
    anoPublicacao: 2008,
    ISBN: "978-0596517748",
    generos: ["Programação", "JavaScript"]
};

console.log(livro.titulo); // Saída: JavaScript: The Good Parts
console.log(livro.autor.nome); // Saída: Douglas Crockford
console.log(livro.generos[1]); // Saída: JavaScript

// Objeto representando um carro
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Prata",
    ligar: function() {
        console.log("O carro está ligado.");
    },
    desligar: function() {
        console.log("O carro está desligado.");
    }
};

carro.ligar(); // Saída: O carro está ligado.
carro.desligar(); // Saída: O carro está desligado.

// Objeto representando um usuário
let usuario = {
    nome: "João",
    idade: 30
};

// Adicionando uma nova propriedade dinamicamente
usuario.email = "joao@example.com";

console.log(usuario.email); // Saída: joao@example.com
console.log(usuario);
usuario = JSON.stringify(usuario); // Este método converte um objeto JavaScript em uma string JSON
console.log(usuario);

