var activePage = "home";

function displayPage(id) {
  hide(activePage);
  document
    .querySelector(`#top-menu-bar a[data-page="${id}"]`)
    .classList.remove(activePage);
  show(id);
  document
    .querySelector(`#top-menu-bar a[data-page="${id}"]`)
    .classList.add("active");
  activePage = id;
}

function show(id) {
  var page = document.getElementById(id);
  page.style.display = "block";
}

function hide(id) {
  var page = document.getElementById(id);
  page.style.display = "none";
}

displayPage(activePage);
