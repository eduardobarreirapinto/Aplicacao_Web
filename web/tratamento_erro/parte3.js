let x = 10;
let y = 0;

console.log("x:", x, "y:", y);

try {
    let resultado = x / y;
    console.log("Resultado:", resultado);
} catch (error) {
    console.log("Erro:", error.message);
}
