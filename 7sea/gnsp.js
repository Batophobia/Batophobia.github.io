var gnsp = {  // Adventure letters
  title: "Good Night Sweet Prince",
  plot: {
    0: {
      name:"Step 1",
      descr: "The Heroes witness the poisoning of the Avalonian envoy and investigate.",
      sub: {
        0: {
            name: "Death at a Funeral",
            descr: "The Heroes attend a funeral and witness and investigate the poisoning of the Avalonian envoy.",
            sequence: { type: "Dramatic",
                       name: "Investigating the Funeral",
                       approaches: "Chatting up the guests at the party to gain information on what happened is a bit more involved than calming everyone down. Physical Skills are unlikely to be helpful here, but as before, if a player comes up with a clever way to use the Skill, feel free to allow it.",
                       opportunities: "For each Raise spent a Hero may ask the GM a question to learn the following:\n• No one else shows any sign of poisoning.\n• Poisoning is alarmingly common in Vodacce, but it typically isn’t a death outsiders have cause to fear. When this gets out, it will go poorly for Vodacce and their relations with Avalon.\n• The poison is called the Fool’s Kiss. It is often employed on the lips of the killer and delivered via a kiss, though this is not the only method of delivery.\n• Liam Cooper had no known enemies present. He wasn’t here in his official capacity as an envoy, and he was generally liked, or at least not disliked, by those he met.\n• Some of Prince Caligari’s enemies have met their ends with Fool’s Kiss in the past, though the Prince has always had an ironclad alibi.\n• Caligari claims that each of those events involved someone trying to besmirch his good name.\n• If you know who to ask, Fool’s Kiss can be purchased locally.\n• Cesario Ventili, a local apothecary, is known to sell the herbs necessary to create Fool’s Kiss.",
                       consequences: "",
                       outcomes: "Armed with the name of Cesario and where to find him, the Heroes have a clear course of action: find and question the apothecary. If they are unsure what to do and check in with Caligari, he will direct them to go and question this apothecary. One piece of information they can learn is potentially damning for Prince Caligari himself in regards to the fates of some of his rivals. If the Heroes confront Caligari about it, he is careful to remind them that he had no legal involvement in those deaths and that they are guests in his home, as well as the fact that one of his friends has just been murdered on his estate. He is in no mood to entertain garish allegations and responds poorly to this line of questioning."
                      }
           },
        1: {
          name: "Chase through the Streets",
          descr: "The Heroes track the poison to a local apothecary and must chase him for answers.",
          sequence: { type: "Action",
                       name: "Make a Break for it!",
                       approaches: "Finesse/Resolve+Athletics would work well for street-level parkour moves, leaping over obstacles and deftly weaving between pedestrians. Wits+Notice would keep Cesario in sight. A chase is a great chance for the Heroes to look awesome. Play that up and encourage the players to describe how their Heroes continue to dog their prey.",
                       opportunities: "Each Round the Heroes must spend a Raise to keep Cesario in their sights as he ducks down alleyways in an attempt to get away.",
                       consequences: "Cesario’s flight from the Heroes creates some chaos in the streets. He scatters contents of shop stalls and horse carts rear up as he dashes past them. Assign each Hero one chase complication to deal with. These constitute Strength ½[H] traps. If these traps go unresolved, they inflict [H] Wounds to the assigned Hero.",
                       outcomes: "Once caught, Cesario isn’t willing to die for his secret. He is scared and was worried that the Heroes are here to kill him. He apologizes for running and promises that he’s never shared anything; the Prince doesn’t have to worry about him talking. When pressed, he’ll mention that he gave the poison to Miguel as he’d been directed. The apothecary also knows where to find Miguel, having given the alchemist supplies before."
                      }
        }
      }
    },
    1: {
      name:"Step 2",
      descr: "The Heroes attempt to thwart the Prince’s scheme.",
      sub: {
        0: {
          name: "Mad Alchemy",
          descr: "The Heroes confront Miguel Diaz and discover what Prince Caligari’s plan truly entails.",
          sequence: { type: "Action",
                       name: "Infiltrating the Lab",
                       approaches: "Most likely the Heroes will opt to either fight their way past the Brute Squad or to try and sneak past them. If opting for stealth, they may spend 1 Raise per guard to sneak by. If the Heroes spend Raises equal to the number of guards, then they have snuck past the outer guard entirely.",
                       opportunities: "There are several potent alchemical concoctions in Diaz’s lab. A Hero may spend a Raise to hurl one of these at a Brute Squad, completing destroying it as the guards are covered in a caustic liquid.",
                       consequences: "Diaz only chooses to fight the Heroes if they have elected to fight their way past his guards, hearing the fighting outside and coming to help. If the Heroes sneak past them, he has no wish to fight by himself and can easily be intimidated into not calling on the guards outside.",
                       outcomes: "The Heroes have Diaz in their custody and can interrogate him about what’s going on. Any Hero interrogating Diaz needs to make an appropriate Risk (Wits+Convince, Brawn+Intimidate, etc.) and count Raises. Each Raise can be spent so the Hero may ask the GM a question to learn the following information: \n• I was the contact for the poison, but the coin to purchase it ultimately came from Vincenzio’s purse. \n• Liam had to die to protect the secret of the ritual Vincenzio is conducting to resurrect Lucrezia. \n• I have helped Vincenzio research the ritual and has provided him with what the Prince needs to complete it. \n• If the ritual is completed, it could destroy the veil between the worlds of the living and the dead. \n• I am uncertain what the totality of implications could be if this happens. \n• Vincenzio has yet to acquire the final thing he needs: crystalized blood from a Syrneth ruin. \n• It is being delivered to the Prince via courier so as not to rouse suspicion. I guess the Heroes could catch the courier, but they will have to leave immediately to do it (thus allowing Diaz to get away)."
                      }
        },
        1: {
          name: "Preventing Disaster",
          descr: "Knowing one of the reagents the Prince needs to complete his ritual successfully, the Heroes race to intercept it."
        }
      }
    },
    2: {
      name:"Goal",
      descr: "The Heroes confront the Prince and deal with the fallout of the completed ritual.",
      sub: {
        0: {
          name: "What Is and Should Never Be",
          descr: "The Heroes battle against the Monster animated by the ritual.",
          sequence: { type: "Action",
                       name: "The Prince's Folly",
                       approaches: "It’s a knock-down, drag-out fight. Brawn/Finesse + Weaponry is the most obvious Approach here. However, in Caligari’s lab there are several items the Heroes could attempt to use to fight off the Monster. Wits+Scholarship could be used to identify/use something that might deal Wounds to the Monster, for example.",
                       opportunities: "During the Sequence the Heroes can attempt to reach out to Caligari to obtain his help. The Heroes may spend [H] Raises to convince him to drop his blade while the Heroes destroy the monster, or 2[H] Raises to convince him to join their side against the monstrosity. Additionally, if the Heroes brought the blood from Syrneth ruin with them, a Hero can spend a Raise to break it against the monster’s body dealing a Dramatic Wound.",
                       consequences: "As the monster goes on its rampage Caligari’s lab begins falling apart. Each Hero must spend a Raise to avoid falling debris; if a Hero has not done so by Raise 3 she takes [H] Wounds.",
                       outcomes: "The Heroes defeat the Monster, and potentially the Prince as well. Or, they meet a tragic end and have been killed fighting the Monster."
                      }
        }
      }
    }
  },
  npc: {
    0:{
      name:"Prince Vincenzo Caligari",
      nation:"Vodacce",
      strength: 5, 
      influence: 10,
      rank: 15,
      advantage:{
        0: { name: "Linguist", descr: "You speak, read, and write all Thean languages. Even the dead ones." },
        1: { name: "Poison Immunity", descr: "Poison never affects you, aside from mild discomfort." },
        2: { name: "Fencer", descr: "Gain 1 Bonus Die when you make a Risk using a rapier, dagger, cutlass or similar weapon in one hand." },
        3: { name: "The Devil’s Own Luck", descr: "Spend a Danger Point after you take a Risk to Re-Roll any number of dice. You must keep the new roll. You can use this Advantage once per Scene." },
      },
      virtue: "Astute",
      virtueDescr: "Activate your Virtue after a Hero spends Raises for an Action. That Action fails. The Hero still loses the Raises spent.",
      hubris: "Manipulative",
      hubrisDescr: "You receive a Danger Point when you try to get someone else to do your dirty work and it backfires.",
    },
    1:{
      name:"Miguel Diaz de Felipe de Nollo",
      nation:"Castille",
      strength: 2, 
      influence: 2,
      rank: 4,
      advantage:{
        0: { name: "Alchemist", descr: "Spend a Danger Point (and a Raise during an Action or Dramatic Sequence) to produce an elixir or potion which provides an immediate benefit." },
        1: { name: "Spark of Genius (Alchemy)", descr: "When you make a Risk and call on your field of study, spend a Danger Point to gain additional Raises equal to your Strength." },
      },
      virtue: "Temperate",
      virtueDescr: "Activate your Virtue to prevent any magical effect from affecting you.",
      hubris: "Proud",
      hubrisDescr: "You receive a Danger Point when your Villain refuses an offer aid.",
    },
    2: {
      name: "What Was Once Lucrezia",
      strength: "2[H]",
      attrs: {
        fearsome: "Gain a Rank of Fear, plus an additional Rank of Fear per 5 Strength. Spend a Danger Point to double your Fear Rank for 1 Round.",
        powerful: "Spend a Danger Point to double the number of Wounds dealt by the monster after a successful attack against a Hero.",
        swift: "Spend a Danger Point to take an Action immediately."
      },
      notes: "The Monster will lay waste to all around it. It isn’t simply out to destroy the villa, but also attacking the Heroes and the Prince as they get in its way."
    }
  },
  place: {
    
  },
  hero: {
    nico: {
      name: "Nico De Luca",
      gender: "Male",
      nation: "Vodacce",
      virtue: "Commanding",
      virtueDescr: "Activate your Virtue. The GM gives a Hero Point to all other Heroes in this Scene.",
      hubris: "Trusting",
      hubrisDescr: "You receive a Hero Point when you accept someone’s lies or lopsided deal.",
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
        bravo: " Earn a Hero Point when you put yourself in danger to defend the life of someone you’ve sworn to protect",
        moroso: " Earn a Hero Point when you choose to let another  character  get  away  with  something  because  you’re romantically interested in them, and it gets you into trouble"
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
      virtueDescr: "Activate your Virtue when you act behind the scenes, from the shadows or through a proxy. For the next Risk, when you determine Raises, every die counts as a Raise.",
      hubris: "Curious",
      hubrisDescr: "You receive a Hero Point when you investigate something unusual, especially if it looks dangerous.",
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
        criminal: " Earn a Hero Point when you break the law in the pursuit of a noble endeavor",
        sabueso_real: " Earn a Hero Point when you refuse to act until you have more information, and this causes even more trouble for you"
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
        knight_errant: "Earn a Hero Point when you uphold an ideal of knightly virtue in a way that gets you into trouble",
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
      },
      glamours: {
        legend: {
          type: "Major",
          descr: "Activate this Glamour to add 2 dice to your Finesse for the rest of the Scene."
        },
        pain_is_temporary: {
          type: "Minor",
          descr: "Activate this Glamour to instantly heal 5 Wounds on yourself. You cannot heal Dramatic Wounds in this way."
        },
        heroic: {
          type: "Minor",
          descr: "Activate this Glamour after a Risk using your Resolve. You may re-roll up to 3 dice. You must keep the new value on any dice that you re-roll, even if they are lower."
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
          descr: "Spend a HeroPoint to edit, redact, or otherwise alter something you or another Hero just said, “reinterpreting” the words into the kindest compliment."
        },
        2: {
          name: "Got It",
          descr: "Spend a Hero Point to immediately pick alock, crack a safe, or disarm a trap."
        },
        3: {
          name: "Opportunist",
          descr: "When another Hero spends a Raise to create an Opportunity, you can spend a Hero Point to immediately activate the Opportunity for yourself."
        },
        4: {
          name: "Sniper",
          descr: "You gain 1 Bonus Die when you make an Aim Risk using a long-barrelled musket, longbow, or crossbow."
        },
        5: {
          name: "Survivalist",
          descr: "If you are in the wilderness, you can forage or hunt and find enough food to for yourself and up to five other people. Under extreme conditions - lost in the middle of a desert, or abandoned in the Iaka Et:serran tundra, for example - you find enough food for yourself and up to two other people."
        }
      },
      iethihsothokon: {
        karonta:{
          type: "tree",
          descr: "Iáhthénen: While attuned to this Iethihsothókon your skin hardens to become like the bark of a tree. Whenever you are dealt Wounds, prevent 1 Wound.\n\nIónhnhe: Spend a Hero Point to heal 1 Dramatic Wound or Wounds equal to your Ranks in Resolve."
        },
        okwaho:{
          type: "wolf",
          descr: "Iáhthénen: While attuned to this Iethihsothókon you gain the agility of a wolf. When counting Raises during a Finesse Risk, count 1 additional Raise.\n\nIónhnhe: After an ally spends a Raise to take any Action, spend a Hero Point to immediately spend a single Raise to take any Action (even if it is not your Action)."
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
