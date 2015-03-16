var output = {
	init : function(){
		code.run();
	},
	
	display: function(hmtl, scrip){
		$("#mainOutput").contents().find("#outStuff").html(hmtl);
		document.getElementById('mainOutput').contentWindow.eval(scrip);
	}
};