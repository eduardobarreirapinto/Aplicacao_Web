document.addEventListener("DOMContentLoaded", function() {
    const card = document.getElementById("card");
    
    setTimeout(function() {
    card.classList.toggle("flip");        
    }, 5000);
});

function flipCard() {
    const card = document.getElementById("card");
    card.classList.toggle("flip");
}
