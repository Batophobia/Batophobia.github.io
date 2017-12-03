var cards = {
	init: function(){
		this.resDeck = [ ];
		var numDoubles = Math.floor(this.numResCards * (this.prcntDblRes/100.0));
		var numSingles = this.numResCards - numDoubles;
		for(i = 0;i < numSingles; i++){
			for(var r in this.res){
				this.resDeck.push({ name: this.res[r].name, color: this.res[r].color, count: 1 });
			}
		}
		for(i = 0;i < numDoubles; i++){
			for(var r in this.res){
				this.resDeck.push({ name: this.res[r].name, color: this.res[r].color, count: 2 });
			}
		}
		this.resDeck = this.shuffle(this.resDeck);
		this.crnDeck = this.shuffle(this.crnDeck);
		
		for(i = 0; i++ < 4;){
			this.replaceRes();
		}
	},
	
	res: [
		{ color: "p", name:"Bow" }, // bow (purple)
		{ color: "r", name:"Heart" }, // heart (red)
		{ color: "b", name:"Cupcake" }, // cupcake (blue)
		{ color: "y", name:"Star" }  // star (yellow)
	],
	
	numResCards: 25, // How many cards of each resource
	prcntDblRes: 10, // Percentage of double resource cards (rounded down)
	resDeck: [ ],
	resField: [ ],
	resDiscard: [ ],
	crnDeck: [ // Alt means instead of tap to poop you can tap to do thing
		  // Unicorn with a gun
		{ name: "Uzicorn", ico: "B", txtType: "crdSpecial", txt: "alt: Rock-Paper-Sciccors target opponent.  Loser sacrifices a worker.  In case of tie, there is no loser." },
		  // * Gigantic unicorn
		{ name: "Gigacorn", ico: "B", txtType: "crdSpecial", txt: "Makes 5 poo pieces instead of 4." },
		  // * Rhino
		{ name: "Rhinocorn", ico: "B", txtType: "crdSpecial", txt: "alt: Flip a coin.  If it is heads, target opponent sacrifices a worker." },
		  // * Bedazzled unicorn
		{ name: "Rhine-corn", ico: "B", txtType: "crdSpecial", txt: "alt: Add 2 resource of any type for upgrading." },
		  // * Teddybear
		{ name: "Bearcorn", ico: "B", txtType: "crdSpecial", txt: "alt: roll area die, stomp that area" },
		  // * Scarecrow with a horn
		{ name: "Scare-corn", ico: "B", txtType: "crdSpecial", txt: "alt: Flip a coin.  If heads, all your corn untap and poop.  If tails, all your opponents corn untap and poop." },
		  // * Gassy unicorn
		{ name: "Stinkicorn", ico: "B", txtType: "crdSpecial", txt: "When tapping, roll area die.  Workers in that area must move.  These moves are free and done by all players." },
		  // * Blocky unicorn
		{ name: "Mineicorn", ico: "B", txtType: "crdSpecial", txt: "When mining, roll area die.  If it's the mine, mine an additional poo piece." },
		  // * Unicorn on a teleport
		{ name: "Telecorn", ico: "B", txtType: "crdSpecial", txt: "alt: move any number of your workers." },
		  // * Robot unicorn
		{ name: "Robocorn", ico: "B", txtType: "crdSpecial", txt: "alt: Draw a resource." },
		  // * spy unicorn
		{ name: "Moleicorn", ico: "B", txtType: "crdSpecial", txt: "alt: Take target opponent's card at random." },
		  // * Super Sayian
		{ name: "Supercorn", ico: "B", txtType: "crdSpecial", txt: "If you have the fewer unicorns than an opponent, your workers do not get stomped." },
		  // * Narwhal
		{ name: "Whalicorn", ico: "B", txtType: "crdSpecial", txt: "alt: Sacrifice X workers and draw X resources." },
		  // * Unicorn in overalls
		{ name: "Ranchcorn", ico: "B", txtType: "crdSpecial", txt: "ALT: Pays all bows for farm upgrade." },
		  // * Unicorn with mayor sash
		{ name: "Mayorcorn", ico: "B", txtType: "crdSpecial", txt: "ALT: Pays all cake for town upgrade." },
		  // * Unicorn behind counter
		{ name: "Vendocorn", ico: "B", txtType: "crdSpecial", txt: "ALT: Pays all star for market upgrade." },
		  // * Unicorn with money and cigar
		{ name: "Bosscorn", ico: "B", txtType: "crdSpecial", txt: "ALT: Pays all heart for refinery upgrade." },
		  // * Unicorn in sunglasses with earpiece
		{ name: "Bodycorn", ico: "B", txtType: "crdSpecial", txt: "You may save 1 worker each stomping." },
		  // * Unicorn storm
		{ name: "Thundercorn", ico: "B", txtType: "crdSpecial", txt: "alt: each player sacrifices half their workers, rounded down." },
		  // * Corn with horn
		{ name: "Uni-corn", ico: "B", txtType: "crdSpecial", txt: "Can feed without farm worker." }
		
		/* Expansion ideas
		-- Apocirnlypse --
		  // Frankenstein
		{ name: "Frankencorn", ico: "B", txtType: "crdSpecial", txt: "alt: Replace a corn with one from the corn discard." },
		  // can of corn with horn
		{ name: "Cannicorn", ico: "B", txtType: "crdSpecial", txt: "sacrifice a corn: feed this corn as free action" },
		  // Unicorn with glasses
		{ name: "Academicorn", ico: "B", txtType: "crdSpecial", txt: "sacrifice this corn: Upgrade the lab 1 level." },
		-- Other Games Expansion --
		  // Sheep with horn
		{ name: "Catanicorn", ico: "B", txtType: "crdSpecial", txt: "You may play 2 of a resource as 1 of any resource" },
		  // Splendor guy with horn
		{ name: "Splendicorn", ico: "B", txtType: "crdSpecial", txt: "Sacrifice this corn: all resources played this turn are doubled" },
		  // Draw 4 with a horn
		{ name: "Unocorn", ico: "B", txtType: "crdSpecial", txt: "If a player ends their turn with 1 card in their hand and does not say 'Uno', they discard 1 card." },
		-- Untitled --
		  // Parks and rec (alternatively Lil' Sebastion)
		{ name: "Jerrycorn", ico: "B", txtType: "crdSpecial", txt: "alt: roll area die, stomp that area" },
		*/
	],
	crnDiscard: [ ],
	
	/*
	.............
	: NAME      :
	:-----------:
	:   corn    :
	:  image    :
	:-----------:
	: special   :
	: text      :
	:         @ : <-- expansion icon
	.............
	*/
	
	// https://stackoverflow.com/a/2450976/1618257
	shuffle: function(array) {
  	var currentIndex = array.length, temporaryValue, randomIndex;
	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {
	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;
	
	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }
  	return array;
	},
	
	replaceRes: function(){
		if(this.resDeck.length<1){
			$(".cardList table tr").append("<td></td>");
			return false;
		}
		this.resField.push(this.resDeck.pop());
		var crdDetails=this.resField[this.resField.length-1];
		
		var strCard='<td class="fieldCard"><div class="card '+crdDetails.color+'Res">';
			strCard=strCard+'<div class="cardTops">'+crdDetails.name+'</div>';
			strCard=strCard+'<div class="cardBody">'+crdDetails.count+'</div>';
			strCard=strCard+'</div></td>';
		$(".cardList table tr").append(strCard);
	},
	
	updateDisplay: function(){
		
	}
};
