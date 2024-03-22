var goog = {
  spreadsheet: "B=Q\u0003Y7LQ0\u000cY-,.\n]\u0018<S>\u000e\u0010&\u0006,66#\u001b5L\u0003\u001bEW\u0015?=\nvC=23",
  sheet: "683326268",
  clientID: "BBQG^SA\nDFREF\u0016J@K\u001d\r\u0001_\u000e\u001c\u0004\u001d\u001e\u0003\u001d[Q\u0016GC\u001eYG\t\u000b\u0013R\u001e\u0004WJY",
  clientSecret: '4;"!;=Tp^\u000cY!(\u000b\u000fg;\u0010\u0014\u0005\u0008 !~DY\u0011\u0000\u001b,?K\u000b7X',
  api: "2=\u001b\u00138\u001c;\u0003\u0015\u001e\u0016\u0017FV\u001aRA\u00004\u0004>\u000f)E\u001f,\u0013\u001f((KjE7\u000eE>7<",

  updateSigninStatus: function (isSignedIn) {
    console.log("Signin Status Change")
    if (isSignedIn) {
      $("#btnSignIn").hide();
      $("#btnSignOut").show();
      goog.getData();
    } else {
      $("#btnSignOut").hide();
      $("#btnSignIn").show();
    }
  },

  decrypt: async function () {
    $("#passWrapper").hide();
    $("#siteWrapper").show();

    var key = $("#pass").val();
    goog.clientID = xor(goog.clientID, key);
    goog.clientID += ".apps.googleusercontent.com";
    goog.clientSecret = xor(goog.clientSecret, key);
    goog.api = xor(goog.api, key);
    goog.spreadsheet = xor(goog.spreadsheet, key);

    $("#googleAuthWrapper").append('<div id="g_id_onload" data-client_id="' + goog.clientID + '" data-callback="goog.handleCredentialResponse"></div>');

    var script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.onreadystatechange = goog.onScriptLoad;
    script.onload = goog.onScriptLoad;
    document.head.appendChild(script);
  },

  onScriptLoad: function () {
    console.log("Script Loaded")
    //gapi.load('client:auth2', goog.initClient);
  },
  handleCredentialResponse: function () {
    console.log("Cred Response")
  },
  initClient: function () {
    console.log("Initializing Client")
    gapi.client.init({
      apiKey: goog.api,
      clientId: goog.clientID,
      discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest'],
      //scope: "https://www.googleapis.com/auth/spreadsheets"
      scope: "https://www.googleapis.com/auth/spreadsheets.readonly"
    }).then(function () {
      gapi.auth2.getAuthInstance().isSignedIn.listen(goog.updateSigninStatus);

      goog.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      authorizeButton.onclick = handleAuthClick;
      signoutButton.onclick = handleSignoutClick;
    }, function (error) {
      console.log(JSON.stringify(error, null, 2));
    });
  },

  signIn: function (event) {
    console.log("Sign In")
    gapi.auth2.getAuthInstance().signIn();
  },

  signOut: function (event) {
    console.log("Sign Out")
    gapi.auth2.getAuthInstance().signOut();
  },

  getData: function () {
    console.log("Attempt Get Data")
    try {
      gapi.client.sheets.spreadsheets.values.batchGet({
        spreadsheetId: goog.spreadsheet,
        ranges: [], // An empty array will default to all ranges
      }).then(function (response) {
        console.log({ response });
        var batchResult = response.result.valueRanges;
        // Process the batchResult to access all the returned data
        batchResult.forEach(function (valueRange) {
          console.log(valueRange.range);
          console.log(valueRange.values);
        });
      });
    } catch (error) {
      console.log({ error });
    };
  }
};
