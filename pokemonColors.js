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
    } else if (mainType == 'electric') {
        document.getElementById(`pokemon-container${i}`).style.backgroundColor = "#eda926"
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


function setTypeBackgrounds(i) {
    let typeBackground = currentPokemon['types'][0]['type']['name'];

    if (typeBackground == 'normal') {
        document.getElementById(`pokemon-type1${i}`).style.backgroundColor = "#8e8674" /* - */
    } else if (typeBackground == 'fighting') {
        document.getElementById(`pokemon-type1${i}`).style.backgroundColor = "#84402b" /* - */
    } else if (typeBackground == 'fly') {
        document.getElementById(`pokemon-type1${i}`).style.backgroundColor = "#707eba" /* - */
    } else if (typeBackground == 'poison') {
        document.getElementById(`pokemon-type1${i}`).style.backgroundColor = "#954689" /* - */
    } else if (typeBackground == 'ground') {
        document.getElementById(`pokemon-type1${i}`).style.backgroundColor = "#ae9042" /* - */
    } else if (typeBackground == 'rock') {
        document.getElementById(`pokemon-type1${i}`).style.backgroundColor = "#a28e4b" /* - */
    } else if (typeBackground == 'bug') {
        document.getElementById(`pokemon-type1${i}`).style.backgroundColor = "#8b990e" /* - */
    } else if (typeBackground == 'ghost') {
        document.getElementById(`pokemon-type1${i}`).style.backgroundColor = "#4e4e92" /* - */
    } else if (typeBackground == 'steel') {
        document.getElementById(`pokemon-type1${i}`).style.backgroundColor = "#858599" /* - */
    } else if (typeBackground == 'fire') {
        document.getElementById(`pokemon-type1${i}`).style.backgroundColor = "#d32f3f" /* - */
    } else if (typeBackground == 'water') {
        document.getElementById(`pokemon-type1${i}`).style.backgroundColor = "#204a91" /* - */
    } else if (typeBackground == 'grass') {
        document.getElementById(`pokemon-type1${i}`).style.backgroundColor = "#2c805c" /* - */
    } else if (typeBackground == 'electric') {
        document.getElementById(`pokemon-type1${i}`).style.backgroundColor = "#d39623" /* - */
    } else if (typeBackground == 'psychic') {
        document.getElementById(`pokemon-type1${i}`).style.backgroundColor = "#db598b" /* - */
    } else if (typeBackground == 'ice') {
        document.getElementById(`pokemon-type1${i}`).style.backgroundColor = "#1f82a5" /* - */
    } else if (typeBackground == 'dragon') {
        document.getElementById(`pokemon-type1${i}`).style.backgroundColor = "#604bb8" /* - */
    } else if (typeBackground == 'dark') {
        document.getElementById(`pokemon-type1${i}`).style.backgroundColor = "#47392f" /* - */
    } else if (typeBackground == 'fairy') {
        document.getElementById(`pokemon-type1${i}`).style.backgroundColor = "#bc84bd" /* - */
    }
}


function setBackgroundcolorEntry(i) {
    let mainTypeEntry = allPokemon[i]['types'][0]['type']['name'];

    if (mainTypeEntry == 'normal') {
        document.getElementById(`pokemon-entry${i}`).style.backgroundColor = "#a39985"
    } else if (mainTypeEntry == 'fighting') {
        document.getElementById(`pokemon-entry${i}`).style.backgroundColor = "#9d4d34"
    } else if (mainTypeEntry == 'fly') {
        document.getElementById(`pokemon-entry${i}`).style.backgroundColor = "#95a7f3"
    } else if (mainTypeEntry == 'poison') {
        document.getElementById(`pokemon-entry${i}`).style.backgroundColor = "#b054a2"
    } else if (mainTypeEntry == 'ground') {
        document.getElementById(`pokemon-entry${i}`).style.backgroundColor = "#cba84d"
    } else if (mainTypeEntry == 'rock') {
        document.getElementById(`pokemon-entry${i}`).style.backgroundColor = "#bba458"
    } else if (mainTypeEntry == 'bug') {
        document.getElementById(`pokemon-entry${i}`).style.backgroundColor = "#9baa13"
    } else if (mainTypeEntry == 'ghost') {
        document.getElementById(`pokemon-entry${i}`).style.backgroundColor = "#6060af"
    } else if (mainTypeEntry == 'steel') {
        document.getElementById(`pokemon-entry${i}`).style.backgroundColor = "#ababc4"
    } else if (mainTypeEntry == 'fire') {
        document.getElementById(`pokemon-entry${i}`).style.backgroundColor = "#f43d4ffc"
    } else if (mainTypeEntry == 'water') {
        document.getElementById(`pokemon-entry${i}`).style.backgroundColor = "#2757a6"
    } else if (mainTypeEntry == 'grass') {
        document.getElementById(`pokemon-entry${i}`).style.backgroundColor = "#33926a"
    } else if (mainTypeEntry == 'electric') {
        document.getElementById(`pokemon-entry${i}`).style.backgroundColor = "#eda926"
    } else if (mainTypeEntry == 'psychic') {
        document.getElementById(`pokemon-entry${i}`).style.backgroundColor = "#f4669d"
    } else if (mainTypeEntry == 'ice') {
        document.getElementById(`pokemon-entry${i}`).style.backgroundColor = "#2596be"
    } else if (mainTypeEntry == 'dragon') {
        document.getElementById(`pokemon-entry${i}`).style.backgroundColor = "#755ae2"
    } else if (mainTypeEntry == 'dark') {
        document.getElementById(`pokemon-entry${i}`).style.backgroundColor = "#6b5547"
    } else if (mainTypeEntry == 'fairy') {
        document.getElementById(`pokemon-entry${i}`).style.backgroundColor = "#e19ce3"
    }
}


function setTypeBackgroundsEntry(i) {
    let typeBackground = allPokemon[i]['types'][0]['type']['name'];

    if (typeBackground == 'normal') {
        document.getElementById(`pokemon-type1-entry${i}`).style.backgroundColor = "#8e8674" /* - */
    } else if (typeBackground == 'fighting') {
        document.getElementById(`pokemon-type1-entry${i}`).style.backgroundColor = "#84402b" /* - */
    } else if (typeBackground == 'fly') {
        document.getElementById(`pokemon-type1-entry${i}`).style.backgroundColor = "#707eba" /* - */
    } else if (typeBackground == 'poison') {
        document.getElementById(`pokemon-type1-entry${i}`).style.backgroundColor = "#954689" /* - */
    } else if (typeBackground == 'ground') {
        document.getElementById(`pokemon-type1-entry${i}`).style.backgroundColor = "#ae9042" /* - */
    } else if (typeBackground == 'rock') {
        document.getElementById(`pokemon-type1-entry${i}`).style.backgroundColor = "#a28e4b" /* - */
    } else if (typeBackground == 'bug') {
        document.getElementById(`pokemon-type1-entry${i}`).style.backgroundColor = "#8b990e" /* - */
    } else if (typeBackground == 'ghost') {
        document.getElementById(`pokemon-type1-entry${i}`).style.backgroundColor = "#4e4e92" /* - */
    } else if (typeBackground == 'steel') {
        document.getElementById(`pokemon-type1-entry${i}`).style.backgroundColor = "#858599" /* - */
    } else if (typeBackground == 'fire') {
        document.getElementById(`pokemon-type1-entry${i}`).style.backgroundColor = "#d32f3f" /* - */
    } else if (typeBackground == 'water') {
        document.getElementById(`pokemon-type1-entry${i}`).style.backgroundColor = "#204a91" /* - */
    } else if (typeBackground == 'grass') {
        document.getElementById(`pokemon-type1-entry${i}`).style.backgroundColor = "#2c805c" /* - */
    } else if (typeBackground == 'electric') {
        document.getElementById(`pokemon-type1-entry${i}`).style.backgroundColor = "#d39623" /* - */
    } else if (typeBackground == 'psychic') {
        document.getElementById(`pokemon-type1-entry${i}`).style.backgroundColor = "#db598b" /* - */
    } else if (typeBackground == 'ice') {
        document.getElementById(`pokemon-type1-entry${i}`).style.backgroundColor = "#1f82a5" /* - */
    } else if (typeBackground == 'dragon') {
        document.getElementById(`pokemon-type1-entry${i}`).style.backgroundColor = "#604bb8" /* - */
    } else if (typeBackground == 'dark') {
        document.getElementById(`pokemon-type1-entry${i}`).style.backgroundColor = "#47392f" /* - */
    } else if (typeBackground == 'fairy') {
        document.getElementById(`pokemon-type1-entry${i}`).style.backgroundColor = "#bc84bd" /* - */
    }
}

function setBackgroundcolorSearched(j) {
    let mainType = allPokemon[j]['types'][0]['type']['name'];

    if (mainType == 'normal') {
        document.getElementById(`pokemon-container${j}`).style.backgroundColor = "#a39985"
    } else if (mainType == 'fighting') {
        document.getElementById(`pokemon-container${j}`).style.backgroundColor = "#9d4d34"
    } else if (mainType == 'fly') {
        document.getElementById(`pokemon-container${j}`).style.backgroundColor = "#95a7f3"
    } else if (mainType == 'poison') {
        document.getElementById(`pokemon-container${j}`).style.backgroundColor = "#b054a2"
    } else if (mainType == 'ground') {
        document.getElementById(`pokemon-container${j}`).style.backgroundColor = "#cba84d"
    } else if (mainType == 'rock') {
        document.getElementById(`pokemon-container${j}`).style.backgroundColor = "#bba458"
    } else if (mainType == 'bug') {
        document.getElementById(`pokemon-container${j}`).style.backgroundColor = "#9baa13"
    } else if (mainType == 'ghost') {
        document.getElementById(`pokemon-container${j}`).style.backgroundColor = "#6060af"
    } else if (mainType == 'steel') {
        document.getElementById(`pokemon-container${j}`).style.backgroundColor = "#ababc4"
    } else if (mainType == 'fire') {
        document.getElementById(`pokemon-container${j}`).style.backgroundColor = "#f43d4ffc"
    } else if (mainType == 'water') {
        document.getElementById(`pokemon-container${j}`).style.backgroundColor = "#2757a6"
    } else if (mainType == 'grass') {
        document.getElementById(`pokemon-container${j}`).style.backgroundColor = "#33926a"
    } else if (mainType == 'electric') {
        document.getElementById(`pokemon-container${j}`).style.backgroundColor = "#eda926"
    } else if (mainType == 'psychic') {
        document.getElementById(`pokemon-container${j}`).style.backgroundColor = "#f4669d"
    } else if (mainType == 'ice') {
        document.getElementById(`pokemon-container${j}`).style.backgroundColor = "#2596be"
    } else if (mainType == 'dragon') {
        document.getElementById(`pokemon-container${j}`).style.backgroundColor = "#755ae2"
    } else if (mainType == 'dark') {
        document.getElementById(`pokemon-container${j}`).style.backgroundColor = "#6b5547"
    } else if (mainType == 'fairy') {
        document.getElementById(`pokemon-container${j}`).style.backgroundColor = "#e19ce3"
    }
}


function setTypeBackgroundsSearched(j) {
    let typeBackground = allPokemon[j]['types'][0]['type']['name'];

    if (typeBackground == 'normal') {
        document.getElementById(`pokemon-type1${j}`).style.backgroundColor = "#8e8674" /* - */
    } else if (typeBackground == 'fighting') {
        document.getElementById(`pokemon-type1${j}`).style.backgroundColor = "#84402b" /* - */
    } else if (typeBackground == 'fly') {
        document.getElementById(`pokemon-type1${j}`).style.backgroundColor = "#707eba" /* - */
    } else if (typeBackground == 'poison') {
        document.getElementById(`pokemon-type1${j}`).style.backgroundColor = "#954689" /* - */
    } else if (typeBackground == 'ground') {
        document.getElementById(`pokemon-type1${j}`).style.backgroundColor = "#ae9042" /* - */
    } else if (typeBackground == 'rock') {
        document.getElementById(`pokemon-type1${j}`).style.backgroundColor = "#a28e4b" /* - */
    } else if (typeBackground == 'bug') {
        document.getElementById(`pokemon-type1${j}`).style.backgroundColor = "#8b990e" /* - */
    } else if (typeBackground == 'ghost') {
        document.getElementById(`pokemon-type1${j}`).style.backgroundColor = "#4e4e92" /* - */
    } else if (typeBackground == 'steel') {
        document.getElementById(`pokemon-type1${j}`).style.backgroundColor = "#858599" /* - */
    } else if (typeBackground == 'fire') {
        document.getElementById(`pokemon-type1${j}`).style.backgroundColor = "#d32f3f" /* - */
    } else if (typeBackground == 'water') {
        document.getElementById(`pokemon-type1${j}`).style.backgroundColor = "#204a91" /* - */
    } else if (typeBackground == 'grass') {
        document.getElementById(`pokemon-type1${j}`).style.backgroundColor = "#2c805c" /* - */
    } else if (typeBackground == 'electric') {
        document.getElementById(`pokemon-type1${j}`).style.backgroundColor = "#d39623" /* - */
    } else if (typeBackground == 'psychic') {
        document.getElementById(`pokemon-type1${j}`).style.backgroundColor = "#db598b" /* - */
    } else if (typeBackground == 'ice') {
        document.getElementById(`pokemon-type1${j}`).style.backgroundColor = "#1f82a5" /* - */
    } else if (typeBackground == 'dragon') {
        document.getElementById(`pokemon-type1${j}`).style.backgroundColor = "#604bb8" /* - */
    } else if (typeBackground == 'dark') {
        document.getElementById(`pokemon-type1${j}`).style.backgroundColor = "#47392f" /* - */
    } else if (typeBackground == 'fairy') {
        document.getElementById(`pokemon-type1${j}`).style.backgroundColor = "#bc84bd" /* - */
    }
}