$(function () {
  getBibles();

  $("#addQuote").on("click", (e) => {
    $("#quotePopup").show();
  });

  $("#saveQuote").on("click", (e) => {
    /* Exmaple:
Galatians 5:13-14 TLV
[13] Brothers and sisters, you were called to freedom—only do not let your freedom become an opportunity for the flesh, but through love serve one another. [14] For the whole Torah can be summed up in a single saying: “Love your neighbor as yourself.”

https://bible.com/bible/314/gal.5.13-14.TLV
    */
    const quote = $("#addQuoteVerse")[0].value;
    const source = $("#addSourceVerse")[0].value;
    const notes = $("#addNotes")[0].value;

    // Check inputs have value
    if (quote == null || source == null || quote == "" || source == "") {
      alert("Quote and Source values are required");
      throw new Error("Missing value for Quote or Source");
    }

    console.log({ quote, source, notes });

    let passageLoc;
    let passageText;
    let passageLink;

    try {
      passageLoc = quote.split(/\n/)[0].trim();
      passageText = quote.split(/\n/)[1].trim();
      passageLink = quote.split(/\n/)[3].trim();
    } catch (e) {
      alert("Quote value invalid");
      console.error(e);
      throw new Error("Invalid value for Quote");
    }

    let quoteBook;
    let quoteStartChapter;
    let quoteStartVerse;
    let quoteEndChapter;
    let quoteEndVerse;

    try {
      quoteBook = passageLoc.split(/\d/)[0].trim();
      quoteStartChapter = passageLoc.split(":")[0].replace(/\D/g, '');
      quoteStartVerse = passageLoc.split(":")[1].split('-')[0].trim();

      quoteEndChapter = quoteStartChapter
      quoteEndVerse = quoteStartVerse
      if (passageLoc.indexOf('-') > 0) {
        quoteEndChapter = passageLoc.split('-')[1].trim().split(":")[0].trim();
        quoteEndVerse = passageLoc.split('-')[1].trim().split(":")[1].trim();
      }
    } catch (e) {
      alert("Quote value invalid");
      console.error(e);
      throw new Error("Invalid value for Quote");
    }

    let sourceBook;
    let sourceStartChapter;
    let sourceStartVerse;
    let sourceEndChapter;
    let sourceEndVerse;

    try {
      sourceBook = source.split(/\d/)[0].trim();
      sourceStartChapter = source.split(":")[0].replace(/\D/g, '');
      sourceStartVerse = source.split(":")[1].split('-')[0].trim();

      sourceEndChapter = sourceStartChapter
      sourceEndVerse = sourceStartVerse
      if (source.indexOf('-') > 0) {
        sourceEndChapter = source.split('-')[1].trim().split(":")[0].trim();
        sourceEndVerse = source.split('-')[1].trim().split(":")[1].trim();
      }
    } catch (e) {
      alert("Source value invalid");
      console.error(e);
      throw new Error("Invalid value for Source");
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
      for (idx in data.translations.filter((v) => v.language_code == "eng")) {
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