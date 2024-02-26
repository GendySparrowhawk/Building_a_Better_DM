const express = require("express");
const router = express.Router();
const spellController = require("../controllers/spellController");

router.post("/spells", spellController.addSpell);

module.exports = router;
