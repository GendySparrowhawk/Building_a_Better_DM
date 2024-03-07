const Race = require("../models/Races");

const raceData = [
  {
    name: "Dwarf",
    subraces: [
      {
        name: "Mountain Dwarf",
        traits: [
          {
            name: "Dwarven Armor Training",
            lvl: "1",
            description: "You have proficiency with light and medium armor",
            isPassive: true,
          },
        ],
        abilityScoreIncrease: [
          {
            name: "STR",
            amount: "+2",
          },
        ],
      },
      {
        name: "Hill Dwarf",
        traits: [
          {
            name: "Dwarven Toughness",
            lvl: "1",
            description:
              "Your hit point maximum increases by 1, and again by 1 each time you level up",
            isPassive: true,
          },
        ],
        abilityScoreIncrease: [
          {
            name: "WIS",
            amount: "+1",
          },
        ],
      },
      {
        name: "Duergar",
        traits: [
          {
            name: "Superior Darkvision",
            lvl: "1",
            description: "you have 120 ft darkvision",
            isPassive: true,
          },
          {
            name: "Sunlight Sensitivity",
            lvl: "1",
            description:
              "You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.",
            isPassive: true,
          },
          {
            name: "Duergar Magic",
            lvl: "3",
            description:
              "At 3rd level you can cast the enlarge/reduce spell on yourself once (enlarge only).",
            isPassive: true,
          },
          {
            name: "Duergar Magic",
            lvl: "5",
            description:
              "At 5th level you can cast the invisibility spell on yourself once. You regain all uses of these spells after a long rest, or a short or long rest if you are in the Underdark. Your spellcasting ability for these spells is Intelligence.",
            isPassive: true,
          },
          {
            name: "Duergar Resilience",
            lvl: "1",
            description:
              "You have advantage on saving throws against illusions and against being charmed or paralyzed.",
            isPassive: true,
          },
        ],
      },
    ],
    size: "Medium",
    speed: "25ft",
    alignment: "Lawful",
    languages: ["Dwarvish", "Common"],
    abilityScoreIncrease: [
      {
        name: "CON",
        amount: "2",
      },
    ],
    WeaponProficiencies: ["battleaxe", "handaxe", "light hammer", "warhammer"],
    ToolProficiencies: ["Mason Tools", "Brewer Supplies"],
    traits: [
      {
        name: "Darkvision",
        lvl: "1",
        description:
          "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\u2109t discern color in darkness, only shades of gray",
        isPassive: true,
      },
      {
        name: "Dwarven Resilience",
        lvl: "1",
        description:
          "You have advantage on saving throws against poison, and you have resistance against poison damage",
        isPassive: true,
      },
      {
        name: "Stonecunning",
        lvl: "1",
        description:
          "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.",
        isPassive: true,
      },
    ],
  },
  {
    name: "Elf",
    subraces: [
      {
        name: "Eladrin",
        traits: [
          {
            name: "Fey Step",
            lvl: "1",
            description:
              "You can cast the misty step spell once using this trait. You regain the ability to do so when you finish a short or long rest.",
            isPassive: true,
          },
        ],
        abilityScoreIncrease: [
          {
            name: "INT",
            amount: "1",
          },
        ],
      },
      {
        name: "High Elf",
        traits: [
          {
            name: "Cantrip",
            lvl: "1",
            description:
              "You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.",
            isPassive: true,
          },
          {
            name: "Extra Language",
            lvl: "1",
            description:
              "You can speak, read, and write one extra language of your choice.",
            isPassive: true,
          },
        ],
        abilityScoreIncrease: [
          {
            name: "INT",
            amount: "1",
          },
        ],
      },
      {
        name: "Wood Elf",
        traits: [
          {
            name: "Fleet of Foot",
            lvl: "1",
            description: "Your base walking speed increases to 35 feet",
            isPassive: true,
          },
          {
            name: "Mask of the Wild",
            lvl: "1",
            description:
              "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.",
            isPassive: true,
          },
        ],
        abilityScoreIncrease: [
          {
            name: "WIS",
            amount: "1",
          },
        ],
      },
      {
        name: "Pallid Elf",
        traits: [
          {
            name: "Incisive Sense",
            lvl: "1",
            description:
              "You have advantage on Investigation and Insight checks.",
            isPassive: true,
          },

          {
            name: "Blessing of the Moonweaver",
            lvl: "1",
            description:
              "You know the Light cantrip. When you reach 3rd level, you can cast Sleep once, and it recharges after a long rest. When you reach 5th level, you can cast Invisibility (Self Only) once, and it recharges after a long rest. You do not need the material components required of the spells. Wisdom is your spellcasting ability for these spells.",
            isPassive: true,
          },
        ],
        abilityScoreIncrease: [
          {
            name: "WIS",
            amount: "1",
          },
        ],
      },
      {
        name: "Mark of Shadow",
        lvl: "1",
        traits: [
          {
            name: "Cunning Intuition",
            description:
              "Whenever you roll a Dexterity (Stealth) check or a Charisma (Performance) check, roll a d4 and add the number rolled to the total ability check.",
            isPassive: true,
          },
          {
            name: "Shape Shadows",
            description:
              "You know the Minor Illusion cantrip. Starting at 3rd level, you can also cast the Invisibility spell with this trait. Once you cast either spell with this trait, you can't cast that spell again until you finish a long rest. Charisma is your Spellcasting Ability for these spells.",
          },
          {
            name: "Spells of the Mark",
            description:
              " If you have the Spellcasting or Pact Magic class features, the spells on the Mark of Shadow Spells table are added to the spell list of your spellcasting class. lvl 1 - 	Disguise Self, Silent Image.  lvl 2 -  	Darkness, Pass Without Trace.  lvl 3 - 	Clairvoyance, Major Image.  lvl 4 - Greater Invisibility, Hallucinatory Terrain.  lvl 5 	Mislead.",
            isPassive: true,
          },
        ],
        abilityScoreIncrease: [
          {
            name: "CHA",
            amount: "1",
          },
        ],
      },
      {
        name: "Astrl Elf",
        traits: [
          {
            name: "Astral Fire",
            lvl: "1",
            description:
              "You know one of the following cantrips of your choice: Dancing Lights, Light, or Sacred Flame. Intelligence, Wisdom, or Charisma is your spellcasting ability for it (choose when you select this race).",
            isPassive: true,
          },
          {
            name: "Starlight Step",
            lvl: "1",
            description:
              "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest",
            isBonusAction: true,
          },
        ],
        abilityScoreIncrease: [
          {
            name: "ANY",
            amount: "3",
          },
        ],
      },
    ],
    size: "Medium",
    speed: "30ft",
    languages: ["Common", "Elvish"],
    abilityScoreIncrease: [
      {
        name: "DEX",
        amount: "2",
      },
    ],

    traits: [
      {
        name: "Darkvision",
        lvl: "1",
        description:
          "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\u2019t discern color in darkness, only shades of gray.",
        isPassive: ture,
      },
      {
        name: "Fey Ancestry",
        lvl: "1",
        description:
          "You have advantage on saving throws against being charmed, and magic can\u20109t put you to sleep.",
        isPassive: true,
      },
      {
        name: "Trance",
        lvl: "1",
        description:
          "Elves don\u2019t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.",
        isPassive: true,
      },
      {
        name: "Drow",
        traits: [
          {
            name: "Superior Darkvision",
            lvl: "1",
            description:
              "Your darkvision has a range of 120 feet, instead of 60.",
            isPassive: true,
          },
          {
            name: "Sunlight Sensitivity",
            lvl: "1",
            description:
              "You have disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight when you, the target of the attack, or whatever you are trying to perceive is in direct sunlight.",
            isPassive: true,
          },
          {
            name: "Drow Magic",
            lvl: "1",
            description:
              "You know the Dancing Lights cantrip. When you reach 3rd level, you can cast the Faerie Fire spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the Darkness spell once and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
            isPassive: true,
          },
        ],
        weaponProficiencies: ["Rapier", "Hand Crossbow"],
        abilityScoreIncrease: [
          {
            name: "CHA",
            amount: "1",
          },
        ],
      },
    ],
    weaponProficiencies: ["Longsword", "Shortsword", "Longbow"],
    skillProficiencies: ["Perception"],
  },
  {
    name: "Halfling",
    subraces: [
      {
        name: "Lightfoot Halfling",
        traits: [
          {
            name: "Naturally Stealthy",
            lvl: "1",
            description:
              "You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.",
            isPassive: true,
          },
        ],
        abilityScoreIncrease: [
          {
            name: "CHA",
            amount: "1",
          },
        ],
      },
      {
        name: "Stout",
        traits: [
          {
            name: "Stout Resilience",
            lvl: "1",
            description:
              " You have advantage on saving throws against poison, and you have resistance to poison damage.",
            isPassive: true,
          },
        ],
        abilityScoreIncrease: [
          {
            name: "CON",
            amount: "1",
          },
        ],
      },
      {
        name: "Ghostwise",
        traits: [
          {
            naem: "Silent Speech.",
            lvl: "1",
            description:
              "You can speak telepathically to any creature within 30 feet of you. The creature understands you only if the two of you share a language. You can speak telepathically in this way to one creature at a time.",
            isPassive: true,
          },
        ],
        abilityScoreIncrease: [
          {
            name: "WIS",
            amount: "1",
          },
        ],
      },
    ],
    size: "small",
    speed: "25ft",
    alignment: "Lawful good",
    languages: ["Halfling", "Common"],
    abilityScoreIncrease: [
      {
        name: "DEX",
        amount: "2",
      },
    ],
    traits: [
      {
        name: "Brave",
        lvl: "1",
        description:
          "You have advantage on saving throws against being frightened.",
        isPassive: "true",
      },
      {
        name: "Lucky",
        lvl: "1",
        description:
          "When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.",
        isPassive: true,
      },
      {
        name: "Halfling Nimbleness",
        lvl: "1",
        description:
          "You can move through the space of any creature that is of a size larger than yours.",
      },
    ],
  },
  {
    name: "Human",
    
  }
];

async function seedRaces() {
  try {
    const existingRaces = await Race.find({});

    for (const race of raceData) {
      const isExisting = existingRaces.some(
        (existingRace) => existingRace.name === race.name
      );

      if (!isExisting) {
        await Race.create(race);
        console.log(`${race.name} added!`);
      } else {
        await Race.findOneAndUpdate({ name: race.name });
        console.log(`${race.name} updated!`);
      }
    }
  } catch (eer) {
    console.error("Error seeding races", err);
  }
}

module.exports = { seedRaces };
