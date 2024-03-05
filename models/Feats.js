const { Schema, model } = require("mongoose");

const featsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirements: [String],
  isAction: {
    type: Boolean,
  },
  isBonusAction: {
    type: Boolean,
  },
  isReaction: {
    type: Boolean,
  },
  isPassive: {
    type: Boolean,
  },
});

const Feat = model("Feat", featsSchema);
module.exports = Feat;
