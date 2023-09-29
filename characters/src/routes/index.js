const { Router } = require("express");
const { getCharacters, createCharacters } = require("../controllers");
// const { characterValidation } = require("../middlewares");
const router = Router();

router.get("/", getCharacters);
// router.post("/characters/create",  characterValidation, createCharacters);


module.exports = router;
