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
  today: new Date(),
  selected: new Date(),
  dayOffset: 0,

  init: function () {
    site.dayOffset = site.today.getDay()
    site.updateDisplay()
    // $("#content").on("click", "#btnImportOrderData", (e) => {
    //   site.importOrder();
    // });
  },

  updateDisplay: function () {
    weekStart = new Date(site.selected)
    weekStart.setDate(weekStart.getDate() - site.dayOffset)
    for (i = 0; i < 7; i++) {
      $(`#day${i}`).html(sheet.getTasksForDate(weekStart, i))
      weekStart.setDate(weekStart.getDate() + 1)
    }

    if (site.selected.toDateString() == site.today.toDateString()) { // Current week
      $(`#day${site.selected.getDay()}`).addClass("today")
    } else {
      $(`#day${site.selected.getDay()}`).removeClass("today")
    }
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