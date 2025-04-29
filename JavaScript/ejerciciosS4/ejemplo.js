const url ="https://dragonball-api.com/api/characters";

function makeCard (character){
    const data = character;
    const cardsContainer = document.querySelector(".cardcontainer");
    
    const Card = document.createElement("div")
    Card.classList.add ('flex', 'flex-col','gap-4','items-center')
    Card.innerHTML=
    `
    <h1 class="text-lg">${data.name}</h1>
    <img class="w-32" src="${data.image}"/>
    <p>${data.description}</p>
    <span class="text-md">Cantidad Ki: ${data.ki}</span>
    
    `
    
    cardsContainer.appendChild(Card);
}

async function getCharacters(){
    try {
        const response = await fetch(url);
        const  data   = await response.json();
        
         for (let i = 0; i < data.items.length; i++){
         makeCard(data.items[i]);
         }

        console.log(data);
        return data.items
    } catch (error) {
    console.error(error);

}
}

getCharacters();

/* 
{
  "items": [
    {
      "id": 1,
      "name": "Goku",
      "ki": "60.000.000",
      "maxKi": "90 Septillion",
      "race": "Saiyan",
      "gender": "Male",
      "description": "El protagonista de la serie, conocido por su gran poder y personalidad amigable. Originalmente enviado a la Tierra como un infante volador con la misión de conquistarla. Sin embargo, el caer por un barranco le proporcionó un brutal golpe que si bien casi lo mata, este alteró su memoria y anuló todos los instintos violentos de su especie, lo que lo hizo crecer con un corazón puro y bondadoso, pero conservando todos los poderes de su raza. No obstante, en la nueva continuidad de Dragon Ball se establece que él fue enviado por sus padres a la Tierra con el objetivo de sobrevivir a toda costa a la destrucción de su planeta por parte de Freeza. Más tarde, Kakarot, ahora conocido como Son Goku, se convertiría en el príncipe consorte del monte Fry-pan y líder de los Guerreros Z, así como el mayor defensor de la Tierra y del Universo 7, logrando mantenerlos a salvo de la destrucción en innumerables ocasiones, a pesar de no considerarse a sí mismo como un héroe o salvador.",
      "image": "https://dragonball-api.com/characters/goku_normal.webp",
      "affiliation": "Z Fighter",
      "deletedAt": null
    },
    ...
  ],
  "meta": {
    "totalItems": 58,
    "itemCount": 10,
    "itemsPerPage": 10,
    "totalPages": 6,
    "currentPage": 1
  },
  "links": {
    "first": "https://dragonball-api.com/api/characters?limit=10",
    "previous": "",
    "next": "https://dragonball-api.com/api/characters?page=2&limit=10",
    "last": "https://dragonball-api.com/api/characters?page=6&limit=10"
  }
}
*/

