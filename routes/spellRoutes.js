const express = require("express");
const router = express.Router();
const spellController = require("../controllers/");

router.post("/spells", spellController.addSpell);
router.delete('/spells/:name', spellController.deleteSpell)

module.exports = router;
