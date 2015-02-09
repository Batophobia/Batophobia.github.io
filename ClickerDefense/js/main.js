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