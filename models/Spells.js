const { Schema, model } = require("mongoose");

// spell schema
const spellSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  spellClass: {
    type: [String],
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
  range: {
    type: String,
  },
  castingTime: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true,
  },
  concentration: {
    type: Boolean,
    required: true,
  },
  ritual: {
    type: Boolean,
    required: true,
  },
  saveThrow: {
    type: String,
  },
  damageType: {
    type: String,
  },
  components: {
    type: [String],
    required: true,
  },
  materials: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
});

const Spell = model("Spell", spellSchema);

module.exports = Spell;
