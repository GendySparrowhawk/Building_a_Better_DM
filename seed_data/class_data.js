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
            description:
              "While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.",
            isPassive: true,
          },
        ],
        classFeature: [
          {
            name: "Rage",
            amount: "2/day",
            bonus: {
              name: "Rage Damage",
              amount: "2",
            },
          },
        ],
        prof: "2",
      },
      {
        lvl: "2",
        abilities: [
          {
            name: "Reckless Attack",
            description:
              "Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.",
            isAction: true,
          },
          {
            name: "Danger Sense",
            description:
              "At 2nd level, you gain an uncanny sense of when things nearby aren\u2019t as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can\u2019t be blinded, deafened, or incapacitated.",
            isPassive: true,
          },
        ],
        classFeature: [
          {
            name: "Rage",
            amount: "2/day",
            bonus: {
              name: "Rage Damage",
              amount: "2",
            },
          },
        ],
        prof: "2",
      },
      {
        lvl: "3",
        abilities: [
          {
            name: "Primal Path",
            description:
              "At 3rd level, you choose a path that shapes the nature of your rage. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels.",
          },
        ],
        classFeature: [
          {
            name: "Rage",
            amount: "3/day",
            bonus: {
              name: "Rage Damage",
              amount: "2",
            },
          },
        ],
        prof: "2",
      },
      {
        lvl: "4",
        abilities: [
          {
            name: "Ability Score Improvement",
            description:
              "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\u2019t increase an ability score above 20 using this feature. Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.",
          },
        ],
        classFeature: [
          {
            name: "Rage",
            amount: "3/day",
            bonus: {
              name: "Rage Damage",
              amount: "2",
            },
          },
        ],
        prof: "2",
      },
      {
        lvl: "5",
        abilities: [
          {
            name: "Extra Attack",
            description:
              "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
            isAction: true,
          },
          {
            name: "Fast Movement",
            description:
              "Starting at 5th level, your speed increases by 10 feet while you aren’t wearing heavy armor.",
            isPassive: true,
          },
        ],
        classFeature: [
          {
            name: "Rage",
            amount: "3/day",
            bonus: {
              name: "Rage Damage",
              amount: "2",
            },
          },
        ],
        prof: "3",
      },
      {
        lvl: "6",
        abilities: [],
        classFeature: [
          {
            name: "Rage",
            amount: "4/day",
            bonus: {
              name: "Rage Damage",
              amount: "2",
            },
          },
        ],
      },
      {
        lvl: "7",
        abilities: [
          {
            name: "Feral Instinct",
            description:
              "By 7th level, your instincts are so honed that you have advantage on initiative rolls. Additionally, if you are surprised at the beginning of combat and aren\u2019t incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.",
            isPassive: true,
          },
        ],
        classFeature: [
          {
            name: "Rage",
            amount: "4/day",
            bonus: {
              name: "Rage Damage",
              amount: "2",
            },
          },
        ],
        prof: "3",
      },
      {
        lvl: "8",
        abilities: [
          {
            name: "Ability Score Improvement",
            description:
              "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\u2019t increase an ability score above 20 using this feature. Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.",
          },
        ],
        classFeature: [
          {
            name: "Rage",
            amount: "4/day",
            bonus: {
              name: "Rage Damage",
              amount: "2",
            },
          }],
          prof: "3"
      },
      {
        lvl: "9",
        abilities: [{
          name: "Brutal Critical",
          description: "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level.",
          isPassive: true,
        }],
        classFeature: [
          {
            name: "Rage",
            amount: "4/day",
            bonus: {
              name: "Rage Damage",
              amount: "3",
            },
          }],
          prof: "4"
      },
      {
        lvl: "10",
        abilities: [],
        classFeature: [
          {
            name: "Rage",
            amount: "4/day",
            bonus: {
              name: "Rage Damage",
              amount: "3",
            },
          }],
          prof: "4"
      },
      {
        lvl: "11",
        abilities: [{
          name: "Relentless Rage",
          description: "Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you\u2019re raging and don\u2019t die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead. Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10."
        }],
        classFeature: [
          {
            name: "Rage",
            amount: "4/day",
            bonus: {
              name: "Rage Damage",
              amount: "3",
            },
          }],
          prof: "4"
      },
      {
        lvl: "12",
        abilities: [{
          name: "Ability Score Improvement",
          description:
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\u2019t increase an ability score above 20 using this feature. Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.",
        },],
        classFeature: [
          {
            name: "Rage",
            amount: "5/day",
            bonus: {
              name: "Rage Damage",
              amount: "3",
            },
          }],
          prof: "4"
      },
      {
        lvl: "13",
        
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
