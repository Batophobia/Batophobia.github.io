$(function () {
  getBibles();

  $("#addQuote").on("click", (e) => {
    $("#quotePopup").show();
  });

  $("#saveQuote").on("click", (e) => {
    const quote = $("#addQuoteVerse")[0].value;
    const source = $("#addSourceVerse")[0].value;
    const notes = $("#addNotes")[0].value;
    console.log({ quote, source, notes });

    const quoteBook = quote.split(/\d/)[0].trim();
    const quoteStartChapter = quote.split(":")[0].replace(/\D/g, '');
    const quoteStartVerse = quote.split(":")[1].split('-')[0].trim();

    let quoteEndChapter = quoteStartChapter;
    let quoteEndVerse = quoteStartVerse;
    if (quote.indexOf('-') > 0) {
      //TODO
    }

    const sourceBook = source.split(/\d/)[0].trim();
    const sourceStartChapter = source.split(":")[0].replace(/\D/g, '');
    const sourceStartVerse = source.split(":")[1].split('-')[0].trim();

    let sourceEndChapter = sourceStartChapter;
    let sourceEndVerse = sourceStartVerse;
    if (quote.indexOf('-') > 0) {
      //TODO
    }

    appendData(
      quoteBook,
      quoteStartChapter,
      quoteStartVerse,
      quoteEndChapter,
      quoteEndVerse,

      sourceBook,
      sourceStartChapter,
      sourceStartVerse,
      sourceEndChapter,
      sourceEndVerse,

      notes
    )
    $("#quotePopup").hide();
  });

  $("#closePopup").on("click", (e) => {
    $("#quotePopup").hide();
  });

  document.addEventListener("click", function (e) {
    const target = e.target.closest(".verseLink");
    if (target) {
      const verses = target.textContent.split(' - ');
      const book = verses[0].split(' ')[0];
      const start = verses[0].split(' ')[1];
      const end = verses[1];
      getVerses(target, book, start, end);
    }
  });
});

function onSignIn(user) {
  var profile = user.getBasicProfile();
  $('#profile .name').text(profile.getName());
  $('#profile .email').text(profile.getEmail());
}

function getBibles() {
  $.get(`https://bible-api.com/data`)
    .done(function (data) {
      console.log(data);
      for (idx in data.translations) {
        console.log(data.translations[idx]);
      }
      // $("#passageText").html(data.text);
    });
}

function getVerses(elem, book, start, end) {
  $.get(`https://bible-api.com/${book}+${start}-${end}?translation=asv`)
    .done(function (data) {
      console.log({ data })
      $(elem).parent().append(data.text);
    });
}