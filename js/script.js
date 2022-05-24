let currentPokemon;

let allPokemon = [];
let pokemonLimit = 152;

let arrIndex = 1;
let length = 152;


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
    document.getElementById('pokemon').innerHTML += renderMainpageHTML(i);
    checkSecondType(i)
    setBackgroundcolorMainpage(i);
    setTypeBackgrounds(i);

}


function showPokemonEntry() {
    document.getElementById('pokemon-entry-wrap').classList.remove('d-none');
    document.getElementById('pokedex').classList.add('d-none');
    document.getElementById('header-wrap').classList.add('d-none');

    document.getElementById('search-wrapper').classList.add('d-none')
}


function closePokemonEntry() {
    document.getElementById('pokemon-entry-wrap').classList.add('d-none');
    document.getElementById('pokedex').classList.remove('d-none');
    document.getElementById('header-wrap').classList.remove('d-none');

    document.getElementById('search-wrapper').classList.remove('d-none')
}


async function showPokemonStats(i) {

    /*     let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url); */
    /*     currentPokemon = await response.json(); */
    console.log('loaded pokemon stats', currentPokemon);
    let height = allPokemon[i - 1]['height'] / 10;
    let weight = allPokemon[i - 1]['weight'] / 10;

    document.getElementById('pokemon-entry-wrap').innerHTML = renderPokemonStatsHTML(i, height, weight);
    checkSecondTypeStats(i);
    setBackgroundcolorEntry(i);
    setTypeBackgroundsEntry(i);
    document.getElementById('about-span').classList.add('underline');
}


function showStatsEntry(i) {
    let hp = allPokemon[i - 1][`stats`][0][`base_stat`];
    let percenthp = hp / 255 * 100;
    let atk = allPokemon[i - 1][`stats`][1][`base_stat`];
    let percentatk = atk / 255 * 100;
    let def = allPokemon[i - 1][`stats`][2][`base_stat`];
    let percentdef = def / 255 * 100;
    let satk = allPokemon[i - 1][`stats`][3][`base_stat`];
    let percentsatk = satk / 255 * 100;
    let sdef = allPokemon[i - 1][`stats`][4][`base_stat`];
    let percentsdef = sdef / 255 * 100;
    let speed = allPokemon[i - 1][`stats`][5][`base_stat`];
    let percentspeed = speed / 255 * 100;
    document.getElementById('pokemon-entry-body').innerHTML = renderStatsEntryHTML(i);
    setProgressbarPercent(i, percenthp, percentatk, percentdef, percentsatk, percentsdef, percentspeed);
    document.getElementById('stats-span').classList.add('underline');
}


function setProgressbarPercent(i, percenthp, percentatk, percentdef, percentsatk, percentsdef, percentspeed) {
    document.getElementById('progressbar-hp').style.width = `${percenthp}%`;
    document.getElementById('progressbar-atk').style.width = `${percentatk}%`;
    document.getElementById('progressbar-def').style.width = `${percentdef}%`;
    document.getElementById('progressbar-s-atk').style.width = `${percentsatk}%`;
    document.getElementById('progressbar-s-def').style.width = `${percentsdef}%`;
    document.getElementById('progressbar-speed').style.width = `${percentspeed}%`;
}


function showMovesEntry(i) {

    document.getElementById('pokemon-entry-body').innerHTML = renderMoveEntryHTML(i);
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