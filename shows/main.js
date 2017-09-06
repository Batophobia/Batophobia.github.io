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
  
  $(document).on("click", ".toggleShow", function(){
    if(UserShows[$(this).parent().attr("for")]){
      UserShows[$(this).parent().attr("for")] = true;
      msg("Added Show");
    }else{
      delete UserShows[$(this).parent().attr("for")];
      msg("Removed Show");
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
  if(localStorage["ShowTracker"]===undefined)
    return false;
  
  UserShows = JSON.parse( localStorage["ShowTracker"] );
  //20 calls per 10 seconds
}

msg(input){
  var message = $("<div>"+input+"<div>");
		$('#messages').append(message);
		setTimeout(function(){
			message.fadeOut('slow',function(){
				$(this).remove();
			});
  },3000);
}
