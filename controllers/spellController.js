const Spell = require("../models/Spells");

// insomnia tested mother approved
async function findSpell(req, res) {
  try {
    const spellName = req.params.name;

    const spell = await Spell.findOne({ name: spellName });
    if (!spell) {
      return res.status(404).json({ error: "Spell not found" });
    } else {
      return res.status(200).json(spell);
    }
  } catch (err) {
    console.error("no spell found by that name", err);
    res
      .status(500)
      .json({ error: "An oops happened while trying to find the spell" });
  }
}

// insomnia tested mother approved
async function findAllSpells(req, res) {
  try {
    const spells = await Spell.find({});
    res.status(200).json(spells);
  } catch (err) {
    console.error("no spells", err);
    res
      .status(500)
      .json({ error: "An oops happened while trying to find the spells" });
  }
}

// insomnia tested mother approved
async function findSpellbyClassLvl(req, res) {
  try {
    const { spellClass, lvl } = req.query;
    
    // console.log("Spell Class:", spellClass);
    // console.log("Level:", lvl);

    if (!spellClass || !lvl) {
      return res.status(400).json({ error: "Missing required parameters" });
    }

    const spells = await Spell.find({ spellClass: spellClass, lvl: lvl });
    res.status(200).json(spells);
  } catch (err) {
    console.error("no spells", err);
    res
      .status(500)
      .json({ error: "An oops happened while trying to find the spells" });
  }
}

// insomnia tested mother approved
async function findSpellByClass(req, res) {
  try {
    const spellClass = req.params.spellClass;

    const spells = await Spell.find({ spellClass: { $in: [spellClass] }, });
    if (!spells) {
      return res.status(404).json({ error: "Unable to get spels for class" });
    } else {
      return res.json(spells);
    }
  } catch (err) {
    console.error("No spells for that class", err);
    res
      .status(500)
      .json({ error: "An oops happened while trying to find the spells" });
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
  findAllSpells,
  findSpell,
  findSpellByClass,
  findSpellbyClassLvl,
};
