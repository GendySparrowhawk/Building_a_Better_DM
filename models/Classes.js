const { Schema, model } = require("mongoose");

const abilitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isAction: {
    type: Boolean,
  },
  isPassive: {
    type: Boolean,
  }
});

const spellSlotSchema = new Schema({
  level: {
    type: Number,
  },
  slots: {
    type: Number,
  },
});

const classFeatureSchema = new Schema ({
  classFeature: {
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true
    },
    bonus: {
        name: String,
        amount: String,
    }
  }
});

const classLevelSchema = new Schema({
  lvl: {
    type: String,
    required: true,
  },
  abilities: [abilitySchema],
  spellSlots: [spellSlotSchema],
  classFeature: [classFeatureSchema],
  prof: {
    type: String,
    required: true,
  },
});

const subClassSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lvl: {
    type: String,
  },
  abilities: [abilitySchema],
});

const classSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  hitDice: {
    type: String,
    required: true,
  },
  savingThrows: [String],
  Proficiencies: [String],
  skills: [String],
  levels: [classLevelSchema],  
  subClasses: [subClassSchema],
});

const Class = model("class", classSchema);

module.exports = Class;
