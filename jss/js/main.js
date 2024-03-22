var main = {
  init: function () {
    this.load();
  },
  load: function () {
    console.log("ver .007");

    $("#btnBegin").on("click", goog.decrypt);
    $("#btnSignIn").on("click", goog.signIn);
    $("#btnSignOut").on("click", goog.signOut);
  }
};
