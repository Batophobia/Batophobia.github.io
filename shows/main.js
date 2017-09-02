$(function(){
  $("#btnShowSearch").click(function(e){
    e.preventDefault();
    searchShow();
  });
});

function searchShow(){
  $.get("https://api.tvmaze.com/search/shows",$("#frmShowSearch").serialize())
  .done(function(retData){
    $("#ShowSearchResults").html(retData);
  });
}
