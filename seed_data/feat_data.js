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
    description:
      "Alert to the hidden traps and secret doors found in many dungeons, you gain the following benefits: You have advantage on Wisdom (Perception) and Intelligence (Investigation) checks made to detect the presence of secret doors. You have advantage on saving throws made to avoid or resist traps. You have resistance to the damage dealt by traps. Travelling at a fast pace doesn't impose the normal -5 penalty on your passive Wisdom (Perception) score",
    isPassive: true,
  },
  {
    name: "Durable",
    description:
      "Hardy and resilient, you gain the following benefits: Increase your Constitution score by 1, to a maximum of 20. When you roll a Hit Die to regain hit points, the minimum number of hit points you regain from the roll equals twice your Constitution modifier (minimum of 2).",
    isPassive: true,
  },
  {
    name: "Eldritch Adept",
    description:
      "Studying occult lore, you learn one Eldritch Invocation option of your choice from the warlock class. Your spellcasting ability for the invocation is Intelligence, Wisdom, or Charisma (choose when you select this feat). If the invocation has a prerequisite of any kind, you can choose that invocation only if you\u2109re a warlock who meets the prerequisite. Whenever you gain a level, you can replace the invocation with another one from the warlock class.",
    requirements: ["Spellcasting or Pact Magic feature"],
    isPassive: true,
  },
  {
    name: "Elemental Adept",
    description:
      "When you gain this feat, choose one of the following damage types: acid, cold, fire, lightning, or thunder. Spells you cast ignore resistance to damage of the chosen type. In addition, when you roll damage for a spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2. You can select this feat multiple times. Each time you do so, you must choose a different damage type.",
    requirements: ["The ability to cast at least one spell"],
    isPassive: true,
  },
  {
    name: "Ember of the Fire Giant",
    description:
      "Ability Score Increase. Increase your Strength, Constitution, or Wisdom score by 1, to a maximum of 20. Born of Flame. You have resistance to fire damage. Searing Ignition. When you take the Attack action on your turn, you can replace a single attack with a magical burst of flame. Each creature of your choice in a 15-foot-radius sphere centered on you must make a Dexterity saving throw (DC equals 8 + your proficiency bonus + the modifier of the ability increased by this feat). On a failed save, a creature takes fire damage equal to 1d8 + your proficiency bonus, and it has the blinded condition until the start of your next turn. On a successful save, the creature takes half as much damage only. You can use your Searing Ignition a number of times equal to your proficiency bonus (but no more than once per turn), and you regain all expended uses when you finish a long rest.",
    requirements: [" 4th Level", "Strike of the Giants (Fire Strike) Feat"],
    isAction: true,
    isPassive: true,
  },
  {
    name: "Fey Touched",
    description:
      "Your exposure to the Feywild's magic has changed you, granting you the following benefits: Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20. You learn the Misty Step spell and one 1st-level spell of your choice. The 1st-level spell must be from the Divination or Enchantment school of magic. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
    isPassive: true,
  },
  {
    name: "Fighting Initiate",
    description:
      "Your martial training has helped you develop a particular style of fighting. As a result, you learn one Fighting Style option of your choice from the fighter class. If you already have a style, the one you choose must be different. Whenever you reach a level that grants the Ability Score Improvement feature, you can replace this feat's fighting style with another one from the fighter class that you don't have.",
    requirements: ["Proficiency with a martial weapon"],
    isPassive: true,
  },
  {
    name: "Fury of the Frost Giant",
    description:
      "You\u2109ve manifested the icy might emblematic of frost giants, granting you the following benefits: Ability Score Increase. Increase your Strength, Constitution, or Wisdom score by 1, to a maximum of 20. Born of Ice. You have resistance to cold damage. Frigid Retaliation. Immediately after a creature you can see within 30 feet of you hits you with an attack roll and deals damage, you can use your reaction to retaliate with a conjured blast of ice. The creature must make a Constitution saving throw (DC equals 8 + your proficiency bonus + the modifier of the ability increased by this feat). On a failed save, the creature takes cold damage equal to 1d8 + your proficiency bonus, and its speed is reduced to 0 until the end of its next turn. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    requirements: ["4th Level", "Strike of the Giants (Frost Strike) Feat"],
    isAction: true,
    isReaction: true,
    isPassive: true,
  },
  {
    name: "Gift of the Chromatic Dragon",
    description:
      "You\u2019ve manifested some of the power of chromatic dragons, granting you the following benefits: Chromatic Infusion. As a bonus action, you can touch a simple or martial weapon and infuse it with one of the following damage types: acid, cold, fire, lightning, or poison. For the next minute, the weapon deals an extra 1d4 damage of the chosen type when it hits. After you use this bonus action, you can\u20109t do so again until you finish a long rest. Reactive Resistance. When you take acid, cold, fire, lightning, or poison damage, you can use your reaction to give yourself resistance to that instance of damage. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    isBonusAction: true,
    isPassive: true,
  },
  {
    name: "Gift of the Gem Dragon",
    description:
      "You\u2019ve manifested some of the power of gem dragons, granting you the following benefits: Ability Score Increase. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20. Telekinetic Reprisal. When you take damage from a creature that is within 10 feet of you, you can use your reaction to emanate telekinetic energy. The creature that dealt damage to you must make a Strength saving throw (DC equals 8 + your proficiency bonus + the ability modifier of the score increased by this feat). On a failed save, the creature takes 2d8 force damage and is pushed up to 10 feet away from you. On a successful save, the creature takes half as much damage and isn\u2019t pushed. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    isReaction: true,
    isPassive: true,
  },
  {
    name: "Gift of the Metallic Dragon",
    description:
      "You\u2019ve manifested some of the power of metallic dragons, granting you the following benefits: Draconic Healing. You learn the Cure Wounds spell. You can cast this spell without expending a spell slot. Once you cast this spell in this way, you can\u2019t do so again until you finish a long rest. You can also cast this spell using spell slots you have. The spell\u2019s spellcasting ability is Intelligence, Wisdom, or Charisma when you cast it with this feat (choose when you gain the feat). Protective Wings. You can manifest protective wings that can shield you or others. When you or another creature you can see within 5 feet of you is hit by an attack roll, you can use your reaction to manifest spectral wings from your back for a moment. You grant a bonus to the target\u2019s AC equal to your proficiency bonus against that attack roll, potentially causing it to miss. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    isReaction: true,
    isPassive: true,
  },
  {
    name: "Grappler",
    description:
      "You've developed the skills necessary to hold your own in close-quarters grappling. You gain the following benefits: You have advantage on attack rolls against a creature you are grappling. You can use your action to try to pin a creature grappled by you. To do so, make another grapple check. If you succeed, you and the creature are both restrained until the grapple ends",
    requirements: ["STR 13"],
    isAction: true,
    isPassive: true,
  },
  {
    name: "Great Weapon Master",
    description:
      "You've learned to put the weight of a weapon to your advantage, letting its momentum empower your strikes. You gain the following benefits: On your turn, when you score a critical hit with a melee weapon or reduce a creature to 0 hit points with one, you can make one melee weapon attack as a bonus action. Before you make a melee attack with a heavy weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage.",
    isBonusAction: true,
    isPassive: true,
  },
  {
    name: "Guile of the Cloud Giant",
    description:
      "You\u2019ve manifested the confounding magic emblematic of cloud giants, granting you the following benefits: Ability Score Increase. Increase your Strength, Constitution, or Charisma score by 1, to a maximum of 20. Cloudy Escape. When a creature you can see hits you with an attack roll, you can use your reaction to give yourself resistance to that attack\u2019s damage. You then teleport to an unoccupied space that you can see within 30 feet of yourself. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    requirements: ["4th Level", "Strike of the Giants (Cloud Strike) Feat"],
    isReaction: true,
    isPassive: true,
  },
  {
    name: "Gunner",
    description:
      "You have a quick hand and keen eye when employing firearms, granting you the following benefits Increase your Dexterity score by 1, to a maximum of 20. You gain proficiency with firearms You ignore the loading property of firearms. Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls.",
    isPassive: true,
  },
  {
    name: "Healer",
    description:
      "You are an able physician, allowing you to mend wounds quickly and get your allies back in the fight. You gain the following benefits: When you use a healer's kit to stabilize a dying creature, that creature also regains 1 hit point. As an action. you can spend one use of a healer's kit to tend to a creature and restore 1d6 + 4 hit points to it, plus additional hit points equal to the creature's maximum number of Hit Dice. The creature can't regain hit points from this feat again until it finishes a short or long rest.",
    isAction: true,
    isPassive: true,
  },
  {
    name: "Heavily Armored",
    description:
      "You have trained to master the use of heavy armor, gaining the following benefits: Increase your Strength score by 1, to a maximum of 20. You gain proficiency with heavy armor",
    isPassive: true,
  },
  {
    name: "Heavy Armor Master",
    description:
      "You can use your armor to deflect strikes that would kill others. You gain the following benefits: Increase your Strength score by 1, to a maximum of 20. While you are wearing heavy armor, bludgeoning, piercing, and slashing damage that you take from nonmagical attacks is reduced by 3.",
    requirements: ["Proficiency with heavy armor"],
    isPassive: true,
  },
  {
    name: "Inspiring Leader",
    description:
      "You can spend 10 minutes inspiring your companions, shoring up their resolve to fight. When you do so, choose up to six friendly creatures (which can include yourself) within 30 feet of you who can see or hear you and who can understand you. Each creature can gain temporary hit points equal to your level + your Charisma modifier. A creature can't gain temporary hit points from this feat again until it has finished a short or long rest.",
    requirements: ["CHA 13"],
    isPassive: true,
  },
  {
    name: "Keen Mind",
    description:
      "You have a mind that can track time, direction, and detail with uncanny precision. You gain the following benefits. Increase your Intelligence score by 1, to a maximum of 20. You always know which way is north. You always know the number of hours left before the next sunrise or sunset. You can accurately recall anything you have seen or heard within the past month.",
    isPassive: true,
  },
  {
    name: "Keenness of the Stone Giant",
    description:
      "You’ve manifested the physical talents emblematic of stone giants, granting you the following benefits: Ability Score Increase. Increase your Strength, Constitution, or Wisdom score by 1, to a maximum of 20. Cavernous Sight. You gain darkvision with a range of 60 feet. If you already have darkvision from another source, its range increases by 60 feet. Stone Throw. As a bonus action, you can take a rock and make a magical attack with it. The attack is a ranged spell attack with a range of 60 feet that uses the ability score you increased with this feat as the spellcasting ability. On a hit, the rock deals 1d10 force damage, and the target must succeed on a Strength saving throw (DC equals 8 + your proficiency bonus + the spellcasting ability modifier) or have the prone condition. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    requirements: ["4th Level", "Strike of the Giants (Stone Strike) Feat"],
    isBonusAction: true,
    isPassive: true,
  },
  {
    name: "Lightly Armored",
    description:
      "You have trained to master the use of light armor, gaining the following benefits. Increase your Strength or Dexterity score by 1, to a maximum of 20. You gain proficiency with light armor.",
    isPassive: true,
  },
  {
    name: "Linguist",
    description:
      "You have studied languages and codes, gaining the following benefits: Increase your Intelligence score by 1, to a maximum of 20. You learn three languages of your choice. You can ably create written ciphers. Others can\u2019t decipher a code you create unless you teach them, they succeed on an Intelligence check (DC equal to your Intelligence score + your proficiency bonus), or they use magic to decipher it.",
    isPassive: true,
  },
  {
    name: "Lucky",
    description:
      "You have inexplicable luck that seems to kick in at just the right moment. You have 3 luck points. Whenever you make an attack roll, an ability check, or a saving throw, you can spend one luck point to roll an additional d20. You can choose to spend one of your luck points after you roll the die, but before the outcome is determined. You choose which of the d20s is used for the attack roll, ability check, or saving throw. You can also spend one luck point when an attack roll is made against you. Roll a d20 and then choose whether the attack uses the attacker's roll or yours. If more than one creature spends a luck point to influence the outcome of a roll, the points cancel each other out; no additional dice are rolled. You regain your expended luck points when you finish a long rest.",
    isAction: true,
    isPassive: true,
  },
  {
    name: "Mage Slayer",
    description:
      "You have practiced techniques in melee combat against spellcasters, gaining the following benefits. When a creature within 5 feet of you casts a spell, you can use your reaction to make a melee weapon attack against that creature. When you damage a creature that is concentrating on a spell, that creature has disadvantage on the saving throw it makes to maintain its concentration. You have advantage on saving throws against spells cast by creatures within 5 feet of you.",
    isReaction: true,
    isPassive: true,
  },
  {
    name: "Magic Initiate",
    description:
      "Choose a class: bard, cleric, druid, sorcerer, warlock, or wizard. You learn two cantrips of your choice from that class's spell list. In addition, choose one 1st-level spell to learn from that same list. Using this feat, you can cast the spell once at its lowest level, and you must finish a long rest before you can cast it in this way again. Your spellcasting ability for these spells depends on the class you chose: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or Intelligence for wizard.",
    isPassive: true,
  },
  {
    name: "Martial Adept",
    description:
      "You have martial training that allows you to perform special combat maneuvers. You gain the following benefits. You learn two maneuvers of your choice from among those available to the Battle Master archetype in the fighter class. If a maneuver you use requires your target to make a saving throw to resist the maneuver's effects, the saving throw DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice). You gain one superiority die, which is a d6 (this die is added to any superiority dice you have from another source). This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a short or long rest.",
    isAction: true,
    isPassive: true,
  },
  {
    name: "Medium Armor Master",
    description:
      "You have practiced moving in medium armor to gain the following benefits: Wearing medium armor doesn't impose disadvantage on your Dexterity (Stealth) checks. When you wear medium armor, you can add 3, rather than 2, to your AC if you have a Dexterity of 16 or higher.",
    isPassive: true,
  },
  {
    name: "Metamagic Adept",
    description:
      "You've learned how to exert your will on your spells to alter how they function: You learn two Metamagic options of your choice from the sorcerer class. You can use only one Metamagic option on a spell when you cast it, unless the option says otherwise. Whenever you reach a level that grants the Ability Score Improvement feature, you can replace one of these Metamagic options with another one from the sorcerer class. You gain 2 sorcery points to spend on Metamagic (these points are added to any sorcery points you have from another source but can be used only on Metamagic). You regain all spent sorcery points when you finish a long rest.",
    requirements: ["Spellcasting or Pact Magic feature"],
    isPassive: true,
  },
  {
    name: "Moblie",
    description:
      "You are exceptionally speedy and agile. You gain the following benefits: Your speed increases by 10 feet. When you use the Dash action, difficult terrain doesn\u2019t cost you extra movement on that turn. When you make a melee attack against a creature, you don't provoke opportunity attacks from that creature for the rest of the turn, whether you hit or not.",
    isPassive: true,
  },
  {
    name: "Moderately Armored",
    description:
      "You have trained to master the use of medium armor and shields, gaining the following benefits: Increase your Strength or Dexterity score by 1, to a maximum of 20. You gain proficiency with medium armor and shields.",
    requirements: ["Proficiency with light armor"],
    isPassive: true,
  },
  {
    name: "Mounted Combatant",
    description:
      "You are a dangerous foe to face while mounted. While you are mounted and aren\u2019t incapacitated, you gain the following benefits: You have advantage on melee attack rolls against any unmounted creature that is smaller than your mount. You can force an attack targeted at your mount to target you instead. If your mount is subjected to an effect that allows it to make Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.",
    isPassive: true,
  },
  {
    name: "Observant",
    description:
      "Quick to notice details of your environment, you gain the following benefits: Increase your Intelligence or Wisdom score by 1, to a maximum of 20. If you can see a creature's mouth while it is speaking a language you understand, you can interpret what it's saying by reading its lips. You have a +5 bonus to your passive Wisdom (Perception) and passive Intelligence (Investigation) scores",
    isPassive: true,
  },
  {
    name: "Piercer",
    description:
      "You have achieved a penetrating precision in combat, granting you the following benefits: Increase your Strength or Dexterity by 1, to a maximum of 20. Once per turn, when you hit a creature with an attack that deals piercing damage, you can re-roll one of the attack\u2019s damage dice, and you must use the new roll. When you score a critical hit that deals piercing damage to a creature, you can roll one additional damage die when determining the extra piercing damage the target takes.",
    isPassive: true,
  },
  {
    name: "Poisoner",
    description:
      "You can prepare and deliver deadly poisons, gaining the following benefits: When you make a damage roll, you ignore resistance to poison damage. You can coat a weapon in poison as a bonus action, instead of an action. You gain proficiency with the poisoner's kit if you don't already have it. With one hour of work using a poisoner's kit and expending 50 gp worth of materials, you can create a number of doses of potent poison equal to your proficiency bonus. Once applied to a weapon or piece of ammunition, the poison retains its potency for 1 minute or until you hit with the weapon or ammunition. When a creature takes damage from the coated weapon or ammunition, that creature must succeed on a DC 14 Constitution saving throw or take 2d8 poison damage and become poisoned until the end of your next turn.",
    isPassive: true,
  },
  {
    name: "Polearm Master",
    description:
      "You gain the following benefits: When you take the Attack action and attack with only a glaive, halberd, quarterstaff, or spear, you can use a bonus action to make a melee attack with the opposite end of the weapon. This attack uses the same ability modifier as the primary attack. The weapon's damage die for this attack is a d4, and it deals bludgeoning damage. While you are wielding a glaive, halberd, pike, quarterstaff, or spear, other creatures provoke an opportunity attack from you when they enter the reach you have with that weapon.",
    isBonusAction: true,
    isPassive: true,
  },
  {
    name: "Resilient",
    description:
      "Choose one ability score. You gain the following benefits: Increase the chosen ability score by 1, to a maximum of 20.  You gain proficiency in saving throws using the chosen ability.",
    isPassive: true,
  },
  {
    name: "Ritual Caster",
    description:
      "You have learned a number of spells that you can cast as rituals. These spells are written in a ritual book, which you must have in hand while casting one of them. When you choose this feat, you acquire a ritual book holding two 1st-level spells of your choice. Choose one of the following classes: bard, cleric, druid, sorcerer, warlock, or wizard. You must choose your spells from that class's spell list, and the spells you choose must have the ritual tag. The class you choose also must have the ritual tag. The class you choose also determines your spellcasting ability for these spells: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or Intelligence for wizard. If you come across a spell in written form, such as a magical spell scroll or a wizard's spellbook, you might be able to add it to your ritual book. The spell must be on the spell list for the class you chose, the spell's level can be no higher than half your level (rounded up), and it must have the ritual tag. The process of copying the spell into your ritual book takes 2 hours per level of the spell, and costs 50 gp per level. The cost represents the material components you expend as you experiment with the spell to master it, as well as the fine inks you need to record it.",
    requirements: ["INT or WIS 13"],
    isPassive: true,
  },
  {
    name: "Rune Shaper",
    description:
      "You’ve studied the magic of Giant runes, granting you the following benefits: Comprehend Languages. You learn the comprehend languages spell. You can cast this spell without expending a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast this spell using any spell slots you have. Rune Magic. You know a number of runes equal to half your proficiency bonus (rounded down), chosen from the Rune Spells table. Whenever you finish a long rest, you can inscribe each rune you know onto one nonmagical weapon, armor, piece of clothing, or other object you touch. You temporarily learn the 1st-level spells that correspond to the runes you inscribed, as specified on the Rune Spells table, and you know those spells until you finish a long rest, when the runes fade. While you are wearing or carrying any rune-marked object, you can cast the spells associated with those runes using any spell slots you have. You can also invoke a rune inscribed on an object you are wearing or carrying and cast its associated spell without expending a spell slot or using material components. Once you cast the spell in this way, you can\u2019t do so again until you finish a long rest. Your spellcasting ability for this feat is Intelligence, Wisdom, or Charisma (choose when you select this feat). Each time you gain a level, you can replace one of the runes you know with another one from the Rune Spells table: Cloud - Fog Cloud.  Death - Inflict Wounds.  Dragon - Chromatic Orb.  Enemy - Disguise Self.  Fire - Burning Hands. Friend - Speak with animals. Frost  - Armor of Agathys. Hill - Goodberry.  Journey - Longstrider.  King - Command.  Mountain - Entangle.  Stone - Sanctuary.  Storm - Thunderwave.",
    requirements: ["Spellcasting Feature or Rune Carver Background"],
    isPassive: true,
  },
  {
    name: "Savage Attacker",
    description:
      "Once per turn when you roll damage for a melee weapon attack, you can reroll the weapon's damage dice and use either total.",
    isPassive: true,
  },
  {
    name: "Sentinel",
    description:
      "You have mastered techniques to take advantage of every drop in any enemy's guard, gaining the following benefits. When you hit a creature with an opportunity attack, the creature's speed becomes 0 for the rest of the turn. Creatures provoke opportunity attacks from you even if they take the Disengage action before leaving your reach. When a creature within 5 feet of you makes an attack against a target other than you (and that target doesn't have this feat), you can use your reaction to make a melee weapon attack against the attacking creature.",
    isReaction: true,
    isPassive: true,
  },
  {
    name: "Shadow Touched",
    description:
      "Your exposure to the Shadowfell's magic has changed you, granting you the following benefits: Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20. You learn the Invisibility spell and one 1st-level spell of your choice. The 1st-level spell must be from the Illusion or Necromancy school of magic. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
    isPassive: true,
  },
  {
    name: "Sharpshooter",
    description:
      "You have mastered ranged weapons and can make shots that others find impossible. You gain the following benefits: Attacking at long range doesn't impose disadvantage on your ranged weapon attack rolls. Your ranged weapon attacks ignore half and three-quarters cover. Before you make an attack with a ranged weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If that attack hits, you add +10 to the attack's damage.",
    isPassive: true,
  },
  {
    name: "Shield Master",
    description:
      "You use shields not just for protection but also for offense. You gain the following benefits while you are wielding a shield: If you take the Attack action on your turn, you can use a bonus action to try to shove a creature within 5 feet of you with your shield. If you aren't incapacitated, you can add your shield's AC bonus to any Dexterity saving throw you make against a spell or other harmful effect that targets only you. If you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you can use your reaction to take no damage if you succeed on the saving throw, interposing your shield between yourself and the source of the effect.",
    isReaction: true,
    isPassive: true,
  },
  {
    name: "Skill Expert",
    description:
      "You have honed your proficiency with particular skills, granting you the following benefits: Increase one ability score of your choice by 1, to a maximum of 20. You gain proficiency in one skill of your choice. Choose one skill in which you have proficiency. You gain expertise with that skill, which means your proficiency bonus is doubled for any ability check you make with it. The skill you choose must be one that isn't already benefiting from a feature, such as Expertise, that doubles your proficiency bonus.",
    isPassive: true,
  },
  {
    name: "Skilled",
    description:
      "You gain proficiency in any combination of three skills or tools of your choice.",
    isPassive: true,
  },
  {
    name: "Skulker",
    description:
      "You are an expert at slinking through shadows. You gain the following benefits: You can try to hide when you are lightly obscured from the creature from which you are hiding. When you are hidden from a creature and miss it with a ranged weapon attack, making the attack doesn't reveal your position. Dim light doesn't impose disadvantage on your Wisdom (Perception) checks relying on sight.",
    isPassive: true,
  },
  {
    name: "Slasher",
    description:
      "You've learned where to cut to have the greatest results, granting you the following benefits: Increase your Strength or Dexterity by 1, to a maximum of 20. Once per turn when you hit a creature with an attack that deals slashing damage, you can reduce the speed of the target by 10 feet until the start of your next turn. When you score a critical hit that deals slashing damage to a creature, you grievously wound it. Until the start of your next turn, the target has disadvantage on all attack rolls.",
    isAction: true,
    isPassive: true,
  },
  {
    name: "Soul of the Storm Giant",
    description:
      "You\u2019ve manifested the tempest magic emblematic of storm giants, granting you the following benefits: Ability Score Increase. Increase your Strength, Wisdom, or Charisma score by 1, to a maximum of 20. Maelstrom Aura. As a bonus action, you surround yourself with an aura of magical wind and lightning that extends 10 feet from you in every direction but not through total cover. The aura lasts until the start of your next turn or until you are incapacitated. While the aura is active, you have resistance to lightning and thunder damage. In addition, attack rolls against you have disadvantage, and whenever another creature starts its turn within the aura, you can force the creature to make a Strength saving throw (DC equals 8 + your proficiency bonus + the ability modifier of the score increased by this feat). On a failed save, the creature\u2019s speed is halved until the start of its next turn. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    requirements: ["4th Level", "Strike of the Giants (Storm Strike) Feat"],
    isBonusAction: true,
    isPassive: true,
  },
  {
    name: "Spell Sniper",
    description:
      "You have learned techniques to enhance your attacks with certain kinds of spells, gaining the following benefits: When you cast a spell that requires you to make an attack roll, the spell's range is doubled. Your ranged spell attacks ignore half cover and three-quarters cover. You learn one cantrip that requires an attack roll. Choose the cantrip from the bard, cleric, druid, sorcerer, warlock, or wizard spell list. Your spellcasting ability for this cantrip depends on the spell list you chose from: Charisma for bard, sorcerer, and warlock; Wisdom for cleric or druid; or Intelligence for wizard.",
    requirements: ["The ability to cast at least one spell"],
    isPassive: true,
  },
  {
    name: "Strike of the Giants",
    description:
      "You have absorbed primeval magic that gives you an echo of the might of giants. When you take this feat, choose one of the benefits listed below. Once per turn, when you hit a target with a melee weapon attack or a ranged weapon attack using a thrown weapon, you can imbue the attack with an additional effect depending on the benefit you chose: Cloud Strike. The target takes an extra 1d4 thunder damage. If the target is a creature, it must succeed on a Wisdom saving throw, or you become invisible to it until the start of your next turn or until immediately after you make an attack roll or cast a spell. Fire Strike. The target takes an extra 1d10 fire damage. Frost Strike. The target takes an extra 1d6 cold damage. If the target is a creature, it must succeed on a Constitution saving throw, or its speed is reduced to 0 until the start of your next turn. Hill Strike. The target takes an extra 1d6 damage of the weapon\u2109s type. If the target is a creature, it must succeed on a Strength saving throw or have the prone condition. Stone Strike. The target takes an extra 1d6 force damage. If the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet from you in a straight line. Storm Strike. The target takes an extra 1d6 lightning damage. If the target is a creature, it must succeed on a Constitution saving throw, or it has disadvantage on attack rolls until the start of your next turn. The saving throw DC for these effects equals 8 + your proficiency bonus + your Strength or Constitution modifier. You can use this feat a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    requirements: ["Martial Weapon Proficiency or Giant Foundling Background"],
    isAction: true,
    isPassive: true,
  },
  {
    name: "Tavern Brawler",
    description:
      "Accustomed to the rough-and-tumble fighting using whatever weapons happen to be at hand, you gain the following benefits: Increase your Strength or Consititution score by 1, to a maximum of 20. You are proficient with improvised weapons. Your unarmed strike uses a d4 for damage. When you hit a creature with an unarmed strike or an improvised weapon on your turn, you can use a bonus action to attempt to grapple the target.",
    isPassive: true,
  },
  {
    name: "Telekinetic",
    description:
      "You learn to move things with your mind, granting you the following benefits: Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20. You learn the mage hand cantrip. You can cast it without verbal or somatic components, and you can make the spectral hand invisible. If you already know this spell, its range increases by 30 feet when you cast it. Its spellcasting ability is the ability increased by this feat. As a bonus action, you can try to telekinetically shove one creature you can see within 30 feet of you. When you do so, the target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + the ability modifier of the score increased by this feat) or be moved 5 feet toward or away from you. A creature can willingly fail this save.",
    isBonusAction: true,
    isPassive: true,
  },
  {
    name: "Telepathic",
    description:
      "You awaken the ability to mentally connect with others, granting you the following benefits: Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20. You can speak telepathically to any creature you can see within 60 feet of you. Your telepathic utterances are in a language you know, and the creature understands you only if it knows that language. Your communication doesn't give the creature the ability to respond to you telepathically. You can cast the Detect Thoughts spell, requiring no spell slot or components, and you must finish a long rest before you can cast it this way again. Your spellcasting ability for the spell is the ability increased by this feat. If you have spell slots of 2nd level or higher, you can cast this spell with them.",
    isPassive: true,
  },
  {
    name: "Tough",
    description:
      "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points.",
    isPassive: true,
  },
  {
    name: "Vigor of the Hill Giant",
    description:
      "You\u2019ve manifested the resilience emblematic of hill giants, granting you the following benefits: Ability Score Increase. Increase your Strength, Constitution, or Wisdom score by 1, to a maximum of 20. Bulwark. When you are subjected to an effect that would move you at least 5 feet or give you the prone condition, you can use your reaction to steady yourself. You aren\u2109t moved and don\u2109t have the prone condition. Iron Stomach. Whenever you eat food as part of a short rest and spend one or more Hit Dice to regain hit points, you regain additional hit points equal to your Constitution modifier + your proficiency bonus.",
    requirements: ["Strike of the Giants (Hill Strike) Feat"],
    isReaction: true,
    isPassive: true,
  },
  {
    name: "War Caster",
    description:
      "You have practiced casting spells in the midst of combat, learning techniques that grant you the following benefits: You have advantage on Constitution saving throws that you make to maintain your concentration on a spell when you take damage. You can perform the somatic components of spells even when you have weapons or a shield in one or both hands. When a hostile creature's movement provokes an opportunity attack from you, you can use your reaction to cast a spell at the creature, rather than making an opportunity attack. The spell must have a casting time of 1 action and must target only that creature.",
    isReaction: true,
    isPassive: true,
  },
  {
    name: "Agent of Order",
    description:
      "You can channel cosmic forces of order to gain these benefits: Ability Score Increase. Increase an ability score of your choice by 1, to a maximum of 20. Stasis Strike. Once per turn when you damage a creature you can see within 60 feet of yourself, you can deal an extra 1d8 force damage to the target, and it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + the modifier of the spellcasting ability you chose for the Scion of the Outer Planes feat) as spectral bindings try to ensnare it. On a successful save, the target escapes. On a failed save, the target has the restrained condition until the start of your next turn. These bindings manifest as chains or some other symbol of stasis. You can use this benefit a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    requirements: ["Scion of the Outer Planes (Lawful Outer Plane) Feat"],
    isAction: true,
    isPassive: true,
  },
  {
    name: "Baleful Scion",
    description:
      "You can channel cosmic forces of evil to gain these benefits: Ability Score Increase. Increase an ability score of your choice by 1, to a maximum of 20. Grasp of Avarice. Once per turn, when you damage a creature you can see within 60 feet of yourself, you can also deal necrotic damage to it. The necrotic damage equals 1d6 + your proficiency bonus, and you regain a number of hit points equal to this necrotic damage dealt. You can use this benefit a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    requirements: ["Scion of the Outer Planes (Evil Outer Plane) Feat"],
    isAction: true,
    isPassive: true,
  },
  {
    name: "Cohort of Chaos",
    description:
      "You can channel cosmic forces of chaos to gain these benefits: Ability Score Increase. Increase an ability score of your choice by 1, to a maximum of 20. Chaotic Flare. When you roll a 1 or a 20 on an attack roll or a saving throw, the magic of chaos flows through you. Roll a d4 and consult the Chaotic Flares table to determine what happens. A flare lasts until the end of your next turn, and a new flare can't occur until after the first flare end.  1 - Battle Fury A creature of your choice that you can see is filled with reckless fury. It has advantage on attack rolls and disadvantage on ability checks. 2 - Disruption Field - Waves of energy ripple around you. Every creature that starts its turn within 5 feet of you, or that moves into that area for the first time on a turn, takes 1d8 force damage.  3 - Unbound - When you move, you can use some or all of your walking speed to teleport yourself once, along with any equipment you're wearing or carrying, up to the distance used to an unoccupied space that you can see. 4 - Wailing Winds - Winds swirl in a 15-foot-radius sphere centered on you. You and any other creatures in that area have disadvantage on Wisdom saving throws",
    requirements: ["Scion of the Outer Planes (Chaotic Outer Plane) Feat"],
    isAction: true,
    isPassive: true,
  },
  {
    name: "Outlands Envoy",
    description:
      "You have spent significant time in Sigil or the Outlands, the crossroads of the multiverse. Being steeped in converging planar energies grants you these benefits: Ability Score Increase. Increase an ability score of your choice by 1, to a maximum of 20. Crossroads Emissary. You learn the misty step and tongues spells. You can cast each spell once using this feat without a spell slot, and you must finish a long rest before you can cast that spell in this way again. When you cast tongues using this feat, you require no material components. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the one chosen when you gained the Scion of the Outer Planes feat",
    requirements: ["Scion of the Outer Planes (Chaotic Outer Plane) Feat"],
    isPassive: true,
  },
  {
    name: "Planar Wanderer",
    description:
      "You can draw upon the forces of the multiverse to survive cosmic extremes and to traverse its infinite realms, granting you these benefits: Planar Adaption. When you finish a long rest, you gain resistance to either acid, cold or fire damage (your choice) until you finish your next long rest. Portal Cracker. Your experience with portals allows you to open them without a portal key. As an action, you can concentrate on a portal you're aware of within 5 feet of yourself and make a DC 20 Intelligence (Arcana) check. On a failed check, you take 3d8 psychic damage and can't use this benefit on that portal again until you finish a long rest. On a successful check, you can force the portal open or closed for 1 hour. For that duration, the portal doesn't respond to its portal key unless a creature employing the key succeeds on a DC 20 Intelligence (Arcana) check as an action. Portal Sense. You know the direction to the last planar portal you used while you and the portal are on the same plane of existence. Moreover, as an action, you can detect the location of any portals within 30 feet of you that aren't behind total cover. Once you detect a portal with this action, you can't use the action again until you finish a long rest.",
    requirements: ["Scion of the Outer Planes Feat"],
    isAction: true,
    isPassive: true,
  },
  {
    name: "Righteous Heritor",
    description:
      "Ability Score Increase. Increase an ability score of your choice by 1, to a maximum of 20. Soothe Pain. When you or a creature within 30 feet of you takes damage, you can use your reaction to reduce that damage by 1d10 + your proficiency bonus. You can use this benefit a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    requirements: ["Scion of the Outer Planes Feat"],
    isReaction: true,
    isPassive: true,
  },
  {
    name: "Scion of the Outer Planes",
    description: "Your connection to an Outer Plane infuses you with the energy there. Choose a type of plane listed in the Planar Infusion Table. Your choice gives you a resistance to a damage type and the ability to cast a cantrip, as specified in the table. You can cast this cantrip without material components, and your spellcasting ability for it is Intelligence, Wisdom or Charisma (choose when you select this feat).  Chaotic Outer Plane  -  Posion  -  Minor illusion.  Evil Plane  -  Necrotic  -  Chill Touch.  Good Outer Plane  -  Radiant  -  Sacred Flame.  Lawful Outer Plane  -  Force  -  Guidence.  The Outlands  -  Psychic  -  Mage Hand.",
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
