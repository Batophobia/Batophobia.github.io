$(function(){
	getBibles();
});

function onSignIn(user) {
  var profile = user.getBasicProfile();
  $('#profile .name').text(profile.getName());
  $('#profile .email').text(profile.getEmail());
}

function getBibles(){
  $.get("https://www.biblegateway.com/passage",{search: "Genesis 1", version: "NASB"})
  .done(function(data){
    $("#passageText").html(data);
  });
}
