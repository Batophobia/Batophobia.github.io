$(function(){
  $("#secHome").show();
  loadShows();
  
  $("#btnShowSearch").click(function(e){
    e.preventDefault();
    searchShow();
  });
  
  $("#navBar li").click(function(){
    $(".section").hide();
    $("#"+$(this).attr("for")).show();
  });
  
  $(".toggleShow").on("click", function(){
    if(UserShows[$(this).parent().attr("for")]){
      UserShows[$(this).parent().attr("for")] = true;
    }else{
      delete UserShows[$(this).parent().attr("for")];
    }
    saveShows();
  });
});

var UserShows={};

function searchShow(){
  $("#ShowSearchResults").html("Loading...");
  $.get("https://api.tvmaze.com/search/shows",$("#frmShowSearch").serialize())
  .done(function(retData){
    $("#ShowSearchResults").html("<table id='tblShowSearch'></table>");
    for(var show in retData){
      $("#tblShowSearch").append(
        "<tr for='"+retData[show].show.id+"'>"
        +"<td class='toggleShow'>Add Show</td>"
        +"<td class='showName'>"+retData[show].show.name+"</td>"
        +"<td><img src='"+retData[show].show.image.medium+"' /></td>"
        +"<td>"+retData[show].show.summary+"</td>"
        +"</tr>"
      );
    }
  });
}

function saveShows(){
  localStorage["ShowTracker"] = JSON.stringify( UserShows );
}
function loadShows(){
  if(localStorage["ShowTracker"]!==undefined)
    UserShows = JSON.parse( localStorage["ShowTracker"] );
}
