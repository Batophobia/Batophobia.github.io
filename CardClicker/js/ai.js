var ai = {
	init : function(){
		//for(var i=0;i<50;i++){
		//	this.deck.push(rndm(0,cards.list.length));
		//}
	},
	
	cardList: [ ],
	deck: [ ], // default 45-60 cards
	hand: [ ], // default <= 5
	maxHandSize: 5,
	moves:[ ],
	
	pool: {
		air: 0,
		earth: 0,
		water: 0,
		fire: 0
	},
	
	draw: function(){
		if(this.hand.length >= this.maxHandSize){
			//No Draw
			return;
		}
		this.hand.push(this.deck.pop());
		var crdDetails=cards.list[this.hand[this.hand.length-1]];
		
		var strCard='<div class="card" id="opp'+(this.hand.length-1)+'">';
		strCard=strCard+'<div class="cardTops"> </div>';
		strCard=strCard+'<div class="cardBody"><span class="crdSpecial"> </span><div class="cardDesc"> </div></div>';
		if(crdDetails.kind=="unit"){
			strCard=strCard+'<div class="cardSubs"> </div>';
			strCard=strCard+'<div class="cardPowr"> </div>';
		}else{
			strCard=strCard+'<div class="cardSubs"> </div>';
		}
		
		strCard=strCard+'</div>';
		$("#oppHand").append(strCard);
	},
	
	compareMoves: function(){
		var numMine, numOpp, numOppHnd;
		numOppHnd=$("#plrHand .card").length;
		numOpp=$("#plrField .card").length;
		numMine=$("#oppField .card").length;
		for(var crd in this.hand){
			this.getMove(crd);
		}
	},
	
	getMove: function(crd){
		/*
			rating:
			play #: 
			on: {}
			with: {}
		*/
		
		
	}
};