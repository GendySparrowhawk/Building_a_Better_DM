const Spell = require("../models/index");

async function findSpell(req, res) {
  try {
    const spellName = req.body;

    await Spell.findOne(spellName === Spell.name)
    res.send.json()
  } catch (err) {
    console.error("no spell found by that name", err);
    res
      .status(500)
      .json({ error: "An oops happened while trying to find the spell" });
  }
}
async function addSpell(req, res) {
  try {
    const {
      name,
      spellClass,
      lvl,
      school,
      range,
      castingTime,
      duration,
      concentration,
      ritual,
      saveThrow,
      damageType,
      componets,
      materials,
      description,
    } = req.body;

    const newSpell = new Spell({
      name,
      spellClass,
      lvl,
      school,
      range,
      castingTime,
      duration,
      concentration,
      ritual,
      saveThrow,
      damageType,
      componets,
      materials,
      description,
    });
    await newSpell.save();
    res
      .status(201)
      .json({ message: "Spell added sucessfully", spell: newSpell });
  } catch (err) {
    console.error("Error adding new spell:", err);
    res
      .status(500)
      .json({ error: "An oops happened while trying to add the spell" });
  }
}

async function deleteSpell(req, res) {
  try {
    const { name } = req.params;
    const deletedSpell = await Spell.findOneAndDelete({ name });

    if (!deletedSpell) {
      return res.status(404).json({ error: "Spell not found" });
    }

    res.status(200).json({ message: "spell deleted!" });
  } catch (err) {
    console.error("Could not delete spell", err);
    res.status(500).json({ error: "error when deleting spell" });
  }
}

module.exports = {
  addSpell,
  deleteSpell,
};
