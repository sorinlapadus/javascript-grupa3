function hideAllPages() {
  hide("home");
  hide("languages");
  hide("projects");
  hide("skills");
}

function displayPage(id) {
  hideAllPages();
  show(id);
}

function show(id) {
  var page = document.getElementById(id);
  page.style.display = "block";
}

function hide(id) {
  var page = document.getElementById(id);
  page.style.display = "none";
}

displayPage("home");
