const { Schema, model } = require("mongoose");

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
    required: true
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
  speed: {
    type: String,
  },
statBlock: {
  str: [
    {
      score: String,
      modifier: String,
    },
  ],
  dex: [
    {
      score: String,
      modifier: String,
    },
  ],
  con: [
    {
      score: String,
      modifier: String,
    },
  ],
  int: [
    {
      score: String,
      modifier: String,
    },
  ],
  wis: [
    {
      score: String,
      modifier: String,
    },
  ],
  cha: [
    {
      score: String,
      modifier: String,
    },
  ],
},
  saveThrows: {
    type: String,
  },
  skills: {
    type: String,
    required: true,
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
