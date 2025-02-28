$(function () {
  getBibles();

  $("#addQuote").on("click", (e) => {
    $("#quotePopup").show();
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
      $("#passageText").html(data.text);
    });
}

function getVerses(elem, book, start, end) {
  $.get(`https://bible-api.com/${book}+${start}-${end}?translation=asv`)
    .done(function (data) {
      console.log({ data })
      $(elem).parent().append(data.text);
    });
}