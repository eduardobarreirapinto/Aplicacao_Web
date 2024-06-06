// Definição da classe base Pessoa
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

// Definição da classe Aluno que herda de Pessoa
class Aluno extends Pessoa {
    constructor(nome, idade, matricula, curso) {
        super(nome, idade);
        this.matricula = matricula;
        this.curso = curso;
    }

    apresentar() {
        return `${super.apresentar()} Sou aluno do curso de ${this.curso} com matrícula ${this.matricula}.`;
    }
}

// Definição da classe Professor que herda de Pessoa
class Professor extends Pessoa {
    constructor(nome, idade, salario, disciplina) {
        super(nome, idade);
        this.salario = salario;
        this.disciplina = disciplina;
    }

    apresentar() {
        return `${super.apresentar()} Sou professor de ${this.disciplina} e meu salário é R$${this.salario}.`;
    }
}

// Utilização das classes
const pessoa = new Pessoa("João", 40);
const aluno = new Aluno("Maria", 20, "12345", "Engenharia");
const professor = new Professor("Carlos", 50, 5000, "Matemática");

// Demonstração do polimorfismo
const pessoas = [pessoa, aluno, professor];

pessoas.forEach(p => {
    console.log(p.apresentar());
});
