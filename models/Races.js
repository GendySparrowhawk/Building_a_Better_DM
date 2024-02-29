const { Schema, model } = require("mongoose");
const subraceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  traits: [{
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    action: {
      type: Boolean,
    }
  }],
})
const racesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  subrace: [subraceSchema],
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
  traits: [{
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true
    },
    action: {
      type: Boolean,
    }
  }],

});

const Race = model("Race", racesSchema);
module.exports = Race;
