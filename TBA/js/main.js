var main = {
	init : function(){
		this.load();
		code.init();
		
		$("#displayCode").text("<span id='test'>Hello Guys</span>");
		$("#hdnCode").val("<span id='test'>Hello Guys</span>");
	},
	level: 0,
	
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