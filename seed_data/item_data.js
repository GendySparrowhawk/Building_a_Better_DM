const Item = require("../models/Items");

const itemData = [
  {
    name: "Club",
    properties: ["light"],
    damage: "1d4",
    damageType: "bludgeoning",
    weaponType: "simple",
    rage: "meele",
    description: "Speak softly...",
    isWeapon: true,
    rarity: "common",
    weight: "2lb"
  },
  {
    name: "Dagger",
    properties: ["light", "finesse", "thrown"],
    damage: "1d4",
    damageType: "piercing",
    weaponType: "simple",
    rage: "meele, ranged 20/60",
    description: "Up close adn personal...",
    isWeapon: true,
    rarity: "common",
    weight: "1lb"
  },
  {
    name: "Greatclub",
    properties: ["two-handed"],
    damage: "1d8",
    damageType: "bludgeoning",
    weaponType: "simple",
    rage: "meele",
    description: "Speak even quietter...",
    isWeapon: true,
    rarity: "common",
    weight: "10lb"
  },
  {
    name: "Handaxe",
    properties: ["light", "thrown"],
    damage: "1d6",
    damageType: "slashing",
    weaponType: "simple",
    rage: "meele, ranged 20/60",
    description: "Good for splitting more than just wood.",
    isWeapon: true,
    rarity: "common",
    weight: "2lb",
  },
  {
    name: "Javelin",
    properties: ["thrown"],
    damage: "1d6",
    damageType: "piercing",
    weaponType: "simple",
    rage: "thrown 30/120",
    description: "Bring home the gold, and maybe a few heads...",
    isWeapon: true,
    rarity: "common",
    weight: "2lb",
  },
  {
    name: "Light Hammer",
    properties: ["light", "thrown"],
    damage: "1d4",
    damageType: "bludgeoning",
    weaponType: "simple",
    rage: "meele, ranged 20/60",
    description: "stop. light hammer time.",
    isWeapon: true,
    rarity: "common",
    weight: "2lb"
  },
  {
    name: "Mace",
    properties: ["light"],
    damage: "1d6",
    damageType: "bludgeoning",
    weaponType: "simple",
    rage: "meele",
    description: "A classic of henchmen across faerun",
    isWeapon: true,
    rarity: "common",
    weight: "4lb"
  },
  {
    name: "Quarterstaff",
    properties: ["versatile"],
    damage: "1d6",
    damageType: "bludgeoning",
    weaponType: "simple",
    rage: "meele",
    description: "I cast Shill-agllee, wait no shillog? wait - Shillelagh!",
    isWeapon: true,
    rarity: "common",
    weight: "4lb"
  },
  {
    name: "Sickle",
    properties: ["light"],
    damage: "1d4",
    damageType: "slashing",
    weaponType: "simple",
    rage: "meele",
    description: "A farmers best friend.",
    isWeapon: true,
    rarity: "common",
    weight: "2lb"
  },
  {
    name: "Spear",
    properties: ["thrown", "versatile"],
    damage: "1d6/id8",
    damageType: "slashing",
    weaponType: "simple",
    rage: "meele, ranged 20/60",
    description: "This end up.",
    isWeapon: true,
    rarity: "common",
    weight: "3lb"
  },
  {
    name: "Light Crossbow",
    properties: ["ammunition", "ranged", "two-handed"],
    damage: "1d8",
    damageType: "piercing",
    weaponType: "simple",
    rage: "ranged 80/320",
    description: "do I get sneak attack damage on this guy...?",
    isWeapon: true,
    rarity: "common",
    weight: "5lb"
  },
  {
    name: "Dart",
    properties: ["finesse", "thrown"],
    damage: "1d4",
    damageType: "piercing",
    weaponType: "simple",
    rage: "meele, ranged 20/60",
    description: "not always posion-tipped, but usually.",
    isWeapon: true,
    rarity: "common",
    weight: ".25lb"
  },
  {
    name: "Shortbow",
    properties: ["ammunition", "ranged", "two-handed"],
    damage: "1d6",
    damageType: "piercing",
    weaponType: "simple",
    rage: "ranged 80/320",
    description: "short bow for a short king",
    isWeapon: true,
    rarity: "common",
    weight: "2lb"
  },
  {
    name: "Sling",
    properties: ["ammunition", "ranged"],
    damage: "1d4",
    damageType: "bludgeoning",
    weaponType: "simple",
    rage: "ranged 30/120",
    description: "when you need to get biblical",
    isWeapon: true,
    rarity: "common",
    weight: "0"
  },
  {
    name: "Battleaxe",
    properties: ["versatile"],
    damage: "1d8/1d10",
    damageType: "slashing",
    weaponType: "martial",
    rage: "meele",
    description: "ax or axe?",
    isWeapon: true,
    rarity: "common",
    weight: "4lb"
  },
  {
    name: "Flail",
    properties: [""],
    damage: "1d8",
    damageType: "bludgeoning",
    weaponType: "martial",
    rage: "meele",
    description: "Good enough for the witch king good enough for me!",
    isWeapon: true,
    rarity: "common",
    weight: "2lb"
  },
  {
    name: "Glaive",
    properties: ["Heavy", "Reach", "two-handed"],
    damage: "1d10",
    damageType: "slashing",
    weaponType: "martial",
    rage: "meele",
    description: "Just screams Drow ranger no?",
    isWeapon: true,
    rarity: "common",
    weight: "6lb"
  },
  {
    name: "Greataxe",
    properties: ["Heavy", "two-handed"],
    damage: "1d12",
    damageType: "slashing",
    weaponType: "martial",
    rage: "meele",
    description: "That ol\u2019 thing? Whats so great abou-.",
    isWeapon: true,
    rarity: "common",
    weight: "7lb"
  },
  {
    name: "Greatsword",
    properties: ["Heavy", "two-handed"],
    damage: "2d6",
    damageType: "slashing",
    weaponType: "martial",
    range: "meele",
    description: "That ol\u2019 thing? Whats so great abou-.",
    rarity: " common",
    weight: "6lb"
  },
  {
    name: "Halberd",
    properties: ["Heavy", "two-handed", "Reach"],
    damage: "1d10",
    damageType: "slashing",
    weaponType: "martial",
    range: "meele",
    description: "Always making trip attacks.",
    rarity: " common",
    weight: "6lb"
  },
  {
    name: "Lance",
    properties: ["Special", "Reach"],
    damage: "1d12",
    damageType: "piercing",
    weaponType: "martial",
    range: "meele",
    description: "Not just for horses anymore!.",
    rarity: " common",
    weight: "6lb"
  },
  {
    name: "Longsword",
    properties: ["versatile"],
    damage: "1d8/1d10",
    damageType: "slashing",
    weaponType: "martial",
    range: "meele",
    description: "Classic for a reason",
    rarity: " common",
    weight: "3lb"
  },
  {
    name: "Maul",
    properties: ["Heavy", "two-handed"],
    damage: "2d6",
    damageType: "bludgeoning",
    weaponType: "martial",
    range: "meele",
    description: "bigger, better, and crits like mother.",
    rarity: " common",
    weight: "10lb"
  },
  {
    name: "Morningstar",
    properties: [""],
    damage: "1d8",
    damageType: "piercing",
    weaponType: "martial",
    range: "meele",
    description: "Wait was this the weapon the witch king had?",
    rarity: " common",
    weight: "4lb"
  },
  {
    name: "Pike",
    properties: ["Heavy", "two-handed", "Reach"],
    damage: "1d10",
    damageType: "piercing",
    weaponType: "martial",
    range: "meele",
    description: "how is this not a spear? No - I don't want to hear about the thirty years war.",
    rarity: " common",
    weight: "18lb"
  },
  {
    name: "Rapier",
    properties: ["Finesse"],
    damage: "1d8",
    damageType: "piercing",
    weaponType: "martial",
    range: "meele",
    description: "Remeber that fencing scene in the Parent Trap?",
    rarity: " common",
    weight: "2lb"
  },
  {
    name: "Scimitar",
    properties: ["Light", "Finesse"],
    damage: "1d6",
    damageType: "slashing",
    weaponType: "martial",
    range: "meele",
    description: "For druids who want an edge.",
    rarity: " common",
    weight: "3lb"
  },
  {
    name: "Shortsword",
    properties: ["Finesse", "Light"],
    damage: "1d6",
    damageType: "piercing",
    weaponType: "martial",
    range: "meele",
    description: "alwasy an off-hand never a bridesmaid.",
    rarity: " common",
    weight: "2lb"
  },
  {
    name: "Trident",
    properties: ["Thrown", "versatile"],
    damage: "1d6/1d8",
    damageType: "piercing",
    weaponType: "martial",
    range: "meele, ranged 20/60",
    description: "Aquaman's got nothing on me.",
    rarity: " common",
    weight: "4lb"
  },
  {
    name: "War Pick",
    properties: [""],
    damage: "1d8",
    damageType: "piercing",
    weaponType: "martial",
    range: "meele",
    description: "not to be confused with the war-tooth-pick",
    rarity: " common",
    weight: "2lb"
  },
  {
    name: "Warhammer",
    properties: ["versatile"],
    damage: "1d8/1d10",
    damageType: "bludgeoning",
    weaponType: "martial",
    range: "meele",
    description: "Seems so satisfying to swing.",
    rarity: " common",
    weight: "2lb"
  },
  {
    name: "Whip",
    properties: ["Finesse", "Reach"],
    damage: "1d4",
    damageType: "slashing",
    weaponType: "martial",
    range: "meele",
    description: "A Belmont classic.",
    rarity: " common",
    weight: "3lb"
  },
  {
    name: "Blowgun",
    properties: ["ranged"],
    damage: "1",
    damageType: "piercing",
    weaponType: "martial",
    range: "ranged 25/100",
    description: "only used to protect artifacts",
    rarity: " common",
    weight: "1lb"
  },
  {
    name: "Hand Crossbow",
    properties: ["ranged", "Light", "ammunition"],
    damage: "1d6",
    damageType: "piercing",
    weaponType: "martial",
    range: "ranged 30/120",
    description: "pew-pew bonus aciton",
    rarity: " common",
    weight: "3lb"
  },
  {
    name: "Heavy Crossbow",
    properties: ["ranged", "two-handed", "ammunition"],
    damage: "1d10",
    damageType: "piercing",
    weaponType: "martial",
    range: "ranged 100/400",
    description: "no but for real, do I get sneak-attack?",
    rarity: " common",
    weight: "18lb"
  },
  {
    name: "Longbow",
    properties: ["ranged", "two-handed", "ammunition"],
    damage: "1d8",
    damageType: "piercing",
    weaponType: "martial",
    range: "ranged 150/600",
    description: "again, no, I do not want to hear about the thirty years war!",
    rarity: " common",
    weight: "2lb"
  }
  

];

async function seedItems() {
  try {
    const existingItems = await Item.find({});

    for (const item of itemData) {
      const isExisting = existingItems.some(
        (existingItem) => existingItem.name === item.name
      );

      if (!isExisting) {
        await Item.create(item);
        console.log(`${item.name} created!`);
      } else {
        await Item.findOneAndUpdate({ name: item.name }, item);
        console.log(`${item.name} upated`);
      }
    }
  } catch (err) {
    console.error("Error seeding Items", err);
  }
}

module.exports = { seedItems };
