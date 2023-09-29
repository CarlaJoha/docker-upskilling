const { Router } = require("express");
const store = require("../db");
const { validateModel } = require("../middlewares")

const router = Router();

router.get("/:model", validateModel, async (req, res) => {  
    const { model } = req.params;
    console.log(model);
    const response = await store[model].list();
    res.status(200).json(response);
});
router.get("/:model/:id", validateModel, async (req, res) => {  
  const { model, id } = req.params;
  const response = await store[model].getById(id);
  res.status(200).json(response);
});

module.exports = router;
