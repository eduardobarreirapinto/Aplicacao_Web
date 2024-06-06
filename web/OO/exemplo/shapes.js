class Shape {
    constructor(color) {
        this.color = color;
    }

    calculateArea() {
        throw new Error("Método 'calculateArea' deve ser implementado nas subclasses.");
    }

    calculatePerimeter() {
        throw new Error("Método 'calculatePerimeter' deve ser implementado nas subclasses.");
    }

    getInfo() {
        return `Cor: ${this.color}`;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius ** 2;
    }

    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }

    getInfo() {
        return `${super.getInfo()}, Tipo: Círculo, Raio: ${this.radius.toFixed(2)}, Área: ${this.calculateArea().toFixed(2)}, Perímetro: ${this.calculatePerimeter().toFixed(2)}`;
    }
}

class Square extends Shape {
    constructor(color, side) {
        super(color);
        this.side = side;
    }

    calculateArea() {
        return this.side ** 2;
    }

    calculatePerimeter() {
        return 4 * this.side;
    }

    getInfo() {
        return `${super.getInfo()}, Tipo: Quadrado, Lado: ${this.side}, Área: ${this.calculateArea()}, Perímetro: ${this.calculatePerimeter()}`;
    }
}
