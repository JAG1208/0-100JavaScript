const URL = "https://rickandmortyapi.com/api/character";
let characters = []; // va a contener todos los personajes globales a la aplicacion
/*
    1. Hacer una petición HTTP a una URL destino
    
*/

// Función encargada de traer los personajes de URL
const fetchCharacters = async (url = URL) => {
  try {
    const response = await fetch(url); // FETCH -> [GET] peticiones HTTP
    const { results: characters } = await response.json(); //  body // stringify -> json()
    return characters;
  } catch (err) {
    // err es la referencia del error en tiempo de ejecución
    console.error(err); // se guardan dentro de los logs del server
  }
};

const showMessage = () => {
  // mostrar un mensaje en un span
  document.querySelector("#message").innerHTML = "No hay personajes";
  document.querySelector("#input").disabled = true;
};

const del = (id) => {
  document.getElementById(id).remove(); // método de document
  characters = characters.filter((character) => character.id != id); //
  console.log(characters);
  characters.length === 0 ? showMessage() : null;
};

// destructuring en el parametro de la funció: extraemos propiedades de character
// hasta 8 elementos se considera una buena practica 🤓
const createNode = ({ id, image, name, species, gender, status }) => {
  // aca creo la columna -> toda la información del personaje
  const node = `
  
    <div class="col-md-4 col-12" id="${id}">
        <div class="card mt-5 ml-3">
            <img src="${image}" />
            <div class="card-body">

                <h5 class="card-title">${name}</h5>
                <p class="card-text">Especie : ${species} - Sexo : ${gender}</p>
                <p class="card-text"> ${
                  status === "Alive" ? "Vivito y coleando 🧘‍♂️" : "Dead"
                }</p>
                <button onClick="del(${id})"  class="btn btn-danger btn-block">Borrar</button>
            </div>
        </div>
    </div>
  `;
  document.getElementById("apiR").insertAdjacentHTML("beforeend", node);
};

// Funcion encargada de buscar un personaje por nombre
const searchCharacter = () => {
  const { value: name } = document.querySelector("#input");
  const foundCharacter = characters.find(
    (character) => character.name.toLowerCase() === name.toLowerCase()
  );

  console.log(foundCharacter);
};

// Iterate characters
const iterateCharacters = (characters) =>
  characters.map((character) => createNode(character));

// ... carga el DOM
async function start() {
  document.querySelector("#find").addEventListener("click", searchCharacter);
  characters = await fetchCharacters(); // characters es global :D
  iterateCharacters(characters);
}

window.onload = start();
