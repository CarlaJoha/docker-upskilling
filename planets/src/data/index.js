const axios = require("axios");

module.exports = {
    list: async() => {
        const planets = await axios.get("http://database:8004/Planet");
       return planets.data
     },
  create: async ({
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    residents,
    films,
  }) => {
    const newPlanet = {
      name,
      rotation_period,
      orbital_period,
      diameter,
      climate,
      gravity,
      terrain,
      surface_water,
      residents,
      films,
    };
    return newPlanet;
  },
};
