// Objeto estudante
var estudante = {
    nome: "Eduardo",
    idade: 44,
    curso: "Programação web",
    universidade: "Inmetro_IFF"
  };
  
  // Função para exibir informações do estudante
  function exibirInformacoesEstudante() {
    document.getElementById('studentName').textContent = estudante.nome;
    document.getElementById('studentAge').textContent = estudante.idade;
    document.getElementById('studentCourse').textContent = estudante.curso;
    document.getElementById('studentUniversity').textContent = estudante.universidade;
  }
  
  // Chama a função para exibir informações do estudante quando a página carregar
  window.onload = exibirInformacoesEstudante;