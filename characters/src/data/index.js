const axios = require("axios");

module.exports = {
    list: async() => {
        const characters = await axios.get("http://database_:8004/Character");
        // const characters = await axios.get("http://localhost:8004/Character");
       return characters.data
     },
    create: async ({name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, films}) => {
        // throw Error("Error en el modelo al crear el personaje")
        const newCharacter = {
            name,
            height,
            mass,
            hair_color,
            skin_color,
            eye_color,
            birth_year,
            gender,
            homeworld,
            films,
        }

        return newCharacter;
    }
};