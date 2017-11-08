var player = {
	init : function(){
		// Draw hand
		//draw();
		
		// Give base corn
	},
	
	hand: [ ], // default <= 8
	maxHandSize: 8,
	
	field: {
		corns: [ ],
		mine: { workers: [], level: 0 }, // 1 piece -> 2 pieces -> 4 pieces
		refine: { workers: [], level: 0 }, // 2 for 1 -> 1 for 1 -> 2 for 2
		market: { workers: [], level: 0 }, // trade: 2 for 1 -> 3 for 2 -> 1 for 1
		town: { workers: [], level: 0 }, // # workers: 4 -> 7 -> 12
		farm: { workers: [], level: 0 }, // # corn: 1 -> 2 -> 3
		lab: { workers: [], level: 0 }, // ??? used for upgrading?
	},
	
	draw: function(){
		if(this.hand.length >= this.maxHandSize){
			//No Draw
			return;
		}
		// Draw card
		this.hand.push(cards.resDeck.pop());
		
		var crdDetails=this.hand[this.hand.length-1];
		
		$("#plrHand").append(strCard);
		$("#plrHand #plr"+(this.hand.length-1)).on('click', function(){
			//game.play(this);
		});
	},
	
	drawCorn: function(){
		var crdDetails = cards.crnDeck.pop();
		var strCard='<div class="card corn" id="plrCorn'+(this.hand.length-1)+'">';
			strCard=strCard+'<div class="cardTops">'+crdDetails.name+'</div>';
			strCard=strCard+'<div class="cardBody"><span class="crdSpecial">'+crdDetails.spec+'</span><div class="cardDesc">'+crdDetails.desc+'</div></div>';
			if(crdDetails.kind=="unit"){
				strCard=strCard+'<div class="cardSubs">'+crdDetails.type+' - '+crdDetails.rare+'</div>';
				strCard=strCard+'<div class="cardPowr">'+crdDetails.att+' | '+crdDetails.def+'</div>';
			}else{
				strCard=strCard+'<div class="cardSubs">Mod - '+crdDetails.rare+'</div>';
			}
		strCard=strCard+'</div>';
	},
	
	tick: function(){
		
	},
	
	updateDisplay: function(){
		
	}
};
