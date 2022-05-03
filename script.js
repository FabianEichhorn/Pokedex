let currentPokemon;

async function loadPokemon() {
    for (let i = 1; i < 20; i++) {

        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        console.log('loaded pokemon', currentPokemon);
        let testurl = `https://pokeapi.co/api/v2/pokemon/4`;
        let testresponse = await fetch(testurl);
        bulbasaur = await testresponse.json();
        console.log('test ', bulbasaur);

        document.getElementById('pokemon').innerHTML += `
            <div class="pokemon-container" id="pokemon-container">
        <div class="poke-id">
                    <span class="pokemon-id">${currentPokemon['id']}</span>
             </div>
             <div class="pokemon-body" id="pokemon-body">
        <div class="pokemon-body-nametype">
             
                        <span class="pokemon-name">${currentPokemon['name']}</span>
                        <span class="pokemon-type1">${currentPokemon['types'][0]['type']['name']}</span>
                    </div>
                    <div class="pokemon-body-image">
                        <img class="pokemon-image" src=${currentPokemon['sprites']['other']['home']['front_default']} alt="">
                    </div>
                </div>
                </div>
                </div>
        `;
    }

}














/* let currentPokemon;

async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/charmander';
    let response = await fetch(url);
    currentPokemon = await response.json();
    console.log('loaded pokemon', currentPokemon);

    renderPokemonInfo();
}


function renderPokemonInfo() {
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('pokemonImg').src = currentPokemon['sprites']['other']['home']['front_default']
} */