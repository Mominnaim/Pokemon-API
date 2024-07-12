// Define the API URL
const apiUrl = 'https://pokeapi.co/api/v2/';

// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .catch(error => {
    console.error('Error:', error);
  });

async function pokemonType(type){
    try{

        // the response is basically if the call is ok or not
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`)


        // if the response is not ok then it will throw this error
        if(!response.ok){
            console.log(response)
            throw new Error("This is not a pokemon, this is patrick");
          }

          // To actually get the data we are looking for we need to convert it to json format
          const data = await response.json();

          // This is when you click a type there will be an header saying what the pokemon type list is
          const whatType = document.getElementById("type")
          whatType.innerHTML = `This is the ${type} pokemon list`

          // We will be pulling the names field from the pokemon object
          const pokemonNames = data.pokemon.map(p => p.pokemon.name);

          // We will add all the names in seperate list in a UL element called listPokemon
          const getULelement = document.getElementById("listPokemon")

          // This is just to set it to empty before we add
          getULelement.innerHTML = '';

          // This is the iteration of all the names
          pokemonNames.forEach(name => {
            const liElement = document.createElement('li')
            liElement.textContent = name;

            // This is the actually us adding teach name into the li elements 
            getULelement.appendChild(liElement)
          })
    }catch(e) {
        console.error(e)
    }
}