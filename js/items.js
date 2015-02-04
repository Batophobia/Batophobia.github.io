var items = {
	init: function(){
		$(".coin").text("$"+this.coins);
		$(".scrap").text("Scrap:"+this.scrap);
	},
	coins: 0,
	scrap: 0,
	maxDelay: 100,
	cntDelay: 0,
	
	tick: function(){
		this.cntDelay++;
		
		if(this.cntDelay>=this.maxDelay){
			this.cntDelay=0;
			this.addCoins(1+this.scrap);
		}
	},
	
	addCoins: function(num){
		this.coins+=num;
		$(".coin").text("$"+this.coins);
		
		for(var twr in towers.types){
			if(this.coins>=towers.types[twr].cost && towers.types[twr].unlk==false)
				towers.unlock(twr);
		}
	}
};