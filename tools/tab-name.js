document.head = document.head || document.getElementsByTagName('head')[0];
const faviconElem = document.getElementById('favicon');

function updateTab() {
  let titleInput = document.getElementById("tabTitle");
  let faviconInput = document.getElementById("tabFavicon");
  document.title = titleInput.value;

  const reader = new FileReader();
  reader.onload = function (e) {
    faviconElem.href = e.target.result;
  };
  reader.readAsDataURL(faviconInput.files[0]);
}