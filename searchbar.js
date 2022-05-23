function filterNames(i) {
    let input = document.getElementById('search-input');
    let pokemonContainer = document.getElementById('pokemon');
    input = input.value.toLowerCase();
    pokemonContainer.innerHTML = '';
    for (let j = 0; j < allPokemon.length; j++) {
        let name = allPokemon[j]['name'];
        if (name.toLowerCase().includes(input)) {
            /*             pokemonContainer.innerHTML = ""; */
            getSearchedPokemon(allPokemon, j, i);
            console.log('hi :)');
        }

    }

}

function getSearchedPokemon(i, j) {
    document.getElementById('pokemon').innerHTML += `
    <div class="pokemon-container" id="pokemon-container${j}" onclick="showPokemonEntry(), showPokemonStats(${j+1})">
    <div class="poke-id">
            <span class="pokemon-id">${allPokemon[j]['id']}</span>
     </div>
     <div class="pokemon-body" id="pokemon-body">
    <div class="pokemon-body-nametype">
     
                <span class="pokemon-name">${allPokemon[j]['name']}</span>
                <span class="pokemon-type1" id="pokemon-type1${j}">${allPokemon[j]['types'][0]['type']['name']}</span>
            </div>
            <div class="pokemon-body-image">
                <img  class="pokemon-image" src=${allPokemon[j]['sprites']['other']['home']['front_default']} alt="">
            </div>
        </div>
        </div>
        </div>
`;
    setBackgroundcolorSearched(j) // zuvor mit Return Funktion für die Template gearbeitet wodurch diese Funktion unereichbar wurde. somit muss man, wenn man weitere Funtionen hinzufügen möchte mit documentgetEl... arbeiten. 
    setTypeBackgroundsSearched(j)
}






/* if (input == "") {
            pokemonContainer.innerHTML = "";
        } else if (name.toLowerCase().includes(input)) {
            pokemonContainer.innerHTML = "";
            pokemonContainer.innerHTML += getSearchedPokemon(allPokemon, j, i);
                 console.log('hi :)'); 
        }
         */

/* function search() {
    var input = document.getElementById('search-input').value.toLowerCase();
    var i = 0;
    var list = "";
    var pos = -1;

    if (input != "") {
        for (i = 1; i <= 21; i++) {
            pos = currentPokemon['name'].indexOf(input);

            if (pos != -1) {
                list = list + '<a class="search_lnk" href="' + terms[i]['lnk'] + '">' + terms[i]['des'] + '</a>' + '<br>';
            }
            pos = -1;
        }
        console.log(list);
        if (list == "") {
            document.getElementById("pokedex").innerHTML = "";
            document.getElementById("pokedex").style.display = "none";
        } else {
            document.getElementById("pokedex").innerHTML = list;
            document.getElementById("pokedex").style.display = "block";
        }
    }
} */