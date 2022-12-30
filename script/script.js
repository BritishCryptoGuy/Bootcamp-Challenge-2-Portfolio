let workSection = document.querySelector("#work");
let workImages = document.querySelectorAll(".work-sec");

function removeHover(e) {
  e.target.parentElement.innerHTML = "";
}
function addHover(e) {
  let section = e.target.id;
  let work = document.querySelector(`#${section}`);
  let alt = work.getAttribute("alt");
  work.insertAdjacentHTML("afterbegin", `<div class="hoverText">${alt}</div>`);
}

workSection.addEventListener("mouseover", function (e) {
  hover = e.target.id;
  if (e.target.id === "work-title") {
    return;
  } else if (e.target.id === "") {
    return;
  } else {
    addHover(e);
  }
});
workSection.addEventListener("mouseout", function (e) {
  if (e.target.id === "work-title") {
    return;
  } else if (e.target.className === "hoverText") {
    removeHover(e);
  }
});
workSection.addEventListener("click", function (e) {
  if (e.target.id === "work-title") {
    return;
  } else {
    removeHover(e);
  }
});
