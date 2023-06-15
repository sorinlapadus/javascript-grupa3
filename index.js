var activePage = "home";

function $(selector) {
  return document, document.querySelector(selector);
}

function displayPage(id) {
  hide(activePage);
  $(`#top-menu-bar a[data-page="${id}"]`).classList.remove(activePage);
  show(id);
  $(`#top-menu-bar a[data-page="${id}"]`).classList.add("active");
  activePage = id;
}

function show(id) {
  $("#" + id).style.display = "block";
}

function hide(id) {
  $("#" + id).style.display = "none";
}

displayPage(activePage);
