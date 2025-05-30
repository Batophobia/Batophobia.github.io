// Client ID and API key from the Developer Console
var CLIENT_ID = '545924454876-8mkdag6i3eibgvlp0a19da6jfr3cb3kq.apps.googleusercontent.com';
var API_KEY = 'AIzaSyAZUjEtRhHFFHzAXferXelEyNaSs_IPf-o';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/spreadsheets";

var authorizeButton;
var signoutButton;

function init_gDrive() {
  authorizeButton = document.getElementById('authorize-button');
  signoutButton = document.getElementById('signout-button');
}

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
  });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = 'none';
    signoutButton.style.display = 'block';
    getData();
  } else {
    authorizeButton.style.display = 'block';
    signoutButton.style.display = 'none';
  }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}

function clearTable() {
  var table = document.getElementById('content');
  table.innerHTML = "";
}
function appendHeader() {
  var table = document.getElementById('content');
  table.insertAdjacentHTML('beforeend', `<tr class='headerRow'><th>Quote</th><th>Source</th><th>Notes</th></tr>`);
}
function appendRow(rowData) {
  var table = document.getElementById('content');
  let rowText = `<tr class='quoteRow'><td class='quote'><div class='verseLink'>${rowData[0]} ${rowData[1]}:${rowData[2]} - ${rowData[3]}:${rowData[4]} (${rowData[5]})</div>`
  rowText += `<div class='verseText'>${rowData[6]}</div>`;
  rowText += `</td><td class='source'><div class='verseLink'>${rowData[7]} ${rowData[8]}:${rowData[9]} - ${rowData[10]}:${rowData[11]} (${rowData[12]})</div>`;
  rowText += `<div class='verseText'>${rowData[13]}</div>`;
  rowText += `</td><td class='notes'><div class='noteText'>${rowData[14]}</div></td></tr>`;
  table.insertAdjacentHTML('beforeend', rowText);
}

var sheetData = [];
function getData() {
  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: '1Br9L7s8RTBEz5fPw2novkTX14e_2u8s41xCCn_J-bgY',
    range: 'Data!A2:O',
  }).then(function (response) {
    var range = response.result;
    if (range.values.length > 0) {
      sheetData = range.values;
      updateDisplay();
    } else {
      console.error('No data found.');
    }
  }, function (response) {
    console.error('Error: ' + response.result.error.message);
  });
}

async function appendData(quoteBook, quoteStartChapter, quoteStartVerse, quoteEndChapter, quoteEndVerse, quoteVersion, quoteText, sourceBook, sourceStartChapter, sourceStartVerse, sourceEndChapter, sourceEndVerse, sourceVersion, sourceText, notes) {
  let appendResp = await gapi.client.sheets.spreadsheets.values.append({
    spreadsheetId: '1Br9L7s8RTBEz5fPw2novkTX14e_2u8s41xCCn_J-bgY',
    range: 'Data',
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    resource: {
      "majorDimension": "ROWS",
      "values": [[quoteBook, quoteStartChapter, quoteStartVerse, quoteEndChapter, quoteEndVerse, quoteVersion, quoteText, sourceBook, sourceStartChapter, sourceStartVerse, sourceEndChapter, sourceEndVerse, sourceVersion, sourceText, notes]]
    },
  })

  sheetData.push([quoteBook, quoteStartChapter, quoteStartVerse, quoteEndChapter, quoteEndVerse, quoteVersion, quoteText, sourceBook, sourceStartChapter, sourceStartVerse, sourceEndChapter, sourceEndVerse, sourceVersion, sourceText, notes]);
  updateDisplay();
}

function updateDisplay() {
  clearTable();
  $("#tableButtons").show();
  appendHeader();
  for (i = 0; i < sheetData.length; i++) {
    var row = sheetData[i];
    appendRow(row);
  }
}

$(function () {
  init_gDrive();
});
