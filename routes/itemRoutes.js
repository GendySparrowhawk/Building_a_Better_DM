const express = require("express");
const router = express.Router();
module.exports = router;
const itemControllers = require("../controllers/itemControllers");

router.get("/items", itemControllers.findAllItems);
router.get("/items/:name", itemControllers.findOneItem);

router.get("/weapons", itemControllers.findAllWeapons);
router.get("/weapon/:name", itemControllers.findOneWeapon);
router.get("/weapons/ranged", itemControllers.findRangedWeapons);
router.get("/armors", itemControllers.findAllArmor);

module.exports = router;
