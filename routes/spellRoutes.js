const express = require("express");
const router = express.Router();
const spellController = require("../controllers/");

router.get("/spells", spellController.findAllSpells);
router.get("/spells/:name", spellController.findSpell);
router.get("/spells/:spellClass", spellController.findSpellByClass);
router.get("/spells/:classname:lvl", spellController.findSpellbyClassLvl);

router.post("/spells", spellController.addSpell);
router.delete("/spells/:name", spellController.deleteSpell);

module.exports = router;
