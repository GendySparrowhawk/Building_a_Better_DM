const { Schema, model } = require("mongoose");

const racesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
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
  languages: [
    {
      name: {
        type: String,
        require: true,
      },
    },
  ],
  abilityScore: {
    type: String,
  },
  skills: [
    {
      name: {
        type: String,
      },
    },
  ],
  traits: {
    type: String,
  },
});

const Race = model("Race", racesSchema);
module.exports = Race;
