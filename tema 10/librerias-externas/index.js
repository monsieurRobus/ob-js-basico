import axios from "axios"

let pokemon = axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(function (response) {
    // handle success
        console.log("uwu")
        console.log(response);

        return response
    })
    .catch(function (error) {
    // handle error

        console.log(error);
    })
    .then(function () {
    // always executed
    });

    console.log(pokemon.data)