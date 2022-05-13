let currentPokemon;

async function loadPokemon() {
    for (let i = 1; i < 20; i++) {

        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        console.log('loaded pokemon', currentPokemon);
        /*  let testurl = `https://pokeapi.co/api/v2/pokemon/4`;
         let testresponse = await fetch(testurl);
         bulbasaur = await testresponse.json();
         console.log('test ', bulbasaur); */
        renderPokemonMainpage(i)
    }

}


function renderPokemonMainpage(i) {
    document.getElementById('pokemon').innerHTML += `
            <div class="pokemon-container" id="pokemon-container${i}" onclick="showPokemonEntry(), showPokemonStats(${i})">
        <div class="poke-id">
                    <span class="pokemon-id">${currentPokemon['id']}</span>
             </div>
             <div class="pokemon-body" id="pokemon-body">
        <div class="pokemon-body-nametype">
             
                        <span class="pokemon-name">${currentPokemon['name']}</span>
                        <span class="pokemon-type1" id="pokemon-type1${i}">${currentPokemon['types'][0]['type']['name']}</span>
                    </div>
                    <div class="pokemon-body-image">
                        <img  class="pokemon-image" src=${currentPokemon['sprites']['other']['home']['front_default']} alt="">
                    </div>
                </div>
                </div>
                </div>
        `;
    setBackgroundcolorMainpage(i);
    setTypeBackgrounds(i);

}

function showPokemonEntry() {
    document.getElementById('pokemon-entry-wrap').classList.remove('d-none');
    document.getElementById('pokedex').classList.add('d-none');
    document.getElementById('header-wrap').classList.add('d-none');
    document.getElementById('body').classList.add('bg-1');
}

function closePokemonEntry() {
    document.getElementById('pokemon-entry-wrap').classList.add('d-none');
    document.getElementById('pokedex').classList.remove('d-none');
    document.getElementById('header-wrap').classList.remove('d-none');
    document.getElementById('body').classList.remove('bg-1');
}


async function showPokemonStats(i) {

    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    console.log('loaded pokemon stats', currentPokemon);
    let height = currentPokemon['height'] / 10;
    let weight = currentPokemon['weight'] / 10;

    document.getElementById('pokemon-entry-wrap').innerHTML = `
        <div class="pokemon-entry" id="pokemon-entry${i}">
            <img onclick="closePokemonEntry()" class="arrow-left" src="./img/arrow-121-32 (1).png" alt="">
            <div class="pokemon-entry-head">
                <span class="pokemon-entry-head-Name">${currentPokemon['name']}</span>
                <span class="pokemon-entry-head-Idnumber">${currentPokemon['id']}</span>
            </div>
            <div class="entry-pokemon-type">
                <span class="pokemon-type1-entry" id="pokemon-type1-entry${i}">${currentPokemon['types'][0]['type']['name']}</span>
            </div>
            <div class="pokemon-entry-img">
                <img class="pokemon-entry-image" src=${currentPokemon['sprites']['other']['home']['front_default']}>
            </div>
            <div class="pokemon-entry-body" id="pokemon-entry-body">
                <div class="entry-body-headings">
                    <span onclick="showPokemonStats(${i})" id="about-span">About</span>
                    <span onclick="showStatsEntry(${i})">Stats</span>
                    <span onclick="showMovesEntry(${i})">Moves</span>
                </div>
                <div class="entry-body-value" id="entry-body-value">
                    <div class="one-value">
                        <span>Type</span>
                        <span>Height</span>
                        <span>Weight</span>
                        <span>Abilities</span>
                        <span>Base Experience</span>
                    </div>
                    <div class="one-value">
                        <span>${currentPokemon['types'][0]['type']['name']}</span>
                        <span>${height.toFixed(2).replace(".", ",")}m</span>
                        <span>${weight.toFixed(2).replace(".",",")}kg</span>
                        <span>${currentPokemon['abilities'][0]['ability']['name']}</span>
                        <span>${currentPokemon['base_experience']}</span>
                    </div>
                </div>
            </div>
        </div>
        `;
    setBackgroundcolorEntry(i);
    setTypeBackgroundsEntry(i);
    document.getElementById('about-span').classList.add('underline');
}


function showStatsEntry(i) {
    document.getElementById('pokemon-entry-body').innerHTML = `
    <div class="pokemon-entry-body" id="pokemon-entry-body">
                <div class="entry-body-headings">
                    <span onclick="showPokemonStats(${i})">About</span>
                    <span onclick="showStatsEntry(${i})" id="stats-span">Stats</span>
                    <span onclick="showMovesEntry(${i})">Moves</span>
                </div>
    <div class="stats-wrap">
        <div class="stats-list">
            <span>Hp</span>
            <span>Attack</span>
            <span>Defense</span>
            <span>Spez. Attack</span>
            <span>Spez. Defense</span>
            <span>Speed</span>
        </div>
        <div class="stats-data">
            <span>50</span>
            <span>50</span>
            <span>50</span>
            <span>50</span>
            <span>50</span>
            <span>50</span>
        </div>
        <div class="stats-progress-bar">
            <span>Hp</span>
            <span>Attack</span>
            <span>Defense</span>
            <span>Spez. Attack</span>
            <span>Spez. Defense</span>
            <span>Speed</span>
        </div>
    </div>
    `;
    document.getElementById('stats-span').classList.add('underline');
}


function showMovesEntry(i) {
    document.getElementById('pokemon-entry-body').innerHTML = `
    <div class="pokemon-entry-body" id="pokemon-entry-body">
                <div class="entry-body-headings">
                    <span onclick="showPokemonStats(${i})">About</span>
                    <span onclick="showStatsEntry(${i})">Stats</span>
                    <span id="moves-span">Moves</span>
                </div>
    <div class="moves-wrap">
        <div class="moves" id="moves">
            <span></span>
        </div>
    </div>
    `;
    loadMoves();
    document.getElementById('moves-span').classList.add('underline');
}

function loadMoves() {
    let pokemonMoves = currentPokemon['moves'];
    for (let i = 0; i < pokemonMoves.length; i++) {
        const pokemonMove = pokemonMoves[i]['move']['name'];

        document.getElementById('moves').innerHTML += `
        <span class="pokemon-move">${pokemonMove}</span>
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