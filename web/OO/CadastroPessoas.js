import { Pessoa } from './Pessoa.js';

export class CadastroPessoas {
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
