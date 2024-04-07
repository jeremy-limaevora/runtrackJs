const melangerBtn = document.getElementById('melangerBtn');
const arcEnCiel = document.getElementById('arc-en-ciel');
const message = document.getElementById('message');


melangerBtn.addEventListener('click', function() {
    const images = Array.from(arcEnCiel.children);
    images.sort(() => Math.random() - 0.5);
    images.forEach(img => arcEnCiel.appendChild(img));
});


function verifierOrdre() {
    const images = Array.from(arcEnCiel.children);
    const ordreCorrect = images.every((img, index) => img.alt === `Image ${index + 1}`);
    if (ordreCorrect) {
        message.textContent = "Vous avez gagné";
        message.style.color = "green";
    } else {
        message.textContent = "Vous avez perdu";
        message.style.color = "red";
    }
}


arcEnCiel.addEventListener('DOMNodeInserted', verifierOrdre);
arcEnCiel.addEventListener('DOMNodeRemoved', verifierOrdre);

