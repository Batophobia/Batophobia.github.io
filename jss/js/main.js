var main = {
  init: function () {
    this.load();
  },
  load: function () {
    console.log("ver .05");

    //var urlParams = new URLSearchParams(window.location.search);
    //p = urlParams.get('p')
    //$("#pass").val(p)
    //goog.decrypt();

    $("#btnBegin").on("click", goog.decrypt);
    $("#btnSignIn").on("click", goog.signIn);
    $("#btnSignOut").on("click", goog.signOut);
  }
};
