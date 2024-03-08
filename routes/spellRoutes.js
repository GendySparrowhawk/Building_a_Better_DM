const express = require("express");
const router = express.Router();
const spellController = require("../controllers/spellController");

router.get("/spells", spellController.findAllSpells);
router.get("/spell/:name", spellController.findSpell);
router.get("/spells/class/:spellClass", spellController.findSpellByClass);
router.get("/spells/class-lvl", spellController.findSpellbyClassLvl);

router.post("/spells", spellController.addSpell);
router.delete("/spells/:name", spellController.deleteSpell);





module.exports = router;
