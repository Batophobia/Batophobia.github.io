var code = {
	init : function(){
		$("#btnRun").on("click",function(){code.run();});
	},
	
	run: function(){
		var scrip=$("#levelCode").val();
		var hmtl=$("#hdnCode").val();
		output.display(hmtl,scrip);
	}
};