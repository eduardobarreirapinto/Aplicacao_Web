//1
//Cadastro de Funcionários:
//Crie um programa que permita cadastrar funcionários e exibir suas informações.
// Criando objetos Funcionário
let funcionario1 = { nome: 'João', cargo: 'Desenvolvedor' };
let funcionario2 = { nome: 'Maria', cargo: 'Designer' };

// Função para exibir informações do funcionário
function exibirInfoFuncionario(funcionario) {
  console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}`);
}

// Exibindo informações dos funcionários
exibirInfoFuncionario(funcionario1);
exibirInfoFuncionario(funcionario2);

//2
//Lista de Tarefas:
//Crie um programa que armazene uma lista de tarefas e permita adicionar novas tarefas e exibir todas as tarefas cadastradas.

// Array para armazenar as tarefas
let tarefas = [];

// Função para adicionar uma nova tarefa à lista
function adicionarTarefa(descricao) {
  tarefas.push({ descricao: descricao, concluida: false });
}

// Função para exibir todas as tarefas cadastradas
function exibirTarefas() {
  console.log("Lista de Tarefas:");
  tarefas.forEach((tarefa, index) => {
    console.log(`${index + 1}. [${tarefa.concluida ? 'x' : ' '}] ${tarefa.descricao}`);
  });
}

// Adicionando novas tarefas
adicionarTarefa("Estudar JavaScript");
adicionarTarefa("Fazer compras");

// Exibindo todas as tarefas
exibirTarefas();

//3
//Registro de Carro:
//Crie um programa que permita registrar informações de um carro e exibir detalhes sobre ele.

// Criando objeto Carro
let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020,
    cor: 'Prata',
    kmRodados: 50000
  };
  
  // Função para exibir informações do carro
  function exibirInfoCarro(carro) {
    console.log(`Marca: ${carro.marca}, Modelo: ${carro.modelo}, Ano: ${carro.ano}, Cor: ${carro.cor}, Km Rodados: ${carro.kmRodados}`);
  }
  
  // Exibindo informações do carro
  exibirInfoCarro(carro);
  