const Spell = require("../models/Spells");

const spellData = [
  {
    name: "Abi-Dalzim's Horrid Wilting",
    spellClass: ["Sorcerer", "Wizard"],
    lvl: "8",
    school: "Necormancy",
    range: "150ft/30ft cube",
    castingTime: "1 action",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    saveThrow: "CON",
    damageType: "Necrotic",
    components: ["V", "S", "M"],
    materials: "a bit of sponge",
    description:
      "You draw the moisture from every creature in a 30-foot cube centered on a point you choose within range. Each creature in that area must make a Constitution saving throw. Constructs and undead aren\u2019t affected, and plants and water elementals make this saving throw with disadvantage. A creature takes 12d8 necrotic damage on a failed save, or half as much damage on a successful one.Nonmagical plants in the area that aren\u2109t creatures, such as trees and shrubs, wither and die instantly.",
  },

  {
    name: "Absorb Elements",
    spellClass: ["Artificer", "Wizard", "Druid", "Ranger", "Sorcerer"],
    lvl: "1",
    school: "Abjuration",
    range: "self",
    castingTime: "1 action",
    duration: "1 round",
    concentration: false,
    ritual: false,
    saveThrow: "",
    damageType: "",
    components: ["S"],
    materials: "",
    description:
      "The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st.",
  },

  {
    name: "Acid Arrow",
    spellClass: ["Alchemist", "Wizard", "Druid"],
    lvl: "2",
    school: "Evocation",
    range: "90ft",
    castingTime: "1 action",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    saveThrow: "",
    damageType: "Acid",
    components: ["V", "S", "M"],
    materials: "powdered rhubarb leaf and an adder\u2019s stomach",
    description:
      "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd.",
  },
  {
    name: "Acid Splash",
    spellClass: ["Sorcerer", "Wizard", "Artificer"],
    lvl: "cantrip",
    school: "Conjuration",
    range: "60ft",
    castingTime: "1 action",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    saveThrow: "",
    damageType: "Acid",
    components: ["V", "S", "M"],
    materials: "powdered rhubarb leaf and an adder\u2019s stomach",
    description:
      "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd.",
  },
  {
    name: "Aganazzar's Scorcher",
    spellClass: ["Sorcerer", "Wizard"],
    lvl: "2",
    school: "Evocation",
    range: "30ft line",
    castingTime: "1 action",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    saveThrow: "DEX",
    damageType: "Fire",
    components: ["V", "S", "M"],
    materials: "a red dragon\u2019s scale",
    description:
      "A line of roaring flame 30 feet long and 5 feet wide emanates from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 3d8 fire damage on a failed save, or half as much damage on a successful one. At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.",
  },
  {
    name: "Aid",
    spellClass: ["Arificer", "Cleric", "Paladin"],
    lvl: "2",
    school: "Abjuration",
    range: "30ft",
    castingTime: "1 action",
    duration: "8 Hours",
    concentration: false,
    ritual: false,
    saveThrow: "",
    damageType: "",
    components: ["V", "S", "M"],
    materials: "a tiny strip of white cloth",
    description:
      "Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target\u2019s hit point maximum and current hit points increase by 5 for the duration. At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, a target\u2019s hit points increase by an additional 5 for each slot level above 2nd.",
  },
  {
    name: "Air Bubble",
    spellClass: ["Arificer", "Druid", "Ranger", "Wizard", "Sorcerer"],
    lvl: "2",
    school: "Conjuration",
    range: "60ft",
    castingTime: "1 action",
    duration: "24 Hours",
    concentration: false,
    ritual: false,
    saveThrow: "",
    damageType: "",
    components: ["S"],
    materials: "",
    description:
      "You create a spectral globe around the head of a willing creature you can see within range. The globe is filled with fresh air that lasts until the spell ends. If the creature has more than one head, the globe of air appears around only one of its heads (which is all the creature needs to avoid suffocation, assuming that all its heads share the same respiratory system). At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, you can create two additional globes of fresh air for each slot level above 2nd.",
  },
  {
    
  }
];

async function seedSpells() {
  try {
    const existingSpells = await Spell.find({});

    for (const spell of spellData) {
      const isExisting = existingSpells.some(
        (existingSpell) => existingSpell.name === spell.name
      );
      if (!isExisting) {
        await Spell.create(spell);
        console.log(`spell added: ${spell.name}`);
      } else {
        await Spell.findOneAndUpdate({ name: spell.name }, spell);
        console.log(`${spell.name} updated.`)
      }
    }
  } catch (err) {
    console.error("Error seeding spells", err);
  }
}

module.exports = { seedSpells };
