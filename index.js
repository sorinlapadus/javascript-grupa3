var activePage = "skills";

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

function getSkillsRequest() {
  console.info("TODO: get skills from JSON");
  fetch("skills.json").then((r) => {
    r.json().then(showSkillsList);
  });
}

function showSkillsList(skillsList) {
  const ul = $("#skills ul");
  const skillsHtml = skillsList.map((skill) => {
    const className = skill.favorite ? "favorite" : "";
    return `<li class="${className}">${skill.name} - <span>${skill.endorcements}</span></li>`;
  });
  ul.innerHTML = skillsHtml.join("");
}

displayPage(activePage);
$("#top-menu-bar").addEventListener("click", function clickOnMenu(e) {
  if (e.target.matches("a")) {
    const id = e.target.dataset.page;
    if (id) {
      displayPage(id);
    } else {
      console.warn("Please Use data-page attribute");
    }
  }
});
getSkillsRequest();
