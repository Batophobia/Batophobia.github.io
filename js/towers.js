var towers = {
	init: function(){
		if(Object.size(this.list)>0){
			for(var i=0;i<Object.size(this.list);i++){
				map.ctxMap.fillStyle='rgb('+this.list[i].clr+')';
				map.ctxMap.fillRect(this.list[i].pos.x-4,this.list[i].pos.y-4,8,8);
				if(this.types[this.list[i].id].unlk==false)
					this.unlock(this.list[i].id);
				
				this.types[this.list[i].id].cost += Math.floor(this.types[this.list[i].id].cost*.4);
				$("#tower_"+this.list[i].id).html(towers.types[this.list[i].id].name+"<br/>$"+towers.types[this.list[i].id].cost);
			}
		}
	},
	
	types: {
		0:{name:"Spitball"		, att:1	, hp:10	, spd:1	, rng:2	, cost:5	, lvl:1	, clr:"255,255,255"	, unlk:false},
		1:{name:"P-Shooter"		, att:2	, hp:10	, spd:1	, rng:2	, cost:25	, lvl:1	, clr:"0,255,0"		, unlk:false},
		2:{name:"BB Gun"		, att:3	, hp:10	, spd:2	, rng:1	, cost:50	, lvl:1	, clr:"128,128,128"	, unlk:false},
		3:{name:"Pistol"		, att:4	, hp:15	, spd:2	, rng:2	, cost:100	, lvl:1	, clr:"120,120,200"	, unlk:false},
		4:{name:"Auto-Rifle"	, att:4	, hp:15	, spd:3	, rng:3	, cost:175	, lvl:1	, clr:"200,120,120"	, unlk:false},
		5:{name:"Sniper"		, att:5	, hp:10	, spd:1	, rng:4	, cost:350	, lvl:1	, clr:"100,200,100"	, unlk:false},
		6:{name:"Rocket"		, att:6	, hp:15	, spd:1	, rng:2	, cost:500	, lvl:1	, clr:"100,100,100"	, unlk:false},
		7:{name:"Cannon"		, att:7	, hp:25	, spd:1	, rng:3	, cost:1000	, lvl:1	, clr:"125,100,100"	, unlk:false}
	},
	list: {},
	selected: -1,
	
	unlock: function(type){
		this.types[type].unlk=true;
		$("#towers").append("<div class='tower' id='tower_"+type+"' onclick='towers.clicked(this);'>"+this.types[type].name+"<br/>$"+this.types[type].cost+"</div>");
	},
	
	clicked: function(obj){
		var id=obj.id;
		
		if(this.types[id.split("_")[1]].cost>items.coins)
			return false;
		
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
			id : towers.selected,
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
		
		items.coins-=towers.types[towers.selected].cost;
		towers.types[towers.selected].cost += Math.floor(towers.types[towers.selected].cost*.4);
		$("#tower_"+towers.selected).html(towers.types[towers.selected].name+"<br/>$"+towers.types[towers.selected].cost);
		
		map.ctxMap.fillStyle='rgb('+towers.types[towers.selected].clr+')';
		map.ctxMap.fillRect(tmp.x-4,tmp.y-4,8,8);
		
		$("#tower_"+towers.selected).removeClass("sel");
		towers.selected=-1;
	},
	
	shoot: function(twr, baddie){
		map.ctxMap.strokeStyle = 'rgb('+twr.clr+')';
		map.ctxMap.beginPath();
		map.ctxMap.moveTo(twr.pos.x, twr.pos.y);
		map.ctxMap.lineTo(baddie.pos.x*10, baddie.pos.y*10);
		map.ctxMap.stroke();
		map.ctxMap.closePath();
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
					this.shoot(twr, baddie);
					
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