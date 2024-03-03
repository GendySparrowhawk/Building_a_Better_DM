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
          },
          {
            name: "Sunlight Sensitivity",
            lvl: "1",
            description:
              "You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.",
          },
          {
            name: "Duergar Magic",
            lvl: "3",
            description:
              "At 3rd level you can cast the enlarge/reduce spell on yourself once (enlarge only).",
          },
          {
            name: "Duergar Magic",
            lvl: "5",
            description:
              "At 5th level you can cast the invisibility spell on yourself once. You regain all uses of these spells after a long rest, or a short or long rest if you are in the Underdark. Your spellcasting ability for these spells is Intelligence.",
          },
          {
            name: "Duergar Resilience",
            lvl: "1",
            description:
              "You have advantage on saving throws against illusions and against being charmed or paralyzed.",
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
    proficiencies: [
      "battleaxe",
      "handaxe",
      "light hammer",
      "warhammer",
      "smith's tools",
      "mason tools",
      "brewers supplies",
    ],
    traits: [
      {
        name: "Darkvision",
        lvl: "1",
        description:
          "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\u2109t discern color in darkness, only shades of gray",
      },
      {
        name: "Dwarven Resilience",
        lvl: "1",
        description:
          "You have advantage on saving throws against poison, and you have resistance against poison damage",
      },
      {
        name: "Stonecunning",
        lvl: "1",
        description:
          "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.",
      },
    ],
  },
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
