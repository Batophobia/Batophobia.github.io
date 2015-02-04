var towers = {
	init: function(){
		if(Object.size(this.list)>0){
			var tmpMaxTwr=0;
			for(var i=0;i<Object.size(this.list);i++){
				map.ctxMap.fillStyle='rgb('+this.list[i].clr+')';
				map.ctxMap.fillRect(this.list[i].pos.x-4,this.list[i].pos.y-4,8,8);
				if(this.list[i].id>tmpMaxTwr)
					tmpMaxTwr=this.list[i].id;
				
				this.types[this.list[i].id].cost += Math.floor(this.types[this.list[i].id].cost*.4);
				$("#tower_"+this.list[i].id).html(towers.types[this.list[i].id].name+"<br/>$"+towers.types[this.list[i].id].cost);
			}
			for(var i=0;i<=tmpMaxTwr;i++)
				this.unlock(i);
		}
	},
	
	types: {
		0: {name:"Spitball"		, att:1	, hp:10	, spd:1	, rng:2	, cost:5		, lvl:1	, clr:"200,200,255"	, unlk:false},
		1: {name:"P-Shooter"	, att:2	, hp:10	, spd:1	, rng:2	, cost:15		, lvl:1	, clr:"0,255,0"		, unlk:false},
		2: {name:"BB Gun"		, att:4	, hp:10	, spd:2	, rng:1	, cost:55		, lvl:1	, clr:"128,128,128"	, unlk:false},
		3: {name:"Pistol"		, att:4	, hp:15	, spd:2	, rng:2	, cost:200		, lvl:1	, clr:"120,120,200"	, unlk:false},
		4: {name:"Auto-Rifle"	, att:5	, hp:15	, spd:3	, rng:3	, cost:500		, lvl:1	, clr:"200,120,120"	, unlk:false},
		5: {name:"Sniper"		, att:6	, hp:10	, spd:1	, rng:4	, cost:1500		, lvl:1	, clr:"100,200,100"	, unlk:false},
		6: {name:"Rocket"		, att:8 , hp:15	, spd:1	, rng:2	, cost:3000		, lvl:1	, clr:"100,100,100"	, unlk:false},
		7: {name:"Cannon"		, att:10, hp:25	, spd:1	, rng:3	, cost:8000		, lvl:1	, clr:"125,100,100"	, unlk:false},
		8: {name:"Missile"		, att:12, hp:25	, spd:2	, rng:4	, cost:20000	, lvl:1	, clr:"255,100,100"	, unlk:false},
		9: {name:"Lazer"		, att:13, hp:20	, spd:4	, rng:5	, cost:50000	, lvl:1	, clr:"128,255,128"	, unlk:false},
		10:{name:"Nuke"			, att:20, hp:30	, spd:2	, rng:6	, cost:120000	, lvl:1	, clr:"255,255,255"	, unlk:false},
	},
	list: {},
	selected: -1,
	selPos: {x:-1, y:-1},
	
	unlock: function(type){
		this.types[type].unlk=true;
		$("#towers").append("<div class='tower' id='tower_"+type+"' onclick='towers.clicked(this);' onmouseover='towers.showInfo(this);' onmouseout='towers.hideInfo();'>"+this.types[type].name+"<br/>$"+this.types[type].cost+"</div>");
	},
	
	hideInfo: function(){
		$("#twrInfo").hide();
	},
	
	showInfo: function(obj){
		var id=obj.id.split("_")[1];
		$("#twrInfo").css('top',10+(id*39));
		$("#twrInfo").html(towers.types[id].name+"<br/>LVL: "+towers.types[id].lvl+"<br/>ATT: "+towers.types[id].att+"<br/>SPD: "+towers.types[id].spd+"<br/>RNG: "+towers.types[id].rng);
		$("#twrInfo").show();
	},
	
	clicked: function(obj){
		var id=obj.id;
		
		if(this.types[id.split("_")[1]].cost>items.coins)
			return false;
		
		$("#tower_"+this.selected).removeClass("sel");
		
		if(id.split("_")[1]==this.selected){
			this.selected=-1;
			
			map.canMap.removeEventListener('click', towers.place, false);
			map.canMap.removeEventListener('mousemove', towers.example, false);
			return false;
		}
		
		this.selected=id.split("_")[1];
		$("#tower_"+this.selected).addClass("sel");
		
		map.canMap.addEventListener('click', towers.place, false);
		map.canMap.addEventListener('mousemove', towers.example, false);
	},
	
	example: function(evt){
		var tmp=map.getMousePos(evt);
		
		towers.selPos.x=tmp.x;
		towers.selPos.y=tmp.y;
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
		$(".coin").text("$"+items.coins);
		towers.types[towers.selected].cost += Math.floor(towers.types[towers.selected].cost*.4);
		$("#tower_"+towers.selected).html(towers.types[towers.selected].name+"<br/>$"+towers.types[towers.selected].cost);
		
		map.ctxMap.fillStyle='rgb('+towers.types[towers.selected].clr+')';
		map.ctxMap.fillRect(tmp.x-4,tmp.y-4,8,8);
		
		map.canMap.removeEventListener('mousemove', towers.example, false);
		towers.selPos.x=-1;
		towers.selPos.y=-1;
		
		var numType=0;
		for(var defense in towers.list){
			if(towers.list[defense].id==towers.selected)
				numType++;
		}
		if(numType%5==0){
			store.stock(towers.selected*4);
		}
		if(numType%6==0){
			store.stock((towers.selected+1)*4);
		}
		if(numType%7==0){
			store.stock((towers.selected+2)*4);
		}
		if(numType%8==0){
			store.stock((towers.selected+3)*4);
		}
		
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
		if(towers.selected>-1 && towers.selPos.x>-1 && towers.selPos.y>-1){
			map.ctxMap.fillStyle='rgba('+towers.types[towers.selected].clr+',128)';
			map.ctxMap.fillRect(this.selPos.x-4,this.selPos.y-4,8,8);
			map.ctxMap.beginPath();
			map.ctxMap.arc(this.selPos.x, this.selPos.y, towers.types[towers.selected].rng*20, 0, 2 * Math.PI, false);
			map.ctxMap.strokeStyle = 'rgba(128,128,128,128)';
			map.ctxMap.lineWidth = 1;
			map.ctxMap.stroke();
		}
		
		for(var defense in towers.list){
			var twr=towers.list[defense];
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
					
					baddie.hp-=(twr.att-baddie.def)+items.scrap;
					if(baddie.hp<=0){
						enemy.kill(twr.tgt);
						twr.tgt=-1;
					}
				}
			}
		}
	}
};