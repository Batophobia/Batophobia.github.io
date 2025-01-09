document.head = document.head || document.getElementsByTagName('head')[0];

function updateTab() {
  const titleInput = document.getElementById("tabTitle");
  const faviconInput = document.getElementById("tabFavicon");
  const faviconElem = document.getElementById('favicon');
  document.title = titleInput.value;

  const reader = new FileReader();
  reader.onload = function (e) {
    faviconElem.href = e.target.result;
  };
  reader.readAsDataURL(faviconInput.files[0]);
}