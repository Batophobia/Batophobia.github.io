var goog = {
  spreadsheet: "B=Q\u0003Y7LQ0\u000cY-,.\n]\u0018<S>\u000e\u0010&\u0006,66#\u001b5L\u0003\u001bEW\u0015?=\nvC=23",
  sheet: "683326268",
  clientID: "BBQG^SA\nDFREF\u0016J@K\u001d\r\u0001_\u000e\u001c\u0004\u001d\u001e\u0003\u001d[Q\u0016GC\u001eYG\t\u000b\u0013R\u001e\u0004WJY",
  clientSecret: '4;"!;=Tp^\u000cY!(\u000b\u000fg;\u0010\u0014\u0005\u0008 !~DY\u0011\u0000\u001b,?K\u000b7X',
  api: "2=\u001b\u00138\u001c;\u0003\u0015\u001e\u0016\u0017FV\u001aRA\u00004\u0004>\u000f)E\u001f,\u0013\u001f((KjE7\u000eE>7<",

  decrypt: async function () {
    $("#passWrapper").hide();
    $("#siteWrapper").show();

    var key = $("#pass").val();
    goog.clientID = xor(goog.clientID, key);
    goog.clientID += ".apps.googleusercontent.com";
    goog.clientSecret = xor(goog.clientSecret, key);
    goog.api = xor(goog.api, key);
    goog.spreadsheet = xor(goog.spreadsheet, key);

    $("#googleAuthWrapper").append('<div id="g_id_onload" data-client_id="' + goog.clientID + '" data-callback="handleCredentialResponse"></div>');
    var script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    document.head.appendChild(script);
  },

  initClient: async function () {
    console.log("initClient START")
    try {
      console.log("initClient try")
      debugger
      goog.client = await gapi.auth2.init({
        client_id: goog.clientID,
        scope: 'https://www.googleapis.com/auth/spreadsheets'
      }).then(() => {
        console.log("gapi.auth2.init callback")
      },
        (err) => {
          console.log("gapi.auth2.init error")
        }
      )
      //await gapi.client.init({
      //  apiKey: goog.api,
      //  clientId: goog.clientID,
      //  discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest'],
      //  //scope: "https://www.googleapis.com/auth/spreadsheets"
      //  scope: "https://www.googleapis.com/auth/spreadsheets.readonly"
      //});
    } catch (error) {
      console.log("initClient catch")
      console.log({ error });
    }
  },

  getData: function () {
    gapi.load('client', () => {
      //gapi.client.setApiKey(goog.api);
      //gapi.client.setToken({ access_token: goog.accessToken });

      gapi.client.load('sheets', 'v4', () => {
        gapi.client.sheets.spreadsheets.values.batchGet({
          spreadsheetId: goog.spreadsheet,
          ranges: [],
        }).then((response) => {
          console.log({ response })
        }, (reason) => {
          console.error({ reason });
        });
      });
    });
  },
  getData_old: function () {
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

window.handleCredentialResponse = function (response) {
  gapi.load('client:auth2', goog.initClient);
}