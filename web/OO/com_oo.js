// Código com orientação a objetos

// Definição da classe Retangulo
class Retangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return this.base * this.altura;
    }

    calcularPerimetro() {
        return 2 * (this.base + this.altura);
    }
    
}

// Utilização da classe
const retangulo = new Retangulo(5, 3);
const area = retangulo.calcularArea();
const perimetro = retangulo.calcularPerimetro();

console.log("Retângulo:");
console.log("Área:", area);
console.log("Perímetro:", perimetro);


