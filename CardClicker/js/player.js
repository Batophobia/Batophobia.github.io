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
			//Discard
		}
		this.hand.push(this.deck.pop());
		
		var crdDetails=cards.list[this.hand[this.hand.length-1]];
		
		var strCard='<div class="card '+crdDetails.kind+'" id="plr'+(this.hand.length-1)+'">';
			strCard=strCard+'<div class="cardTops">'+crdDetails.cost+': '+crdDetails.name+'</div>';
			strCard=strCard+'<div class="cardBody"><span class="crdSpecial">'+crdDetails.spec+'</span><div class="cardDesc">'+crdDetails.desc+'</div></div>';
			if(crdDetails.kind=="unit"){
				strCard=strCard+'<div class="cardSubs">'+crdDetails.type+' - '+crdDetails.rare+'</div>';
				strCard=strCard+'<div class="cardPowr">'+crdDetails.att+' | '+crdDetails.def+'</div>';
			}else{
				strCard=strCard+'<div class="cardSubs">Mod - '+crdDetails.rare+'</div>';
			}
		strCard=strCard+'</div>';
		
		$("#plrHand").append(strCard);
		$("#plr"+(this.hand.length-1)).on('click', function(){
			game.play(this);
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
		if(game.blnInGame){
			if(main.counter%500==0)
				this.total.kurenc+=this.incr.kurenc;
		}else{
			this.total.kurenc+=this.incr.kurenc;
			this.total.air+=this.incr.air;
			this.total.earth+=this.incr.earth;
			this.total.water+=this.incr.water;
			this.total.fire+=this.incr.fire;
		}
		
		$(".kurenc").html("&#6107;"+this.total.kurenc);
		$("#ttlAir").html("Total<br/>Air<br/>"+this.total.air);
		$("#ttlEarth").html("Total<br/>Earth<br/>"+this.total.earth);
		$("#ttlWater").html("Total<br/>Water<br/>"+this.total.water);
		$("#ttlFire").html("Total<br/>Fire<br/>"+this.total.fire);
	},
	
	updateDisplay: function(){
		
	}
};