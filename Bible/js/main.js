$(function(){
	getBibles();
});

function getBibles(){
  $.get("https://www.biblegateway.com/passage",{search: "Genesis 1", version: "NASB"})
  .done(function(data){
    $("#passageText").html(data);
  });
}