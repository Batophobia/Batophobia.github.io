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
		var data = {
			'items': {},
			'store': {},
			'player': { a: player.activeSpcmn, m: player.money, s: [] }
		};

		for (var p in items.pellets) {
			data['items'][p] = items.pellets[p].num;
		}
		for (var i in store.stock) {
			data['store'][i] = {
				q: store.stock[i].qty,
				s: store.stock[i].sold,
				u: store.stock[i].unlocked,
			};
		}
		for (var i in player.spcmn) {
			data['player'].s.push({
				v: player.spcmn[i].visual,
				s: player.spcmn[i].stats,
			});
		}

		localStorage["PetriSave"] = JSON.stringify(data);
	},

	load: function () {
		if ('PetriSave' in localStorage) {
			var data = JSON.parse(localStorage['PetriSave']);

			for (var thing in data['items']) {
				items.pellets[thing].num = data['items'][thing];
			}

			for (var thing in data['store']) {
				store.stock[thing].qty = data['store'][thing].q;
				store.stock[thing].sold = data['store'][thing].s;
				store.stock[thing].unlocked = data['store'][thing].u;
			}

			for (var thing in data['player'].s) {
				player.load(data['player'].s[thing]);
			}
			player.money = data['player'].m;
			player.activeSpcmn = data['player'].a;
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