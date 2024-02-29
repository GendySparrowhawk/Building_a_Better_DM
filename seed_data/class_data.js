const Class = require("../models/Classes");

const dndClassData = [
  {
    name: "Barbarian",
    hitDice: "d12",
    savingThrows: ["STR", "DEX"],
    levles: [
      {
        lvl: 1,
        abilities: [
          {
            name: "Rage",
            description:
              "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain the following benefits if you aren\u2109t wearing heavy armor: You have advantage on Strength checks and Strength saving throws. When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table. You have resistance to bludgeoning, piercing, and slashing damage. If you are able to cast spells, you can\u2109t cast them or concentrate on them while raging. Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven\u2109t attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action. Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again.",
            action: false,
          },
          {
            name: "Unarmored Defense",
            description:
              "While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.",
            action: false,
          },
        ],
        prof: 2,
        classFeature: {
          name: "Rage",
          amount: "2/long rest",
          bonus: {
            name: "Rage Damage",
            amount: "+2",
          },
        },
      },
      {
        lvl: 2,
        abilities: [
          {
            name: "Reckless Attack",
            description:
              "Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.",
            action: true,
          },
          {
            name: "Danger Sense",
            description:
              "At 2nd level, you gain an uncanny sense of when things nearby aren\u2019t as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can\u2019t be blinded, deafened, or incapacitated.",
            action: true,
          },
        ],
        prof: 2,
        classFeature: {
          name: "Rage",
          amount: "2/long rest",
          bonus: {
            name: "Rage Damage",
            amount: "+2",
          },
        },
      },
      {
        lvl: 3,
        abilities: [
          {
            name: "Primal Path",
            description:
              "At 3rd level, you choose a path that shapes the nature of your rage. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels.",
            action: false,
          },
        ],
        prof: 2,
        classFeature: {
          name: "Rage",
          amount: "3/long rest",
          bonus: {
            name: "Rage Damage",
            amount: "+2",
          },
        },
      },
      {
        lvl: 4,
        abilities: [
          {
            name: "Ability Score Improvement",
            description:
              "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\u2109t increase an ability score above 20 using this feature.",
            action: false,
          },
        ],
        prof: 2,
        classFeature: {
          name: "Rage",
          amount: "3/long rest",
          bonus: {
            name: "Rage Damage",
            amount: "+2",
          },
        },
      },
      {
        lvl: 5,
        abilities: [
          {
            name: "Extra Attack",
            description:
              "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
            action: true,
          },
          {
            name: "Fast Movement",
            description:
              "Starting at 5th level, your speed increases by 10 feet while you aren\u2019t wearing heavy armor.",
            action: false,
          },
        ],
        prof: 3,
        classFeature: {
          name: "Rage",
          amount: "3/long rest",
          bonus: {
            name: "Rage Damage",
            amount: "+2",
          },
        },
      },
      {
        lvl: 6,
        abilities: [],
        prof: 3,
        classFeature: {
          name: "Rage",
          amount: "4/long rest",
          bonus: {
            name: "Rage Damage",
            amount: "+2",
          },
        },
      },
      {
        lvl: 7,
        abilities: [
          {
            name: "Feral Instinct",
            description:
              "By 7th level, your instincts are so honed that you have advantage on initiative rolls. Additionally, if you are surprised at the beginning of combat and aren\u2109t incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.",
            action: false,
          },
        ],
        prof: 3,
        classFeature: {
          name: "Rage",
          amount: "4/long rest",
          bonus: {
            name: "Rage Damage",
            amount: "+2",
          },
        },
      },
      {
        lvl: 8,
        abilities: [
          {
            name: "Ability Score Improvement",
            description:
              "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\u2109t increase an ability score above 20 using this feature.",
            action: false,
          },
        ],
        prof: 3,
        classFeature: {
          name: "Rage",
          amount: "4/long rest",
          bonus: {
            name: "Rage Damage",
            amount: "+2",
          },
        },
      },
      {
        lvl: 9,
        abilities: [
          {
            name: "Brutal Critical",
            description:
              "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level.",
            action: false,
          },
        ],
        prof: 4,
        classFeature: {
          name: "Rage",
          amount: "4/long rest",
          bonus: {
            name: "Rage Damage",
            amount: "+3",
          },
        },
      },
      {
        lvl: 10,
        abilities: [],
        prof: 4,
        classFeature: {
          name: "Rage",
          amount: "4/long rest",
          bonus: {
            name: "Rage Damage",
            amount: "+3",
          },
        },
      },
      {
        lvl: 11,
        abilities: [
          {
            name: "Relentless Rage",
            description:
              "Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you\u2019re raging and don\u2019t die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead. Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.",
            action: false,
          },
        ],
        prof: 4,
        classFeature: {
          name: "Rage",
          amount: "4/long rest",
          bonus: {
            name: "Rage Damage",
            amount: "+3",
          },
        },
      },
      {
        lvl: 12,
        abilities: [
          {
            name: "Ability Score Improvement",
            description:
              "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\u2109t increase an ability score above 20 using this feature.",
            action: false,
          },
        ],
        prof: 4,
        classFeature: {
          name: "Rage",
          amount: "5/long rest",
          bonus: {
            name: "Rage Damage",
            amount: "+3",
          },
        },
      },
      {
        lvl: 13,
        abilities: [
          {
            name: "Brutal Critical Improvment",
            description:
              "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level.",
            action: false,
          },
        ],
        prof: 5,
        classFeature: {
          name: "Rage",
          amount: "5/long rest",
          bonus: {
            name: "Rage Damage",
            amount: "+3",
          },
        },
      },
      {
        lvl: 14,
        abilities: [],
        prof: 5,
        classFeature: {
          name: "Rage",
          amount: "5/long rest",
          bonus: {
            name: "Rage Damage",
            amount: "+3",
          },
        },
      },
      {
        lvl: 15,
        abilities: [
          {
            name: "Persistant Rage",
            description:
              "Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it.",
            action: false,
          },
        ],
        prof: 5,
        classFeature: {
          name: "Rage",
          amount: "5/long rest",
          bonus: {
            name: "Rage Damage",
            amount: "+3",
          },
        },
      },
      {
        lvl: 16,
        abilities: [
          {
            name: "Ability Score Improvement",
            description:
              "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\u2109t increase an ability score above 20 using this feature.",
            action: false,
          },
        ],
        prof: 5,
        classFeature: {
          name: "Rage",
          amount: "5/long rest",
          bonus: {
            name: "Rage Damage",
            amount: "+4",
          },
        },
      },
      {
        lvl: 17,
        abilities: [
          {
            name: "Brutal Critical Improvment",
            description:
              "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level.",
            action: false,
          },
        ],
        prof: 6,
        classFeature: {
          name: "Rage",
          amount: "6/long rest",
          bonus: {
            name: "Rage Damage",
            amount: "+4",
          },
        },
      },
      {
        lvl: 18,
        abilities: [
          {
            name: "Indomitable Might",
            description:
              "Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total.",
            action: false,
          },
        ],
        prof: 6,
        classFeature: {
          name: "Rage",
          amount: "6/long rest",
          bonus: {
            name: "Rage Damage",
            amount: "+4",
          },
        },
      },
      {
        lvl: 19,
        abilities: [
          {
            name: "Ability Score Improvement",
            description:
              "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\u2109t increase an ability score above 20 using this feature.",
            action: false,
          },
        ],
        prof: 6,
        classFeature: {
          name: "Rage",
          amount: "6/long rest",
          bonus: {
            name: "Rage Damage",
            amount: "+4",
          },
        },
      },
      {
        lvl: 20,
        abilities: [
          {
            name: "Primal Champion",
            description:
              "At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.",
            action: false,
          },
        ],
        prof: 6,
        classFeature: {
          name: "Rage",
          amount: "unlimited",
          bonus: {
            name: "Rage Damage",
            amount: "+4",
          },
        },
      },
    ],
    skills: [
      "Animal Handling",
      "Athletics",
      "Intimidation",
      "Nature",
      "Perception",
      "Survival",
    ],
    subclasses: [
      {
        name: "Path of Berserker",
        abilities: [
          {
            lvl: 3,
            name: "Frenzy",
            description:
              "Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion.",
            action: true,
          },
          {
            lvl: 6,
            name: "Mindless Rage",
            description:
              "Beginning at 6th level, you can\u2019t be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage.",
            action: false,
          },
          {
            lvl: 10,
            name: "Intimidating Presence",
            description:
              "Beginning at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you. If the creature succeeds on its saving throw, you can\u2109t use this feature on that creature again for 24 hours.",
            action: true,
          },
          {
            lvl: 14,
            name: "Retaliation",
            description:
              "Starting at 14th level, when you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon attack against that creature.",
            action: false,
          },
        ],
      },
      {
        name: "Path of the Totem Warrior",
        abilities: [
          {
            lvl: 3,
            name: "Spirit Seeker",
            description:
              "Yours is a path that seeks attunement with the natural world, giving you a kinship with beasts. At 3rd level when you adopt this path, you gain the ability to cast the Beast Sense and Speak with Animals spells, but only as rituals.",
            action: false,
          },
          {
            lvl: 3,
            name: "Totem Spirit",
            description:
              "At 3rd level, when you adopt this path, you choose a totem spirit and gain its feature. You must make or acquire a physical totem object, an amulet or similar adornment, that incorporates fur or feathers, claws, teeth, or bones of the totem animal. At your option, you also gain minor physical attributes that are reminiscent of your totem spirit. For example, if you have a bear totem spirit, you might be unusually hairy and thick-skinned, or if your totem is the eagle, your eyes turn bright yellow. Your totem animal might be an animal related to those listed here but more appropriate to your homeland. For example, you could choose a hawk or vulture in place of an eagle. Bear. While raging, you have resistance to all damage except psychic damage. The spirit of the bear makes you tough enough to stand up to any punishment. Eagle. While you're raging and aren't wearing heavy armor, other creatures have disadvantage on opportunity attack rolls against you, and you can use the Dash action as a bonus action on your turn. The spirit of the eagle makes you into a predator who can weave through the fray with ease. Elk. While you're raging and aren't wearing heavy armor, your walking speed increases by 15 feet. The spirit of the elk makes you extraordinarily swift. Tiger. While raging, you can add 10 feet to your long jump distance and 3 feet to your high jump distance. The spirit of the tiger empowers your leaps. Wolf. While you're raging, your friends have advantage on melee attack rolls against any creature within 5 feet of you that is hostile to you. The spirit of the wolf makes you a leader of hunters.",
            action: true,
          },
          {
            lvl: 6,
            name: "Aspect of the Beast",
            description:
              "At 6th level, you gain a magical benefit based on the totem animal of your choice. You can choose the same animal you selected at 3rd level or a different one. Bear. You gain the might of a bear. Your carrying capacity (including maximum load and maximum lift) is doubled, and you have advantage on Strength checks made to push, pull, lift, or break objects. Eagle. You gain the eyesight of an eagle. You can see up to 1 mile away with no difficulty, able to discern even fine details as though looking at something no more than 100 feet away from you. Additionally, dim light doesn't impose disadvantage on your Wisdom (Perception) checks. Elk. Whether mounted or on foot, your travel pace is doubled, as is the travel pace of up to ten companions while they're within 60 feet of you and you're not incapacitated. The elk spirit helps you roam far and fast. Tiger. You gain proficiency in two skills from the following list: Athletics, Acrobatics, Stealth, and Survival. The cat spirit hones your survival instincts. Wolf. You gain the hunting sensibilities of a wolf. You can track other creatures while traveling at a fast pace, and you can move stealthily while traveling at a normal pace.",
            action: false,
          },
          {
            lvl: 10,
            name: "Spirit Walker",
            description:
              "At 10th level, you can cast the Commune with Nature spell, but only as a ritual. When you do so, a spiritual version of one of the animals you chose for Totem Spirit or Aspect of the Beast appears to you to convey the information you seek.",
            action: false,
          },
          {
            lvl: 14,
            name: "Totemic Attunement",
            description:
              "At 14th level, you gain a magical benefit based on a totem animal of your choice. You can choose the same animal you selected previously or a different one. Bear. While you're raging, any creature within 5 feet of you that's hostile to you has disadvantage on attack rolls against targets other than you or another character with this feature. An enemy is immune to this effect if it can't see or hear you or if it can't be frightened. Eagle. While raging, you have a flying speed equal to your current walking speed. This benefit works only in short bursts; you fall if you end your turn in the air and nothing else is holding you aloft. Elk. While raging, you can use a bonus action during your move to pass through the space of a Large or smaller creature. That creature must succeed on a Strength saving throw (DC 8 + your Strength bonus + your proficiency bonus) or be knocked prone and take bludgeoning damage equal to 1d12 + your Strength modifier. Tiger. While you're raging, if you move at least 20 feet in a straight line toward a Large or smaller target right before making a melee weapon attack against it, you can use a bonus action to make an additional melee weapon attack against it. Wolf. While you're raging, you can use a bonus action on your turn to knock a Large or smaller creature prone when you hit it with melee weapon attack.",
          },
        ],
      },
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
