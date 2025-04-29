/*

Una empresa desea realizar una Landing Page para visualizar todos los personas de la serie
Rick and Morty, esta empresa posee una API con esa informacion, la cual el endpoint es:

url = "https://rickandmortyapi.com/api";

Para consultar los personas tenemos este otro endpoint: 

url = "https://rickandmortyapi.com/api/character";

Esa landing page necesita mostrar todos los personajes de la serie, de 20 en 20
Debe tener botones de siguiente y anterior, asi como tambien una paginacion donde se vea
el numero de paginas, la pagina actual y el total de paginas.

Esa pagina necesita tambien un buscador de personajes poor nombre, dicho buscador cada vez que se coloque una letra
debe actualizar la lista de personajes de la pagina actual.

cada personaje tiene una imagen, nombre, un estatus y una especie.

*/

const URL_API = "https://rickandmortyapi.com/api/character";

async function obtenerPersonajes(url = URL_API) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    // const pokemon = await obtenerPokemon(data.results[0].url)
    return data;
  } catch (error) {
    console.error(error);
  }
}

const pintarPersonajes = (personajes) => {
  const containerPersonajes = document.getElementById("personajes");
  while(containerPersonajes.firstChild) {
    containerPersonajes.removeChild(containerPersonajes.firstChild);
  }
  personajes.map((personaje) => {
    const personajeContainer = document.createElement("div");
    personajeContainer.classList.add("rounded-lg","p-2", "bg-slate-600", "text-white", "flex", "flex-col", "gap-2",);
    personajeContainer.innerHTML = 
    `
      <img class="rounded-lg border-2 w-64 h-64 text-center" src="${personaje.image}" alt="${personaje.name}">
      <div>
        <p>Nombre: ${personaje.name}</p>
        <p>Estado: ${personaje.status}</p>
        <p>Especie: ${personaje.species}</p>
      </div>
    `;
    containerPersonajes.appendChild(personajeContainer);
  })
}

const pintarBotones = (info) => {
  const anterior = document.getElementsByClassName("anterior");
  const siguiente = document.getElementsByClassName("siguiente");
  const paginacion = document.getElementsByClassName("paginacion");
  for (let i = 0; i < anterior.length; i++) {
    anterior[i].disabled = !info.prev;
    anterior[i].onclick = () => {
      main(info.prev);
    }
    siguiente[i].disabled = !info.next;
    siguiente[i].onclick = () => {
      main(info.next);
    }
    paginacion[i].innerText = `Total de paginas: ${info.pages}`;
  }
}

const pintarPaginacion = (info) => {
  // Logica para pintar los numeros que estan en medio de los botones, 
  // de modo tal, que si estoy en la pagina 1, se pinte
  // << 1 2 3 4 >>
  // si estoy en la pagina 2, se pinte
  // << 1 2 3 4 5 >>
  // si estoy en la pagina 5, se pinte
  // << 2 3 4 5 6 7 8 >>
  // La idea es ver : Boton de ir a principio, tres hacia atras (si tengo), pagina actual, tres hacia adelante (si tengo), Boton de ir a final
}

const main = async (url = URL_API) => {
  const informacion = await obtenerPersonajes(url);
  pintarBotones(informacion.info);
  pintarPersonajes(informacion.results);
  console.log(informacion);
}

// Para crear un temporizador.
// setTimeout();
//  Recibe, 
// 1. Una funcion
// 2. Tiempo en milisegundos
// Temporizador devuelve un ID de ejecucion


const buscador = document.getElementById("buscador");

let temporizador = 0;

buscador.oninput = (e) => {
  clearTimeout(temporizador);
  temporizador = setTimeout(() => {
    main(`${URL_API}?name=${e.target.value}`);
  }, 500);
}

main();