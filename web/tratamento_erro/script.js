document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;
    const mensagemErro = document.getElementById('mensagemErro');

    mensagemErro.textContent = ''; // Limpa a mensagem de erro

    try {
        validarFormulario(nome, email, idade);
        mensagemErro.textContent = 'Cadastro realizado com sucesso!';
        mensagemErro.style.color = 'green';
    } catch (error) {
        mensagemErro.textContent = error.message;
        mensagemErro.style.color = 'red';
    }
});

function validarFormulario(nome, email, idade) {
    if (nome.length < 3) {
        throw new Error('O nome deve ter pelo menos 3 caracteres.');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        throw new Error('O email fornecido é inválido.');
    }

    const idadeNumerica = parseInt(idade, 10);
    if (isNaN(idadeNumerica) || idadeNumerica <= 0) {
        throw new Error('A idade deve ser um número positivo.');
    }
}
