var goog = {
  spreadsheet: "B=Q\u0003Y7LQ0\u000cY-,.\n]\u0018<S>\u000e\u0010&\u0006,66#\u001b5L\u0003\u001bEW\u0015?=\nvC=23",
  sheet: "683326268",
  clientID: "BBQG^SA\nDFREF\u0016J@K\u001d\r\u0001_\u000e\u001c\u0004\u001d\u001e\u0003\u001d[Q\u0016GC\u001eYG\t\u000b\u0013R\u001e\u0004WJY",
  clientSecret: '4;"!;=Tp^\u000cY!(\u000b\u000fg;\u0010\u0014\u0005\u0008 !~DY\u0011\u0000\u001b,?K\u000b7X',
  api: "2=\u001b\u00138\u001c;\u0003\u0015\u001e\u0016\u0017FV\u001aRA\u00004\u0004>\u000f)E\u001f,\u0013\u001f((KjE7\u000eE>7<",
  discoveryDoc: 'https://sheets.googleapis.com/$discovery/rest?version=v4',
  gapiInited: false,
  gisInited: false,

  init: function () {
    document.getElementById('authorize_button').style.visibility = 'hidden';
    document.getElementById('signout_button').style.visibility = 'hidden';
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

    gapi.load('client', goog.initializeGapiClient);
    goog.client = google.accounts.oauth2.initTokenClient({
      client_id: goog.clientID,
      scope: "https://www.googleapis.com/auth/spreadsheets",
      callback: '', // defined later
    });
    goog.gisInited = true;
    goog.enableButtons();
  },

  gapiLoaded: function () {
    console.log("gapiLoaded")
  },
  gisLoaded: function () {
    console.log("gisLoaded")
  },
  initializeGapiClient: async function () {
    await gapi.client.init({
      apiKey: goog.api,
      discoveryDocs: [goog.discoveryDoc],
    });
    goog.gapiInited = true;
    goog.enableButtons();
  },

  enableButtons: function () {
    if (goog.gapiInited && goog.gisInited) {
      document.getElementById('authorize_button').style.visibility = 'visible';
      goog.handleAuthClick();
    }
  },

  handleAuthClick: function () {
    goog.client.callback = async (resp) => {
      if (resp.error !== undefined) {
        throw (resp);
      }
      document.getElementById('signout_button').style.visibility = 'visible';
      document.getElementById('authorize_button').innerText = 'Refresh';
      await goog.getData();
    };

    if (gapi.client.getToken() === null) {
      // Prompt the user to select a Google Account and ask for consent to share their data
      // when establishing a new session.
      goog.client.requestAccessToken({ prompt: 'consent' });
    } else {
      // Skip display of account chooser and consent dialog for an existing session.
      goog.client.requestAccessToken({ prompt: '' });
    }
  },

  handleSignoutClick: function () {
    const token = gapi.client.getToken();
    if (token !== null) {
      google.accounts.oauth2.revoke(token.access_token);
      gapi.client.setToken('');
      document.getElementById('content').innerText = '';
      document.getElementById('authorize_button').innerText = 'Authorize';
      document.getElementById('signout_button').style.visibility = 'hidden';
    }
  },

  getData: async function () {
    let response;
    try {
      response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: goog.spreadsheet,
        range: 'Cricut',
      });
    } catch (err) {
      document.getElementById('content').innerText = err.message;
      return;
    }

    const range = response.result;
    if (!range || !range.values || range.values.length == 0) {
      document.getElementById('content').innerText = 'No values found.';
      return;
    }
    sheet.data.load(range.values);
  }
};