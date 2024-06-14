var site = {
  today: new Date(),
  selected: new Date(),
  dayOffset: 0,

  init: function () {
    site.dayOffset = site.today.getDay()
    // $("#content").on("click", "#btnImportOrderData", (e) => {
    //   site.importOrder();
    // });
  },

  updateDisplay: function () {
    loopDate = new Date(site.selected)
    loopDate.setDate(loopDate.getDate() - site.dayOffset)
    for (i = 1; i < 8; i++) {
      tasksHtml = `<div class="dayHeader">${sheet.data.values[i][0]} - ${loopDate.getDate()}</div>`
      tasksHtml += sheet.getMealsForDate(loopDate, i)
      $(`#day${(i - 1)}`).html(tasksHtml)
      loopDate.setDate(loopDate.getDate() + 1)
    }

    if (site.selected.toDateString() == site.today.toDateString()) { // Current week
      $(`#day${site.selected.getDay()}`).addClass("today")
    } else {
      $(`#day${site.selected.getDay()}`).removeClass("today")
    }

    $("#loading").hide();
  },

  allowDrop: function (event) {
    event.preventDefault();
  },

  onDrop: function (event) {
    console.log(event)
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  },

  onDrag: function (event) {
    event.dataTransfer.setData("text", event.target.id);
  },
};