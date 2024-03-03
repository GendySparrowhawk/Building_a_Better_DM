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
    name: "Alarm",
    spellClass: ["Ranger", "Wizard", "Artificer", "Paladin"],
    lvl: "1",
    school: "Abjuration",
    range: "30ft",
    castingTime: "1 minute",
    duration: "8 Hours",
    concentration: false,
    ritual: true,
    components: ["V","S", "M"],
    materials: "a tiny bell and a piece of fine silver wire",
    description:
      "You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible. A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping. An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.",
  },
  {
    name: "Alter Self",
    spellClass: ["Arificer", "Wizard", "Sorcerer"],
    lvl: "2",
    school: "Transmutation",
    range: "self",
    castingTime: "1 action",
    duration: "1 hour",
    concentration: true,
    ritual: false,
    components: ["V", "S"],
    description:
      "You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one. Aquatic Adaptation. You adapt your body to an aquatic environment, sprouting gills and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed. Change Appearance. You transform your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and distinguishing characteristics, if any. You can make yourself appear as a member of another race, though none of your statistics change. You also can't appear as a creature of a different size than you, and your basic shape stays the same; if you're bipedal, you can't use this spell to become quadrupedal, for instance. At any time for the duration of the spell, you can use your action to change your appearance in this way again. Natural Weapons. You grow claws, fangs, spines, horns, or a different natural weapon of your choice. Your unarmed strikes deal 1d6 bludgeoning, piercing, or slashing damage, as appropriate to the natural weapon you chose, and you are proficient with your unarmed strikes. Finally, the natural weapon is magic and you have a +1 bonus to the attack and damage rolls you make using it",
  },
  {
    name: "Animal Friendship",
    spellClass: ["Bard", "Druid", "Ranger", "Cleric"],
    lvl: "1",
    school: "Enchantment",
    range: "30ft",
    castingTime: "1 action",
    duration: "24 hours",
    concentration: false,
    ritual: false,
    saveThrow: "WIS",
    components: ["V", "S", "M"],
    materials: "a morsel of food",
    description:
      "This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast's Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spell's duration. If you or one of your companions harms the target, the spell ends. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional beast for each slot level above 1st.",
  },
  {
    name: "Animal Messenger",
    spellClass: ["Bard", "Druid", "Ranger",],
    lvl: "2",
    school: "Enchantment",
    range: "30ft",
    castingTime: "1 action",
    duration: "24 hours",
    concentration: false,
    ritual: true,
    components: ["V", "S", "M"],
    materials: "a morsel of food",
    description:
      "By means of this spell, you use an animal to deliver a message. Choose a Tiny beast you can see within range, such as a squirrel, a blue jay, or a bat. You specify a location, which you must have visited, and a recipient who matches a general description, such as \"a man or woman dressed in the uniform of the town guard\" or \"a red-haired dwarf wearing a pointed hat.\" You also speak a message of up to twenty-five words. The target beast travels for the duration of the spell toward the specified location, covering about 50 miles per 24 hours for a flying messenger, or 25 miles for other animals. When the messenger arrives, it delivers your message to the creature that you described, replicating the sound of your voice. The messenger speaks only to a creature matching the description you gave. If the messenger doesn't reach its destination before the spell ends, the message is lost, and the beast makes its way back to where you cast this spell. At Higher Levels. If you cast this spell using a spell slot of 3rd level or higher, the duration of the spell increases by 48 hours for each slot level above 2nd.",
  },
  {
    name: "Animal Shapes",
    spellClass: ["Druid"],
    lvl: "8",
    school: "Transmutation",
    range: "30ft",
    castingTime: "1 action",
    duration: "24 hours",
    concentration: true,
    ritual: false,
    components: ["V", "S"],
    description: "Your magic turns others into beasts. Choose any number of willing creatures that you can see within range. You transform each target into the form of a Large or smaller beast with a challenge rating of 4 or lower. On subsequent turns, you can use your action to transform affected creatures into new forms. The transformation lasts for the duration for each target, or until the target drops to 0 hit points or dies. You can choose a different form for each target. A target's game statistics are replaced by the statistics of the chosen beast, though the target retains its alignment and Intelligence, Wisdom, and Charisma scores. The target assumes the hit points of its new form, and when it reverts to its normal form, it returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 hit points, it isn't knocked unconscious. The creature is limited in the actions it can perform by the nature of its new form, and it can't speak or cast spells. The target's gear melds into the new form. The target can't activate, wield, or otherwise benefit from any of its equipment."
  },
  {
    name: "Animate Dead",
    spellClass: ["Druid", "Wizard", "Cleric", "Wizard"],
    lvl: "3",
    school: "Necromancy",
    range: "10ft",
    castingTime: "1 minute",
    duration: "24 hours",
    concentration: false,
    ritual: false,
    components: ["V", "S", "M"],
    materials: "a drop of blood, a piece of flesh, and a pinch of bone dust",
    description: "This spell creates an undead servant. Choose a pile of bones or a corpse of a Medium or Small humanoid within range. Your spell imbues the target with a foul mimicry of life, raising it as an undead creature. The target becomes a skeleton if you chose bones or a zombie if you chose a corpse (the GM has the creature's game statistics). On each of your turns, you can use a bonus action to mentally command any creature you made with this spell if the creature is within 60 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete. The creature is under your control for 24 hours, after which it stops obeying any command you've given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature again before the current 24-hour period ends. This use of the spell reasserts your control over up to four creatures you have animated with this spell, rather than animating a new one. At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, you animate or reassert control over two additional undead creatures for each slot level above 3rd. Each of the creatures must come from a different corpse or pile of bones."
  },
  {
    name: "Animate Objects",
    spellClass: ["Artificer", "Wizard", "Cleric", "Bard", "Sorcerer"],
    lvl: "5",
    school: "Transutation",
    range: "120ft",
    castingTime: "1 action",
    duration: "1 minute",
    concentration: true,
    ritual: false,
    components: ["V", "S", "M"],
    materials: "a drop of blood, a piece of flesh, and a pinch of bone dust",
    description: "Objects come to life at your command. Choose up to ten nonmagical objects within range that are not being worn or carried. Medium targets count as two objects, Large targets count as four objects, Huge targets count as eight objects. You can't animate any object larger than Huge. Each target animates and becomes a creature under your control until the spell ends or until reduced to 0 hit points. As a bonus action, you can mentally command any creature you made with this spell if the creature is within 500 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete. One of the following (Tiny - HP-20 AC-18 str-4 dex-18 attack +8 to hit 1d4+4 dmg)(Small - HP-25 AC-16 str-6 dex-14  attack+6 to hit, 1d8+2 dmg)(medium - HP-40 AC-13 str-10 dex-12 attack +5to hit, 2d6+1 dmg)(Large - HP-50 AC-10 str-14 dex-10 attack +6 to hit, 2d20+d dmg)(Huge - HP-80 ac-10 str-18 dex-6 attack +8to hit 2d12+4dmg)An animated object is a construct with AC, hit points, attacks, Strength, and Dexterity determined by its size. Its Constitution is 10 and its Intelligence and Wisdom are 3, and its Charisma is 1. Its speed is 30 feet; if the object lacks legs or other appendages it can use for locomotion, it instead has a flying speed of 30 feet and can hover. If the object is securely attached to a surface or a larger object, such as a chain bolted to a wall, its speed is 0. It has blindsight with a radius of 30 feet and is blind beyond that distance. When the animated object drops to 0 hit points, it reverts to its original object form, and any remaining damage carries over to its original object form. If you command an object to attack, it can make a single melee attack against a creature within 5 feet of it. It makes a slam attack with an attack bonus and bludgeoning damage determined by its size. The GM might rule that a specific object inflicts slashing or piercing damage based on its form. At Higher Levels. If you cast this spell using a spell slot of 6th level or higher, you can animate two additional objects for each slot level above 5th."
  },
  {
    name: "Antagonize",
    spellClass: ["Warlock", "Bard", "Sorcerer", "Wizard"],
    lvl: "3",
    school: "Evocation",
    range: "30ft",
    castingTime: "1 action",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    saveThrow: "WIS",
    damageType: "psychic",
    components: ["V", "S", "M"],
    materials: "a drop of blood, a piece of flesh, and a pinch of bone dust",
    description: "You whisper magical words that antagonize one creature of your choice within range. The target must make a Wisdom saving throw. On a failed save, the target takes 4d4 psychic damage and must immediately use its reaction to make a melee attack against another creature of your choice that you can see. If the target can\u2109t make this attack (for example, because there is no one within its reach or because its reaction is unavailable), the target instead has disadvantage on the next attack roll it makes before the start of your next turn. On a successful save, the target takes half as much damage only. At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d4 for each slot level above 3rd."
  },
  {
    name: "Antilife Shell",
    spellClass: ["Cleric", "Druid"],
    lvl: "5",
    school: "Abjuration",
    range: "self 10ft sphere",
    castingTime: "1 action",
    duration: "1 hour",
    concentration: true,
    ritual: false,
    saveThrow: "",
    damageType: "",
    components: ["V", "S",],
    description: "A shimmering barrier extends out from you in a 10-foot radius and moves with you, remaining centered on you and hedging out creatures other than undead and constructs. The barrier lasts for the duration. The barrier prevents an affected creature from passing or reaching through. An affected creature can cast spells or make attacks with ranged or reach weapons through the barrier. If you move so that an affected creature is forced to pass through the barrier, the spell ends."
  },
  {
    name: "Antimagic Field",
    spellClass: ["Cleric", "Wizard"],
    lvl: "8",
    school: "Abjuration",
    range: "self 10ft sphere",
    castingTime: "1 action",
    duration: "1 hour",
    concentration: true,
    ritual: false,
    components: ["V", "S", "M"],
    materials: "a pinch of powdered iron or iron filings",
    description: "A 10-foot-radius invisible sphere of antimagic surrounds you. This area is divorced from the magical energy that suffuses the multiverse. Within the sphere, spells can't be cast, summoned creatures disappear, and even magic items become mundane. Until the spell ends, the sphere moves with you, centered on you. Spells and other magical effects, except those created by an artifact or a deity, are suppressed in the sphere and can't protrude into it. A slot expended to cast a suppressed spell is consumed. While an effect is suppressed, it doesn't function, but the time it spends suppressed counts against its duration. Targeted Effects: Spells and other magical effects, such as magic missile and charm person, that target a creature or an object in the sphere have no effect on that target. Areas of Magic: The area of another spell or magical effect, such as fireball, can't extend into the sphere. If the sphere overlaps an area of magic, the part of the area that is covered by the sphere is suppressed. For example, the flames created by a wall of fire are suppressed within the sphere, creating a gap in the wall if the overlap is large enough. Spells: Any active spell or other magical effect on a creature or an object in the sphere is suppressed while the creature or object is in it. Magic Items: The properties and powers of magic items are suppressed in the sphere. For example, a +1 long sword in the sphere functions as a nonmagical long sword. A magic weapon's properties and powers are suppressed if it is used against a target in the sphere or wielded by an attacker in the sphere. If a magic weapon or piece of magic ammunition fully leaves the sphere (For example, if you fire a magic arrow or throw a magic spear at a target outside the sphere), the magic of the item ceases to be suppressed as soon as it exits. Magical Travel: Teleportation and planar travel fail to work in the sphere, whether the sphere is the destination or the departure point for such magical travel. A portal to another location, world, or plane of existence, as well as an opening to an extradimensional space such as that created by the rope trick spells, temporarily closes while in the sphere. Creatures and Objects: A creature or object summoned or created by magic temporarily winks out of existence in the sphere. Such a creature instantly reappears once the space the creature occupied is no longer within the sphere. Dispel Magic: Spells and magical effects such as dispel magic have no effect on the sphere. Likewise, the spheres created by different antimagic field spells don't nullify each other."
  },
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
