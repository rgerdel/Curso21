async function obtenerPersonajes(url = "https://dragonball-api.com/api/characters") {
    try {
      const response = await fetch(url);
      // console.log(response);
      const data = await response.json();
      // console.log(data.results);
      console.log(data);
      return data
    } catch (error) {
      console.error(error);
    }
  }
  

  
  obtenerPersonajes();