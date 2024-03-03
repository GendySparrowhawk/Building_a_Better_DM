const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  Properties: [String],
  damage: {
    type: String,
  },
  damageType: {
    type: String,
  },
  weaponType: {
    type: String,
  },
  range: {
    type: String,
  },
  description: {
    type: String,
  },
  isWeapon: {
    type: Boolean,
  },
  isArmor: {
    type: Boolean,
  },
  isItem: {
    type: Boolean,
  },
  acBonus: {
    type: String,
  },
  rarity: {
    type: String,
  },
  weight: {
    type: String,
  },
});

const Item = model("Weapon", itemSchema);

module.exports = Item;
