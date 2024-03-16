const Monster = require("../models/Monsters");

const monsterData = [
  {
    name: "Aarakocra",
    monsterCatagorey: ["Aarakocra"],
    img: "https://www.aidedd.org/dnd/images/aarakocra.jpg",
    monsterType: "humanoid",
    size: "medium",
    alignment: "neutral good",
    ac: "12",
    hp: "13",
    speed: "20ft, fly 50ft",
    statBlock: {
      str: [{ score: "10", modifier: "0" }],
      dex: [{ score: "14", modifier: "+2" }],
      con: [{ score: "10", modifier: "+0" }],
      int: [{ score: "11", modifier: "+1" }],
      wis: [{ score: "12", modifier: "+1" }],
      cha: [{ score: "11", modifier: "+0" }],
    },
    saveThrows: "",
    skills: "Perception +5",
    senses: "passive perception 15",
    languages: "Auran, Aarakocra",
    challenge: "1/4",
    traits: [
      {
        name: "Enemies of Elemental Evil",
        description:
          "In service to the wind Dukes of Aaqa, aarakocra scout the planes in search of temples of Elemental Evil. They spy on the malign elemental creatures and then either take the fight to those creatures or report back to the Wind Dukes. On the Material Plane aarakocra create aeries atop high mountains, especially peaks near portals to the Elemental Plane of Air. From such heights, aarakocra watch for signs of elemental incursions, as well as nascent threats to their home plane. Aarakocra prefer to live life like the wind- unburdened by and ever moving-yet they watch over a region for years if hats what it takes to guard against the incursion of Elemental Evil. Aarakocra have no concept of political borders r property ownership, and the value of gems, gold, and other precious materials means little to an Aarakocra. In their eyes, a creature should use what is necessary and then cast what is left to the wind to let others use. ",
      },
      {
        name: "Search for the Seven Shards",
        description:
          "The Wind Dukes of Aaqa come from a race of elemental beings called Vaati, which once ruled many worlds. A creature known as the Queen of Chaos arose and initiated an interplanar war against Vaati rule. To combat the threat seven Vaati heroes combined their powers to create the mighty Rod of Law. In battle against the queens greatest general, Miska the wolf-spier, a Vaati killed Miska by thrusting the rod into him like a spear. The rod shattered into seven shards that scattered throughout the multiverse. Aarakocra seek signs of the pieces\u2019 locations in order to rebuild what is now know as the Rod of Seven Parts.",
      },
    ],
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
    attacks: [
      {
        name: "Talon",
        toHit: "+6",
        damage: "1d4+4 slashing",
        description: "Melee weapon",
      },
      {
        name: "javelin",
        toHit: "+4",
        damage: "1d6+2 piercing",
        description: "Ranged 30/120ft ",
      },
    ],
  },
  {
    name: "Aboleth",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fforgottenrealms.fandom.com%2Fwiki%2FAboleth&psig=AOvVaw2obyFY-tnerH0DwIceAc4j&ust=1710700043330000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIiBmLW0-YQDFQAAAAAdAAAAABAE",
    monsterType: "Aberration",
    size: "large",
    alignment:"Lawful evil",
    ac: "17",
    hp: "135",
    hitDice: "18d10+36",
    speed: "10ft, swim 40ft",
    statBlock:[{
      name: "STR",
      score: "21",
      modifier: "5"
    },
  {
    name: "DEX",
    score: "9",
    modifier: "-1"
  },
  {
    name: "CON",
    score: "15",
    modifier: "2"
  },
{
  name: "INT",
  score: "18",
  modifier: "4"
},
{
  name: "WIS",
  score: "15",
  modifier: "2"
},
{
  name: "CHA",
  score: "18",
  modifier: "4"
}],
saveThrows: "CON +6, INT +8, WIS +6",
skills: "History +12, Perception +10",
senses: "darkvision 120ft, passive perception 20",
languages: "Deep Speech, telepathy 120ft",
challenge: "10",
traits: [{
  name: "Eternal Memories",
  description: "Aboleths have flawless memories. They pass on their knowledge and experience from generation to generation. Thus, the injury of their defeat by the gods remains perfectly preserved in their minds. Aboleth\u2019s minds are treasure troves of ancient lore, recalling moments from prehistory with perfect clarity. They plot patiently and interictally across eons. Few creatures can conceive of the extant of an Aboleth\u2019s plan.",
  },
{
  name: "Gods in the Lake ",
  description: "Aboleths dwell in watery environments, including ocean abysses, deep lakes, and the elemental pane of water. In these domains and in the lands that adjoin them, Aboleths are like gods, demanding worship and obedience from their subjects. When they consume other creatures, they add their memories and their experiences of their prey to their eternal memories. Aboleths use their telepathic powers to read the minds of creatures and learn their desires. An Aboleth uses this knowledge to gain a creature\u2019s loyalty, promising to fulfill such wishes in exchange for obedience. Within its lair an Aboleth can further use its powers to override senses, granting creatures, such as its followers, the illusion of promised rewards. "
},
{
  name: "Enemies of the Gods ",
  description: "The Aboleth\u2019s fall from power is written in stark clarity on their flawless memories., for Aboleths never truly die. If an Aboleth\u2019s body is destroyed, its spirit returns to the leental plane of water and a new body coalesces for it over days or months. Ultimately, aboleths dream of overthrowing the gods and regaining control of the world. Aboleths have had untold eons to plot and prepare their plans for the perfect execution. "
}],
actions: [{
  name: "Amphibious",
  description: "the Aboleth can breath both air and water"
},
{
  name: "Mucous Cloud",
  description: "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 feet of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater.",
},
{
  name: "Probing Telepathy",
  description: "If a creature communicates telepathically with the aboleth, the aboleth learns the creature\u2019s greatest desires if the aboleth can see the creature."
},
{
  name: "Enslave (3/Day)",
  description: " The aboleth targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth\u2019s control and can\u2019t take reactions, and the aboleth and the target can communicate telepathically with each other over any distance. Whenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth."
},
{
  name: "Regional Effects",
  description: "As an action, the aboleth can create an illusory image of itself within 1 mile of the lair. The copy can appear at any location the aboleth has seen before or in any location a creature charmed by the aboleth can currently see. Once created, the image lasts for as long as the aboleth maintains concentration, as if concentrating on a spell. Although the image is intangible, it looks, sounds, and can move like the aboleth. The aboleth can sense, speak, and use telepathy from the image\u2019s position as if present at that position. If the image takes any damage, it disappears. If the aboleth dies, the first two effects fade over the course of 3d10 days"
},
{
  name: "Regional Effects",
  description: "Water sources within 1 mile of the lair are supernaturally fouled. Enemies of the aboleth that drink such water vomit it within minutes."
},
{
  name: "Regional Effects",
  description: "Underground surfaces within 1 mile of the aboleth\u2019s lair are slimy and wet and are difficult terrain."
}],
attacks: [{
  name: "Multiattack",
  description: "The aboleth makes three tentacle attacks"
},
{
  name: "Tentacle",
  toHit: "9",
  damage: "2D6+5",
  damageType: "bludgeoning",
  description: " If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature\u2019s skin becomes translucent and slimy, the creature can\u2019t regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed."
},
{
  name: "Tail",
  toHit: "9",
  damage: "3d6+5",
  damageType: "bludgeoning",
}],
legendaryActions: [{
  name: "Detect",
  description: "The aboleth makes a Wisdom (Perception) check."
},
{
  name: "Tail Swipe",
  description: "The aboleth makes one tail attack"
},
{
  name: "Psychic Drain (Costs 2 Actions)",
  description: "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes."
}],
lairActions: [{
  name: "Phantasmal Force",
  description: "The aboleth casts phantasmal force (no components required) on any number of creatures it can see within 60 feet of it. While maintaining concentration on this effect, the aboleth can\u2019t take other lair actions. If a target succeeds on the saving throw or if the effect ends for it, the target is immune to the aboleth\u2019s phantasmal force lair action for the next 24 hours, although such a creature can choose to be affected."
},
{
  name: "grasping tide",
  description: "Pools of water within 90 feet of the aboleth surge outward in a grasping tide. Any creature on the ground within 20 feet of such a pool must succeed on a DC 14 Strength saving throw or be pulled up to 20 feet into the water and knocked prone. The aboleth can\u2019t use this lair action again until it has used a different one."
},
{
  name: "rage",
  description: "Water in the aboleth\u2019s lair magically becomes a conduit for the creature\u2019s rage. The aboleth can target any number of creatures it can see in such water within 90 feet of it. A target must succeed on a DC 14 Wisdom saving throw or take 7 (2d6) psychic damage. The aboleth can\u2019t use this lair action again until it has used a different one."
}]
  }
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
