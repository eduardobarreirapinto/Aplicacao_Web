class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    toString() {
        return `${this.nome} - ${this.idade} anos`;
    }
}

class CadastroPessoas {
    constructor() {
        this.pessoas = [];
    }

    adicionarPessoa(nome, idade) {
        const pessoa = new Pessoa(nome, idade);
        this.pessoas.push(pessoa);
    }

    listarPessoas() {
        return this.pessoas.map(pessoa => pessoa.toString()).join('\n');
    }
}

const cadastro = new CadastroPessoas();

const form = document.getElementById('cadastro-form');
const nomeInput = document.getElementById('nome');
const idadeInput = document.getElementById('idade');
const pessoasContainer = document.getElementById('pessoas-container');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = nomeInput.value;
    const idade = parseInt(idadeInput.value);
    cadastro.adicionarPessoa(nome, idade);
    atualizarListaPessoas();
    nomeInput.value = '';
    idadeInput.value = '';
});

function atualizarListaPessoas() {
    pessoasContainer.textContent = cadastro.listarPessoas();
}
