/// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('Documento carregado e pronto!');
    loadHTMLComponent('navbar', 'navbar.html');
    loadHTMLComponent('footer', 'footer.html');
});
//fetch é uma função integrada ao JavaScript moderno que permite fazer requisições HTTP assíncronas. 
function loadHTMLComponent(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error('Erro ao carregar componente:', error));
}

function filterServices() {
    // Obtém o elemento do campo de busca pelo seu ID
    const searchBar = document.getElementById('searchBar');
    
    // Converte o valor do campo de busca para minúsculas
    const filter = searchBar.value.toLowerCase();
    
    // Obtém o container que contém todos os cartões de serviços
    const serviceContainer = document.getElementById('servicesContainer');
    
    // Obtém todos os elementos com a classe 'service-card' dentro do container de serviços
    const serviceCards = serviceContainer.getElementsByClassName('service-card');

    // Itera sobre todos os cartões de serviços
    for (let i = 0; i < serviceCards.length; i++) {
        // Obtém o elemento 'h2' (título do serviço) dentro do cartão de serviço atual
        const serviceTitle = serviceCards[i].getElementsByTagName('h2')[0];
        
        // Verifica se o texto do título do serviço inclui o texto do filtro
        if (serviceTitle.innerHTML.toLowerCase().indexOf(filter) > -1) {
            // Se inclui, o cartão de serviço é exibido
            serviceCards[i].style.display = "";
        } else {
            // Se não inclui, o cartão de serviço é ocultado
            serviceCards[i].style.display = "none";
        }
    }
}


