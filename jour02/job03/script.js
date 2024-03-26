
var button = document.getElementById("button");
var compteur = document.getElementById("compteur");


var count = 0;


function addOne() {
    count++;
    compteur.textContent = count;
}


button.addEventListener("click", addOne);
