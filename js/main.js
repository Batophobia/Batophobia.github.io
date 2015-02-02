var main = {
	init: function(){
		this.load();
		map.init();
		items.init();
		enemy.init();
		towers.init();
		store.init();
		
		timerID=setInterval("main.tick();",this.delay);
	},
	timerID: 0,
	counter: 0,
	lastTick: new Date(),
	delay: 20,
	
	tick : function(){
		now = new Date();
		var elapsedTime = (now.getTime() - main.lastTick.getTime());
		
		if(elapsedTime>this.delay){
			for(var i=0;i<Math.floor(elapsedTime/this.delay);i++){
				items.tick();
				store.tick();
				enemy.tick();
				towers.tick();
				map.tick();
				
				this.updateDisplay();
				this.save();
				this.counter++;
			}
		}else{
			items.tick();
			map.tick();
			store.tick();
			enemy.tick();
			towers.tick();
			
			this.updateDisplay();
			this.save();
			this.counter++;
		}
		main.lastTick = new Date();
	},
	
	updateDisplay: function(){
		
	},
	
	save : function(){
		var data = {'map':[],'towers':{},'items':{},'enemy':{}};
		data['enemy'].list = enemy.list;
		data['enemy'].maxLevel = enemy.maxLevel;
		data['enemy'].tilNextLvl = enemy.tilNextLvl;
		
		data['towers'] = towers.list;
		data['map'] = map.waypoints;
		data['items'] = items.coins;
		localStorage["save"] = JSON.stringify(data);
	},
	
	load : function(){
		if('save' in localStorage){
			var data = JSON.parse(localStorage['save']);
		}else{
			items.addCoins(1);
			return;
		}
		enemy.list=data['enemy'].list;
		enemy.maxLevel=data['enemy'].maxLevel;
		enemy.tilNextLvl=data['enemy'].tilNextLvl;
		
		map.waypoints=data['map'];
		towers.list=data['towers'];
		items.coins=data['items'];
	},
	
	renew: function(){
		map.waypoints=[];
		towers.list={};
		enemy.list={};
	},
	
	clear: function(){
		localStorage.clear();
		location.reload();
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