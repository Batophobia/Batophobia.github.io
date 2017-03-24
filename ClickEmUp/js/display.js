var display = {
	can: 0,
	ctx: 0,
	btns: [],
	
	init: function(){
		this.can=document.getElementById("map")
		this.ctx=this.can.getContext("2d");
		this.ctx.strokeStyle = "#999999";
		
		this.can.addEventListener('click', function(e) {
			var pnt=display.getMousePos(e);
			var btn=display.isBtn(pnt);
			
			if(!btn){
				return false;
			}
			
			if(display.btns[btn].name=="Play"){
				$("#alerts").html("Play");
			}
			else if(display.btns[btn].name=="Settings"){
				$("#alerts").html("Settings");
			}
			else if(display.btns[btn].name=="Awards"){
				$("#alerts").html("Awards");
			}
		}, false);
		
		this.menu();
	},
	
	isBtn: function(pnt){
		for(var btn in display.btns){
			if(pnt.x<display.btns[btn].x+display.btns[btn].w && pnt.x>display.btns[btn].x){
				if(pnt.y<display.btns[btn].y+display.btns[btn].h && pnt.y>display.btns[btn].y)
					return btn;
			}
		}
		return false;
	},
	
	getMousePos: function(evt) {
		var rect = this.can.getBoundingClientRect();
		return {
			x: evt.clientX - rect.left,
			y: evt.clientY - rect.top
		};
	},
	
	menu: function(){
		this.drawButton(300,125,"Play");
		this.drawButton(200,200,"Settings");
		this.drawButton(200,275,"Awards");
	},
	
	drawButton: function(x, y, text){
		var w=150, h=45;
		this.ctx.moveTo(x,y);
		this.ctx.strokeRect(x,y,w,h);
		
		this.ctx.textAlign = "center";
		this.ctx.textBaseline = "middle";
		this.ctx.font="20px Georgia";
		this.ctx.strokeText(text,x+(w/2),y+(h/2));
		
		this.btns.push({name: text, x: x, y: y, w: w, h: h});
	},
	
	tick : function(){
		
	},
};
