function renderMainpageHTML(i) {
    return `
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
}


function renderPokemonStatsHTML(i, height, weight) {
    return `
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
}


function renderStatsEntryHTML(i) {
    return `
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
            <span>${allPokemon[i-1][`stats`][0][`base_stat`]}</span>
            <span>${allPokemon[i-1][`stats`][1][`base_stat`]}</span>
            <span>${allPokemon[i-1][`stats`][2][`base_stat`]}</span>
            <span>${allPokemon[i-1][`stats`][3][`base_stat`]}</span>
            <span>${allPokemon[i-1][`stats`][4][`base_stat`]}</span>
            <span>${allPokemon[i-1][`stats`][5][`base_stat`]}</span>
        </div>
        <div class="stats-progress-bar">
            <div class="progress-container">
                <div class="progressbar" id="progressbar-hp"></div>
            </div>
            <div class="progress-container">
                <div class="progressbar" id="progressbar-atk"></div>
            </div>
            <div class="progress-container">
                <div class="progressbar" id="progressbar-def"></div>
            </div>
            <div class="progress-container">
                <div class="progressbar" id="progressbar-s-atk"></div>
            </div>
            <div class="progress-container">
                <div class="progressbar" id="progressbar-s-def"></div>
            </div>
            <div class="progress-container">
                <div class="progressbar" id="progressbar-speed"></div>
            </div>
        </div>
    </div>
    `;
}


function renderMoveEntryHTML(i) {
    return `
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
}


function renderSearchedPokemonHTML(i, j) {
    return `
    <div class="pokemon-container" id="pokemon-container${j}" onclick="showPokemonEntry(), showPokemonStats(${j+1})">
    <div class="poke-id">
            <span class="pokemon-id">${allPokemon[j]['id']}</span>
     </div>
     <div class="pokemon-body" id="pokemon-body">
    <div class="pokemon-body-nametype">
     
                <span class="pokemon-name">${allPokemon[j]['name']}</span>
                <span class="pokemon-type1" id="pokemon-type1${j}">${allPokemon[j]['types'][0]['type']['name']}</span>
                <span class="pokemon-type2 d-none" id="pokemon-type2${j}">Test</span>
            </div>
            <div class="pokemon-body-image">
                <img  class="pokemon-image" src=${allPokemon[j]['sprites']['other']['home']['front_default']} alt="">
            </div>
        </div>
        </div>
        </div>
`;
}