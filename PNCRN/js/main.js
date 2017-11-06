var main = {
	init : function(){
		this.load();
		this.timerID = window.setInterval(function(){main.tick()}, 1250);
		player.init();
		cards.init();
	},
	counter: 0,
	
	tick : function(){
		this.save();
		this.counter++;
		
		player.tick();
	},
	
	save : function(){
		
	},
	
	load : function(){
		
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

function capital(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function rndm(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
	var help=document.getElementById('helpTip');
    var cardSpec=document.elementFromPoint(x, y);
	
	if($(cardSpec).attr('class')=="crdSpecial"){
		cardSpec = $(cardSpec).text();
		var ability = cardSpec.split("-")[0];
		
		if(ability=="Bonus")
			ability="Extra <u>"+cardSpec.split("-")[1]+"</u> element each turn";
		else if(ability=="Boost")
			ability="Gives +1/+1 to <u>"+cardSpec.split("-")[1]+"</u> units";
		else if(ability=="Extra")
			ability="Crates <u>"+cardSpec.split("-")[1]+"</u> copies of this card";
		else if(ability=="Heal")
			ability="Gain <u>"+cardSpec.split("-")[1]+"</u> life";
		else if(ability=="Vicious")
			ability="Gains +<u>"+cardSpec.split("-")[1]+"</u>/+<u>"+cardSpec.split("-")[1]+"</u> when attacking";
		else if(ability=="Defensive")
			ability="Gains +<u>"+cardSpec.split("-")[1]+"</u>/+<u>"+cardSpec.split("-")[1]+"</u> when defending";
		else if(ability=="Smite")
			ability="Destroys up to <u>"+cardSpec.split("-")[1]+"</u> target units";
		else if(ability=="Transmute")
			ability="Give x <u>"+cardSpec.split("-")[1]+"</u> where x is this card's cost";
		else if(ability=="Buff")
			ability="Give +<u>"+cardSpec.split("-")[1]+"</u>/+<u>"+cardSpec.split("-")[1]+"</u> to target creature";
		else if(ability=="Protect")
			ability="Prevents <u>"+cardSpec.split("-")[1]+"</u> damage";
		
		$("#helpTip").html(ability);
	}else
		$("#helpTip").html("");
	
	help.style.top = (y + 20) + 'px';
    help.style.left = (x + 20) + 'px';
};
