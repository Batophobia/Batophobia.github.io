var main = {
  init: function () {
    this.load();
  },
  spreadsheet: "1A0j2R5sMb8_EClnbR2Pcm_5_UWHzT50f16yMXjO0MQS",
  sheet: "683326268",
  api: "TODO",

  load: function () {
    $(document).on("click", "#btnBegin", (e) => { main.decrypt(); });
  },
  decrypt: function () {
    $("#passWrapper").hide();
    $("#siteWrapper").show();

    console.log("Decrypting")
    var key = $("#pass").val();
    this.spreadsheet = vigenere(this.spreadsheet, key);
    this.sheet = vigenere(this.sheet, key);
    this.api = vigenere(this.api, key);

    gapi.load('client', startGAPI);
  },
  startGAPI: function () {
    gapi.client.init({
      'apiKey': this.api,
      'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest']
    }).then(function () {
      return gapi.client.sheets.spreadsheets.get({
        spreadsheetId: this.spreadsheet,
      });
    }).then(function (response) {
      console.log(response.result);
    }, function (reason) {
      console.log('Error: ' + reason.result.error.message);
    });
  }
};
