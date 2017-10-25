var apikey = "472e4906ffa57fc8e08a58b0a8bf46eb";

$(function(){
	$.get("https://api.biblia.com/v1/bible/find",{key: apikey})
  .done(function(data){
    $("#passageText").text("");
    data = Json.parse(data);
    for(var itm in data){
      $("#passageText").append(itm+": "+data[itm]+"<br/>");
    }
  });
});
