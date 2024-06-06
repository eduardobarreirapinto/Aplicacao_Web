class MeuErroPersonalizado extends Error {
    constructor(mensagem) {
        super(mensagem);
        this.name = "MeuErroPersonalizado";
    }
}

function validarIdade(idade) {
    if (idade < 18) {
        throw new MeuErroPersonalizado("Idade deve ser maior ou igual a 18.");
    }
    return true;
}

try {
    validarIdade(16);
} catch (error) {
    if (error instanceof MeuErroPersonalizado) {
        console.log("Erro Personalizado:", error.message);
        console.log("Erro Name:", error.name);
    } else {
        console.log("Erro Desconhecido:", error.message);
    }
}
