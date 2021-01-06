const URL = "https://api.punkapi.com/v2/beers?per_page=50";
let beers = [];

const fetchBeers = async(url = URL) => {
    try {
        const response = await fetch(url); // FETCH -> [GET] peticiones HTTP
        const beers = await response.json(); //  body // stringify -> json()
        //console.log(beers);
        return beers;
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
    beers = beers.filter((beer) => beer.id != id); //
    console.log(beers);
    beers.length === 0 ? showMessage() : null;
};

// destructuring en el parametro de la funció: extraemos propiedades de character
// hasta 8 elementos se considera una buena practica 🤓
const createNode = ({ id, name, first_brewed, description, image_url, food_pairing }) => {
    // aca creo la columna -> toda la información del personaje
    const node = `
  
    <div class="col-md-4 col-12 d-flex" id="${id}">
        <div class="card mt-5 ml-3 pt-2 pl-2 flex-fill">
            <img src="${image_url}" style="max-width:200px;max-height:200px;object-fit:scale-down"/>
            <div class="card-body ">

                <h5 class="card-title" style="text-align:center">${name}</h5>
                <p class="card-text">Primer elaboracion : ${first_brewed}</p>
                <!-- <p class="card-text"> Descripcion: ${description}</p>
                <p class="card-text">Comidas: ${food_pairing}</p> -->
                <button onClick="masInfo(${id})" class="btn btn-outline-warning btnInfo">+Info</button>
                <button onClick="del(${id})"  class="btn btn-danger btn-block">Borrar</button>
            </div>
        </div>
    </div>

  `;
    document.getElementById("apiR").insertAdjacentHTML("beforeend", node);
};

// Funcion encargada de buscar un personaje por nombre
const searchBeer = () => {
    const { value: name } = document.querySelector("#input");
    const foundBeer = beers.find(
        (beer) => beer.name.toLowerCase() === name.toLowerCase()
    );

    console.log(foundBeer);
};

// Iterate characters
const iterateBeers = (beers) =>
    beers.map((beer) => createNode(beer));

// abre modal para presentar mas informacion( descripcion, comidas con la que va etc)
const masInfo = (id) => {
    console.log(id);
    const beerModal = beers.find((beer) => beer.id === id ? createModal(beer) : null);


}

const createModal = ({ id, name, first_brewed, description, image_url, ibu, food_pairing }) => {

    const nombre = name;
    const elaboracion = `<b>SALIDA AL MERCADO:</b> ${first_brewed}`;
    const descripcion = `<b>DESCRIPCION:</b> ${description}`;
    const ipa = `<b>IBU:</b> ${ibu}`
    const imgsrc = image_url;
    const food = `<b>COMIDAS:</b> ${food_pairing}`;
    console.log(nombre)
    $(".modal-title").html(nombre);
    $(".primer-elaboracion").html(elaboracion);
    $(".ipa").html(ipa);
    $(".descripcion").html(descripcion);
    $('#my_image').attr('src', imgsrc);
    $(".food-pair").html(food);
    $("#myModal").modal('show');
}







// ... carga el DOM
async function start() {
    document.querySelector("#find").addEventListener("click", searchBeer);
    beers = await fetchBeers(); // characters es global :D
    iterateBeers(beers);
}

window.onload = start();