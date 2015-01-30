var enemy = {
	unit:{
		hp :5,
		att:1,
		def:0,
		spd:1,
		lvl:1,
		clr:"255,0,0",
		pos:{ x:0, y:0 },
		nxtWaypoint:0
	},
	maxLevel: 1,
	tilNextLvl: 1,
	maxGuys: 20,
	
	list:{},
	
	tick:function(){
		for(var enmy in this.list){
			var dude=this.list[enmy];
			map.ctxMap.clearRect(dude.pos.x*10-1,dude.pos.y*10-1,4,4);
			
			if(this.at(dude,map.waypoints[dude.nxtWaypoint])){
				dude.nxtWaypoint++;
				if(dude.nxtWaypoint>=map.waypoints.length){
					dude.pos.x=0;
					dude.pos.y=55;
					dude.nxtWaypoint=0;
				}
			}
			
			this.move(dude, map.waypoints[dude.nxtWaypoint]);
			this.draw(dude);
		}
		map.ctxMap.stroke();
	},
	
	kill: function(baddie){
		map.ctxMap.clearRect(this.list[baddie].pos.x*10-1,this.list[baddie].pos.y*10-1,4,4);
		
		this.tilNextLvl--;
		if(this.tilNextLvl<=0){
			this.maxLevel++;
			this.tilNextLvl=this.maxLevel;
		}
		
		items.addCoins(this.list[baddie].lvl);
		
		for(i=parseInt(baddie);i<Object.size(this.list)-2;i++){
			this.list[i]=this.list[i+1];
		}
		this.list[Object.size(this.list)-1]=null;
		delete this.list[Object.size(this.list)-1];
	},
	
	spawn:function(){
		if(Object.size(this.list)<this.maxGuys){
			this.list[Object.size(this.list)]={
				hp  : enemy.unit.hp,
				att : enemy.unit.att,
				def : enemy.unit.def,
				spd : enemy.unit.spd,
				lvl : enemy.unit.lvl,
				clr : enemy.unit.clr,
				pos : { x:1, y:55 },
				nxtWaypoint:0
			};
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