const express = require("express");
const router = express.Router();
module.exports = router;
const itemControllers = require("../controllers/itemControllers");

router.get("/items", itemControllers.findAllItems);
router.get("/items/:name", itemControllers.findOneItem);

router.get("/weapons", itemControllers.findAllWeapons);
router.get("/weapon/:name", itemControllers.findOneWeapon);
router.get("/weapons/ranged", itemControllers.findRangedWeapons);
router.get("/weapons/weaponType/:type", itemControllers.findWeaponByType);



router.get("/armors", itemControllers.findAllArmor);
router.get("/armors/:name", itemControllers.findOneArmor);

router.get('/items/properties/:term', itemControllers.findItemByProp);
router.get('/items/rarity/:rarity', itemControllers.findItemsbyRarity);

module.exports = router;
