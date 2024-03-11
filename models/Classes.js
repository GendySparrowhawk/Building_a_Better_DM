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
  isBonusAction: {
    type: Boolean,
  },
  isReaction: {
    type: Boolean
  },
  isPassive: {
    type: Boolean,
  },
});

const spellSlotSchema = new Schema({
 lvl: String,
 slots: String,
});

const classFeatureSchema = new Schema({
  classFeature: {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    bonus: {
      name: String,
      amount: String,
    },
  },
});

const subClassLevelSchema = new Schema({
  lvl: {
    type: String,
    required: true,
  },
  spellSlots: [spellSlotSchema],
  abilities: [abilitySchema],
});

const classLevelSchema = new Schema({
  lvl: {
    type: String,
    required: true,
  },
  abilities: [abilitySchema],
  spellSlots: [spellSlotSchema],
  spellsKnown: String,
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
  levels: [subClassLevelSchema],
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
  weaponProficiencies: [String],
  skillProficiencies: [String],
  toolProficiencies: [String],
  levels: [classLevelSchema],
  subClasses: [subClassSchema],
});

const Class = model("class", classSchema);

module.exports = Class;
