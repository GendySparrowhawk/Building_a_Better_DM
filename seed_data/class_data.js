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
              "Starting at 5th level, your speed increases by 10 feet while you aren\u2019t wearing heavy armor.",
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
          },
        ],
        prof: "3",
      },
      {
        lvl: "9",
        abilities: [
          {
            name: "Brutal Critical",
            description:
              "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level.",
            isPassive: true,
          },
        ],
        classFeature: [
          {
            name: "Rage",
            amount: "4/day",
            bonus: {
              name: "Rage Damage",
              amount: "3",
            },
          },
          {
            name: "Brutal Critical",
            amount: "1 dice",
          },
        ],
        prof: "4",
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
          },
          {
            name: "Brutal Critical",
            amount: "1 dice",
          },
        ],
        prof: "4",
      },
      {
        lvl: "11",
        abilities: [
          {
            name: "Relentless Rage",
            description:
              "Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you\u2019re raging and don\u2019t die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead. Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.",
          },
        ],
        classFeature: [
          {
            name: "Rage",
            amount: "4/day",
            bonus: {
              name: "Rage Damage",
              amount: "3",
            },
          },
          {
            name: "Brutal Critical",
            amount: "1 dice",
          },
        ],
        prof: "4",
      },
      {
        lvl: "12",
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
            amount: "5/day",
            bonus: {
              name: "Rage Damage",
              amount: "3",
            },
          },
          {
            name: "Brutal Critical",
            amount: "1 dice",
          },
        ],
        prof: "4",
      },
      {
        lvl: "13",
        abilities: [],
        classFeature: [
          {
            name: "Rage",
            amount: "5/day",
            bonus: {
              name: "Rage Damage",
              amount: "3",
            },
          },
          {
            name: "Brutal Critical",
            amount: "2 dice",
          },
        ],
        prof: "5",
      },
      {
        lvl: "14",
        abilities: [],
        classFeature: [
          {
            name: "Rage",
            amount: "5/day",
            bonus: {
              name: "Rage Damage",
              amount: "3",
            },
          },
          {
            name: "Brutal Critical",
            amount: "2 dice",
          },
        ],
        prof: "5",
      },
      {
        lvl: "15",
        abilities: [
          {
            name: "Persistent Rage",
            description:
              "Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it. ",
            isPassive: true,
          },
        ],
        classFeature: [
          {
            name: "Rage",
            amount: "5/day",
            bonus: {
              name: "Rage Damage",
              amount: "3",
            },
          },
          {
            name: "Brutal Critical",
            amount: "2 dice",
          },
        ],
        prof: "5",
      },
      {
        lvl: "16",
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
            amount: "5/day",
            bonus: {
              name: "Rage Damage",
              amount: "4",
            },
          },
          {
            name: "Brutal Critical",
            amount: "2 dice",
          },
        ],
        prof: "5",
      },
      {
        lvl: "17",
        abilities: [],
        classFeature: [
          {
            name: "Rage",
            amount: "6/day",
            bonus: {
              name: "Rage Damage",
              amount: "4",
            },
          },
          {
            name: "Brutal Critical",
            amount: "3 dice",
          },
        ],
        prof: "6",
      },
      {
        lvl: "18",
        abilities: [
          {
            name: "Indomitable Might",
            description:
              "Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total.",
            isPassive: true,
          },
        ],
        classFeature: [
          {
            name: "Rage",
            amount: "6/day",
            bonus: {
              name: "Rage Damage",
              amount: "4",
            },
          },
          {
            name: "Brutal Critical",
            amount: "3 dice",
          },
        ],
        prof: "6",
      },
      {
        lvl: "19",
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
            amount: "6/day",
            bonus: {
              name: "Rage Damage",
              amount: "4",
            },
          },
          {
            name: "Brutal Critical",
            amount: "3 dice",
          },
        ],
        prof: "6",
      },
      {
        lvl: "20",
        abilities: [
          {
            name: "Primal Champion",
            description:
              "At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.",
          },
        ],
        classFeature: [
          {
            name: "Rage",
            amount: "unlimited",
            bonus: {
              name: "Rage Damage",
              amount: "4",
            },
          },
          {
            name: "Brutal Critical",
            amount: "3 dice",
          },
        ],
        prof: "6",
      },
    ],
    subClasses: [
      {
        name: "Path of the Ancestral Guardian",
        levels: [
          {
            lvl: "3",
            abilities: [
              {
                name: "Ancestral Protectors",
                description:
                  "Starting when you choose this path at 3rd level, spectral warriors appear when you enter your rage. While you're raging, the first creature you hit with an attack on your turn becomes the target of the warriors, which hinder its attacks. Until the start of your next turn, that target has disadvantage on any attack roll that isn't against you, and when the target hits a creature other than you with an attack, that creature has resistance to the damage dealt by the attack. The effect on the target ends early if your rage ends.",
                isPassive: true,
              },
            ],
          },
          {
            lvl: "6",
            abilities: [
              {
                name: "Spirit Shield",
                description:
                  "Beginning at 6th level, the guardian spirits that aid you can provide supernatural protection to those you defend. If you are raging and another creature you can see within 30 feet of you takes damage, you can use your reaction to reduce that damage by 2d6. When you reach certain levels in this class, you can reduce the damage by more: by 3d6 at 10th level and by 4d6 at 14th level.",
                isReaction: true,
              },
            ],
          },
          {
            lvl: "10",
            abilities: [
              {
                name: "Consult the Spirits",
                description:
                  "At 10th level, you gain the ability to consult with your ancestral spirits. When you do so, you cast the Augury or Clairvoyance spell, without using a spell slot or material components. Rather than creating a spherical sensor, this use of clairvoyance invisibly summons one of your ancestral spirits to the chosen location. Wisdom is your spellcasting ability for these spells. After you cast either spell in this way, you can't use this feature again until you finish a short or long rest.",
                isAction: true,
              },
            ],
          },
          {
            lvl: "14",
            abilities: [
              {
                name: "Vengeful Ancestors",
                description:
                  "At 14th level, your ancestral spirits grow powerful enough to retaliate. When you use your Spirit Shield to reduce the damage of an attack, the attacker takes an amount of force damage that your Spirit Shield prevents.",
              },
            ],
          },
        ],
      },
      {
        name: "Path Of The Beast",
        levels: [
          {
            lvl: "3",
            abilities: [
              {
                name: "Form of the Beast",
                description:
                  "Starting when you choose this path at 3rd level, when you enter your rage, you can transform, revealing the bestial power within you. Until the rage ends, you manifest a natural weapon. It counts as a simple melee weapon for you, and you add your Strength modifier to the attack and damage rolls when you attack with it, as normal. You choose the weapon\u2019s form each time you rage: Bite. Your mouth transforms into a bestial muzzle or great mandibles (your choice). It deals 1d8 piercing damage on a hit. Once on each of your turns when you damage a creature with this bite, you regain a number of hit points equal to your proficiency bonus, provided you have less than half your hit points when you hit. Claws. Each of your hands transforms into a claw, which you can use as a weapon if it\u2019s empty. It deals 1d6 slashing damage on a hit. Once on each of your turns when you attack with a claw using the Attack action, you can make one additional claw attack as part of the same action. Tail. You grow a lashing, spiny tail, which deals 1d8 piercing damage on a hit and has the reach property. If a creature you can see within 10 feet of you hits you with an attack roll, you can use your reaction to swipe your tail and roll a d8, applying a bonus to your AC equal to the number rolled, potentially causing the attack to miss you.",
                isAction: true,
              },
            ],
          },
          {
            lvl: "6",
            abilities: [
              {
                name: "Bestial Soul",
                description:
                  "Beginning at 6th level, the feral power within you increases, causing the natural weapons of your Form of the Beast to count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage. You can also alter your form to help you adapt to your surroundings. When you finish a short or long rest, choose one of the following benefits, which lasts until you finish a short or long rest: You gain a swimming speed equal to your walking speed, and you can breathe underwater. You gain a climbing speed equal to your walking speed, and you can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check. When you jump, you can make a Strength (Athletics) check and extend your jump by a number of feet equal to the check\u2019s total. You can make this special check only once per turn.",
                isAction: true,
              },
            ],
          },
          {
            lvl: "10",
            abilities: [
              {
                name: "Infectious Fury",
                description:
                  "At 10th level, when you hit a creature with your natural weapons while you are raging, the beast within you can curse your target with rabid fury. The target must succeed on a Wisdom saving throw (DC equal to 8 + your Constitution modifier + your proficiency bonus) or suffer one of the following effects (your choice): The target must use its reaction to make a melee attack against another creature of your choice that you can see. Target takes 2d12 psychic damage. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
                isAction: true,
              },
            ],
          },
          {
            lvl: "14",
            abilities: [
              {
                name: "Call the Hunt",
                description:
                  "At 14th level, the beast within you grows so powerful that you can spread its ferocity to others and gain resilience from them joining your hunt. When you enter your rage, you can choose a number of other willing creatures you can see within 30 feet of you equal to your Constitution modifier (minimum of one creature). You gain 5 temporary hit points for each creature that accepts this feature. Until the rage ends, the chosen creatures can use the following benefit once on each of their turns: when the creature hits a target with an attack roll and deals damage to it, the creature can roll a d6 and gain a bonus to the damage equal to the number rolled. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
                isPassive: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "bard",
    hitDice: "d8",
    savingThrows: ["DEX", "CHA"],
    weaponProficiencies: ["rapier", "longsword", "simple weapons"],
    skillProficiences: ["any three"],
    toolProficiences: ["musical instrument"],
    levles: [
      {
        lvl: "1",
        abilities: [{}],
        spellSlots: [
          {
            lvl: "cantrips known",
            slots: "2",
          },
          {
            lvl: "1",
            slots: "2",
          },
        ],
        spellsKnown: "4",
        classFeature: [
          {
            name: "Bardic Inspiration",
            amount: "d6",
          },
        ],
        prof: "2",
      },
      {
        lvl: "2",
        abilities: [
          {
            name: "Jack of All Trades",
            description:
              "Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus.",
            isPassive: true,
          },
          {
            name: "Song of Rest",
            description:
              "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points. The extra Hit Points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level.",
            isAction: true,
          },
        ],
        spellSlots: [
          {
            lvl: "cantrips",
            slots: "2",
          },
          {
            lvl: "1",
            slots: "3",
          },
        ],
        spellsKnown: "5",
        classFeature: [
          {
            name: "Bardic Inspiration",
            amount: "d6",
          },
        ],
        prof: "2",
      },
      {
        lvl: "3",
        abilities: [
          {
            name: "Expertise",
            description:
              "At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. At 10th level, you can choose another two skill proficiencies to gain this benefit.",
            isPassive: true,
          },
        ],
        spellSlots: [
          {
            lvl: "cantrips",
            slots: "2",
          },
          {
            lvl: "1",
            slots: "4",
          },
          {
            lvl: "2",
            slots: "2",
          },
        ],
        spellsKnown: "6",
        classFeature: [
          {
            name: "Bardic Inspiration",
            amount: "d6",
          },
        ],
        prof: "2",
      },
    ],
    subClasses: [],
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
