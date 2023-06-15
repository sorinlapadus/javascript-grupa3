var activePage = "home";

function displayPage(id) {
  hide(activePage);
  show(id);
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
