var store = {
	init : function(){
		this.restock();
	},
	
	inventory:{
		decks:{
			//1 for each element
			genAir:{	name: 'Basic Air',		price: 120, inStock:false, unlock: function(){
																					player.decks.push("genAir");
																					player.deck.push(0,0,0,0,4,4,4,4,5,5,5,5,6,6,6,8,8,9,9,9,9,10,10,12,13,14,14,14,16,16,16,16,17,17,18,18,18,19,20,20,20,20,21,21,21);
																					player.cardList.push(0,0,0,0,4,4,4,4,5,5,5,5,6,6,6,8,8,9,9,9,9,10,10,12,13,14,14,14,16,16,16,16,17,17,18,18,18,19,20,20,20,20,21,21,21);
																				}},
			genEarth:{	name: 'Basic Earth',	price: 120, inStock:false, unlock: function(){
																					player.decks.push("genEarth");
																				}},
			genWater:{	name: 'Basic Water',	price: 120, inStock:false, unlock: function(){
																					player.decks.push("genWater");
																				}},
			genFire:{	name: 'Basic Fire',		price: 120, inStock:false, unlock: function(){
																					player.decks.push("genFire");
																				}}
		},
		boosters:{
			//subset of all cards (powerhouse?, creature type?, certain element)
			//Maybe just more likely to get those?
		},
		factories:{
			air:{	numOwned: 0, price: 5, name: 'Air Factory',		inStock: true, unlock: function(){
																					$("#ttlAir").show();
																					player.incr.air++;
																					store.inventory.decks.genAir.inStock=true;
																				}},
			earth:{	numOwned: 0, price: 5, name: 'Earth Factory',	inStock: true, unlock: function(){
																					$("#ttlEarth").show();
																					player.incr.earth++;
																					store.inventory.decks.genEarth.inStock=true;
																				}},
			water:{	numOwned: 0, price: 5, name: 'Water Factory',	inStock: true, unlock: function(){
																					$("#ttlWater").show();
																					player.incr.water++;
																					store.inventory.decks.genWater.inStock=true;
																				}},
			fire:{	numOwned: 0, price: 5, name: 'Fire Factory',	inStock: true, unlock: function(){
																					$("#ttlFire").show();
																					player.incr.fire++;
																					store.inventory.decks.genFire.inStock=true;
																				}}
		},
	},
	
	restock: function(){
		//Timed restocking
		$(".stock").html("");
		
		for(var section in this.inventory){
			for(var itm in this.inventory[section]){
				if(this.inventory[section][itm].inStock)
					$(".stock").append("<div class='strItm' id='"+section+":"+itm+"'>&#6107;"+this.inventory[section][itm].price+" - "+this.inventory[section][itm].name+"<button>Buy</button></div>")
			}
		}
		
		$(".strItm button").on('click',function(){
			var itm=this.parentNode.id;
			var info = itm.split(":");
			
			if(player.total.kurenc >= store.inventory[info[0]][info[1]].price){
				$(this.parentNode).remove();
				player.total.kurenc-=store.inventory[info[0]][info[1]].price;
				store.inventory[info[0]][info[1]].inStock=false;
				store.inventory[info[0]][info[1]].unlock();
				store.restock();
				$(".kurenc").html("&#6107;"+player.total.kurenc);
			}
		});
	},
	
	updateDisplay: function(){
		
	}
};