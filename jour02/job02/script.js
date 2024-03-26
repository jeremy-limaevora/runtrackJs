document.getElementById("button").onclick = function() {
    var article = document.getElementById("article");

    if (article.style.display === "none") {
        article.style.display = "block";
        this.textContent = "Masquer l'article";
    } else {
        article.style.display = "none";
        this.textContent = "Afficher l'article";
    }
};
