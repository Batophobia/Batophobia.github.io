var player = {
	init : function(){
		//for(var i=0;i<50;i++){
		//	this.deck.push(rndm(0,cards.list.length));
		//}
	},
	
	cardList: [ ],
	decks: [ ], // Saved decks
	deck: [ ], // default 45-60 cards
	hand: [ ], // default <= 5
	maxHandSize: 5,
	
	draw: function(){
		if(this.hand.length >= this.maxHandSize){
			//No Draw
			return;
		}
		this.hand.push(this.deck.pop());
		
		var crdDetails=cards.list[this.hand[this.hand.length-1]];
		
		var strCard='<div class="card '+crdDetails.kind+'" id="plr'+(this.hand.length-1)+'">';
			strCard=strCard+'<div class="cardTops">'+cards.dispCost(crdDetails.cost)+': '+crdDetails.name+'</div>';
			strCard=strCard+'<div class="cardBody"><span class="crdSpecial">'+crdDetails.spec+'</span><div class="cardDesc">'+crdDetails.desc+'</div></div>';
			if(crdDetails.kind=="unit"){
				strCard=strCard+'<div class="cardSubs">'+crdDetails.type+' - '+crdDetails.rare+'</div>';
				strCard=strCard+'<div class="cardPowr">'+crdDetails.att+' | '+crdDetails.def+'</div>';
			}else{
				strCard=strCard+'<div class="cardSubs">Mod - '+crdDetails.rare+'</div>';
			}
		strCard=strCard+'</div>';
		
		$("#plrHand").append(strCard);
		$("#plrHand #plr"+(this.hand.length-1)).on('click', function(){
			//game.play(this);
		});
	},
	
	total: {
		air: 0,
		earth: 0,
		water: 0,
		fire: 0,
		kurenc: 1000
	},
	incr: {
		air: 0,
		earth: 0,
		water: 0,
		fire: 0,
		kurenc: 1
	},
	pool: {
		air: 0,
		earth: 0,
		water: 0,
		fire: 0
	},
	
	tick: function(){
		
	},
	
	updateDisplay: function(){
		
	}
};
