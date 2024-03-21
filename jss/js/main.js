var main = {
  init: function () {
    this.load();
  },
  spreadsheet: "B=Q\u0003Y7LQ0\u000cY-,.\n]\u0018<S>\u000e\u0010&\u0006,66#\u001b5L\u0003\u001bEW\u0015?=\nvC=23",
  sheet: "683326268",
  clientID: "BBQG^SA\nDFREF\u0016J@K\u001d\r\u0001_\u000e\u001c\u0004\u001d\u001e\u0003\u001d[Q\u0016GC\u001eYG\t\u000b\u0013R\u001e\u0004WJY",
  clientSecret: '4;"!;=Tp^\u000cY!(\u000b\u000fg;\u0010\u0014\u0005\u0008 !~DY\u0011\u0000\u001b,?K\u000b7X',
  api: "2=\u001b\u00138\u001c;\u0003\u0015\u001e\u0016\u0017FV\u001aRA\u00004\u0004>\u000f)E\u001f,\u0013\u001f((KjE7\u000eE>7<",

  load: function () {
    console.log("ver .003");

    $("#btnBegin").on("click", main.decrypt);
  },
  decrypt: function () {
    $("#passWrapper").hide();
    $("#siteWrapper").show();

    var key = $("#pass").val();
    main.clientID = xor(main.clientID, key);
    main.clientID += ".apps.googleusercontent.com";
    main.clientSecret = xor(main.clientSecret, key);
    main.api = xor(main.api, key);
    main.spreadsheet = xor(main.spreadsheet, key);

    gapi.load('client', main.startGAPI);
  },
  startGAPI: async function () {
    try {
      console.log("test00")
      await gapi.client.init({
        'apiKey': main.api,
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest']
      });

      console.log("test01")
      const response = gapi.client.sheets.spreadsheets.get({
        spreadsheetId: main.spreadsheet,
      });
      console.log(response.result);

    } catch (error) {
      console.log("test04");
      console.log({ error });
    };
  }
};
