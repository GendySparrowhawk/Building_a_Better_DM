const Weapon = require("../models/Weapons");

const weaponData = [{}];

async function seedWeapons() {
  try {
    const existingWeapons = await Weapon.find({});

    for (const weapon of weaponData) {
      const isExisting = existingWeapons.some(
        (existingWeapon) => existingWeapon.name === weapon.name
      );
      if (!isExisting) {
        await Weapon.create(weapon);
        console.log(`${weapon.name} created!`);
      } else {
        await Weapon.findOneAndUpdate({ name: weapon.name }, weapon);
        console.log(`${weapon.name} updated`);
      }
    }
  } catch (err) {
    console.error("Error seeding weapons", err);
  }
}

module.exports = { seedWeapons };
