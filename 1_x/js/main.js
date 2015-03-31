var main = {
	init: function(){
		this.load();
		ments.init();
		
		timerID=setInterval("main.tick();",this.delay);
	},
	timerID: 0,
	counter: 0,
	delay: 20,
	
	tick : function(){
		ments.tick();
		
		this.save();
		this.counter++;
	},
	
	save : function(){
		var data = {'map':[],'ments':{}};
		
		for(var itm in ments.list)
			data['ments'][itm] = ments.list[itm].unlk;
		
		data['ments'].stats = ments.stats;
		
		//localStorage["1_x"] = JSON.stringify(data);
	},
	
	load : function(){
		if('1_x' in localStorage){
			var data = JSON.parse(localStorage['1_x']);
		}else{
			return;
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