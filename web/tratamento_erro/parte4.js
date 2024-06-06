function dividirNumeros(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError("Ambos os argumentos devem ser números.");
        }
        if (b === 0) {
            throw new Error("Divisão por zero não é permitida.");
        }
        return a / b;
    } catch (error) {
        console.log("Erro:", error.message);
    }
}

// Teste a função com diferentes entradas
console.log(dividirNumeros(10, 2));  // 5
console.log(dividirNumeros(10, 0));  // Erro: Divisão por zero não é permitida.
console.log(dividirNumeros(10, 'a'));  // Erro: Ambos os argumentos devem ser números.