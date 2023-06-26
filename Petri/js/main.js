var main = {
	init: function () {
		this.load();
		specimen.init();
		player.init();
		enemy.init();
		lab.init();
		quest.init();
		items.init();
		store.init();

		$("#btnLab").click();

		main.timerID = window.setInterval(function () { main.tick() }, 100);
	},
	timerID: 0,
	counter: 0,
	keyDown: 0,
	lastTick: new Date(),

	tick: function () {
		now = new Date();
		//var elapsedTime = (now.getTime() - main.lastTick.getTime());
		//var delay = 100;

		//if (elapsedTime > delay) {
		//	for (var i = 0; i < Math.floor(elapsedTime / delay); i++) {
		//		this.tickAction();
		//	}
		//} else {
		this.tickAction();
		//}
		main.lastTick = new Date();
	},

	tickAction: function () {
		store.tick();
		player.tick();
		lab.tick();
		items.tick();
		quest.tick();
		enemy.tick();

		this.updateDisplay();
		this.save();
		this.counter++;
	},

	updateDisplay: function () {
		// TODO
	},

	save: function () {
		var data = { 'items': {}, 'store': {} };
		//for(var group in items.types){
		//	if(group=="stuff"){
		//		data['items'][group]={};
		//		for(var thing in items.types[group]){
		//			data['items'][group][thing]=(items.types[group][thing]);
		//		}
		//	}else if(group=="pellets"){
		//		data['items'][group]={};
		//		for(var thing in items.types.pellets){
		//			data['items'][group][thing]={
		//				num: items.types.pellets[thing].num
		//			}
		//		}
		//	}else{
		//		data['items'][group] = {
		//			total : items.types[group].total
		//		}
		//	}
		//}
		localStorage["PetriSave"] = JSON.stringify(data);
	},

	load: function () {
		if ('PetriSave' in localStorage) {
			var data = JSON.parse(localStorage['PetriSave']);
		} else {
			//items.types.stuff[0]={
			//	display: "Red Onion",
			//	numNeeded: 0,
			//	type: "onion"
			//};
			return;
		}
		//for(var group in items.types){
		//	if(group in data['items']){
		//		if(group=="stuff"){
		//			for(var thing in data['items'][group]){
		//				items.types[group][thing]=data['items'][group][thing];
		//			}
		//		}else if(group=="pellets"){
		//			for(var thing in data['items'][group]){
		//				items.types.pellets[thing].num=data['items'][group][thing].num;
		//			}
		//		}else{
		//			items.types[group].total = data.items[group].total;
		//		}
		//	}
		//}
		//for(var group in store.items){
		//	if(group in data['store']){
		//		store.items[group].level=data.store[group].level;
		//	}
		//}
	},

	alrt: function (input) {
		console.log(`ALERT: ${input}`);
		var alert = $("<div class='alert'>" + input + "</div>");
		$('#alerts').append(alert);
		setTimeout(function () {
			alert.fadeOut('slow', function () {
				$(this).remove();
			});
		}, 3000);
	}
};

Object.size = function (obj) {
	var size = 0, key;
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) size++;
	}
	return size;
};

String.prototype.replaceAt = function (index, replacement) {
	return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function batman(min, max) {
	return Math.floor(Math.random() * (max + 1)) + min;
}