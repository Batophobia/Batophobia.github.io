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
    var show = $(this).parent().attr("for");
    if(UserShows[show]){
      delete UserShows[show];
      msg("Removed Show");
    }else{
      UserShows[show] = {
        name: $(this).parent().find(".showName").text(),
        image: $(this).parent().find(".showImage").attr("src")
      };
      addMyShow(show, UserShows[show].name, UserShows[show].image);
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
    addMyShow(show, UserShows[show].name, UserShows[show].image);
  }
}

function addMyShow(id, name, img){
	$("#secShows").append("<span class='showWrapper' for='"+id+"'>"+
      "<div class='showName'>"+name+"</div>"+
      "<img src='"+img+"' />"+
      "</span>");
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
