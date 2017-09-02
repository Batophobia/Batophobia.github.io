$(function(){
  $("#btnShowSearch").click(function(e){
    e.preventDefault();
    searchShow();
  });
});

function searchShow(){
  $("#ShowSearchResults").html("Loading...");
  $.get("https://api.tvmaze.com/search/shows",$("#frmShowSearch").serialize())
  .done(function(retData){
    $("#ShowSearchResults").html("<table id='tblShowSearch'></table>");
    for(var show in retData){
      $("#tblShowSearch").append(
        "<tr for='"+retData[show].show.id+"'>"
        +"<td>Add Show</td>"
        +"<td>"+retData[show].show.name+"</td>"
        +"<td><img src='"+retData[show].show.image.medium+"' /></td>"
        +"<td>"+retData[show].show.summary+"</td>"
        +"</tr>"
      );
    }
  });
}
