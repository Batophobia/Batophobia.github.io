var enemy = {
	init: function(){
		var tempLvl=this.maxLevel;
		this.maxLevel=1;
		for(i=tempLvl;i>1;i--)
			this.levelUp();
		$("#progPercent").width(100*(this.tilNextLvl/(5*this.maxLevel))+"%")
	},
	
	unit:{
		hp :5,
		att:1,
		def:0,
		spd:1,
		lvl:1,
		clr:"255,0,0",
		nxtWaypoint:0
	},
	maxLevel: 1,
	tilNextLvl: 5,
	maxGuys: 20,
	cntSpawn: 250,
	
	list:{},
	
	tick:function(){
		this.cntSpawn-=Math.ceil(this.maxLevel/3);
		if(this.cntSpawn<=0){
			this.cntSpawn=250;
			this.spawn('auto');
		}
		for(var enmy in this.list){
			var dude=this.list[enmy];
			//map.ctxMap.clearRect(dude.pos.x*10-1,dude.pos.y*10-1,4,4);
			
			if(this.at(dude,map.waypoints[dude.nxtWaypoint])){
				dude.nxtWaypoint++;
				if(dude.nxtWaypoint>=map.waypoints.length){
					dude.pos.x=.1;
					dude.pos.y=55;
					dude.nxtWaypoint=0;
				}
			}
			
			this.move(dude, map.waypoints[dude.nxtWaypoint]);
			this.draw(dude);
		}
		//map.ctxMap.stroke();
	},
	
	levelUp: function(){
		this.maxLevel++;
		this.tilNextLvl=5*this.maxLevel;
		$("#maxLevel").text("Level: "+this.maxLevel);
		this.maxGuys+=5;
		
		if(this.maxLevel>ments.stats.highestLvl)
			ments.stats.highestLvl=this.maxLevel;
		
		if(this.maxLevel>=12)
			$("#renew").show();
		if(this.maxLevel>=6 && store.items["44"].lvl<1)
			store.stock(44);
		
		if(this.maxLevel==15)
			ments.award(84);
		else if(this.maxLevel==30)
			ments.award(85);
		else if(this.maxLevel==50)
			ments.award(86);
		else if(this.maxLevel==100)
			ments.award(87);
		else if(this.maxLevel==999)
			ments.award(88);
		
		this.unit.lvl++;
		this.unit.hp+=5*this.unit.lvl;
		this.unit.att++;
		this.unit.def=Math.floor(this.unit.lvl/3);
		this.unit.spd=1+(this.unit.lvl/5);
		
		switch(this.unit.lvl%12){
			case 1:
				this.unit.clr="255,0,0";
				break;
			case 2:
				this.unit.clr="255,128,0";
				break;
			case 3:
				this.unit.clr="255,255,0";
				break;
			case 4:
				this.unit.clr="128,255,0";
				break;
			case 5:
				this.unit.clr="0,255,0";
				break;
			case 6:
				this.unit.clr="0,255,128";
				break;
			case 7:
				this.unit.clr="0,255,255";
				break;
			case 8:
				this.unit.clr="0,128,255";
				break;
			case 9:
				this.unit.clr="0,0,255";
				break;
			case 10:
				this.unit.clr="128,0,255";
				break;
			case 11:
				this.unit.clr="255,0,255";
				break;
			default:
				this.unit.clr="255,0,128";
				break;
		}
	},
	
	kill: function(baddie){
		this.tilNextLvl--;
		if(this.tilNextLvl<=0){
			this.levelUp();
		}
		
		items.addCoins(this.list[baddie].lvl*2);
		
		for(i=parseInt(baddie);i<Object.size(this.list)-1;i++){
			this.list[i].hp  = this.list[i+1].hp;
			this.list[i].att = this.list[i+1].att;
			this.list[i].def = this.list[i+1].def;
			this.list[i].spd = this.list[i+1].spd;
			this.list[i].lvl = this.list[i+1].lvl;
			this.list[i].clr = this.list[i+1].clr;
			this.list[i].pos.x = this.list[i+1].pos.x;
			this.list[i].pos.y = this.list[i+1].pos.y;
			this.list[i].nxtWaypoint = this.list[i+1].nxtWaypoint;
		}
		this.list[Object.size(this.list)-1]=null;
		delete this.list[Object.size(this.list)-1];
		ments.stats.guysKilled++;
		
		if(ments.stats.guysKilled==1)
			ments.award(89);
		if(ments.stats.guysKilled==50)
			ments.award(90);
		if(ments.stats.guysKilled==200)
			ments.award(91);
		if(ments.stats.guysKilled==1000)
			ments.award(92);
		if(ments.stats.guysKilled==5000)
			ments.award(93);
		if(ments.stats.guysKilled==10000)
			ments.award(94);
		if(ments.stats.guysKilled==100000)
			ments.award(95);
		if(ments.stats.guysKilled==1000000)
			ments.award(96);
		
		$("#progPercent").width(100*(this.tilNextLvl/(5*this.maxLevel))+"%")
	},
	
	spawn:function(from){
		if(Object.size(this.list)<this.maxGuys){
			this.list[Object.size(this.list)]={
				hp  : enemy.unit.hp,
				att : enemy.unit.att,
				def : enemy.unit.def,
				spd : enemy.unit.spd,
				lvl : enemy.unit.lvl,
				clr : enemy.unit.clr,
				pos : { x:.1, y:55 },
				nxtWaypoint:0
			};
			
			if(from=='btn'){
				ments.stats.manualSpawns++;
				if(ments.stats.manualSpawns==1000)
					ments.award(67);
			}
		}
	},
	
	at: function(baddie,point){
		if(baddie.pos.x+(baddie.spd*.1)>=point.x && baddie.pos.x-(baddie.spd*.1)<=point.x){
			if(baddie.pos.y+(baddie.spd*.1)>=point.y && baddie.pos.y-(baddie.spd*.1)<=point.y)
				return true;
			else
				return false;
		}else
			return false;
	},
	
	move: function(baddie, point){
		if(baddie.pos.y >= map.waypoints[baddie.nxtWaypoint].y+(baddie.spd*.1)){
			baddie.pos.y-=baddie.spd*.1;
		}else if(baddie.pos.y <= map.waypoints[baddie.nxtWaypoint].y-(baddie.spd*.1)){
			baddie.pos.y+=baddie.spd*.1;
		}else if(baddie.pos.x >= map.waypoints[baddie.nxtWaypoint].x+(baddie.spd*.1)){
			baddie.pos.x-=baddie.spd*.1;
		}else if(baddie.pos.x <= map.waypoints[baddie.nxtWaypoint].x-(baddie.spd*.1)){
			baddie.pos.x+=baddie.spd*.1;
		}
		
		baddie.pos.x=round(baddie.pos.x,-1);
		baddie.pos.y=round(baddie.pos.y,-1);
	},
	
	draw: function(baddie){
		map.ctxMap.fillStyle='rgb('+baddie.clr+')';
		map.ctxMap.fillRect(baddie.pos.x*10,baddie.pos.y*10,2,2);
	}
};