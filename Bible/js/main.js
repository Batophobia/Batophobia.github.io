//authorize apps
function initClient() {
	gapi.client.init({
		apiKey: API_KEY, //THIS IS OPTIONAL AND WE DONT ACTUALLY NEED THIS, BUT I INCLUDE THIS AS EXAMPLE
		clientId: CLIENT_ID,
		scope: SCOPES.join(' ')
	}).then(function () {
	  // Listen for sign-in state changes.
	  gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
	  // Handle the initial sign-in state.
	  updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
	});
}
