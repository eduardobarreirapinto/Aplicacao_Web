import { CadastroPessoas } from './CadastroPessoas.js';

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
    pessoasContainer.innerHTML = cadastro.listarPessoas().replace(/\n/g, '<br>');
}
