const Spell = require("../models/index");

exports.addSpell = async (req, res) => {
  try {
    const {
      spellId,
      name,
      spellClass,
      lvl,
      school,
      attack_type,
      concentration,
      ritual,
      save,
      damage_type,
      componets,
      materials,
    } = req.body;

    const newSpell = new Spell({
      spellId,
      name,
      spellClass,
      lvl,
      school,
      attack_type,
      concentration,
      ritual,
      save,
      damage_type,
      componets,
      materials,
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
};

exports.deleteSpell = async (req, res) => {
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
};
