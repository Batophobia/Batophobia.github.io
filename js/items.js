var items = {
	init: function(){
		if(this.coins.total>0){
			$(".coin").text("$"+this.coins.total);
		}
	},
	
	coins: 0,
	
	addCoins: function(num){
		this.coins+=num;
		$(".coin").text("$"+this.coins);
	}
};