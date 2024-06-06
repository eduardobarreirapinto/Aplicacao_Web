// Código sem orientação a objetos

// Função para calcular a área de um retângulo
function calcularAreaRetangulo(base, altura) {
    return base * altura;
}

// Função para calcular o perímetro de um retângulo
function calcularPerimetroRetangulo(base, altura) {
    return 2 * (base + altura);
}

// Utilização das funções
const base = 5;
const altura = 3;
const area = calcularAreaRetangulo(base, altura);
const perimetro = calcularPerimetroRetangulo(base, altura);

console.log("Retângulo:");
console.log("Área:", area);
console.log("Perímetro:", perimetro);
