var store = {
	items:{
		0 :{name:"Spitball_Power"		,lvl:0	,forTwr:0	,inStock:false	,cst:55},
		1 :{name:"Spitball_Range"		,lvl:0	,forTwr:0	,inStock:false	,cst:110},
		2 :{name:"Spitball_Rate"		,lvl:0	,forTwr:0	,inStock:false	,cst:300},
		3 :{name:"Spitball_Level"		,lvl:0	,forTwr:0	,inStock:false	,cst:350},
		4 :{name:"P-Shooter_Power"		,lvl:0	,forTwr:1	,inStock:false	,cst:200},
		5 :{name:"P-Shooter_Range"		,lvl:0	,forTwr:1	,inStock:false	,cst:400},
		6 :{name:"P-Shooter_Rate"		,lvl:0	,forTwr:1	,inStock:false	,cst:500},
		7 :{name:"P-Shooter_Level"		,lvl:0	,forTwr:1	,inStock:false	,cst:1500},
		8 :{name:"BB Gun_Power"			,lvl:0	,forTwr:2	,inStock:false	,cst:500},
		9 :{name:"BB Gun_Range"			,lvl:0	,forTwr:2	,inStock:false	,cst:1000},
		10:{name:"BB Gun_Rate"			,lvl:0	,forTwr:2	,inStock:false	,cst:1200},
		11:{name:"BB Gun_Level"			,lvl:0	,forTwr:2	,inStock:false	,cst:5500},
		12:{name:"Pistol_Power"			,lvl:0	,forTwr:3	,inStock:false	,cst:1500},
		13:{name:"Pistol_Range"			,lvl:0	,forTwr:3	,inStock:false	,cst:3000},
		14:{name:"Pistol_Rate"			,lvl:0	,forTwr:3	,inStock:false	,cst:3400},
		15:{name:"Pistol_Level"			,lvl:0	,forTwr:3	,inStock:false	,cst:20000},
		16:{name:"Auto-Rifle_Power"		,lvl:0	,forTwr:4	,inStock:false	,cst:3000},
		17:{name:"Auto-Rifle_Range"		,lvl:0	,forTwr:4	,inStock:false	,cst:6000},
		18:{name:"Auto-Rifle_Rate"		,lvl:0	,forTwr:4	,inStock:false	,cst:6800},
		19:{name:"Auto-Rifle_Level"		,lvl:0	,forTwr:4	,inStock:false	,cst:50000},
		20:{name:"Sniper_Power"			,lvl:0	,forTwr:5	,inStock:false	,cst:8000},
		21:{name:"Sniper_Range"			,lvl:0	,forTwr:5	,inStock:false	,cst:16000},
		22:{name:"Sniper_Rate"			,lvl:0	,forTwr:5	,inStock:false	,cst:17600},
		23:{name:"Sniper_Level"			,lvl:0	,forTwr:5	,inStock:false	,cst:150000},
		24:{name:"Rocket_Power"			,lvl:0	,forTwr:6	,inStock:false	,cst:20000},
		25:{name:"Rocket_Range"			,lvl:0	,forTwr:6	,inStock:false	,cst:40000},
		26:{name:"Rocket_Rate"			,lvl:0	,forTwr:6	,inStock:false	,cst:43200},
		27:{name:"Rocket_Level"			,lvl:0	,forTwr:6	,inStock:false	,cst:300000},
		28:{name:"Cannon_Power"			,lvl:0	,forTwr:7	,inStock:false	,cst:50000},
		29:{name:"Cannon_Range"			,lvl:0	,forTwr:7	,inStock:false	,cst:100000},
		30:{name:"Cannon_Rate"			,lvl:0	,forTwr:7	,inStock:false	,cst:106400},
		31:{name:"Cannon_Level"			,lvl:0	,forTwr:7	,inStock:false	,cst:800000},
		32:{name:"Missile_Power"		,lvl:0	,forTwr:8	,inStock:false	,cst:120000},
		33:{name:"Missile_Range"		,lvl:0	,forTwr:8	,inStock:false	,cst:240000},
		34:{name:"Missile_Rate"			,lvl:0	,forTwr:8	,inStock:false	,cst:252800},
		35:{name:"Missile_Level"		,lvl:0	,forTwr:8	,inStock:false	,cst:2000000},
		36:{name:"Lazer_Power"			,lvl:0	,forTwr:9	,inStock:false	,cst:250000},
		37:{name:"Lazer_Range"			,lvl:0	,forTwr:9	,inStock:false	,cst:500000},
		38:{name:"Lazer_Rate"			,lvl:0	,forTwr:9	,inStock:false	,cst:525600},
		39:{name:"Lazer_Level"			,lvl:0	,forTwr:9	,inStock:false	,cst:5000000},
		40:{name:"Nuke_Power"			,lvl:0	,forTwr:10	,inStock:false	,cst:750000},
		41:{name:"Nuke_Range"			,lvl:0	,forTwr:10	,inStock:false	,cst:1500000},
		42:{name:"Nuke_Rate"			,lvl:0	,forTwr:10	,inStock:false	,cst:1551200},
		43:{name:"Nuke_Level"			,lvl:0	,forTwr:10	,inStock:false	,cst:12000000}
	},
	
	init : function(){
		for(var itm in this.items){
			if(this.items[itm].inStock){
				var itmName=this.items[itm].name;
				$("#store").append("<div id='store_"+itm+"' class='storeStock'>"+itmName.split("_")[0]+" "+itmName.split("_")[1]+"+: $"+this.items[itm].cst+"<br/><button onclick='store.buy("+itm+");'>Buy</button></div>");
			}
		}
	},
	
	stock: function(itm){
		if(this.items[itm].inStock)
			return false;
		
		this.items[itm].inStock=true;
		var itmName=this.items[itm].name;
		$("#store").append("<div id='store_"+itm+"' class='storeStock'>"+itmName.split("_")[0]+" "+itmName.split("_")[1]+"+: $"+this.items[itm].cst+"<br/><button onclick='store.buy("+itm+");'>Buy</button></div>");
	},
	
	tick: function(){
		
	},
	
	buy: function(itm){
		if(items.coins<this.items[itm].cst)
			return false;
		
		this.items[itm].lvl++;
		this.items[itm].cst+=Math.ceil(this.items[itm].cst*.25);
		var itmType=this.items[itm].name[1];
		
		if(itmType=="Power"){
			towers.types[this.items[itm].forTwr].att++;
		}else if(itmType=="Range"){
			towers.types[this.items[itm].forTwr].rng++;
		}else if(itmType=="Rate"){
			towers.types[this.items[itm].forTwr].spd++;
		}else if(itmType=="Level"){
			towers.types[this.items[itm].forTwr].lvl++;
			towers.types[this.items[itm].forTwr].rng+=towers.types[this.items[itm].forTwr].lvl;
			towers.types[this.items[itm].forTwr].spd+=towers.types[this.items[itm].forTwr].lvl;
			towers.types[this.items[itm].forTwr].att+=towers.types[this.items[itm].forTwr].lvl;
		}
		
		$("#store_"+itm).remove();
		this.items[itm].inStock=false;
		
		var numTower=0;
		for(var defense in towers.list){
			if(towers.list[defense].id==this.items[itm].forTwr)
				numTower++;
		}
		if(Math.floor(numType/(5*(1+(itm%4))))<this.items[itm].lvl){
			store.stock(itm);
		}
	}
};