var main = {
	init: function(){
		this.load();
		map.init();
		items.init();
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
				store.tick();
				enemy.tick();
				towers.tick();
				
				this.updateDisplay();
				this.save();
				this.counter++;
			}
		}else{
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
		var data = {'map':[],'towers':{}};
		for(var group in towers.list){
			data['towers'][group] = towers.list[group];
		}
		data['map'] = map.waypoints;
		localStorage["save"] = JSON.stringify(data);
	},
	
	load : function(){
		if('save' in localStorage){
			var data = JSON.parse(localStorage['save']);
		}else{
			items.addCoins(100);
			return;
		}
		map.waypoints=data['map'];
		
		//for(var group in towers.list){
		//	if(group in data['towers']){
		//		towers.list[group].level=data.towers[group];
		//	}
		//}
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