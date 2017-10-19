/******************** GLOBAL VARIABLES ********************/
var SCOPES = ['https://www.googleapis.com/auth/drive','profile'];
var CLIENT_ID = '545924454876-8mkdag6i3eibgvlp0a19da6jfr3cb3kq.apps.googleusercontent.com';
var API_KEY = 'AIzaSyAZUjEtRhHFFHzAXferXelEyNaSs_IPf-o';
var FOLDER_NAME = "";
var FOLDER_ID = "root";
var FOLDER_PERMISSION = true;
var FOLDER_LEVEL = 0;
var NO_OF_FILES = 1;
var DRIVE_FILES = [];
var FILE_COUNTER = 0;
var FOLDER_ARRAY = [];

$(function(){
  //showUserInfo();
});

function handleClientLoad() {
	gapi.load('client:auth2', initClient);
}

function initClient() {
	gapi.client.init({
		apiKey: API_KEY,
		clientId: CLIENT_ID,
		scope: SCOPES.join(' ')
	}).then(function () {
	  gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
	  updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
	});
}

function updateSigninStatus(isSignedIn) {
	if (isSignedIn) {
	  $("#btnLogin").hide();
    $("#btnLogout").show();
    getDriveFiles();
	} else {
		$("#btnLogin").show();
		$("#btnLogout").hide();
	}
}

function handleAuthClick(event) {
	gapi.auth2.getAuthInstance().signIn();
}

function handleSignoutClick(event) {
	if(confirm("Are you sure you want to logout?")){
		gapi.auth2.getAuthInstance().signOut();
	}
}

function showUserInfo(){
	var request = gapi.client.drive.about.get();
    var obj = {};
    request.execute(function(resp) { 
       if (!resp.error) {
			$("#passageTitle").html(resp.name);
			$("#passageText").html(formatBytes(resp.quotaBytesTotal));
			$("#passageTags").html(formatBytes(resp.quotaBytesUsed));
       }else{
            showMessage("Error",resp.error.message);
       }
   });
}

function showMessage(type, message){
  var alert = $("<div class='alert "+type+"'>" + message + "</div>");
	$('#messages').append(alert);
	setTimeout(function(){
		alert.fadeOut('slow',function(){
			$(this).remove();
		});
  },3000);
}
