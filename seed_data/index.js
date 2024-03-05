const mongoose = require("mongoose");
const spellData = require("./spell_data");
const monsterData = require("./monster_data");
const classData = require("./class_data");
const raceData = require("./race_data");
const itemData = require("./item_data");

mongoose.connect("mongodb://127.0.0.1:27017/fifth_edition");

async function seedAllData() {
  try {
    await spellData.seedSpells();
    console.log("all spells seeded");
    await monsterData.seedMonsters();
    console.log("all monsters seeded");
    await raceData.seedRaces();
    console.log("races seeded!");
    await itemData.seedItems();
    console.log("all items seeded!");
    await classData.seedClasses();
    console.log("all classes seeded!")
    console.log("all data seeded, yaay!");
  } catch (err) {
    console.error("error seeding data:", err);
  } finally {
    mongoose.disconnect();
  }
}

seedAllData();
