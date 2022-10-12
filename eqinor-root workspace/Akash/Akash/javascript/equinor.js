const box = document.getElementById("box");

const btn = document.getElementById("btn");

btn.addEventListener("click", function handleClick() {
  if (box.style.display != "block") {
    box.style.display = "block";
    btn.textContent = "Hide more settings";
  } else {
    box.style.display = "none";
    btn.textContent = "Show more settings";
  }
});



const wellContents = document.getElementById("wellContents");

const searchWells = document.getElementById("searchWells");

searchWells.addEventListener("click", function handleClick() {
  if (wellContents.style.display != "block") {
    wellContents.style.display = "block";
    searchWells.textContent = "Hide more settings";
  } else {
    wellContents.style.display = "none";
    searchWells.textContent = "Show more settings";
  }
});
