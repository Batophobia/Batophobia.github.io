$(function(){
  $("#secHome").show();
  loadShows();
  
  $("#btnShowSearch").click(function(e){
    e.preventDefault();
    searchShow();
  });
  
  $("#navBar li").click(function(e){
    $(".section").hide();
    $("#"+$(this).attr("for")).show();
  });
  
  $(document).on("click", ".toggleShow", function(e){
    if(UserShows[$(this).parent().attr("for")]){
      delete UserShows[$(this).parent().attr("for")];
      msg("Removed Show");
    }else{
      UserShows[$(this).parent().attr("for")] = {
        name: $(this).parent().find("showName").text(),
        image: $(this).parent().find("showImage").attr("src")
      };
      msg("Added Show");
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
        +"<td><img class='showImage' src='"+retData[show].show.image.medium+"' /></td>"
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
  if(localStorage["ShowTracker"]===undefined)
    return false;
  
  UserShows = JSON.parse( localStorage["ShowTracker"] );
  //20 calls per 10 seconds
  
  for(var show in UserShows){
    $("#secShows").append(
      "<span class='showWrapper' for='"+show+"'>"+
      "<div class='showName'>"+UserShows[show].name+"</div>"+
      "<img src='"+UserShows[show].image+"' />"+
      "</span>");
  }
}

function msg(input){
  var message = $("<div>"+input+"<div>");
	$('#messages').append(message);
	setTimeout(function(){
	  message.fadeOut('slow',function(){
		  $(this).remove();
		});
  },3000);
}
