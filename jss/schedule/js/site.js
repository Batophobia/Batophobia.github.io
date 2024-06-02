var site = {
  types: [
    "FACBOOK",
    "INSTAGRAM",
    "YOUTUBE",
    "TIKTOK",
    "EMAIL",
    "OTHER"
  ],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  curWeek: 0,
  today: new Date(),

  init: function () {

    // $("#content").on("click", "#btnImportOrderData", (e) => {
    //   site.importOrder();
    // });
  },

  allowDrop: function (event) {
    event.preventDefault();
  },

  onDrop: function (event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  },

  onDrag: function (event) {
    event.dataTransfer.setData("text", event.target.id);
  },
};