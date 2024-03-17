const { Schema, model } = require("mongoose");

const statsSchema = new Schema({
  name: {
    type: String,
  },
  score: {
    type: String,
  },
  modifier: {
    type: String,
  },
});

const monsterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  monsterCatagorey: [String],
  img: {
    type: String,
    required: true,
  },
  monsterType: {
    type: String,
    required: true,
  },
  size: {
    type: String,
  },
  alignment: {
    type: String,
    required: true,
  },
  ac: {
    type: String,
    required: true,
  },
  hp: {
    type: String,
    required: true,
  },
  hitDice: {
    type: String,
  },
  speed: {
    type: String,
  },
  statBlock: [statsSchema],
  saveThrows: {
    type: String,
  },
  skills: {
    type: String,
    required: true,
  },
  damageResistance: {
    type: String,
  },
  immunities: {
    type: String,
  },
  senses: {
    type: String,
    required: true,
  },
  languages: {
    type: String,
    required: true,
  },
  challenge: {
    type: String,
    required: true,
  },
  traits: [
    {
      name: String,
      description: String,
    },
  ],
  actions: [
    {
      name: String,
      description: String,
    },
  ],

  attacks: [
    {
      name: String,
      toHit: String,
      damage: String,
      damageType: String,
      description: String,
    },
  ],
  legendaryActions: [
    {
      name: String,
      description: String,
    },
  ],
  lairActions: [
    {
      name: String,
      description: String,
    },
  ],
});

const Monster = model("Monster", monsterSchema);

module.exports = Monster;
