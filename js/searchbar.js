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
        }
    }
}


function getSearchedPokemon(i, j) {
    document.getElementById('pokemon').innerHTML += renderSearchedPokemonHTML(i, j);
    checkSecondTypeStatsSearch(i, j);
    setBackgroundcolorSearched(j); // zuvor mit Return Funktion für die Template gearbeitet wodurch diese Funktion unereichbar wurde. somit muss man, wenn man weitere Funtionen hinzufügen möchte mit documentgetEl... arbeiten. 
    setTypeBackgroundsSearched(j);
}


function checkSecondTypeStatsSearch(i, j) {
    let type2 = allPokemon[j].types[1];
    if (type2) {
        type2 = allPokemon[j].types[1].type.name;
        document.getElementById(`pokemon-type2${j}`).classList.remove('d-none');
        document.getElementById(`pokemon-type2${j}`).innerHTML = `${type2}`;
        setTypeBackgroundsSearched2Type(j);
    } else {
        type2 = '';
    }
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