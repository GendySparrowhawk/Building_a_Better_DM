const Feat = require("../models/Feats");

const featData = [
  {
    name: "Aberrant Dragonmark",
    description:
      "You have manifested an aberrant dragonmark. Determine its appearance and the flaw associated with it. You gain the following benefits: Increase your Constitution score by 1, to a maximum of 20. You learn a cantrip of your choice from the sorcerer spell list. In addition, choose a 1st-level spell from the sorcerer spell list. You learn that spell and can cast it through your mark. Once you cast it, you must finish a short or long rest before you can cast it again through the mark. Constitution is your spellcasting ability for these spells. When you cast the 1st-level spell through your mark, you can expend one of your Hit Dice and roll it. If you roll an even number, you gain a number of temporary hit points equal to the number rolled. If you roll an odd number, one random creature within 30 feet of you (not including you) takes force damage equal to the number rolled. If no other creatures are in range, you take the damage.",
    requirements: ["No other dragonmark"],
    isPassive: true,
  },
  {
    name: "Actor",
    description:
      "Skilled at mimicry and dramatics, you gain the following benefits: Increase your Charisma score by 1, to a maximum of 20. You have an advantage on Charisma (Deception) and Charisma (Performance) checks when trying to pass yourself off as a different person. You can mimic the speech of another person or the sounds made by other creatures. You must have heard the person speaking, or heard the creature make the sound, for at least 1 minute. A successful Wisdom (Insight) check contested by your Charisma (Deception) check allows a listener to determine that the effect is faked.",
    isPassive: true,
  },
  {
    name: "Alert",
    description:
      "Always on the lookout for danger, you gain the following benefits: You can't be surprised while you are conscious. You gain a +5 bonus to initiative. Other creatures don't gain advantage on attack rolls against you as a result of being unseen by you.",
    isPassive: true,
  },
  {
    name: "Artificer Initiate",
    description:
      "You\u2019ve learned some of an artificer\u2019s inventiveness: You learn one cantrip of your choice from the Artificer spell list, and you learn one 1st-level spell of your choice from that list. Intelligence is your spellcasting ability for these spells. You can cast this feat's 1st-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast the spell using any spell slots you have. You gain proficiency with one type of artisan's tools of your choice, and you can use that type of tool as a spellcasting focus for any spell you cast that uses Intelligence as its spellcasting ability.",
    isPassive: true,
  },
  {
    name: "Athlete",
    description:
      "You have undergone extensive physical training to gain the following benefits: Increase your Strength or Dexterity score by 1, to a maximum of 20. When you are prone, standing up uses only 5 feet of your movement. Climbing doesn't cost you extra movement. You can make a running long jump or a running high jump after moving only 5 feet on foot, rather than 10 feet.",
    isPassive: true,
  },
  {
    name: "Cartomancer",
    description:
      "You have learned to channel your magic through a deck of cards. You can use a card deck as your spellcasting focus, and you gain the following benefits: Card Tricks. You learn the Prestidigitation cantrip and can use it to create illusions that duplicate the effects of stage magic. When you use Prestidigitation in this way, you can conceal the verbal and somatic components of the spell as ordinary conversation and card handling. Hidden Ace. When you finish a long rest, you can choose one spell from your class\u2019s spell list and imbue that spell into a card. The chosen spell must have a casting time of 1 action, and it must be a level for which you have spell slots. The card remains imbued with this spell for 8 hours. While the card is imbued with the spell, you can use a bonus action to flourish the card and cast the spell within. The card then immediately loses its magic.",
  },
  {
    name: "Charger",
    description:
      "When you use your action to Dash, you can use a bonus action to make one melee weapon attack or to shove a creature. If you move at least 10 feet in a straight line immediately before taking this bonus action, you either gain a +5 bonus to the attack\u2109s damage roll (if you chose to make a melee attack and hit) or push the target up to 10 feet away from you (if you chose to shove and you succeed)",
    isBonusAction: true,
  },
  {
    name: "Chef",
    description:
      "Increase your Constitution or Wisdom score by 1, to a maximum of 20. You gain proficiency with cook\u2019s utensils if you don\u2019t already have it. As part of a short rest, you can cook special food, provided you have ingredients and cook's utensils on hand. You can prepare enough of this food for a number of creatures equal to 4 + your proficiency bonus. At the end of the short rest, any creature who eats the food and spends one or more Hit Dice to regain hit points regains an extra 1d8 hit points. With one hour of work or when you finish a long rest, you can cook a number of treats equal to your proficiency bonus. These special treats last 8 hours after being made. A creature can use a bonus action to eat one of those treats to gain temporary hit points equal to your proficiency bonus.",
    isPassive: true,
  },
  {
    name: "Crossbow Expert",
    description:
      "Thanks to extensive practice with the crossbow, you gain the following benefits: You ignore the loading quality of crossbows with which you are proficient. Being within 5 feet of a hostile creature doesn\u2019t impose disadvantage on your ranged attack rolls. When you use the Attack action and attack with a one handed weapon, you can use a bonus action to attack with a hand crossbow you are holding.",
    isBonusAction: true,
    isPassive: true,
  },
  {
    name: "Crusher",
    description:
      "Increase your Strength or Constitution by 1, to a maximum of 20. Once per turn, when you hit a creature with an attack that deals bludgeoning damage, you can move it 5 feet to an unoccupied space, provided the target is no more than one size larger than you. When you score a critical hit that deals bludgeoning damage to a creature, attack rolls against that creature are made with advantage until the start of your next turn.",
    isPassive: true,
  },
  {
    name: "Defensive Duelist",
    description:
      "When you are wielding a finesse weapon with which you are proficient and another creature hits you with a melee attack, you can use your reaction to add your proficiency bonus to your AC for that attack, potentially causing the attack to miss you.",
    isReaction: true,
  },
  {
    name: "Dual Wielder",
    description:
      "You master fighting with two weapons, gaining the following benefits: You gain a +1 bonus to AC while you are wielding a separate melee weapon in each hand. You can use two-weapon fighting even when the one handed melee weapons you are wielding aren't light. You can draw or stow two one-handed weapons when you would normally be able to draw or stow only one.",
    isPassive: true,
  },
  {
    name: "Dungeon Delver",
    description: "Alert to the hidden traps and secret doors found in many dungeons, you gain the following benefits: You have advantage on Wisdom (Perception) and Intelligence (Investigation) checks made to detect the presence of secret doors. You have advantage on saving throws made to avoid or resist traps. You have resistance to the damage dealt by traps. Travelling at a fast pace doesn't impose the normal -5 penalty on your passive Wisdom (Perception) score",
    isPassive: true,
  },
  {
    name: "Durable",
    description: "Hardy and resilient, you gain the following benefits: Increase your Constitution score by 1, to a maximum of 20. When you roll a Hit Die to regain hit points, the minimum number of hit points you regain from the roll equals twice your Constitution modifier (minimum of 2).",
    isPassive: true,
  },
  {
    name: "Eldritch Adept",
    description: "Studying occult lore, you learn one Eldritch Invocation option of your choice from the warlock class. Your spellcasting ability for the invocation is Intelligence, Wisdom, or Charisma (choose when you select this feat). If the invocation has a prerequisite of any kind, you can choose that invocation only if you\u2109re a warlock who meets the prerequisite. Whenever you gain a level, you can replace the invocation with another one from the warlock class.",
    requirements: ["Spellcasting or Pact Magic feature"],
    isPassive: true,
  },
  {
    name: "Elemental Adept",
    description: "When you gain this feat, choose one of the following damage types: acid, cold, fire, lightning, or thunder. Spells you cast ignore resistance to damage of the chosen type. In addition, when you roll damage for a spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2. You can select this feat multiple times. Each time you do so, you must choose a different damage type.",
    requirements: ["The ability to cast at least one spell"],
    isPassive: true,
  },
{
    name: "Ember of the Fire Giant",
    description:"Ability Score Increase. Increase your Strength, Constitution, or Wisdom score by 1, to a maximum of 20. Born of Flame. You have resistance to fire damage. Searing Ignition. When you take the Attack action on your turn, you can replace a single attack with a magical burst of flame. Each creature of your choice in a 15-foot-radius sphere centered on you must make a Dexterity saving throw (DC equals 8 + your proficiency bonus + the modifier of the ability increased by this feat). On a failed save, a creature takes fire damage equal to 1d8 + your proficiency bonus, and it has the blinded condition until the start of your next turn. On a successful save, the creature takes half as much damage only. You can use your Searing Ignition a number of times equal to your proficiency bonus (but no more than once per turn), and you regain all expended uses when you finish a long rest.",
    requirements: [" 4th Level", "Strike of the Giants (Fire Strike) Feat"],
    isAction: true,
    isPassive: true,
},
{
    name: "Fey Touched",
    description: "Your exposure to the Feywild's magic has changed you, granting you the following benefits: Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20. You learn the Misty Step spell and one 1st-level spell of your choice. The 1st-level spell must be from the Divination or Enchantment school of magic. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
    isPassive: true,
},
{
    name: "Fighting Initiate",
    description: "Your martial training has helped you develop a particular style of fighting. As a result, you learn one Fighting Style option of your choice from the fighter class. If you already have a style, the one you choose must be different. Whenever you reach a level that grants the Ability Score Improvement feature, you can replace this feat's fighting style with another one from the fighter class that you don't have.",
    requirements: ["Proficiency with a martial weapon"],
    isPassive: true,
},
{
    name: "Fury of the Frost Giant",
    description: "You\u2109ve manifested the icy might emblematic of frost giants, granting you the following benefits: Ability Score Increase. Increase your Strength, Constitution, or Wisdom score by 1, to a maximum of 20. Born of Ice. You have resistance to cold damage. Frigid Retaliation. Immediately after a creature you can see within 30 feet of you hits you with an attack roll and deals damage, you can use your reaction to retaliate with a conjured blast of ice. The creature must make a Constitution saving throw (DC equals 8 + your proficiency bonus + the modifier of the ability increased by this feat). On a failed save, the creature takes cold damage equal to 1d8 + your proficiency bonus, and its speed is reduced to 0 until the end of its next turn. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    requirements: ["4th Level", "Strike of the Giants (Frost Strike) Feat"],
    isAction: true,
    isReaction: true,
    isPassive: true
},
{
    name: "Gift of the Chromatic Dragon",
    description: "You\u2019ve manifested some of the power of chromatic dragons, granting you the following benefits: Chromatic Infusion. As a bonus action, you can touch a simple or martial weapon and infuse it with one of the following damage types: acid, cold, fire, lightning, or poison. For the next minute, the weapon deals an extra 1d4 damage of the chosen type when it hits. After you use this bonus action, you can\u20109t do so again until you finish a long rest. Reactive Resistance. When you take acid, cold, fire, lightning, or poison damage, you can use your reaction to give yourself resistance to that instance of damage. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    isBonusAction: true,
    isPassive: true,
},

];

async function seedFeats() {
  try {
    const existingFeats = await Feat.find({});

    for (const feat of featData) {
      const isExisting = existingFeats.some(
        (existingFeat) => existingFeat.name === feat.name
      );

      if (!isExisting) {
        await Feat.create(feat);
        console.log(`${feat.name} created!`);
      } else {
        await Feat.findOneAndUpdate({ name: feat.name }, feat);
        console.log(`${feat.name} updated!`);
      }
    }
  } catch (err) {
    console.error("Error seeding Feats", err);
  }
}

module.exports = { seedFeats };
