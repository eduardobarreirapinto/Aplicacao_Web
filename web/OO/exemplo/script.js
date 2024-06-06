const canvas = document.getElementById('canvas');
const infoDiv = document.getElementById('info');
const shapeTypeSelect = document.getElementById('shapeType');

function addShape() {
    const color = generateRandomColor();
    const type = shapeTypeSelect.value;
    let shape;

    if (type === 'circle') {
        const radius = Math.random() * 50 + 20; // Raio aleatório entre  20 and 70
        shape = new Circle(color, radius);
    } else if (type === 'square') {
        const side = Math.random() * 50 + 20; // lado aleatório entre 20 and 70
        shape = new Square(color, side);
    }

    displayShape(shape);
}

function displayShape(shape) {
    const shapeDiv = document.createElement('div');
    shapeDiv.style.backgroundColor = shape.color;
    shapeDiv.style.margin = '10px';
    shapeDiv.style.float = 'left';

    if (shape instanceof Circle) {
        shapeDiv.style.width = `${2 * shape.radius}px`;
        shapeDiv.style.height = `${2 * shape.radius}px`;
        shapeDiv.style.borderRadius = '50%';
    } else if (shape instanceof Square) {
        shapeDiv.style.width = `${shape.side}px`;
        shapeDiv.style.height = `${shape.side}px`;
    }

    shapeDiv.addEventListener('click', () => {
        infoDiv.textContent = shape.getInfo();
    });

    canvas.appendChild(shapeDiv);
}

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
