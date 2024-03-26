// Sélectionner le textarea
var keylogger = document.getElementById("keylogger");

// Ajouter un écouteur d'événements sur le document pour capturer les frappes clavier
document.addEventListener("keydown", function(event) {
    // Vérifier si la touche enfoncée est une lettre de a à z
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        // Ajouter la lettre une fois si le focus n'est pas dans le textarea
        if (document.activeElement !== keylogger) {
            keylogger.value += event.key;
        } else {
            // Ajouter la lettre deux fois si le focus est dans le textarea
            keylogger.value += event.key + event.key;
        }
    }
});
