const Feat = require("../models/Feats");

// insomnia tested clear 3/8/24
async function findAllFeats(req, res) {
  try {
    const feats = await Feat.find({});
    res.status(200).json(feats);
  } catch (err) {
    console.error("no feats", err);
    res
      .status(500)
      .json({ error: "An oops happened while trying to find the feats" });
  }
}

// tested and good to go
async function findOneFeat(req, res) {
    try {
        const featName = req.params.name;
        const feat = await Feat.findOne({ name: featName });

        if(!feat) {
            return res.status(404).json({ error: "Feat not found" })
        } else {
            return res.status(200).json(feat);
        }
    } catch (err) {
        console.error("no feat found by that name", err);
        res
          .status(500)
          .json({ error: "An oops happened while trying to find the feat" });
    }
}

module.exports = {
    findAllFeats,
    findOneFeat,

}