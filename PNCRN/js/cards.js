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
	prcntDblRes: 20, // Percentage of double resource cards (rounded down)
	resDeck: [ ],
	resField: [ ],
	resDiscard: [ ],
	crnDeck: [
		{ name: "Uzicorn", ico: "B", txtType: "crdSpecial", txt: "Rock-Paper-Sciccors target opponent.  Loser sacrifices a worker." },
		{ name: "Gigacorn", ico: "B", txtType: "crdSpecial", txt: "Makes 5 poo pieces instead of 4." },
		{ name: "Uni-corn", ico: "B", txtType: "crdSpecial", txt: "Can feed without farm worker." }
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
