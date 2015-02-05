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
		
		if(this.coins>=1000)
			ments.award(77);
		if(this.coins>=10000)
			ments.award(78);
		if(this.coins>=100000)
			ments.award(79);
		if(this.coins>=1000000)
			ments.award(80);
		if(this.coins>=10000000)
			ments.award(81);
		if(this.coins>=100000000)
			ments.award(82);
		
		if(this.cntDelay>=this.maxDelay){
			if(this.scrap>=19)
				ments.award(76);
			
			this.cntDelay=0;
			this.addCoins(1+this.scrap);
		}
	},
	
	addCoins: function(num){
		this.coins+=num;
		$(".coin").text("$"+this.coins);
		
		if(this.coins>ments.stats.mostMoney)
			ments.stats.mostMoney=this.coins;
		
		for(var twr in towers.types){
			if(this.coins>=towers.types[twr].cost && towers.types[twr].unlk==false)
				towers.unlock(twr);
		}
	}
};