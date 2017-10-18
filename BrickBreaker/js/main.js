var main = {
	init: function(){
		this.load();
		ments.init();
		
		timerID=setInterval("main.tick();",this.delay);
	},
	timerID: 0,
	counter: 0,
	lastTick: new Date(),
	delay: 20,
	
	tick : function(){
		if(main.clearIt){
			localStorage.removeItem("BrickBreakerSave");
			return false;
		}
		
		now = new Date();
		var elapsedTime = (now.getTime() - main.lastTick.getTime());
		
		if(elapsedTime>this.delay){
			for(var i=0;i<Math.floor(elapsedTime/this.delay);i++){
				map.tick();
				ments.tick();
				
				this.save();
				this.counter++;
			}
		}else{
			map.tick();
			ments.tick();
			
			this.save();
			this.counter++;
		}
		main.lastTick = new Date();
	},
	
	save : function(){
		var data = {'ments':{}};
		
		for(var itm in ments.list)
			data['ments'][itm] = ments.list[itm].unlk;
		
		data['ments'].stats = ments.stats;
		
		localStorage["BrickBreakerSave"] = JSON.stringify(data);
	},
	
	load : function(){
		if('BrickBreakerSave' in localStorage){
			var data = JSON.parse(localStorage['BrickBreakerSave']);
		}else{
			return;
		}
		
		for(var itm in ments.list)
			ments.list[itm].unlk=data['ments'][itm];
		ments.stats=data['ments'].stats;
	},
	
	exprt: function(){
		var strExport="";
		
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
		var strMents=strImport[0].split(",");
		
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
	
	clearIt: false,
	clear: function(){
		if(confirm("Are you sure you want to erase your save data?  You will start completely over.")){
			main.clearIt=true;
			window.localStorage.removeItem("BrickBreakerSave");
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
