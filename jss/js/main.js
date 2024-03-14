var main = {
  init: function () {
    this.load();
  },
  spreadsheet: "1A0j2R5sMb8_EClnbR2Pcm_5_UWHzT50f16yMXjO0MQS",
  sheet: "683326268",
  key: "TODO",
  load: function () {
    $("#btnBegin").on("click", main.decrypt);
  },
  decrypt: function () {
    console.log("Decrypting")
    this.key = $("#pass").val();
    this.spreadsheet = vigenere(this.spreadsheet, key);
    this.sheet = vigenere(this.sheet, key);

    gapi.load('client', startGAPI);
  },
  startGAPI: function () {
    gapi.client.init({
      'apiKey': this.key,
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
