const { Schema, model } = require("mongoose");
const fs = require('fs')
const imageData = fs.readFileSync('../assets')

const monsterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  subClass: {
    type: String,
    required: true
  },
  img: {
    type: Buffer,
    contentType: String,
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
  saveThrows: {
    type: String,
    required: true,
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
