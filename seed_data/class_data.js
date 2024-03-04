const Class = require("../models/Classes");

const dndClassData = [
  {
    name: "Barbarian",
    hitDice: "d12",
    savingThrows: ["STR", "CON"],
    Proficiencies: [
      "Light Armor",
      "Medium Armor",
      "Shields",
      "Simple Weapons",
      "Martial Weapons",
    ],
    skills: [
      "Animal Handling",
      "Athletics",
      "Intimidation",
      "Nature",
      "Perception",
      "Survival",
    ],
    levels: [
      {
        lvl: "1",
        abilities: [
          {
            name: "Rage",
            description:
              "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain the following benefits if you aren\u2019t wearing heavy armor: You have advantage on Strength checks and Strength saving throws. When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table. You have resistance to bludgeoning, piercing, and slashing damage. If you are able to cast spells, you can\u2019t cast them or concentrate on them while raging. Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven\u2019t attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action. Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again.",
            isAction: true,
          },
          {
            name: "Unarmored Defense",
            description: "While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.",
            isPassive: true,
          },
        ],
        classFeature: [{
          name: "Rage",
          amount: "2/day",
          bonus: {
            name: "Rage Damage",
            amount: "2"
          }
        }
        ],
        prof: "2"
      },
      {
        lvl: "2",
        abilities: []
      }
    ],
  },
];
async function seedClasses() {
  try {
    const existingdndClasses = await Class.find({});

    for (const dndClass of dndClassData) {
      const isExisting = existingdndClasses.some(
        (existingdndClass) => existingdndClass.name === dndClass.name
      );
      if (!isExisting) {
        await Class.create(dndClass);
        console.log(`${dndClass.name} added!`);
      } else {
        await Class.findOneAndUpdate({ name: dndClass.name }, dndClass);
        console.log(`${dndClass.name} updated!`);
      }
    }
  } catch (err) {
    console.error("Error seeding Classes", err);
  }
}

module.exports = { seedClasses };
