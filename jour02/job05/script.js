document.addEventListener("scroll", function() {
    // Récupérer la taille de la page visible
    var windowHeight = window.innerHeight;
    // Récupérer la taille totale de la page
    var documentHeight = document.body.scrollHeight;
    // Récupérer la position actuelle du scroll
    var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    // Calculer le pourcentage de scrolling
    var scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

    // Modifier la couleur du footer en fonction du pourcentage de scrolling
    var footer = document.querySelector("footer");
    footer.style.backgroundColor = "hsl(" + scrollPercentage + ", 100%, 50%)";
});
