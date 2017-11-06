var cards = {
	init : function(){
		
	},
	
	//desc maxlength: 86
	//name maxlenght: 16-[3*(#colors-1)]
	//spec maxlength: 20
	res: [
		{ kind: "wld", num: 1 },
		{ kind: "grn", num: 1 },
		{ kind: "red", num: 1 },
		{ kind: "blu", num: 1 },
		{ kind: "ylw", num: 1 }
	],
	
	payFor: function(crd){
		cost=this.list[crd].cost.split("~");
		
		var aPrice=0, ePrice=0, wPrice=0, fPrice=0;
		
		for(var item in cost){
			var price=cost[item];
			var elem=price.slice(-1);
			var num=parseInt(price.substr(0,price.length-1));
			
			if(elem=="a")
				aPrice=num;
			else if(elem=="e")
				ePrice=num;
			else if(elem=="w")
				wPrice=num;
			else if(elem=="f")
				fPrice=num;
		}
		
		return [aPrice, ePrice, wPrice, fPrice];
	},
	
	dispCost: function(cst){
		cost=cst.split("~");
		var strReturn="";
		
		for(var item in cost){
			var price=cost[item];
			var elem="", i=1;
			while(price.slice(-1).match(/[aewf]/g)){
				elem=elem+" "+price.slice(-1)+i;
				price=price.substr(0,price.length-1)
				i++;
			}
			var num=parseInt(price.substr(0,price.length));
			
			if(num>0)
				strReturn=strReturn+"<span class='"+elem+"'>"+num+"</span>";
		}
		
		return strReturn;
	},
	
	updateDisplay: function(){
		
	}
};
