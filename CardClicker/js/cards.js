var cards = {
	init : function(){
		
	},
	
	//desc maxlength: 86
	//name maxlenght: 16-[3*(#colors-1)]
	//spec maxlength: 20
	list: [
		{kind: "unit",	cost: "2a", 			att: 2, 	def: 2,		rare: "C"	, spec: ""					, type: "Angel"			, name: "Gabriel"			, desc: "I am Gabriel, that stand in the presence of God; and am sent to speak unto thee"},
		{kind: "unit",	cost: "5a", 			att: 7, 	def: 6,		rare: "M"	, spec: ""					, type: "Angel"			, name: "Kalaziel"			, desc: "The power of Kalaziel was unmatched.  Few would dare stand against him"},
		{kind: "unit",	cost: "2a", 			att: 1, 	def: 3,		rare: "L"	, spec: "Bonus-Air"			, type: "Angel"			, name: "Tabbris"			, desc: "As a renouned scholar, the wisdom of Tabbris is widely saught after"},
		{kind: "unit",	cost: "4a", 			att: 3, 	def: 2,		rare: "R"	, spec: "Boost-Angel"		, type: "Angel"			, name: "Akriel"			, desc: "During the Angelic Wars, General Akriel was ruthless in his victories"},
		{kind: "unit",	cost: "1a", 			att: 1, 	def: 1,		rare: "C"	, spec: ""					, type: "Angel"			, name: "Onoel"				, desc: "Onoel was just a fresh recruit when the demons attacked"},
		{kind: "unit",	cost: "1a", 			att: 1, 	def: 1,		rare: "C"	, spec: ""					, type: "Bird"			, name: "Hawk"				, desc: "A majestic creature with exceptional eyesight and speed"},
		{kind: "unit",	cost: "2a", 			att: 3, 	def: 1,		rare: "C"	, spec: ""					, type: "Bird"			, name: "Eagle"				, desc: "The Eagle is a symbol of strength for some cultures"},
		{kind: "unit",	cost: "3a", 			att: 1, 	def: 2,		rare: "U"	, spec: "Vicious-1"			, type: "Bird"			, name: "Vulture"			, desc: "A scavenger that dines on the flesh of the deceased"},
		{kind: "unit",	cost: "1a", 			att: 0, 	def: 1,		rare: "U"	, spec: "Defensive-1"		, type: "Bird"			, name: "Flamingo"			, desc: "These odd creatures often stand on one leg, as if preparing to defend"},
		{kind: "unit",	cost: "1a", 			att: 1, 	def: 1,		rare: "C"	, spec: ""					, type: "Priest"		, name: "Friar Chuck"		, desc: "Although he is technically an outlaw, this merry man has very quick wits"},
		{kind: "unit",	cost: "3a", 			att: 2, 	def: 2,		rare: "R"	, spec: "Boost-Priest"		, type: "Priest"		, name: "Father Grigori"	, desc: "A shepherd must tend to his flock, especially when they have grown...unruly."},
		{kind: "unit",	cost: "2a", 			att: 2, 	def: 3,		rare: "E"	, spec: "Smite-1"			, type: "Priest"		, name: "Chosen One"		, desc: "Many were called, but only one was chosen"},
		{kind: "unit",	cost: "2a", 			att: 1, 	def: 2,		rare: "L"	, spec: "Bonus-Air"			, type: "Priest"		, name: "Kalaziel Acolyte"	, desc: "It is wise to praise Kalaziel.  Many Demons died at his hands durning the Angelic Wars"},
		{kind: "unit",	cost: "5a", 			att: 2, 	def: 2,		rare: "U"	, spec: "Extra-2"			, type: "Golem"			, name: "Wind Golem"		, desc: "One cannot simply kill the wind"},
		{kind: "unit",	cost: "2a", 			att: 2, 	def: 3,		rare: "C"	, spec: ""					, type: "Beast"			, name: "Griffin"			, desc: "Half lion, half eagle, all magical"},
		{kind: "unit",	cost: "3a", 			att: 3, 	def: 5,		rare: "R"	, spec: ""					, type: "Beast"			, name: "Gryphon"			, desc: "More sophisticated than your everyday griffin"},
		{kind: "mod",	cost: "1a", 									rare: "C"	, spec: "Heal-2"									, name: "Crude HP Potion"	, desc: "Made by a novice, it taste disgusting, but makes things a little better"},
		{kind: "mod",	cost: "2a", 									rare: "C"	, spec: "Transmute-Water"							, name: "Rainstorm"			, desc: "Sometimes a refreshing storm is beneficial"},
		{kind: "mod",	cost: "2a", 									rare: "C"	, spec: "Buff-1"									, name: "Holy Light"		, desc: "Never fear the light, son, for it empowers us in our struggles"},
		{kind: "mod",	cost: "1a", 									rare: "R"	, spec: "Protect-All"								, name: "Godly Protection"	, desc: "When the Gods are present, there is no power that can cause us harm"},
		{kind: "mod",	cost: "3a", 									rare: "U"	, spec: "Buff-2"									, name: "Divinity"			, desc: "The Gods smile upon us this day"},
		{kind: "mod",	cost: "2a", 									rare: "C"	, spec: "Heal-5"									, name: "Basic HP Potion"	, desc: "One of the basic items to always carry with you, just don't be afraid to use it"},
		{kind: "unit",	cost: "2e", 			att: 1, 	def: 3,		rare: "C"	, spec: ""					, type: "Golem"			, name: "Stone Golem"		, desc: "Thine eyes did see my golem, yet being unformed; and in Thy Book all the days ordained"},
		{kind: "unit",	cost: "2e", 			att: 1, 	def: 2,		rare: "U"	, spec: "Heal-1"			, type: "Elf"			, name: "Keepler"			, desc: "A little elven magic makes cookies better"},
		{kind: "unit",	cost: "2e", 			att: 2, 	def: 2,		rare: "C"	, spec: ""					, type: "Elf"			, name: "Knobby"			, desc: "For some unknown reason, this elf is very protective of a dirty sock"},
		{kind: "unit",	cost: "1e", 			att: 1, 	def: 1,		rare: "C"	, spec: ""					, type: "Elf"			, name: "Huddy Bobbs"		, desc: "Very different than most elves, it's possible this creature is actually human"},
		{kind: "unit",	cost: "3e", 			att: 1, 	def: 2,		rare: "R"	, spec: "Boost-Elf"			, type: "Elf"			, name: "Hermie, DDS"		, desc: "A great example of how you should always follow your dreams"},
		{kind: "unit",	cost: "2e", 			att: 2, 	def: 2,		rare: "C"	, spec: ""					, type: "Beast"			, name: "Grizzled Bear"		, desc: "Legend tells of these grizzly creatures and their fearsome might"},
		{kind: "unit",	cost: "1e", 			att: 1, 	def: 2,		rare: "U"	, spec: ""					, type: "Beast"			, name: "Wolf Leader"		, desc: "Leading the wolf pack requires strength, intelligence, and awareness"},
		{kind: "unit",	cost: "4e", 			att: 4, 	def: 6,		rare: "U"	, spec: ""					, type: "Beast"			, name: "Behemoth"			, desc: "This massive creature sends shockwaves and crash castles when it moves"},
		{kind: "unit",	cost: "3e", 			att: 2, 	def: 1,		rare: "R"	, spec: "Boost-Beast"		, type: "Beast"			, name: "Beast Lord"		, desc: "The ability to control the beasts of the Earth is a dangerous power to wield"},
		{kind: "unit",	cost: "3e", 			att: 0, 	def: 2,		rare: "R"	, spec: "Boost-Plant"		, type: "Plant"			, name: "Starflower"		, desc: "There are apparently some knights looking for one of these"},
		{kind: "unit",	cost: "2e", 			att: 2, 	def: 2,		rare: "C"	, spec: ""					, type: "Plant"			, name: "Shrubbery"			, desc: "There are apparently some knights looking for one of these"},
		{kind: "unit",	cost: "4e", 			att: 5, 	def: 4,		rare: "C"	, spec: ""					, type: "Plant"			, name: "Mighty Oak"		, desc: "When the trees are enchanted, expect immense power from the Oaks"},
		{kind: "unit",	cost: "2e", 			att: 1, 	def: 3,		rare: "L"	, spec: "Bonus-Earth"		, type: "Plant"			, name: "Bamboo"			, desc: "They have been found to grow at up to 91 cm per day, very helpful for quick gardens"},
		{kind: "unit",	cost: "1ew",			att: 0, 	def: 1,		rare: "U"	, spec: "Extra-1"			, type: "Plant"			, name: "Wolffia"			, desc: "Do not be fooled by the small size, together they are resilient"},
		{kind: "unit",	cost: "1w", 			att: 1, 	def: 1,		rare: "C"	, spec: ""					, type: "Shapeshifter"	, name: "Wave"				, desc: "Don't underestimate it"},
		{kind: "unit",	cost: "1f", 			att: 2, 	def: 0,		rare: "C"	, spec: "Haste"				, type: "Warrior"		, name: "Spark"				, desc: "Just a little one can set the world on fire"},
		{kind: "unit",	cost: "1a~1e~1w~1f",	att: 0, 	def: 5,		rare: "C"	, spec: ""					, type: "Party"			, name: "Peace"				, desc: "All Colors"},
		{kind: "unit",	cost: "1aw",			att: 1, 	def: 0,		rare: "C"	, spec: ""					, type: "Liquid"		, name: "Rain"				, desc: "Split Colors"}
	],
	
	payFor: function(crd){
		cost=crd.cost.split("~");
		
		var aPrice=0, ePrice=0, wPrice=0, fPrice=0;
		
		for(var item in cost){
			var price=cost[item];
			var elem=price.slice(-1);
			var num=parseInt(price.substr(0,price.length-1));
			
			if(elem=="a")
				aPrice=num;
			else if(elem=="e")
				ePrice=num;
			else if(elem=="w")
				wPrice=num;
			else if(elem=="f")
				fPrice=num;
		}
		
		return [aPrice, ePrice, wPrice, fPrice];
	},
	
	updateDisplay: function(){
		
	}
};