var gnsp = {  // Adventure letters
  title: "Good Night Sweet Prince",
  plot: {
    0: { name:"Step 1", descr: "The Heroes witness the poisoning of the Avalonian envoy and investigate." },
    1: { name:"Step 2", descr: "The Heroes attempt to thwart the Prince’s scheme." },
    2: { name:"Goal", descr: "The Heroes confront the Prince and deal with the fallout of the completed ritual." },
  },
  npc: {
    
  },
  place: {
    
  },
  hero: {
    nico: {
      name: "Nico De Luca",
      gender: "Male",
      nation: "Vodacce",
      virtue: "Commanding",
      virtueDescr: "Activate: GM gives a Hero Point to all other Heroes in this Scene.",
      hubris: "Trusting",
      hubrisDescr: "Receive a Hero Point when you accept someone’s lies or lopsided deal.",
      trait: {
        brawn: 2,
        finesse: 3,
        resolve: 2,
        wits: 2,
        panache: 4
      },
      skill: {
        athletics: 2, 
        convince: 2, 
        empathy: 2, 
        hide: 2, 
        intimidate: 1, 
        notice: 2, 
        perform: 1, 
        tempt: 3, 
        theft: 2, 
        weaponry: 3 
      },
      background: {
        bravo: "Earn Hero Point when putting self in danger to defend someone sworn to protect",
        moroso: "Earn Hero Point when choose to let another character get away with something because you're romantically interested in them"
      },
      advantage: {
        1: {
          name: "Time Sense",
          descr: "You always know what time it is. You know how long until the next sunrise or sunset, with less than a one minute margin of error."
        },
        2: {
          name: "Come Hither",
          descr: "Spend a Hero Point to lure another character into a private room and later leave said private room without him, removing him from the scene. He may be rescued after you’re long gone."
        },
        3: {
          name: "Poison Immunity",
          descr: "Poison never affects you, aside from some potential mild discomfort. If the poison would ordinarily kill you, it might cause you only to vomit instead, but there are no additional effects."
        },
        4: {
          name: "An Honest Misunderstanding",
          descr: "Spend a Hero Point to edit, redact or otherwise alter something you or another Hero just said, “reinterpreting” the words into the kindest compliment."
        },
        5: {
          name: "Flirting with Disaster",
          descr: "Activate this Advantage when you make a Tempt Risk. The GM must buy all of your unused dice. A Hero can only activate this Advantage once per game session."
        },
        6: {
          name: "Hard to Kill",
          descr: "You no longer become Helpless when you have four Dramatic Wounds. Instead, when you have four Dramatic Wounds any Villain who takes a Risk against you gains 3 Bonus Dice (rather than 2). You gain an additional tier of Wounds. When you have taken your fifth Dramatic Wound, you become Helpless."
        }
      }
    },
    rufina: {
      name: "Rufina Reyes",
      gender: "Female",
      nation: "Castille",
      virtue: "Subtle",
      virtueDescr: "Activate when you act behind the scenes, from the shadows or through a proxy. For the next Risk, when you determine Raises, every die counts as a Raise.",
      hubris: "Curious",
      hubrisDescr: "Receive a Hero Point when you investigate something unusual, especially if it looks dangerous.",
      trait: {
        brawn: 2,
        finesse: 2,
        resolve: 3,
        wits: 4,
        panache: 2
      },
      skill: {
        aim: 2, 
        athletics: 2, 
        brawl: 2, 
        convince: 1, 
        empathy: 2, 
        hide: 3, 
        intimidate: 1, 
        notice: 3, 
        tempt: 1, 
        theft: 3
      },
      background: {
        criminal: "Earn Hero Point when break law pursuing noble endeavor",
        sabueso_real: "Earn Hero Point when refuse to act until have more info, causing more trouble"
      },
      advantage: {
        1: {
          name: "Second Story Work",
          descr: "You can spend a Hero Point to locate a way into a building or restricted area. You can bring up to one other character along with you, but everyone else has to find their own way in—or wait for you to open a path for them."
        },
        2: {
          name: "Silent Takedown",
          descr: "Spend a Hero Point to immediately defeat a single Brute Squad, regardless of its Strength, so long as they aren’t aware of your presence before you launch your attack."
        },
        3: {
          name: "Streetwise",
          descr: "You can spend a Hero Point to locate a fixer, an information broker, a black market or a similar underworld figure."
        },
        4: {
          name: "Brush Pass",
          descr: "Spend a Hero Point to pick a pocket, steal a ring from another character’s finger or plant a small hand-held item on another character without him noticing."
        },
        5: {
          name: "Camaraderie",
          descr: "Whenever you spend a Hero Point to aid an ally, he gains four dice instead of three."
        },
        6: {
          name: "Opportunist",
          descr: "When another Hero spends a Raise to create an Opportunity, you can spend a Hero Point to immediately activate the Opportunity for yourself."
        }
      }
    },
    cassidy: {
      name: "Cassidy MacNamara",
      gender: "Female",
      nation: "Inismore",
      virtue: "Victorious",
      virtueDescr: "Activate your Virtue the first time you Wound a Villain during a fight to make her take a Dramatic Wound in addition to the Wounds you normally deal.",
      hubris: "Foolhardy",
      hubrisDescr: "You receive a Hero Point when your brash, cocky or reckless actions cause trouble for you and another Hero.",
      trait: {
        brawn: 2,
        finesse: 3,
        resolve: 3,
        wits: 2,
        panache: 3
      },
      skill: {
        athletics: 3, 
        brawl: 3, 
        convince: 2, 
        empathy: 2, 
        intimidate: 3, 
        notice: 1, 
        ride: 1, 
        tempt: 2, 
        warfare: 2, 
        weaponry: 1 
      },
      background: {
        knightErrant: "Earn a Hero Point when you uphold an ideal of knightly virtue in a way that gets you into trouble",
        dornalai: "Earn a Hero Point when you let bygones be bygones after a fight, win or lose, and form a bond with your opponent"
      },
      advantage: {
        1: {
          name: "Able Drinker",
          descr: "Alcohol never adversely affects you, no matter how much you drink."
        },
        2: {
          name: "Direction Sense",
          descr: "As long as you have some point of reference, you are never lost. That isn’t the same as knowing exactly where you are—if you’re knocked unconscious and wake up in a dungeon, you don’t necessarily have any idea what city you are in, but if you manage to escape your cell you will never get turned around in the winding tunnels that make up the dungeon."
        },
        3: {
          name: "Small",
          descr: "You are smaller than the average Théan. Much smaller. If your small size makes a Risk easier—using Hide to squeeze into a tiny space and escape a guard patrol, or using Athletics to slip between the bars of a jail cell—gain 1 Bonus Die."
        },
        4: {
          name: "Haymaker",
          descr: "When you make a Brawling Risk to punch, kick, headbutt or otherwise injure another character using nothing but your own body, you can choose to spend all of your Raises on your first Action. You inflict a number of Wounds equal to the Raises you spend. Then, the character who is hit by your haymaker loses half of his current Raises."
        },
        5: {
          name: "Indomitable Will",
          descr: "After another character attempts to intimidate, seduce or otherwise goad you, spend a Hero Point to automatically resist."
        },
        6: {
          name: "Reputation (Brash)",
          descr: "When you use your reputation to your advantage in a social Risk, you gain 1 Bonus Die."
        },
        7: {
          name: "Boxer",
          descr: "You gain 1 Bonus Die when you make a Brawling Risk to punch, kick, headbutt or otherwise injure another character using nothing but your own body."
        }
      }
    },
    karahkwa: {
      name: "Karahkwa Tah'wa Okwari",
      gender: "Female",
      nation: "Alahnahquin",
      virtue: "Insightful",
      virtueDescr: "Activate your Virtue to discover a Brute Squad’s type, or to know a Villain’s Rank and Advantages.",
      hubris: "Overzealous",
      hubrisDescr: "You receive a Hero Point when your Hero strongly defends one of heropinions when the time and place is inappropriate.",
      trait: {
        brawn: 2,
        finesse: 3,
        resolve: 2,
        wits: 3,
        panache: 3
      },
      skill: {
        aim: 3, 
        athletics: 3, 
        brawl: 2, 
        convince: 1, 
        empathy: 2, 
        hide: 2, 
        intimidate: 1, 
        notice: 2, 
        perform: 1, 
        ride: 1, 
        sailing: 2, 
        scholarship: 1, 
        tempt: 1, 
        warfare: 2
      },
      background: {
        akwekon: "Earn a Hero Point when you solve a problem with primal instinct",
        hunter: "Earn a Hero Point when you use yourhunter’s acumen to save someone from danger."
      },
      advantage: {
        1: {
          name: "An Honest Misunderstanding",
          descr: "Spend a HeroPoint to edit, redact, or otherwise alter somethingyou or another Hero just said, “reinterpreting” thewords into the kindest compliment."
        },
        2: {
          name: "Got It",
          descr: "Spend a Hero Point to immediately pick alock, crack a safe, or disarm a trap."
        },
        3: {
          name: "Opportunist",
          descr: "When another Hero spends a Raiseto create an Opportunity, you can spend a HeroPoint to immediately activate the Opportunity foryourself."
        },
        4: {
          name: "Sniper",
          descr: "You gain 1 Bonus Die when you make anAim Risk using a long-barrelled musket, longbow, orcrossbow."
        },
        5: {
          name: "Survivalist",
          descr: "If you are in the wilderness, you canforage or hunt and find enough food to for yourselfand up to five other people. Under extremeconditions - lost in the middle of a desert, orabandoned in the Iaka Et:serran tundra, forexample - you find enough food for yourself and upto two other people."
        }
      }
    },
    eezkis: {
      name: "Eezkis",
      gender: "Male",
      nation: "Aksum",
      virtue: "Exemplary",
      virtueDescr: "Activate your Virtue and choose another Hero in the same Scene to pool your Raises for the Round, spending Raises to take Actions from your shared pool.",
      hubris: "Loyal",
      hubrisDescr: "You receive a Hero Point when your Hero goes back for a fallen comrade or refuses toleave a wounded ally.",
      trait: {
        brawn: 2,
        finesse: 2,
        resolve: 3,
        wits: 3,
        panache: 3
      },
      skill: {
        athletics: 1, 
        convince: 3, 
        empathy: 3, 
        notice: 2, 
        perform: 2, 
        ride: 2, 
        sailing: 2, 
        scholarship: 3, 
        tempt: 2
      },
      background: {
        andi_hibiri_tefetiro_missionary: "Earn a Hero Point when your seize an opportunity to preach, proselytize or try to convert someone to your religion and it gets you into trouble.",
        priest: "Earn a Hero Point when you set aside the rhetoric and take action to practice the virtues you preach."
      },
      advantage: {
        1: {
          name: "Blood of Gold",
          descr: "While you have at least 1 Dramatic Wound, you gain an additional Bonus Die on all Convince, Empathy, Perform, and Tempt Risks."
        },
        2: {
          name: "Hand of Peace",
          descr: "Until you or your allies take an aggressive Action in a Scene, you may apply Pressure to any number of targets. A target may still only be affected by one Pressure at a time."
        },
        3: {
          name: "Helping Hand",
          descr: "Activate this Advantage to assist an ally (giving her three Bonus Dice for a Risk) without spending a Hero Point. You can only activate this Advantage once per session."
        },
        4: {
          name: "Lead by Example",
          descr: "Spend a Hero Point after making a Risk, and choose any character who rolled fewer Raises than you. That character may change his Approach to match yours, and gains two additional Raises."
        },
        5: {
          name: "Leadership",
          descr: "Spend a Hero Point to inspire a group to action. The group must be able to hear you, but if they can and they are of neutral or better disposition, they will do whatever you command so long as it is reasonable."
        },
        6: {
          name: "Ordained",
          descr: "You can expect refuge, a place to stay, and hot meals in any church. You also have access to many - but not all - of the Church’s libraries. Finally, you gain two dice for any social Risks against characters who are adherents to your faith."
        },
        7: {
          name: "Inspire Generosity",
          descr: "Spend a Hero Point to convince another character to grant you an object you want at no cost."
        }
      }
    },
    jack: {
      name: "Jack Swift",
      gender: "Male",
      nation: "Aragosta",
      virtue: "Vengeful",
      virtueDescr: "Activate your Virtue when you enact poetic justice, make someone pay his due or force someone to follow through on a bargain. For the next Risk, when you determine Raises, every die counts as a Raise.",
      hubris: "Loyal",
      hubrisDescr: "You receive a Hero Point when your Hero goes back for a fallen comrade or refuses to leave a wounded ally.",
      trait: {
        brawn: 2,
        finesse: 3,
        resolve: 2,
        wits: 3,
        panache: 3
      },
      skill: {
        aim: 2, 
        athletics: 1, 
        brawl: 1, 
        empathy: 1, 
        hide: 2, 
        intimidate: 2, 
        sailing: 3, 
        tempt: 2, 
        theft: 3, 
        warfare: 1, 
        weaponry: 2 
      },
      background: {
        atabean_rook: "Earn a Hero Point when you use your reputation or status to help another character",
        criminal: "Earn a Hero Point when you break the law in the pursuit of a noble endeavor"
      },
      advantage: {
        1: {
          name: "Eye for Talent",
          descr: "When you spend Wealth to hire a Brute Squad, that Brute Squad’s Strength is 1 point higher."
        },
        2: {
          name: "Staredown",
          descr: "Spend a Hero Point to intimidate a character into backing down from a threat, letting you into somewhere he shouldn’t or otherwise getting out of your way."
        },
        3: {
          name: "Streetwise",
          descr: "You can spend a Hero Point to locate a fixer, an information broker, a black market or a similar underworld figure."
        },
        4: {
          name: "Camaraderie",
          descr: "Whenever you spend a Hero Point to aid an ally, they gain four dice instead of three."
        },
        5: {
          name: "Deadeye",
          descr: "You gain 1 Bonus Die when you make an Aim Risk using a pistol, blunderbuss or a thrown weapon such as a knife or axe."
        },
        6: {
          name: "Salty Dog",
          descr: "When you make a Risk using Intimidate, Sailing or Theft, all of your dice gain +1 to their value."
        }
      }
    }
  }
};
