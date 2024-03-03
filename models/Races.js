const { Schema, model } = require("mongoose");


const traitSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lvl: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  action: {
    type: Boolean,
  },
});

const subraceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  traits: [traitSchema],
  abilityScoreIncrease: [
    {
      name: {
        type: String,
      },
      amount: {
        type: String,
      },
    },
  ],
});

const racesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  subraces: [subraceSchema],
  size: {
    type: String,
    required: true,
  },
  speed: {
    type: String,
    required: true,
  },
  alignment: {
    type: String,
  },
  languages: [String],
  abilityScoreIncrease: [
    {
      name: {
        type: String,
      },
      amount: {
        type: String,
      },
    },
  ],
  proficiencies: [String],
  traits: [traitSchema],
});

const Race = model("Race", racesSchema);
module.exports = Race;
