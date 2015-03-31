var ments = {
	list:{
		1  :{name:"Spitball 1"			,how2:"Build 1 Spitball"			,unlk:false},
		2  :{name:"Spitball 5"			,how2:"Build 5 Spitballs"			,unlk:false},
		3  :{name:"Spitball 10"			,how2:"Build 10 Spitballs"			,unlk:false},
		4  :{name:"Spitball 25"			,how2:"Build 25 Spitballs"			,unlk:false},
		5  :{name:"Spitball 50"			,how2:"Build 50 Spitballs"			,unlk:false},
		6  :{name:"Spitball 100"		,how2:"Build 100 Spitballs"			,unlk:false},
		7  :{name:"P-Shooter 1"			,how2:"Build 1 P-Shooter"			,unlk:false},
		8  :{name:"P-Shooter 5"			,how2:"Build 5 P-Shooters"			,unlk:false},
		9  :{name:"P-Shooter 10"		,how2:"Build 10 P-Shooters"			,unlk:false},
		10 :{name:"P-Shooter 25"		,how2:"Build 25 P-Shooters"			,unlk:false},
		11 :{name:"P-Shooter 50"		,how2:"Build 50 P-Shooters"			,unlk:false},
		12 :{name:"P-Shooter 100"		,how2:"Build 100 P-Shooters"		,unlk:false},
		13 :{name:"BB Gun 1"			,how2:"Build 1 BB Gun"				,unlk:false},
		14 :{name:"BB Gun 5"			,how2:"Build 5 BB Guns"				,unlk:false},
		15 :{name:"BB Gun 10"			,how2:"Build 10 BB Guns"			,unlk:false},
		16 :{name:"BB Gun 25"			,how2:"Build 25 BB Guns"			,unlk:false},
		17 :{name:"BB Gun 50"			,how2:"Build 50 BB Guns"			,unlk:false},
		18 :{name:"BB Gun 100"			,how2:"Build 100 BB Guns"			,unlk:false},
		19 :{name:"Pistol 1"			,how2:"Build 1 Pistol"				,unlk:false},
		20 :{name:"Pistol 5"			,how2:"Build 5 Pistols"				,unlk:false},
		21 :{name:"Pistol 10"			,how2:"Build 10 Pistols"			,unlk:false},
		22 :{name:"Pistol 25"			,how2:"Build 25 Pistols"			,unlk:false},
		23 :{name:"Pistol 50"			,how2:"Build 50 Pistols"			,unlk:false},
		24 :{name:"Pistol 100"			,how2:"Build 100 Pistols"			,unlk:false},
		25 :{name:"Auto-Rifle 1"		,how2:"Build 1 Auto-Rifle"			,unlk:false},
		26 :{name:"Auto-Rifle 5"		,how2:"Build 5 Auto-Rifles"			,unlk:false},
		27 :{name:"Auto-Rifle 10"		,how2:"Build 10 Auto-Rifles"		,unlk:false},
		28 :{name:"Auto-Rifle 25"		,how2:"Build 25 Auto-Rifles"		,unlk:false},
		29 :{name:"Auto-Rifle 50"		,how2:"Build 50 Auto-Rifles"		,unlk:false},
		30 :{name:"Auto-Rifle 100"		,how2:"Build 100 Auto-Rifles"		,unlk:false},
		31 :{name:"Sniper 1"			,how2:"Build 1 Sniper"				,unlk:false},
		32 :{name:"Sniper 5"			,how2:"Build 5 Snipers"				,unlk:false},
		33 :{name:"Sniper 10"			,how2:"Build 10 Snipers"			,unlk:false},
		34 :{name:"Sniper 25"			,how2:"Build 25 Snipers"			,unlk:false},
		35 :{name:"Sniper 50"			,how2:"Build 50 Snipers"			,unlk:false},
		36 :{name:"Sniper 100"			,how2:"Build 100 Snipers"			,unlk:false},
		37 :{name:"Rocket 1"			,how2:"Build 1 Rocket"				,unlk:false},
		38 :{name:"Rocket 5"			,how2:"Build 5 Rockets"				,unlk:false},
		39 :{name:"Rocket 10"			,how2:"Build 10 Rockets"			,unlk:false},
		40 :{name:"Rocket 25"			,how2:"Build 25 Rockets"			,unlk:false},
		41 :{name:"Rocket 50"			,how2:"Build 50 Rockets"			,unlk:false},
		42 :{name:"Rocket 100"			,how2:"Build 100 Rockets"			,unlk:false},
		43 :{name:"Cannon 1"			,how2:"Build 1 Cannon"				,unlk:false},
		44 :{name:"Cannon 5"			,how2:"Build 5 Cannons"				,unlk:false},
		45 :{name:"Cannon 10"			,how2:"Build 10 Cannons"			,unlk:false},
		46 :{name:"Cannon 25"			,how2:"Build 25 Cannons"			,unlk:false},
		47 :{name:"Cannon 50"			,how2:"Build 50 Cannons"			,unlk:false},
		48 :{name:"Cannon 100"			,how2:"Build 100 Cannons"			,unlk:false},
		49 :{name:"Missile 1"			,how2:"Build 1 Missile"				,unlk:false},
		50 :{name:"Missile 5"			,how2:"Build 5 Missiles"			,unlk:false},
		51 :{name:"Missile 10"			,how2:"Build 10 Missiles"			,unlk:false},
		52 :{name:"Missile 25"			,how2:"Build 25 Missiles"			,unlk:false},
		53 :{name:"Missile 50"			,how2:"Build 50 Missiles"			,unlk:false},
		54 :{name:"Missile 100"			,how2:"Build 100 Missiles"			,unlk:false},
		55 :{name:"Lazer 1"				,how2:"Build 1 Lazer"				,unlk:false},
		56 :{name:"Lazer 5"				,how2:"Build 5 Lazers"				,unlk:false},
		57 :{name:"Lazer 10"			,how2:"Build 10 Lazers"				,unlk:false},
		58 :{name:"Lazer 25"			,how2:"Build 25 Lazers"				,unlk:false},
		59 :{name:"Lazer 50"			,how2:"Build 50 Lazers"				,unlk:false},
		60 :{name:"Lazer 100"			,how2:"Build 100 Lazers"			,unlk:false},
		61 :{name:"Nuke 1"				,how2:"Build 1 Nukes"				,unlk:false},
		62 :{name:"Nuke 5"				,how2:"Build 5 Nukes"				,unlk:false},
		63 :{name:"Nuke 10"				,how2:"Build 10 Nukes"				,unlk:false},
		64 :{name:"Nuke 25"				,how2:"Build 25 Nukes"				,unlk:false},
		65 :{name:"Nuke 50"				,how2:"Build 50 Nukes"				,unlk:false},
		66 :{name:"Nuke 100"			,how2:"Build 100 Nukes"				,unlk:false},
		67 :{name:"Got the Power"		,how2:"Manually Spawn 1000 Enemies"	,unlk:false},
		68 :{name:"New Map"				,how2:"First Ascension"				,unlk:false},
		69 :{name:"Scrap Maker"			,how2:"Have 5 Scrap"				,unlk:false},
		70 :{name:"Scrap Collector"		,how2:"Have 20 Scrap"				,unlk:false},
		71 :{name:"Scrap Heap"			,how2:"Have 50 Scrap"				,unlk:false},
		72 :{name:"Scrap Yard"			,how2:"Have 100 Scrap"				,unlk:false},
		73 :{name:"BFG"					,how2:"Level up the Nuke"			,unlk:false},
		74 :{name:"Look At Me Now"		,how2:"Spitball ATT >= 20"			,unlk:false},
		75 :{name:"PEW PEW PEW"			,how2:"Lazer SPD >= 10"				,unlk:false},
		76 :{name:"Pop Some Tags"		,how2:"Make $20 per tick"			,unlk:false},
		77 :{name:"Rich"				,how2:"Have $1000"					,unlk:false},
		78 :{name:"Richer"				,how2:"Have $10000"					,unlk:false},
		79 :{name:"Richest"				,how2:"Have $100000"				,unlk:false},
		80 :{name:"Richard"				,how2:"Have $1000000"				,unlk:false},
		81 :{name:"Richarder"			,how2:"Have $10000000"				,unlk:false},
		82 :{name:"Richardest"			,how2:"Have $100000000"				,unlk:false},
		83 :{name:"From Downtown..."	,how2:"Sniper RNG >= 15"			,unlk:false},
		84 :{name:"Going"				,how2:"Reach Level 15"				,unlk:false},
		85 :{name:"Going."				,how2:"Reach Level 30"				,unlk:false},
		86 :{name:"Going.."				,how2:"Reach Level 50"				,unlk:false},
		87 :{name:"Going..."			,how2:"Reach Level 100"				,unlk:false},
		88 :{name:"Gone"				,how2:"Reach Level 999"				,unlk:false},
		89 :{name:"Don't Get Cocky, Kid",how2:"Kill 1 Enemy"				,unlk:false},
		90 :{name:"Get The Hang Of It"	,how2:"Kill 50 Enemies"				,unlk:false},
		91 :{name:"Dot Killer"			,how2:"Kill 200 Enemies"			,unlk:false},
		92 :{name:"Dot Massacre"		,how2:"Kill 1000 Enemies"			,unlk:false},
		93 :{name:"Dot Slayer"			,how2:"Kill 5000 Enemies"			,unlk:false},
		94 :{name:"Dot Exterminator"	,how2:"Kill 10000 Enemies"			,unlk:false},
		95 :{name:"Dot Executor"		,how2:"Kill 100000 Enemies"			,unlk:false},
		96 :{name:"No More Dots"		,how2:"Kill 1000000 Enemies"		,unlk:false},
		97 :{name:"FASTER!"				,how2:"Auto-Rifle SPD >= 6"			,unlk:false},
		98 :{name:"This Tower is OP"	,how2:"Any Tower LVL >= 6"			,unlk:false},
		99 :{name:"Been Round the Block",how2:"100 Ascensions"				,unlk:false},
		100:{name:"Been Everywhere, Man",how2:"1000 Ascensions"				,unlk:false},
	},
	
	award: function(num){
		if(this.list[num].unlk==false){
			main.alrt(this.list[num].name);
			this.unlock(num);
		}
	},
	
	init: function(){
		for(var itm in this.list){
			if(this.list[itm].unlk)
				this.unlock(itm);
		}
	},
	
	tick: function(){
		var strStats="";
		if(this.stats.guysKilled>0)
			strStats=strStats+" <u>Enemies Killed</u>: "+this.stats.guysKilled;
		if(this.stats.highestLvl>0)
			strStats=strStats+" <u>Highest Level</u>: "+this.stats.highestLvl;
		if(this.stats.mostMoney>0)
			strStats=strStats+" <u>Most Money</u>: $"+this.stats.mostMoney;
		if(this.stats.manualSpawns>0)
			strStats=strStats+" <u>Manual Spawns</u>: "+this.stats.manualSpawns;
		if(this.stats.ascensions>0)
			strStats=strStats+" <u>Ascensions</u>: "+this.stats.ascensions;
		
		$("#gameStats").html(strStats);
	},
	
	unlock: function(num){
		this.list[num].unlk=true;
		$("#"+Math.floor((num-1)/10)+"_"+(num-1)%10).html("<u>"+this.list[num].name+"</u><br/>"+this.list[num].how2+"</td>");
		$("#awards").show();
	},
	
	stats:{
		manualSpawns: 0,
		guysKilled: 0,
		ascensions: 0,
		highestLvl: 1,
		mostMoney: 0
	}
};