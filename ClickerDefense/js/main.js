var main = {
	init: function(){
		this.load();
		map.init();
		items.init();
		enemy.init();
		towers.init();
		store.init();
		ments.init();
		
		timerID=setInterval("main.tick();",this.delay);
	},
	timerID: 0,
	counter: 0,
	lastTick: new Date(),
	delay: 20,
	
	tick : function(){
		if(main.clearIt){
			localStorage.removeItem("ClickerDefenseSave");
			return false;
		}
		
		now = new Date();
		var elapsedTime = (now.getTime() - main.lastTick.getTime());
		
		if(elapsedTime>this.delay){
			for(var i=0;i<Math.floor(elapsedTime/this.delay);i++){
				items.tick();
				map.tick();
				enemy.tick();
				towers.tick();
				ments.tick();
				
				this.save();
				this.counter++;
			}
		}else{
			items.tick();
			map.tick();
			enemy.tick();
			towers.tick();
			ments.tick();
			
			this.save();
			this.counter++;
		}
		main.lastTick = new Date();
	},
	
	save : function(){
		var data = {'map':[],'towers':{},'items':{},'enemy':{},'store':{},'ments':{}};
		data['enemy'].list = enemy.list;
		data['enemy'].maxLevel = enemy.maxLevel;
		data['enemy'].tilNextLvl = enemy.tilNextLvl;
		
		data['towers'] = towers.list;
		data['map'] = map.waypoints;
		data['items'].coins = items.coins;
		data['items'].scrap = items.scrap;
		
		for(var itm in store.items){
			data.store[itm]={
				inStock: store.items[itm].inStock,
				lvl: store.items[itm].lvl
			}
		}
		
		for(var itm in ments.list)
			data['ments'][itm] = ments.list[itm].unlk;
		
		data['ments'].stats = ments.stats;
		
		localStorage["ClickerDefenseSave"] = JSON.stringify(data);
	},
	
	load : function(){
		if('ClickerDefenseSave' in localStorage){
			var data = JSON.parse(localStorage['ClickerDefenseSave']);
		}else{
			items.addCoins(1);
			return;
		}
		enemy.list=data['enemy'].list;
		enemy.maxLevel=data['enemy'].maxLevel;
		enemy.tilNextLvl=data['enemy'].tilNextLvl;
		
		map.waypoints=data['map'];
		towers.list=data['towers'];
		items.coins=data['items'].coins;
		items.scrap=data['items'].scrap;
		
		
		for(var itm in store.items){
			store.items[itm].inStock = data['store'][itm].inStock;
			store.items[itm].lvl = data['store'][itm].lvl;
		}
		
		for(var itm in ments.list)
			ments.list[itm].unlk=data['ments'][itm];
		ments.stats=data['ments'].stats;
		
		if(ments.stats.ascensions==1)
			ments.award(68);
		else if(ments.stats.ascensions==100)
			ments.award(99);
		else if(ments.stats.ascensions==1000)
			ments.award(100);
		
		if(items.scrap>=5)
			ments.award(69);
		else if(items.scrap>=20)
			ments.award(70);
		else if(items.scrap>=50)
			ments.award(71);
		else if(items.scrap>=100)
			ments.award(72);
	},
	
	exprt: function(){
		var strExport="";
		
		for(var itm in map.waypoints){
			strExport = strExport+"{"+map.waypoints[itm].x.toString()+","+map.waypoints[itm].y.toString()+"}";
		}
		strExport = strExport+":";
		
		for(var itm in towers.list){
			strExport = strExport+"{"+towers.list[itm].id+","+towers.list[itm].cnt+","+towers.list[itm].tgt+","+towers.list[itm].pos.x+","+towers.list[itm].pos.y+"}";
		}
		strExport = strExport+":";
		
		strExport = strExport+items.coins+","+items.scrap;
		strExport = strExport+":";
		
		strExport = strExport+enemy.maxLevel+","+enemy.tilNextLvl;
		for(var itm in enemy.list){
			strExport = strExport+"{"+enemy.list[itm].att+","+enemy.list[itm].clr+","+enemy.list[itm].def+","+enemy.list[itm].hp+","+enemy.list[itm].lvl+","+enemy.list[itm].nxtWaypoint+","+enemy.list[itm].spd+","+enemy.list[itm].pos.x+","+enemy.list[itm].pos.y+"}";
		}
		strExport = strExport+":";
		
		for(var itm in store.items){
			strExport = strExport+"{"+store.items[itm].inStock.toString().replace("true",1).replace("false",0)+","+store.items[itm].lvl+"}";
		}
		strExport = strExport+":";
		
		for(var itm in ments.list)
			strExport = strExport+ments.list[itm].unlk.toString().replace("true",1).replace("false",0);
		
		for(var itm in ments.stats)
			strExport = strExport+","+ments.stats[itm];
		
		$("#txtExport").val(strExport);
		$("#divExport").show();
	},
	
	imprt: function(){
		var strImport=$("#txtExport").val();
		
		if(strImport=='')
			return false;
		
		strImport=strImport.split(":");
		var strMap=strImport[0].split("}");
		var strTowers=strImport[1].split("}");
		var strItems=strImport[2].split(",");
		var strEnemy=strImport[3];
		var strStore=strImport[4].split("}");
		var strMents=strImport[5].split(",");
		
		map.waypoints=[];
		for(var itm in strMap){
			strMap[itm]=strMap[itm].substring(1).split(",");
			if(strMap[itm]!=''){
				map.waypoints[map.waypoints.length]={
					x: parseInt(strMap[itm][0]),
					y: parseInt(strMap[itm][1])
				};
			}
		}
		
		towers.list={};
		for(var itm in strTowers){
			strTowers[itm]=strTowers[itm].substring(1).split(",");
			if(strTowers[itm]!=''){
				towers.list[Object.size(towers.list)]={
					id : strTowers[itm][0],
					cnt: parseInt(strTowers[itm][1]),
					tgt: strTowers[itm][2],
					pos: { x:parseInt(strTowers[itm][3]), y:parseInt(strTowers[itm][4]) }
				};
			}
		}
		
		items.coins=parseInt(strItems[0]);
		items.scrap=parseInt(strItems[1]);
		
		var temp=strEnemy.split("{")[0].split(",");
		enemy.maxLevel = temp[0];
		enemy.tilNextLvl = temp[1];
		strEnemy=strEnemy.substring(strEnemy.indexOf("{"));//TODO
		enemy.list={};
		strEnemy=strEnemy.split("}");
		for(var itm in strEnemy){
			strEnemy[itm]=strEnemy[itm].substring(1).split(",");
			if(strEnemy[itm]!=''){
				enemy.list[Object.size(enemy.list)]={
					att : parseInt(strEnemy[itm][0]),
					clr : strEnemy[itm][1]+","+strEnemy[itm][2]+","+strEnemy[itm][3],
					def : parseInt(strEnemy[itm][4]),
					hp  : parseInt(strEnemy[itm][5]),
					lvl : parseInt(strEnemy[itm][6]),
					nxtWaypoint:parseInt(strEnemy[itm][7]),
					spd : parseInt(strEnemy[itm][8]),
					pos : { x:parseInt(strEnemy[itm][9]), y:parseInt(strEnemy[itm][10]) }
				};
			}
		}
		
		for(var itm in store.items){
			var temp=strStore[itm].substring(1).split(",");
			if(temp[0]=='1')
				store.items[itm].inStock=true;
			else
				store.items[itm].inStock=false;
			store.items[itm].lvl=parseInt(temp[1]);
		}
		
		var blnMents=strMents[0];
		for(var itm in ments.list){
			var curMent=blnMents.charAt(0);
			blnMents=blnMents.substring(1);
			if(curMent=='1')
				ments.list[itm].unlk=true;
			else
				ments.list[itm].unlk=false;
		}
		
		var i=1;
		for(var itm in ments.stats){
			ments.stats[itm]=parseInt(strMents[i++]);
		}
		
		this.save();
		location.reload();
	},
	
	renew: function(){
		ments.stats.ascensions++;
		items.scrap+=Math.floor(enemy.maxLevel/12);
		items.coins=5*items.scrap;
		
		map.waypoints=[];
		towers.list={};
		enemy.list={};
		enemy.maxLevel=1;
		enemy.tilNextLvl=5;
		enemy.maxGuys=20;
		enemy.cntSpawn=250;
		
		this.save();
		location.reload();
	},
	
	clearIt: false,
	clear: function(){
		if(confirm("Are you sure you want to erase your save data?  You will start completely over.")){
			main.clearIt=true;
			window.localStorage.removeItem("ClickerDefenseSave");
			window.location.reload();
			
			//There is no reason for this other than to try and waste time while clearing and reloading the page
			var temp=Math.PI;
			for(var i=0;i<10000;i++){
				temp=Math.atan(temp);
			}
		}
	},
	
	alrt: function(input){
		var alert = $("<div class='alert'>" + input + "</div>");
		$('#alerts').append(alert);
		setTimeout(function(){
			alert.fadeOut('slow',function(){
				$(this).remove();
			});
		},3000);
	}
};

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function round(value, exp) {
	// If the exp is undefined or zero...
	if (typeof exp === 'undefined' || +exp === 0) {
		return Math.round(value);
	}
	value = +value;
	exp = +exp;
	// If the value is not a number or the exp is not an integer...
	if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
		return NaN;
	}
	// Shift
	value = value.toString().split('e');
	value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
	// Shift back
	value = value.toString().split('e');
	return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
};