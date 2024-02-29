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
  action: {
    type: Boolean,
    required: true,
  },
});
const subClassAbilitySchema = new Schema({
  lvl: {
    type: Number,
    requied: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  action: {
    type: Boolean,
    required: true,
  },
});

const spellSlotSchema = new Schema({
  level: {
    type: Number,
  },
  slots: {
    type: Number,
  },
});

const classLevelSchema = new Schema({
  lvl: {
    type: Number,
    required: true,
  },
  abilities: [abilitySchema],
  spellSlots: [spellSlotSchema],
  prof: {
    type: Number,
    required: true,
  },
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

const subClassSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  abilities: [subClassAbilitySchema],
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
  skills: [String],
  levels: [classLevelSchema],  
  subClasses: [subClassSchema],
});

const Class = model("class", classSchema);

module.exports = Class;
