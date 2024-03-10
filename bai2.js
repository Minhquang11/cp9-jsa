async function searchPokemon() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput}`);
    const data = await response.json();

    if (response.ok) {
        const pokemonInfo = `
            <h2>${data.name.toUpperCase()}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p><strong>Type:</strong> ${data.types.map(type => type.type.name).join(', ')}</p>
            <p><strong>Height:</strong> ${data.height}</p>
            <p><strong>Weight:</strong> ${data.weight}</p>
            <p><strong>Bio:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        `;
        document.getElementById('pokemonInfo').innerHTML = pokemonInfo;
    } else {
        document.getElementById('pokemonInfo').innerHTML = `<p>Pokémon not found.</p>`;
    }
}
