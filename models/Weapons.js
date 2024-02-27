const { Schema, model } = require("mongoose");

const weaponSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  skill: {
    type: String,
    required: true,
  },
  damage: {
    type: String,
    required: true,
  },
  damageType: {
    type: String,
  },
  range: {
    type: String,
  },
});

const Weapon = model("Weapon", weaponSchema);

module.exports = Weapon;
