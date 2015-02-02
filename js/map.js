var map = {
	waypoints:[],
	canMap: 0,
	ctxMap: 0,
	
	init: function(){
		this.canMap=document.getElementById("map")
		this.ctxMap=this.canMap.getContext("2d");
		this.ctxMap.strokeStyle = "#339933";
		
		if(this.waypoints.length<1)
			this.create();
		else{
			for(i=0;i<this.waypoints.length;i++)
				this.drawWaypoint(this.waypoints[i]);
		}
		map.ctxMap.closePath();
	},
	
	getMousePos: function(evt) {
		var rect = this.canMap.getBoundingClientRect();
		return {
			x: evt.clientX - rect.left,
			y: evt.clientY - rect.top
		};
	},
	
	create:function(){
		/*		Map design branches from this: http://stackoverflow.com/a/17614267/1618257
			1. Pick random point in first X rows
			2. Place waypoint there
			3. Repeat 1-2 until top of map
			4. Close off at the top
		*/
		
		var numSubs=6;
		var numRows=Math.floor(56/numSubs);
		var numBlocks=numSubs*55;
		var prevPoint={ x:1, y:55 };
		var nxtPoint={ x:0, y:0 };
		
		this.ctxMap.moveTo(0,550)
		
		//Maybe come back and alter this for better maps (alternate finding random points on left and right sides)
		for(i=0;i<numSubs;i++){
			var temp=Math.floor(Math.random() * numBlocks) + 55*2;
			
			nxtPoint.y= 55 - (Math.ceil(temp/56) + (i*numRows));
			nxtPoint.x= (temp % 56);
			
			if(nxtPoint.y<1)
				nxtPoint.y=1;
			if(nxtPoint.x<1)
				nxtPoint.x=1;
			else if(nxtPoint.x>55)
				nxtPoint.x=55;
			
			this.drawWaypoint(nxtPoint);
			this.waypoints[this.waypoints.length]={
				x: nxtPoint.x,
				y: nxtPoint.y
			};
			
			prevPoint.x = nxtPoint.x;
			prevPoint.y = nxtPoint.y;
		}
		nxtPoint.x=55;
		nxtPoint.y=1;
		
		this.waypoints[this.waypoints.length]={
			x: nxtPoint.x,
			y: nxtPoint.y
		};
	},
	
	drawWaypoint: function(point){
		this.ctxMap.strokeRect(point.x*10-5,point.y*10-5,10,10);
	},
	
	drawLine: function(p1, p2){
		this.ctxMap.moveTo(p1.x*10,p1.y*10);
		this.ctxMap.lineTo(p2.x*10,p2.y*10);
		this.ctxMap.stroke();
	},
	
	tick: function(){
		this.ctxMap.clearRect (0, 0, this.canMap.width, this.canMap.height);
		
		this.ctxMap.strokeStyle = "#339933";
		for(i=0;i<this.waypoints.length;i++)
			this.drawWaypoint(this.waypoints[i]);
		this.ctxMap.closePath();
		
		for(var i=0;i<Object.size(towers.list);i++){
			map.ctxMap.fillStyle='rgb('+towers.list[i].clr+')';
			map.ctxMap.fillRect(towers.list[i].pos.x-4,towers.list[i].pos.y-4,8,8);
		}
	},
	
	drawGrid: function(){
		for(i=0;i<57;i++){
			this.ctxMap.moveTo(i*10,0);
			this.ctxMap.lineTo(i*10,560);
			this.ctxMap.stroke();
			
			this.ctxMap.moveTo(0  ,i*10);
			this.ctxMap.lineTo(560,i*10);
			this.ctxMap.stroke();
		}
	}
};