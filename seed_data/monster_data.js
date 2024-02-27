const Monster = require("../models/Monsters");

const monsterData = [{}];

async function seedMonsters() {
  try {
    const existingMonsters = await Monster.find({});

    for (const monster of monsterData) {
      const isExisting = existingMonsters.some(
        (existingMonster) => existingMonster.name === monster.name
      );
      if (!isExisting) {
        await Monster.create(monster);
        console.log(`${monster.name} created!`);
      } else {
        await Monster.findOneAndUpdate({ name: monster.name }, monster);
        console.log(`${monster.name} updated.`);
      }
    }
  } catch (err) {
    console.error("Error seeding monsters", err);
  }
}

module.exports = { seedMonsters };
