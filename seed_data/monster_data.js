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
    hitDice: "3d8",
    speed: "20ft, fly 50ft",
    statBlock: [
      {
        name: "STR",
        score: "10",
        modifier: "0",
      },
      {
        name: "DEX",
        score: "14",
        modifier: "2",
      },
      {
        name: "CON",
        score: "10",
        modifier: "0",
      },
      {
        name: "INT",
        score: "11",
        modifier: "0",
      },
      {
        name: "WIS",
        score: "12",
        modifier: "1",
      },
      {
        name: "CHA",
        score: "11",
        modifier: "0",
      },
    ],
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
          "If the aarakocra is flying and dives at least 30 feet straight toward a target and then hits it with a melee weapon attack, the attack deals an extra 3 (1d6) damage to the target.",
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
    alignment: "Lawful evil",
    ac: "17",
    hp: "135",
    hitDice: "18d10+36",
    speed: "10ft, swim 40ft",
    statBlock: [
      {
        name: "STR",
        score: "21",
        modifier: "5",
      },
      {
        name: "DEX",
        score: "9",
        modifier: "-1",
      },
      {
        name: "CON",
        score: "15",
        modifier: "2",
      },
      {
        name: "INT",
        score: "18",
        modifier: "4",
      },
      {
        name: "WIS",
        score: "15",
        modifier: "2",
      },
      {
        name: "CHA",
        score: "18",
        modifier: "4",
      },
    ],
    saveThrows: "CON +6, INT +8, WIS +6",
    skills: "History +12, Perception +10",
    senses: "darkvision 120ft, passive perception 20",
    languages: "Deep Speech, telepathy 120ft",
    challenge: "10",
    traits: [
      {
        name: "Eternal Memories",
        description:
          "Aboleths have flawless memories. They pass on their knowledge and experience from generation to generation. Thus, the injury of their defeat by the gods remains perfectly preserved in their minds. Aboleth\u2019s minds are treasure troves of ancient lore, recalling moments from prehistory with perfect clarity. They plot patiently and interictally across eons. Few creatures can conceive of the extant of an Aboleth\u2019s plan.",
      },
      {
        name: "Gods in the Lake ",
        description:
          "Aboleths dwell in watery environments, including ocean abysses, deep lakes, and the elemental pane of water. In these domains and in the lands that adjoin them, Aboleths are like gods, demanding worship and obedience from their subjects. When they consume other creatures, they add their memories and their experiences of their prey to their eternal memories. Aboleths use their telepathic powers to read the minds of creatures and learn their desires. An Aboleth uses this knowledge to gain a creature\u2019s loyalty, promising to fulfill such wishes in exchange for obedience. Within its lair an Aboleth can further use its powers to override senses, granting creatures, such as its followers, the illusion of promised rewards. ",
      },
      {
        name: "Enemies of the Gods ",
        description:
          "The Aboleth\u2019s fall from power is written in stark clarity on their flawless memories., for Aboleths never truly die. If an Aboleth\u2019s body is destroyed, its spirit returns to the leental plane of water and a new body coalesces for it over days or months. Ultimately, aboleths dream of overthrowing the gods and regaining control of the world. Aboleths have had untold eons to plot and prepare their plans for the perfect execution. ",
      },
    ],
    actions: [
      {
        name: "Amphibious",
        description: "the Aboleth can breath both air and water",
      },
      {
        name: "Mucous Cloud",
        description:
          "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 feet of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater.",
      },
      {
        name: "Probing Telepathy",
        description:
          "If a creature communicates telepathically with the aboleth, the aboleth learns the creature\u2019s greatest desires if the aboleth can see the creature.",
      },
      {
        name: "Enslave (3/Day)",
        description:
          " The aboleth targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth\u2019s control and can\u2019t take reactions, and the aboleth and the target can communicate telepathically with each other over any distance. Whenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.",
      },
      {
        name: "Regional Effects",
        description:
          "As an action, the aboleth can create an illusory image of itself within 1 mile of the lair. The copy can appear at any location the aboleth has seen before or in any location a creature charmed by the aboleth can currently see. Once created, the image lasts for as long as the aboleth maintains concentration, as if concentrating on a spell. Although the image is intangible, it looks, sounds, and can move like the aboleth. The aboleth can sense, speak, and use telepathy from the image\u2019s position as if present at that position. If the image takes any damage, it disappears. If the aboleth dies, the first two effects fade over the course of 3d10 days",
      },
      {
        name: "Regional Effects",
        description:
          "Water sources within 1 mile of the lair are supernaturally fouled. Enemies of the aboleth that drink such water vomit it within minutes.",
      },
      {
        name: "Regional Effects",
        description:
          "Underground surfaces within 1 mile of the aboleth\u2019s lair are slimy and wet and are difficult terrain.",
      },
    ],
    attacks: [
      {
        name: "Multiattack",
        description: "The aboleth makes three tentacle attacks",
      },
      {
        name: "Tentacle",
        toHit: "9",
        damage: "2D6+5",
        damageType: "bludgeoning",
        description:
          " If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature\u2019s skin becomes translucent and slimy, the creature can\u2019t regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed.",
      },
      {
        name: "Tail",
        toHit: "9",
        damage: "3d6+5",
        damageType: "bludgeoning",
      },
    ],
    legendaryActions: [
      {
        name: "Detect",
        description: "The aboleth makes a Wisdom (Perception) check.",
      },
      {
        name: "Tail Swipe",
        description: "The aboleth makes one tail attack",
      },
      {
        name: "Psychic Drain (Costs 2 Actions)",
        description:
          "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes.",
      },
    ],
    lairActions: [
      {
        name: "Phantasmal Force",
        description:
          "The aboleth casts phantasmal force (no components required) on any number of creatures it can see within 60 feet of it. While maintaining concentration on this effect, the aboleth can\u2019t take other lair actions. If a target succeeds on the saving throw or if the effect ends for it, the target is immune to the aboleth\u2019s phantasmal force lair action for the next 24 hours, although such a creature can choose to be affected.",
      },
      {
        name: "grasping tide",
        description:
          "Pools of water within 90 feet of the aboleth surge outward in a grasping tide. Any creature on the ground within 20 feet of such a pool must succeed on a DC 14 Strength saving throw or be pulled up to 20 feet into the water and knocked prone. The aboleth can\u2019t use this lair action again until it has used a different one.",
      },
      {
        name: "rage",
        description:
          "Water in the aboleth\u2019s lair magically becomes a conduit for the creature\u2019s rage. The aboleth can target any number of creatures it can see in such water within 90 feet of it. A target must succeed on a DC 14 Wisdom saving throw or take 7 (2d6) psychic damage. The aboleth can\u2019t use this lair action again until it has used a different one.",
      },
    ],
  },
  {
    name: "Deva",
    monsterCatagorey: "Angel",
    img: "https://static.wikia.nocookie.net/criticalrole/images/0/02/Perigee_by_Nikki_Dawes.png/revision/latest?cb=20220923115256",
    monsterType: "celestial",
    size: "medium",
    alignment: "lawful good",
    ac: "17",
    hp: "136",
    hitDice: "16d8+64",
    speed: "30ft fly 90ft",
    statBlock: [
      {
        name: "STR",
        score: "18",
        modifier: "4",
      },
      {
        name: "DEX",
        score: "18",
        modifier: "4",
      },
      {
        name: "CON",
        score: "18",
        modifier: "4",
      },
      {
        name: "INT",
        score: "17",
        modifier: "3",
      },
      {
        name: "WIS",
        score: "20",
        modifier: "5",
      },
      {
        name: "CHA",
        score: "20",
        modifier: "5",
      },
    ],
    saveThrows: "WIS +9, CHA +9",
    skills: "Insight +9, perception +9",
    damageResistance: "radiant, bludgeoning, piercing, slashing",
    immunities: "Charmed, Exhaustion, Frightened",
    senses: "darkvision 120ft, passive perception 19",
    languages: "all, telepathy 120ft",
    challenge: "10",
    traits: [
      {
        name: "Angelic Weapons",
        description:
          "The Deva's weapons are magical. When the Deva hits with an attack, the weapon deals an additional 4d8 radiant damage",
      },
      {
        name: "Shards of the Divine",
        description:
          "Angels are formed form the astral essence of benevolent gods and are thus divine beings of great power and foresight. Angles act out the will of their gods with tireless devotion.  Even chaotic good deities command lawful good angles, knowing that the angles dedication to order best allows them to follow divine commands. An angel follows a single driving purpose, as decreed by its deity. However, an angel is incapable of following commands that stray from the path of law and good. An Angel slays evil creatures without remorse. As the embodiment of law and good, an angle is almost never mistaken in its judgments. This quality can create a sense of superiority in the angel, a sense that comes to the fore when an angel\u2019s task conflicts with another creatures. The angel never acquiesces or gives way. When an angel is sent to aid mortals, it is sent not to serve but to command. The gods of good therefore send angels among mortals only in response to the most dire of circumstances. ",
      },
      {
        name: "Fallen Angels ",
        description:
          "An angel\u2019s moral compass grants it a sense of infallibility that can sometimes spell its undoing. Angels are usually too wise to fall for a simple deception, but sometimes pride can lead one to commit an evil act. Whether intentional or accidental, such an act is a permanent stain that marks the angel as an outcast. Fallen Angels retain their power but lose their connection to the deities from which they were made. Most fallen angels take their banishment personally, rebelling against the powers they served by seeking rulership over a section of the Abyss or a place among other fallen hierarchy of the nine hells. Zariel, the ruler of the first layer of the nine hells, is such a creature. Rather than rebel, some rebel, some fallen angels resign themselves to an isolated existence on the material plane, living disguised as simple hermits. If they are redeemed, they can become powerful allies dedicated to justice and compassionate service. ",
      },
      {
        name: "Immortal Nature",
        description: "An angel does not require sleep, food or drink.",
      },
      {
        name: "Magical Resistance",
        description:
          "the Deva has advantage on saving throws against spells and other magical effects.",
      },
    ],
    actions: [
      {
        name: "Innate Spellcasting",
        description:
          "At will: detect evil and good, 1/day each: commune, raise dead",
      },
      {
        name: "Multiattack",
        description: "The deva makes two melee attacks",
      },
      {
        name: "Healing Touch (3/Day)",
        description:
          "The deva touches another creature. The target magically regains 20 (4d8 + 2) hit points and is freed from any curse, disease, poison, blindness, or deafness.",
      },
      {
        name: "Change Shape",
        description:
          "The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the deva's choice). In a new form, the deva retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and special senses are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks.",
      },
    ],
    attacks: [
      {
        name: "Mace",
        toHit: "8",
        damage: "1d6+4/4d8",
        damageType: "bludgeoning/radiant",
      },
    ],
  },
  {
    name: "Planetar",
    monsterCatagorey: "Angel",
    img: "https://cdnb.artstation.com/p/assets/images/images/050/208/361/large/lars2d_-70.jpg?1654295500",
    monsterType: "celestial",
    size: "large",
    alignment: "lawful good",
    ac: "19",
    hp: "200",
    hitDice: "16d10 + 112",
    speed: "40ft, fly 120ft",
    statBlock: [
      {
        name: "STR",
        score: "24",
        modifier: "7",
      },
      {
        name: "DEX",
        score: "20",
        modifier: "5",
      },
      {
        name: "CON",
        score: "27",
        modifier: "7",
      },
      {
        name: "INT",
        score: "19",
        modifier: "4",
      },
      {
        name: "WIS",
        score: "22",
        modifier: "6",
      },
      {
        name: "CHA",
        score: "25",
        modifier: "7",
      },
    ],
    saveThrows: "CON +12, WIS +11, CHA +12",
    skills: "perception +11",
    damageResistance: "radiant, bludgeoning, piercing, slashing",
    immunities: "Charmed, Exhaustion, Frightened",
    senses: "Truesight 120 ft, Passive Perception 21",
    languages: "All, telepathy 120 ft",
    challenge: "16",
    traits: [
      {
        name: "Angelic Weapons",
        description:
          "The Deva's weapons are magical. When the Deva hits with an attack, the weapon deals an additional 4d8 radiant damage",
      },
      {
        name: "Shards of the Divine",
        description:
          "Angels are formed form the astral essence of benevolent gods and are thus divine beings of great power and foresight. Angles act out the will of their gods with tireless devotion.  Even chaotic good deities command lawful good angles, knowing that the angles dedication to order best allows them to follow divine commands. An angel follows a single driving purpose, as decreed by its deity. However, an angel is incapable of following commands that stray from the path of law and good. An Angel slays evil creatures without remorse. As the embodiment of law and good, an angle is almost never mistaken in its judgments. This quality can create a sense of superiority in the angel, a sense that comes to the fore when an angel\u2019s task conflicts with another creatures. The angel never acquiesces or gives way. When an angel is sent to aid mortals, it is sent not to serve but to command. The gods of good therefore send angels among mortals only in response to the most dire of circumstances. ",
      },
      {
        name: "Fallen Angels ",
        description:
          "An angel\u2019s moral compass grants it a sense of infallibility that can sometimes spell its undoing. Angels are usually too wise to fall for a simple deception, but sometimes pride can lead one to commit an evil act. Whether intentional or accidental, such an act is a permanent stain that marks the angel as an outcast. Fallen Angels retain their power but lose their connection to the deities from which they were made. Most fallen angels take their banishment personally, rebelling against the powers they served by seeking rulership over a section of the Abyss or a place among other fallen hierarchy of the nine hells. Zariel, the ruler of the first layer of the nine hells, is such a creature. Rather than rebel, some rebel, some fallen angels resign themselves to an isolated existence on the material plane, living disguised as simple hermits. If they are redeemed, they can become powerful allies dedicated to justice and compassionate service. ",
      },
      {
        name: "Immortal Nature",
        description: "An angel does not require sleep, food or drink.",
      },
      {
        name: "Magical Resistance",
        description:
          "the Planetar has advantage on saving throws against spells and other magical effects.",
      },
    ],
    actions: [
      {
        name: "Innate Spellcasting",
        description:
          "At will: detect evil and good, 3/day each: blade barrier, dispel good and evil, flame strike, raise dead. 1/day commune, control weather, insect plauge dc20",
      },
      {
        name: "Multiattack",
        description: "The deva makes two melee attacks",
      },
      {
        name: "Healing Touch (4/Day)",
        description:
          "The deva touches another creature. The target magically regains 30 (6d8 + 2) hit points and is freed from any curse, disease, poison, blindness, or deafness.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description: "The planetar makes two melee attacks",
      },
    ],
    attacks: [
      {
        name: "Greatsword",
        toHit: "12",
        damage: "4d6 + 7 / +5d8",
        damageType: "slashing/radiant",
      },
    ],
  },
  {
    name: "Solar",
    monsterCatagorey: "Angel",
    img: "https://i.pinimg.com/originals/59/aa/86/59aa8644d0939ca325006a6ee989053d.jpg",
    monsterType: "Celestial",
    size: "large",
    alignment: "Lawful Good",
    ac: "21",
    hp: "243",
    hitDice: "18d10 + 144",
    speed: "50ft, fly 150ft",
    statBlock: [
      {
        name: "STR",
        score: "26",
        modifier: "8",
      },
      {
        name: "DEX",
        score: "22",
        modifier: "6",
      },
      {
        name: "CON",
        score: "26",
        modifier: "8",
      },
      {
        name: "INT",
        score: "25",
        modifier: "7",
      },
      {
        name: "WIS",
        score: "25",
        modifier: "7",
      },
      {
        name: "CHA",
        score: "30",
        modifier: "10",
      },
    ],
    saveThrows: "INT +14, WIS +14, CHA +17",
    skills: "Perception +14",
    damageResistance:
      "Radiant, Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    immunities: " Necrotic, Poison, Charmed, Exhaustion, Frightened, Poisoned",
    senses: "Truesight 120 ft., Passive Perception 24",
    languages: "All, Telepathy 120 ft",
    challenge: "21",
    traits: [
      {
        name: "Angelic Weapons",
        description:
          "The Deva's weapons are magical. When the Deva hits with an attack, the weapon deals an additional 6d8 radiant damage",
      },
      {
        name: "Shards of the Divine",
        description:
          "Angels are formed form the astral essence of benevolent gods and are thus divine beings of great power and foresight. Angles act out the will of their gods with tireless devotion.  Even chaotic good deities command lawful good angles, knowing that the angles dedication to order best allows them to follow divine commands. An angel follows a single driving purpose, as decreed by its deity. However, an angel is incapable of following commands that stray from the path of law and good. An Angel slays evil creatures without remorse. As the embodiment of law and good, an angle is almost never mistaken in its judgments. This quality can create a sense of superiority in the angel, a sense that comes to the fore when an angel\u2019s task conflicts with another creatures. The angel never acquiesces or gives way. When an angel is sent to aid mortals, it is sent not to serve but to command. The gods of good therefore send angels among mortals only in response to the most dire of circumstances. ",
      },
      {
        name: "Fallen Angels ",
        description:
          "An angel\u2019s moral compass grants it a sense of infallibility that can sometimes spell its undoing. Angels are usually too wise to fall for a simple deception, but sometimes pride can lead one to commit an evil act. Whether intentional or accidental, such an act is a permanent stain that marks the angel as an outcast. Fallen Angels retain their power but lose their connection to the deities from which they were made. Most fallen angels take their banishment personally, rebelling against the powers they served by seeking rulership over a section of the Abyss or a place among other fallen hierarchy of the nine hells. Zariel, the ruler of the first layer of the nine hells, is such a creature. Rather than rebel, some rebel, some fallen angels resign themselves to an isolated existence on the material plane, living disguised as simple hermits. If they are redeemed, they can become powerful allies dedicated to justice and compassionate service. ",
      },
      {
        name: "Immortal Nature",
        description: "An angel does not require sleep, food or drink.",
      },
      {
        name: "Magical Resistance",
        description:
          "the Planetar has advantage on saving throws against spells and other magical effects.",
      },
      {
        name: "Divine Awareness",
        description: "The Solar knows if it hears a lie.",
      },
      {
        name: "Innate Spellcasting",
        description:
          "The solar's spellcasting ability is Charisma (spell save DC 25). It can innately cast the following spells, requiring no material components: At will: detect evil and good, invisibility (self only) 3/day each: blade barrier, dispel evil and good, resurrection 1/day each: commune, control weather",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description: "The solar makes two greatsword attacks.",
      },
      {
        name: "Flying Sword",
        description:
          "The solar releases its greatsword to hover magically in an unoccupied space within 5 feet of it. If the solar can see the sword, the solar can mentally command it as a bonus action to fly up to 50 feet and either make one attack against a target or return to the solar's hands. If the hovering sword is targeted by any effect, the solar is considered to be holding it. The hovering sword falls if the solar dies.",
      },
      {
        name: "Healing Touch (4/Day)",
        description:
          "The solar touches another creature. The target magically regains 40 (8d8 + 4) hit points and is freed from any curse, disease, poison, blindness, or deafness.",
      },
    ],
    attacks: [
      {
        name: "Greatsword",
        toHit: "15",
        damage: "4d6 + 8/ 6d8",
        damageType: "slashing/radiant",
      },
      {
        name: "Slaying Longbow",
        toHit: "13",
        damage: "2d8 + 6/ + 6d8",
        damageType: "piercing/radiant",
        description:
          "If the target is a creature that has 100 hit points or fewer, it must succeed on a DC 15 Constitution saving throw or die.",
      },
    ],
    legendaryActions: [
      {
        name: "Teleport",
        description:
          "The solar magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.",
      },
      {
        name: "Searing Burst (Costs 2 Actions)",
        description:
          "The solar emits magical, divine energy. Each creature of its choice in a 10-foot radius must make a DC 23 Dexterity saving throw, taking 14 (4d6) fire damage plus 14 (4d6) radiant damage on a failed save, or half as much damage on a successful one.",
      },
      {
        name: "Blinding Gaze (Costs 3 Actions)",
        description:
          "The solar targets one creature it can see within 30 feet of it. If the target can see it, the target must succeed on a DC 15 Constitution saving throw or be blinded until magic such as the lesser restoration spell removes the blindness.",
      },
    ],
  },
  {
    name: "Animated Armor",
    monsterCatagorey: "Animated Objects",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dndbeyond.com%2Fmonsters%2F16786-animated-armor&psig=AOvVaw0DArD2tLHTmZQD0VI39JpB&ust=1710793580863000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOj7gO-Q_IQDFQAAAAAdAAAAABAJ",
    monsterType: "construct",
    size: "Medium",
    alignment: "unaligned",
    ac: "18",
    hp: "33",
    hitDice: "6d8 +6",
    speed: "25ft",
    statBlock: [
      {
        name: "STR",
        score: "14",
        modifier: "2",
      },
      {
        name: "DEX",
        score: "11",
        modifier: "0",
      },
      {
        name: "CON",
        score: "13",
        modifier: "1",
      },
      {
        name: "INT",
        score: "1",
        modifier: "-5",
      },
      {
        name: "WIS",
        score: "3",
        modifier: "-4",
      },
      {
        name: "CHA",
        score: "1",
        modifier: "-5",
      },
    ],
    saveThrows: "",
    skills: "",
    damageResistance:
      "Blinded, Charmed, Deafened, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",
    immunities: "Poison, Psychic",
    senses:
      "Blindsight 60 ft. (blind beyond this radius), Passive Perception 6",
    languages: "",
    challenge: "1",
    traits: [
      {
        name: "Constructed Nature",
        description:
          "An animated object doesn't require food, air, sleep, or drink. The magic that animates an object is dispelled when the construct drops to 0 hit points. An animated object that drops to 0 hit points becomes inanimate and is too damage to be of much use or value to anyone.",
      },
      {
        name: "False Appearance",
        description:
          "While the armor remains motionless, it is indistinguishable from a normal suit of armor.",
      },
      {
        name: "Antimagic Susceptibility",
        description:
          "The armor is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description: "The armor makes two melee attacks",
      },
    ],
    attacks: [
      {
        name: "Slam",
        toHit: "4",
        damage: "1d6 +2",
        damageType: "bludgeoning",
      },
    ],
  },
  {
    name: "Flying Sword",
    monsterCatagorey: ["Animated Object"],
    img: "https://www.dndbeyond.com/avatars/thumbnails/30761/834/1000/1000/638061095632921781.png",
    monsterType: "construct",
    size: "small",
    alignment: "unaligned",
    ac: "17",
    hp: "17",
    hitDice: "5d6",
    speed: "fly 50ft (hover)",
    statBlock: [
      {
        name: "STR",
        score: "12",
        modifier: "1",
      },
      {
        name: "DEX",
        score: "15",
        modifier: "2",
      },
      {
        name: "CON",
        score: "11",
        modifier: "0",
      },
      {
        name: "INT",
        score: "1",
        modifier: "-5",
      },
      {
        name: "WIS",
        score: "5",
        modifier: "-3",
      },
      {
        name: "CHA",
        score: "1",
        modifier: "-5",
      },
    ],
    saveThrows: "",
    skills: "",
    damageResistance:
      "Blinded, Charmed, Deafened, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",
    immunities: "Poison, Psychic",
    senses:
      "Blindsight 60 ft. (blind beyond this radius), Passive Perception 7",
    languages: "",
    challenge: "1/4",
    traits: [
      {
        name: "Constructed Nature",
        description:
          "An animated object doesn't require food, air, sleep, or drink. The magic that animates an object is dispelled when the construct drops to 0 hit points. An animated object that drops to 0 hit points becomes inanimate and is too damage to be of much use or value to anyone.",
      },
      {
        name: "False Appearance",
        description:
          "While the armor remains motionless, it is indistinguishable from a normal suit of armor.",
      },
      {
        name: "Antimagic Susceptibility",
        description:
          "The armor is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute.",
      },
    ],
    actions: [{}],
    attacks: [{
      name: "Longsword",
      toHit: "3",
      damage: "1d8 +1",
      damageType: "slashing"
    }]
  },
  {
    name: "Rug of Smothering",
    monsterCatagorey: ["Animated Object"],
    img: "https://www.dndbeyond.com/avatars/thumbnails/30761/845/1000/1000/638061095923531915.png",
    monsterType: "construct",
    size: "large",
    alignment: "unaligned",
    ac: "12",
    hp: "33",
    hitDice: "6d10",
    speed: "10ft",
    statBlock: [
      {
        name: "STR",
        score: "17",
        modifier: "3",
      },
      {
        name: "DEX",
        score: "14",
        modifier: "2",
      },
      {
        name: "CON",
        score: "11",
        modifier: "0",
      },
      {
        name: "INT",
        score: "1",
        modifier: "-5",
      },
      {
        name: "WIS",
        score: "3",
        modifier: "-4",
      },
      {
        name: "CHA",
        score: "1",
        modifier: "-5",
      },
    ],
    saveThrows: "",
    skills: "",
    damageResistance:
      "Blinded, Charmed, Deafened, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",
    immunities: "Poison, Psychic",
    senses:
      "Blindsight 60 ft. (blind beyond this radius), Passive Perception 7",
    languages: "",
    challenge: "2",
    traits: [
      {
        name: "Constructed Nature",
        description:
          "An animated object doesn't require food, air, sleep, or drink. The magic that animates an object is dispelled when the construct drops to 0 hit points. An animated object that drops to 0 hit points becomes inanimate and is too damage to be of much use or value to anyone.",
      },
      {
        name: "False Appearance",
        description:
          "While the armor remains motionless, it is indistinguishable from a normal suit of armor.",
      },
      {
        name: "Antimagic Susceptibility",
        description:
          "The armor is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute.",
      },
      {
        name: "Damage Transfer",
        description: "While it is grappling a creature, the rug takes only half the damage dealt to it, and the creature grappled by the rug takes the other half."
      }
    ],
    attacks:[{
      name: "Smother",
      toHit: "5",
      damage: "2d6+3",
      damageType: "bludgeoning",
      description: " The creature is grappled (escape DC 13). Until this grapple ends, the target is restrained, blinded, and at risk of suffocating, and the rug can't smother another target. In addition, at the start of each of the target's turns, the target takes 10 (2d6 + 3) bludgeoning damage."
    }]
  },
  {
    name: "Ankheg",
    monsterCatagorey: "Ankheg",
    img: "https://www.dndbeyond.com/avatars/thumbnails/30761/865/1000/1000/638061096692582271.png",
    monsterType: "Monstrosity",
    size: "large",
    alignment: "unaligned",
    ac: "14/11 while prone",
    hp: "39",
    hitDice: "6d10 + 6",
    speed: "30ft, burrow 10ft",
    statBlock: 
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
