const Item = require("../models/Items");

// tested and good to go 3/8/24
async function findAllItems(req, res) {
  try {
    const items = await Item.find({});

    res.status(200).json(items);
  } catch (err) {
    console.error("No items, oops", err);
    res
      .status(500)
      .json({ error: "An oops happened while trying to get all the items" });
  }
}

// tested and works 3/9/24
async function findOneItem(req, res) {
  try {
    const itemName = req.params.name;

    const item = await Item.findOne({ name: itemName });
    if (!item) {
      return res.status(404).json({ error: "no item by that name found" });
    } else {
      return res.status(200).json(item);
    }
  } catch (err) {
    console.error("server error findign item", err);
    res.status(500).json({ error: "no item found" });
  }
}

// tested 3/11/24 works!
async function findItemsbyRarity(req, res) {
  try {
    const rarity = req.params.rarity;
    const items = await Item.find({rarity: rarity });

    if(!items || items.length === 0) {
      return res.status(404).json({error: "no items with that rarity"});
    } else {
      return res.status(200).json(items)
    }
  } catch (err) {
    console.error("server error findign items", err);
    res.status(500).json({ error: "no items found" });
  }
}

// tested 3/9/24 a-okay
async function findAllWeapons(req, res) {
  try {
    const weapons = await Item.find({ isWeapon: true });
    // console.log('init test weapons')

    if (!weapons || weapons.legnth === 0) {
      return res.status(404).json({ error: "no weapons found" });
    } else {
      return res.status(200).json(weapons);
    }
  } catch (err) {
    console.error("server error getting weapons");
    res.status(500).json({ error: "no weapons found." });
  }
}

// tested 3/9/34 works!
async function findOneWeapon(req, res) {
  try {
    const weaponName = req.params.name;
    const weapon = await Item.findOne({ isWeapon: true, name: weaponName });

    if (!weapon) {
      return res.status(404).json({ error: "no weapon found" });
    } else {
      return res.status(200).json(weapon);
    }
  } catch (err) {
    console.error("server error getting weapon");
    res.status(500).json({ error: "no weapon found by that name" });
  }
}

// tested 3/11/24 works!
async function findWeaponByType(req, res) {
  try {
    const weaponType = req.params.type;
    const weapons = await Item.find({ isWeapon: true, weaponType: weaponType });

    if(!weapons || weapons.length ===0) {
      return res.status(404).json({ error: 'no wepaons by that type found'});
    } else {
      return res.status(200).json(weapons)
    }
  } catch (err) {
    console.error("server error getting weapons");
    res.status(500).json({ error: "server error fetching wepaons by type" });
  }
}

// tested 3/9/34 works!
async function findRangedWeapons(req, res) {
  try {
    const rangedWeapons = await Item.find({
      isWeapon: true,
      properties: { $in: [/ranged/i] },
    });
    console.log("Init test ranged items");
    if (!rangedWeapons || rangedWeapons.length === 0) {
      return res.status(404).json({ error: "no weapons found" });
    } else {
      return res.status(200).json(rangedWeapons);
    }
  } catch (err) {
    console.error("server error getting raged weapon");
    res.status(500).json({ error: "error getting ranged weapons" });
  }
}


// tested 3/9/34 works!
async function findAllArmor(req, res) {
  try {
    const armor = await Item.find({ isArmor: true });

    if (!armor || armor.length === 0) {
      return res.status(404).json({ error: "no armor found" });
    } else {
      return res.status(200).json(armor);
    }
  } catch (err) {
    console.error("server error getting armor's");
    res.status(500).json({ error: "no armors found" });
  }
}

// tested 3/11/24 works 
async function findOneArmor(req, res) {
  try {
    const armorName = req.params.name;
    const armor = await Item.find({ isArmor: true, name: armorName });

    if(!armor) {
      return res.status(404).json({error: "no armor by that name"})
    } else {
      return res.status(200).json(armor);
    }
  } catch (err) {
    console.error("error finding armor", err);
    res.status(500).json({ error: "no armor found by that name"})
  }
}

// tested 3/11/24 works!
async function findItemByProp(req, res) {
  try {
    const searchTerm = req.params.term;
    if(!searchTerm) {
     return res.status(400).json({ error: 'you must enter a search term'})
    } 
    const items = await Item.find({ properties: searchTerm });
    
    if(!items || items.length === 0) {
      return res.status(404).json({ error: 'no items with that property found'})
    } else {
      return res.status(200).json(items)
    }
  } catch (err) {
    console.error("error finding items", err);
    res.status(500).json({ error: "server error fetching items"})
  }
}

module.exports = {
  findAllItems,
  findOneItem,
  findAllWeapons,
  findOneWeapon,
  findWeaponByType,
  findRangedWeapons,
  findAllArmor,
  findOneArmor,
  findItemByProp,
  findItemsbyRarity,
};
