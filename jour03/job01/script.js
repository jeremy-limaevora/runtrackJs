
const citation = document.getElementById('citation');
const afficherBtn = document.getElementById('afficherBtn');
const cacherBtn = document.getElementById('cacherBtn');


afficherBtn.addEventListener('click', function() {
    citation.style.display = 'block';
});


cacherBtn.addEventListener('click', function() {
    citation.style.display = 'none';
});
