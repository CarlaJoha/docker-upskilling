const { response } = require("../utils");
// const axios = require("axios");

module.exports = async (req, res) => {
  const newCharacter = await axios.post("http://database:8004")
  response(res, 201, newCharacter);
};
