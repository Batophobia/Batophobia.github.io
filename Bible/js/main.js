$(function () {
  getBibles();

  document.addEventListener("click", function (e) {
    const target = e.target.closest(".verseLink");
    if (target) {
      console.log({ target })
      getVerses(target, "Genesis", "1:30", "2:2");
    }
  });
});

function onSignIn(user) {
  var profile = user.getBasicProfile();
  $('#profile .name').text(profile.getName());
  $('#profile .email').text(profile.getEmail());
}

function getBibles() {
  $.get(`https://bible-api.com/Genesis+1:1?translation=asv`)
    .done(function (data) {
      $("#passageText").html(data.text);
    });
}

function getVerses(elem, book, start, end) {
  $.get(`https://bible-api.com/${book}+${start}-${end}?translation=asv`)
    .done(function (data) {
      $(elem).append(data.text);
    });
}