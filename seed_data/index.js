const mongoose = require("mongoose");
const spellData = require("./spell_data");
const monsterData = require("./monster_data");
const weaponData = require('./weapon_data')


mongoose.connect("mongodb://127.0.0.1:27017/fifth_edition");

async function seedAllData() {
  try {
    await spellData.seedSpells();
    console.log("all spells seeded");
    await monsterData.seedMonsters();
    console.log("all monsters seeded");
    await weaponData.seedWeapons();
    console.log('weapons seeded');
    console.log("all data seeded, yaay!");
  } catch (err) {
    console.error("error seeding data:", err);
  } finally {
    mongoose.disconnect();
  }
}

seedAllData();
