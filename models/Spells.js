const { Schema, model } = require("mongoose");

// validators
const validateComponents = (value) => {
  const validateComponents = ["v", "s", "m"];

  return value.split("").every((char) => validateComponents.includes(char));
};

const validateSave = (value) => {
  const validSaves = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];

  return validSaves.includes(value);
};

const validateDamage = (value) => {
  const validDmg = [
    "Acid",
    "Bludgeoning",
    "Cold",
    "Fire",
    "Force",
    "Lightning",
    "Necrotic",
    "Piercing",
    "Poison",
    "Psychic",
    "Radiant",
    "Slashing",
    "Thunder",
  ];

  return validDmg.includes(value);
};
// spell schema
const spellSchema = new Schema({
  spellId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  spellClass: {
    type: String,
    required: true,
  },
  lvl: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  attack_type: {
    type: String,
  },
  concentration: {
    type: Boolean,
    required: true,
  },
  ritual: {
    type: Boolean,
    required: true,
  },
  save_throw: {
    DC: {
      type: Number,
      required: true,
    },
    Type: {
      type: String,
      required: true,
      validate: validateSave,
      message: "please enter a save type: STR, DEX, CON, INT, WIS, CHA",
    },
  },
  damage_type: {
    type: String,
    validate: validateDamage,
    message:
      "please choose a damage type form this list: Acid, Bludgeoning, Cold, Fire, Force, Lightning, Necrotic, Piercing, Poison, Psychic, Radiant, Slashing, Thunder",
  },
  components: {
    type: String,
    required: true,
    validate: validateComponents,
    message:
      "invalid entry, components must at least 1 of verbal, somatic or material",
  },
  materials: {
    type: String,
  },
});

const Spell = model("Spell", spellSchema);

module.exports = Spell;
