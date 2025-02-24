$(function(){
	getBibles();
});

function onSignIn(user) {
  var profile = user.getBasicProfile();
  $('#profile .name').text(profile.getName());
  $('#profile .email').text(profile.getEmail());
}

function getBibles(){
  $.get(`https://bible-api.com/Genesis+1:1?translation=asv`)
  .done(function(data){
    $("#passageText").html(data.text);
  });
}
