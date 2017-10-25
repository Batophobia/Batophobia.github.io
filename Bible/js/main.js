var apikey = "472e4906ffa57fc8e08a58b0a8bf46eb";

$(function(){
	getBibles();
});

function getBibles(){
  $.get("https://api.biblia.com/v1/bible/find",{key: apikey})
  .done(function(data){
    $("#passageText").text("");
    //data = JSON.parse(data);
    for(var itm in data.bibles){
      var optBible = "<div class='BibleOption'>";
      for(var elem in data.bibles[itm]){
        optBible = optBible + "<div>"+elem+": "+data.bibles[itm][elem]+"</div>";
      }
      optBible = optBible + "</div>";
      $("#passageText").append(optBible);
    }
  });
}
