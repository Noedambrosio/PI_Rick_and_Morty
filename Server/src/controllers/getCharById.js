const axios = require ("axios"); // import axios from "axios";
const URL = "https://rickandmortyapi.com/api/character/"; // este seria mi "fuente/servidor"->  API

const getCharById = (req, res)=>{
const { id } = req.params; // destructuring
 //Hago una peticion a la API mediante AXIOS:
axios.get(URL + id) 
//o tmb(`${URL}${id}`) -> TEMPLATE LITERAL : `${nombreVariable}`
.then((response)=>{
   const {data} = response;
   const character = { 
       id: data.id,
       name: data.name,
       gender: data.gender,
       species: data.species,
       origin: data.origin,
       image: data.image,
       status: data.status,
     }

    
     return res.status(200).json(character);
     
}).catch((error)=>{
    if (error.response.status === 404) {
        return res.status(404).send('Not found');
    } else {
        return res.status(500).json({message: error.message});
    }
  });
} 

module.exports = getCharById;