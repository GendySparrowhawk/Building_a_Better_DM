const Monster = require("../models/Monsters");

const monsterData = [
  {
    name: "Aarakocra",
    img: "https://www.aidedd.org/dnd/images/aarakocra.jpg",
    subClass: "medium, humanoid",
    alignment: "neutral good",
    ac: "12",
    hp: "13",
    speed: "20ft, fly 50ft",
    str: [{ score: "10", modifier: "0" }],
    dex: [{ score: "14", modifier: "+2" }],
    con: [{ score: "10", modifier: "+0" }],
    int: [{ score: "11", modifier: "+1" }],
    wis: [{ score: "12", modifier: "+1" }],
    cha: [{ score: "11", modifier: "+0" }],
    saveThrows: "",
    skills: "Perception +5",
    senses: "passive perception 15",
    languages: "Auran, Aarakocra",
    challenge: "1/4",
    traits: [{ name: "Enemies of Elemental Evil", description: "In service to the wind Dukes of Aaqa, aarakocra scout the planes in search of temples of Elemental Evil. They spy on the malign elemental creatures and then either take the fight to those creatures or report back to the Wind Dukes. On the Material Plane aarakocra create aeries atop high mountains, especially peaks near portals to the Elemental Plane of Air. From such heights, aarakocra watch for signs of elemental incursions, as well as nascent threats to their home plane. Aarakocra prefer to live life like the wind- unburdened by and ever moving-yet they watch over a region for years if hats what it takes to guard against the incursion of Elemental Evil. Aarakocra have no concept of political borders r property ownership, and the value of gems, gold, and other precious materials means little to an Aarakocra. In their eyes, a creature should use what is necessary and then cast what is left to the wind to let others use. " }, { name: "Search for the Seven Shards", description: "The Wind Dukes of Aaqa come from a race of elemental beings called Vaati, which once ruled many worlds. A creature known as the Queen of Chaos arose and initiated an interplanar war against Vaati rule. To combat the threat seven Vaati heroes combined their powers to create the mighty Rod of Law. In battle against the queens greatest general, Miska the wolf-spier, a Vaati killed Miska by thrusting the rod into him like a spear. The rod shattered into seven shards that scattered throughout the multiverse. Aarakocra seek signs of the pieces’ locations in order to rebuild what is now know as the Rod of Seven Parts."}],
    actions: [
      {
        name: "Dive Attack",
        description:
          " If the aarakocra is flying and dives at least 30 feet straight toward a target and then hits it with a melee weapon attack, the attack deals an extra 3 (1d6) damage to the target.",
      },
      {
        name: "Summon Air Elemental",
        description:
          "Five aarakocra within 30 feet of each other can magically summon an air elemental. Each of the five must use its action and movement on three consecutive turns to perform an aerial dance and must maintain concentration while doing so (as if concentrating on a spell). When all five have finished their third turn of the dance, the elemental appears in an unoccupied space within 60 feet of them. It is friendly toward them and obeys their spoken commands. It remains for 1 hour, until it or all its summoners die, or until any of its summoners dismisses it as a bonus action. A summoner can't perform the dance again until it finishes a short rest. When the elemental returns to the Elemental Plane of Air, any aarakocra within 5 feet of it can return with it.",
      },
    ],
    attacks: [{ name: "Talon", toHit: "+6", damage: "1d4+4 slashing", description: "Melee weapon" }, { name: "javelin", toHit: "+4", damage: "1d6+2 piercing", description: "Ranged 30/120ft "}],
  },
];

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
