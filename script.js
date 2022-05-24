let currentPokemon;

let allPokemon = [];
let pokemonLimit = 152;

let arrIndex = 1;
let length = 15;

async function loadPokemon() {
    for (let i = arrIndex; i < length; i++) {

        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        console.log('loaded pokemon', currentPokemon);
        allPokemon.push(currentPokemon); // pusht alle Pokemon in das Array, einfacher um bei der Suche zu arbeiten.
        renderPokemonMainpage(i);



    }
}

/* window.onscroll = function() {
    let scrollY = window.scrollY;
    if ((window.innerHeight + scrollY) >= document.body.scrollHeight) {
        arrIndex = arrIndex + 20;
        length = length + 19;
        loadPokemon();
        scrollY = window.scrollY - window.innerHeight;
    }
}; */

function renderPokemonMainpage(i) {
    document.getElementById('pokemon').innerHTML += `
            <div class="pokemon-container" id="pokemon-container${i}" onclick="showPokemonEntry(), showPokemonStats(${i})">
        <div class="poke-id">
                    <span class="pokemon-id">${allPokemon[i-1]['id']}</span>
             </div>
             <div class="pokemon-body" id="pokemon-body">
        <div class="pokemon-body-nametype">
             
                        <span class="pokemon-name">${allPokemon[i-1]['name']}</span>
                        <div class="types-wrap" id="types-wrap">
                        <span class="pokemon-type1" id="pokemon-type1${i}">${allPokemon[i-1]['types'][0]['type']['name']}</span>
                        <span class="pokemon-type2 d-none" id="pokemon-type2${i}">Test</span>
                        </div>
                    </div>
                    <div class="pokemon-body-image">
                        <img class="pokemon-image" src=${allPokemon[i-1]['sprites']['other']['home']['front_default']} alt="" >
                    </div>
                </div>
                </div>
                </div>
        `;
    checkSecondType(i)
    setBackgroundcolorMainpage(i);
    setTypeBackgrounds(i);

}

function showPokemonEntry() {
    document.getElementById('pokemon-entry-wrap').classList.remove('d-none');
    document.getElementById('pokedex').classList.add('d-none');
    document.getElementById('header-wrap').classList.add('d-none');
    document.getElementById('body').classList.add('bg-1');
    document.getElementById('search-wrapper').classList.add('d-none')
}

function closePokemonEntry() {
    document.getElementById('pokemon-entry-wrap').classList.add('d-none');
    document.getElementById('pokedex').classList.remove('d-none');
    document.getElementById('header-wrap').classList.remove('d-none');
    document.getElementById('body').classList.remove('bg-1');
    document.getElementById('search-wrapper').classList.remove('d-none')
}


async function showPokemonStats(i) {

    /*     let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url); */
    /*     currentPokemon = await response.json(); */
    console.log('loaded pokemon stats', currentPokemon);
    let height = allPokemon[i - 1]['height'] / 10;
    let weight = allPokemon[i - 1]['weight'] / 10;

    document.getElementById('pokemon-entry-wrap').innerHTML = `
        <div class="pokemon-entry" id="pokemon-entry${i}">
            <img onclick="closePokemonEntry()" class="arrow-left" src="./img/arrow-121-32 (1).png" alt="">
            <div class="pokemon-entry-head">
                <span class="pokemon-entry-head-Name">${allPokemon[i-1]['name']}</span>
                <span class="pokemon-entry-head-Idnumber">${allPokemon[i-1]['id']}</span>
            </div>
            <div class="entry-pokemon-type">
                <span class="pokemon-type1-entry" id="pokemon-type1-entry${i}">${allPokemon[i-1]['types'][0]['type']['name']}</span>
                <span class="pokemon-type2-entry d-none" id="pokemon-type2-entry">Test</span>
            </div>
            <div class="pokemon-entry-img">
                <img class="pokemon-entry-image" src=${allPokemon[i-1]['sprites']['other']['home']['front_default']}>
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
                        <span>${allPokemon[i-1]['types'][0]['type']['name']}</span>
                        <span>${height.toFixed(2).replace(".", ",")}m</span>
                        <span>${weight.toFixed(2).replace(".",",")}kg</span>
                        <span>${allPokemon[i-1]['abilities'][0]['ability']['name']}</span>
                        <span>${allPokemon[i-1]['base_experience']}</span>
                    </div>
                </div>
            </div>
        </div>
        `;
    checkSecondTypeStats(i);
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
    loadMoves(i);
    document.getElementById('moves-span').classList.add('underline');
}

function loadMoves(i) {
    let pokemonMoves = allPokemon[i - 1]['moves'];
    for (let i = 0; i < pokemonMoves.length; i++) {
        const pokemonMove = pokemonMoves[i]['move']['name'];

        document.getElementById('moves').innerHTML += `
        <span class="pokemon-move">${pokemonMove}</span>
        `;
    }

}


function checkSecondTypeStats(i) {
    let type2 = allPokemon[i - 1].types[1];
    if (type2) {
        type2 = allPokemon[i - 1].types[1].type.name;
        document.getElementById('pokemon-type2-entry').classList.remove('d-none');
        document.getElementById('pokemon-type2-entry').innerHTML = `${type2}`;
        setTypeBackgroundsEntry2Type(i)
    } else {
        type2 = '';
    }
}

function checkSecondType(i) {
    let type2 = allPokemon[i - 1].types[1];
    if (type2) {
        type2 = allPokemon[i - 1].types[1].type.name;
        document.getElementById(`pokemon-type2${i}`).classList.remove('d-none');
        document.getElementById(`pokemon-type2${i}`).innerHTML = `${type2}`;
        setTypeBackgrounds2Type(i)
    } else {
        type2 = '';
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