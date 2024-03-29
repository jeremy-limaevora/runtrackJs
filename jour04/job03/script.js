document.getElementById('filtrer').addEventListener('click', async function() {
    const id = document.getElementById('id').value;
    const nom = document.getElementById('nom').value;
    const type = document.getElementById('type').value;

    const response = await fetch('pokemon.json');
    const pokemons = await response.json();

    const filteredPokemons = pokemons.filter(pokemon => {
        return (!id || pokemon.id.toString() === id) &&
               (!nom || pokemon.nom.toLowerCase().includes(nom.toLowerCase())) &&
               (!type || pokemon.type.toLowerCase() === type.toLowerCase());
    });

    displayPokemons(filteredPokemons);
});

function displayPokemons(pokemons) {
    const pokemonList = document.getElementById('pokemonList');
    pokemonList.innerHTML = '';

    pokemons.forEach(pokemon => {
        const pokemonElement = document.createElement('div');
        pokemonElement.textContent = `${pokemon.id} - ${pokemon.nom} - ${pokemon.type}`;
        pokemonList.appendChild(pokemonElement);
    });
}