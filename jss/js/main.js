var main = {
  init: function () {
    this.load();
  },
  spreadsheet: "1A0j2R5sMb8_EClnbR2Pcm_5_UWHzT50f16yMXjO0MQS",
  sheet: "683326268",
  clientID: "160556897237-k3l8icc4oc7fcbf04yx0h85tgjrwt682",
  clientSecret: "YHCJZB-A-p8LCefXFvnwtOBK7-hkpZPbvU9",
  api: "SBzrCcZ0xcwv-3me2rMoUaZzjPkmTW2C6Ag7NRV",

  load: function () {
    console.log("ver .001");

    $("#btnBegin").on("click", main.decrypt);
  },
  decrypt: function () {
    $("#passWrapper").hide();
    $("#siteWrapper").show();

    var key = $("#pass").val();
    main.clientID = vigenere(main.clientID, key);
    main.clientID += ".apps.googleusercontent.com";
    main.clientSecret = vigenere(main.clientSecret, key);
    main.api = vigenere(main.api, key);
    main.spreadsheet = vigenere(main.spreadsheet, key);

    gapi.load('client', main.startGAPI);
  },
  startGAPI: function () {
    console.log({ api: main.api, ss: main.spreadsheet, id: main.clientID, cs: main.clientSecret })
    gapi.client.init({
      'apiKey': main.api,
      'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest']
    }).then(function () {
      return gapi.client.sheets.spreadsheets.get({
        spreadsheetId: main.spreadsheet,
      });
    }).then(function (response) {
      console.log(response.result);
    }, function (reason) {
      console.log({ reason });
    });
  }
};
