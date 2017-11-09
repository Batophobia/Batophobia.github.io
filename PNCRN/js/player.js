var player = {
	init : function(){
		// Draw hand
		//draw();
		
		// Give base corn
	},
	
	hand: [ ], // default <= 7
	maxHandSize: 7,
	
	field: {
		corns: [ ],
		mine: { workers: [], level: 0 }, // 1 piece -> 2 pieces -> 4 pieces
		refine: { workers: [], level: 0 }, // 2 for 1 -> 1 for 1 -> 2 for 2
		market: { workers: [], level: 0 }, // trade: 2 for 1 -> 3 for 2 -> 1 for 1
		town: { workers: [], level: 0 }, // # workers: 4 -> 7 -> 12
		farm: { workers: [], level: 0 }, // # corn: 1 -> 2 -> 3
		lab: { workers: [], level: 0 }, // ??? used for upgrading?
	},
	
	drawRes: function(fieldNo){
		if(this.hand.length >= this.maxHandSize){
			//No Draw
			return;
		}
		// Draw card
		this.hand.push(cards.resField[fieldNo]);
		cards.resField.splice(fieldNo, 1);
		$($(".cardList td.fieldCard")[fieldNo]).remove();
		cards.replaceRes();
		
		var crdDetails=this.hand[this.hand.length-1];
		var strCard='<div class="card '+crdDetails.color+'Res resCard" id="plrRes'+(this.hand.length-1)+'">';
			strCard=strCard+'<div class="cardTops">'+crdDetails.name+'</div>';
			strCard=strCard+'<div class="cardBody">'+crdDetails.count+'</div>';
			strCard=strCard+'</div>';
		$("#plrHand").append(strCard);
	},
	
	drawCorn: function(){
		var crdDetails = cards.crnDeck.pop();
		var strCard='<div class="card corn" id="plrCorn'+(this.hand.length-1)+'">';
			strCard=strCard+'<div class="cardTops">'+crdDetails.name+'</div>';
			strCard=strCard+'<div class="cardBody"><div class="'+crdDetails.txtType+'">'+crdDetails.txt+'</div></div>';
			strCard=strCard+'<div class="cardPowr">'+crdDetails.ico+'</div>';
		strCard=strCard+'</div>';
	},
	
	tick: function(){
		
	},
	
	updateDisplay: function(){
		
	}
};
