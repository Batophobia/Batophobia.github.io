var game = {
	init : function(){
		//shuffle decks
		blnInGame=true;
		$(".gameBoard").show();
		$(".buttons").hide();
		$(".store").hide();
		player.deck=this.shuffle(player.deck);
		ai.deck=this.shuffle(player.deck);
		for(var i=0;i<player.maxHandSize;i++){
			player.draw();
			ai.draw();
		}
		this.turn("player");
	},
	blnInGame: false,
	
	turn: function(who){
		if(who=="player"){
			for(var elem in player.pool){
				if(player.total[elem]>0){
					player.pool[elem]++;
					player.total[elem]--;
				}
				$("#num"+capital(elem)).html(capital(elem)+":<br/>"+player.pool[elem]);
			}
			player.draw();
		}
		else{
			for(var elem in ai.pool)
				ai.pool[elem]++;
			player.draw();
		}
	},
	
	play: function(card){
		var crdNum=card.id.substr(3);
		var blnPlayer=false;
		if(card.id.substr(0,3)=="plr"){
			blnPlayer=true;
		}
		var toPay;
		if(blnPlayer)
			toPay=cards.payFor(player.hand[crdNum]);
		else
			toPay=cards.payFor(ai.hand[crdNum]);
		
		for(var elem in toPay){
			var elemName="";
			switch(parseInt(elem)){
				case 0:
					elemName="air";
					break;
				case 1:
					elemName="earth";
					break;
				case 2:
					elemName="water";
					break;
				case 3:
					elemName="fire";
					break;
			}
			
			if(blnPlayer){
				if(player.pool[elemName]<toPay[elem])
					return false;
			}else{
				if(ai.pool[elemName]<toPay[elem])
					return false;
			}
		}
		
		var crdDetails=cards.list[ai.hand[ai.hand.length-1]];
		
		if(blnPlayer){
			for(var elem in toPay){
				var elemName="";
				switch(parseInt(elem)){
					case 0:
						elemName="air";
						break;
					case 1:
						elemName="earth";
						break;
					case 2:
						elemName="water";
						break;
					case 3:
						elemName="fire";
						break;
				}
				player.pool[elemName]-=toPay[elem];
				$("#num"+capital(elemName)).html(capital(elemName)+":<br/>"+player.pool[elemName]);
			}
			$(card).appendTo("#plrField");
			var numField=$("#plrField .card").length;
			$(card).attr("id","plr"+numField);
			for(var i=crdNum;i<player.hand.length;i++){
				$("#plrHand #plr"+i).attr("id","plr"+(i-1));
			}
			player.hand.splice(crdNum,1);
		}else{
			for(var elem in toPay){
				var elemName="";
				switch(parseInt(elem)){
					case 0:
						elemName="air";
						break;
					case 1:
						elemName="earth";
						break;
					case 2:
						elemName="water";
						break;
					case 3:
						elemName="fire";
						break;
				}
				ai.pool[elemName]-=toPay[elem];
				$("#opp"+crdNum).addClass(crdDetails.kind);
			}
			
			$("#opp"+crdNum+" .cardTops").html(crdDetails.cost+': '+crdDetails.name);
			$("#opp"+crdNum+" .crdSpecial").html(crdDetails.spec);
			$("#opp"+crdNum+" .cardDesc").html(crdDetails.desc);
			
			if(crdDetails.kind=="unit"){
				$("#opp"+crdNum+" .cardSubs").html(crdDetails.type+' - '+crdDetails.rare);
				$("#opp"+crdNum+" .cardPowr").html(crdDetails.att+' | '+crdDetails.def);
			}else{
				$("#opp"+crdNum+" .cardSubs").html('>Mod - '+crdDetails.rare);
			}
			
			$(card).appendTo("#oppField");
			ai.hand.splice(crdNum,1);
		}
	},
	
	shuffle: function(array){
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	},
	
	updateDisplay: function(){
		
	}
};