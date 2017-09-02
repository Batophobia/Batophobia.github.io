$(function(){
  $("#frmShowSearch .btnSearch").click(function(){
    searchShow();
  });
});

function searchShow(){
  $.post("https://api.tvmaze.com/search/shows",$("#frmShowSearch").serialize())
  .done(function(retData){
    $("#ShowSearchResults").html(retData);
  });
}
