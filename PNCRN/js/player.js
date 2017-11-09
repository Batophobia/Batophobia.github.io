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
	
	/* Costs (where lvl is the going to level)
		mine:		[lvl] of each OR [4 x lvl] of 1
		refine:	[2 x lvl] of 2
		market:	[lvl] of star and [2 x lvl] of bow
		town:		[lvl] of cake and [2 x lvl] of heart
		farm:		[lvl] of bow and [2 x lvl] of cake
		lab:		[lvl] of heart and [2 x lvl] of star
		
		Actions (aside from "make poo" and "move worker", requires worker on space)
		- move worker
		- make poo (4 pieces from untapped corn) [tap corn]
		- mine poo (1 piece)
		- refine poo (draw res from field or top card) [1 poo from mine]
		- trade a card (with res on field)
		- recruit worker (do not get +1 action, new worker on town) [2 resources (any type)]
		- feed corn (untap a corn)
		- upgrade plot (prices above)
	*/
	
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
	
	playRes: function(num){
		this.hand.splice(num,1);
		$($("#plrHand .resCard")[num]).remove();
	},
	
	drawCorn: function(){
		var crdDetails = cards.crnDeck.pop();
		var strCard='<div class="card corn" id="plrCorn'+(this.hand.length-1)+'">';
			strCard=strCard+'<div class="cardTops">'+crdDetails.name+'</div>';
			strCard=strCard+'<div class="cardBody"><div class="'+crdDetails.txtType+'">'+crdDetails.txt+'</div></div>';
			strCard=strCard+'<div class="cardPowr">'+crdDetails.ico+'</div>';
		strCard=strCard+'</div>';
		$("#plrSide td.corns").append(strCard);
	},
	
	tick: function(){
		
	},
	
	updateDisplay: function(){
		
	}
};
