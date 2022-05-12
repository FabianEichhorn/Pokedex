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
                        <span class="pokemon-type1">${currentPokemon['types'][0]['type']['name']}</span>
                    </div>
                    <div class="pokemon-body-image">
                        <img  class="pokemon-image" src=${currentPokemon['sprites']['other']['home']['front_default']} alt="">
                    </div>
                </div>
                </div>
                </div>
        `;
    setBackgroundcolorMainpage(i);

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
        <div class="pokemon-entry">
            <img onclick="closePokemonEntry()" class="arrow-left" src="./img/arrow-121-32 (1).png" alt="">
            <div class="pokemon-entry-head">
                <span class="pokemon-entry-head-Name">${currentPokemon['name']}</span>
                <span class="pokemon-entry-head-Idnumber">${currentPokemon['id']}</span>
            </div>
            <div class="entry-pokemon-type">
                <span class="pokemon-type1-entry">${currentPokemon['types'][0]['type']['name']}</span>
            </div>
            <div class="pokemon-entry-img">
                <img class="pokemon-entry-image" src=${currentPokemon['sprites']['other']['home']['front_default']}>
            </div>
            <div class="pokemon-entry-body">
                <div class="entry-body-headings">
                    <span>About</span>
                    <span>Stats</span>
                    <span>Moves</span>
                </div>
                <div class="entry-body-value">
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
}


function setBackgroundcolorMainpage(i) {
    let mainType = currentPokemon['types'][0]['type']['name'];

    if (mainType == 'normal') {
        document.getElementById(`pokemon-container${i}`).style.backgroundColor = "#a39985"
    } else if (mainType == 'fighting') {
        document.getElementById(`pokemon-container${i}`).style.backgroundColor = "#9d4d34"
    } else if (mainType == 'fly') {
        document.getElementById(`pokemon-container${i}`).style.backgroundColor = "#95a7f3"
    } else if (mainType == 'poison') {
        document.getElementById(`pokemon-container${i}`).style.backgroundColor = "#b054a2"
    } else if (mainType == 'ground') {
        document.getElementById(`pokemon-container${i}`).style.backgroundColor = "#cba84d"
    } else if (mainType == 'rock') {
        document.getElementById(`pokemon-container${i}`).style.backgroundColor = "#bba458"
    } else if (mainType == 'bug') {
        document.getElementById(`pokemon-container${i}`).style.backgroundColor = "#9baa13"
    } else if (mainType == 'ghost') {
        document.getElementById(`pokemon-container${i}`).style.backgroundColor = "#6060af"
    } else if (mainType == 'steel') {
        document.getElementById(`pokemon-container${i}`).style.backgroundColor = "#ababc4"
    } else if (mainType == 'fire') {
        document.getElementById(`pokemon-container${i}`).style.backgroundColor = "#f43d4ffc"
    } else if (mainType == 'water') {
        document.getElementById(`pokemon-container${i}`).style.backgroundColor = "#2757a6"
    } else if (mainType == 'grass') {
        document.getElementById(`pokemon-container${i}`).style.backgroundColor = "#33926a"
    } else if (mainType == 'electic') {
        document.getElementById(`pokemon-container${i}`).style.backgroundColor = "#eba726"
    } else if (mainType == 'psychic') {
        document.getElementById(`pokemon-container${i}`).style.backgroundColor = "#f4669d"
    } else if (mainType == 'ice') {
        document.getElementById(`pokemon-container${i}`).style.backgroundColor = "#2596be"
    } else if (mainType == 'dragon') {
        document.getElementById(`pokemon-container${i}`).style.backgroundColor = "#755ae2"
    } else if (mainType == 'dark') {
        document.getElementById(`pokemon-container${i}`).style.backgroundColor = "#6b5547"
    } else if (mainType == 'fairy') {
        document.getElementById(`pokemon-container${i}`).style.backgroundColor = "#e19ce3"
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