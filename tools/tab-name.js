document.head = document.head || document.getElementsByTagName('head')[0];

function updateTab() {
  titleElem = document.getElementById("tabTitle");
  faviconElem = document.getElementById("tabFavicon");
  document.title = titleElem.value;

  // var link = document.querySelector("link[rel~='icon']");
  // if (!link) {
  //   link = document.createElement('link');
  //   link.rel = 'icon';
  //   document.head.appendChild(link);
  // }
  // link.href = 'https://stackoverflow.com/favicon.ico';
}

function changeFavicon(src) {
  var link = document.createElement('link'),
    oldLink = document.getElementById('dynamic-favicon');
  link.id = 'dynamic-favicon';
  link.rel = 'shortcut icon';
  link.href = src;
  if (oldLink) {
    document.head.removeChild(oldLink);
  }
  document.head.appendChild(link);
}