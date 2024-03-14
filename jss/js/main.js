var main = {
  init: function () {
    this.load();
  },
  spreadsheet: "1A0j2R5sMb8_EClnbR2Pcm_5_UWHzT50f16yMXjO0MQS",
  sheet: "683326268",
  api: "TODO",

  load: function () {
    console.log("ver .00000007");

    $("#btnBegin").on("click", main.decrypt);
  },
  decrypt: function () {
    $("#passWrapper").hide();
    $("#siteWrapper").show();

    console.log("Decrypting")
    var key = $("#pass").val();
    console.log({ key, api: main.api, ss: main.spreadsheet, sheet: main.sheet })
    main.spreadsheet = vigenere(main.spreadsheet, key);
    main.sheet = vigenere(main.sheet, key);
    main.api = vigenere(main.api, key);

    gapi.load('client', main.startGAPI);
  },
  startGAPI: function () {
    console.log({ api: main.api, ss: main.spreadsheet, sheet: main.sheet })
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
      console.log('Error: ' + reason.result.error.message);
    });
  }
};
