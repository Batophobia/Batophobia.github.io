var towers = {
	init: function(){
		this.unlock(0);
		this.unlock(1);
	},
	
	types: {
		0:{name:"Spitball"		, att:1	, hp:10	, spd:1	, rng:1	, cost:10	, lvl:1	, clr:"255,255,255"},
		1:{name:"Cannon"		, att:1	, hp:10	, spd:1	, rng:1	, cost:10	, lvl:1	, clr:"125,100,100"}
	},
	list: {},
	selected: -1,
	
	unlock: function(type){
		$("#towers").append("<div class='tower' id='tower_"+type+"' onclick='towers.clicked(this);'>"+this.types[type].name+"<br/>$"+this.types[type].cost+"</div>");
	},
	
	clicked: function(obj){
		var id=obj.id;
		
		//map.canMap.removeEventListener('click', towers.place(evt), false);
		
		$("#tower_"+this.selected).removeClass("sel");
		this.selected=id.split("_")[1];
		$("#tower_"+this.selected).addClass("sel");
		
		map.canMap.addEventListener('click', towers.place, false);
	},
	
	place: function(evt){
		if(towers.selected<0)
			return false;
		
		var tmp=map.getMousePos(evt);
		
		towers.list[Object.size(towers.list)]={
			name:towers.types[towers.selected].name,
			att: towers.types[towers.selected].att,
			hp:  towers.types[towers.selected].hp,
			spd: towers.types[towers.selected].spd,
			rng: towers.types[towers.selected].rng,
			cost:towers.types[towers.selected].cost,
			lvl: towers.types[towers.selected].lvl,
			clr: towers.types[towers.selected].clr,
			cnt: 15,
			tgt: -1,
			pos: { x:tmp.x, y:tmp.y }
		};
		
		map.ctxMap.fillStyle='rgb('+towers.types[towers.selected].clr+')';
		map.ctxMap.fillRect(tmp.x-4,tmp.y-4,8,8);
	},
	
	tick: function(){
		for(var defense in this.list){
			var twr=this.list[defense];
			if(twr.tgt<0){
				for(var baddie in enemy.list){
					var enmy=enemy.list[baddie];
					
					var dist=(10*enmy.pos.x-twr.pos.x)*(10*enmy.pos.x-twr.pos.x);
					dist += (10*enmy.pos.y-twr.pos.y)*(10*enmy.pos.y-twr.pos.y);
					dist=Math.sqrt(dist);
					
					if(dist <= twr.rng*20)
						twr.tgt=baddie;
				}
			}else{
				twr.cnt-=twr.spd;
				var baddie=enemy.list[twr.tgt];
				
				if(baddie===undefined){
					twr.tgt=-1;
					return false;
				}
				
				var dist=(10*baddie.pos.x-twr.pos.x)*(10*baddie.pos.x-twr.pos.x);
				dist += (10*baddie.pos.y-twr.pos.y)*(10*baddie.pos.y-twr.pos.y);
				dist=Math.sqrt(dist);
				
				if(dist > twr.rng*20)
					twr.tgt=-1;
				
				if(twr.cnt<=0){
					twr.cnt=15;
					baddie.hp-=(twr.att-baddie.def);
					if(baddie.hp<=0){
						enemy.kill(twr.tgt);
						twr.tgt=-1;
					}
				}
			}
		}
	}
};