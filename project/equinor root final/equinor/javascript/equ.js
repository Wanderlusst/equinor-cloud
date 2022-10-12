const advancedContents = document.getElementById("advancedContents");

const advancedsettings = document.getElementById("advancedsettings");

advancedsettings.addEventListener("click", function handleClick() {
  if (advancedContents.style.display != "block") {
    advancedContents.style.display = "block";
    advancedsettings.textContent = "Hide more settings";
  } else {
    advancedContents.style.display = "none";
    advancedsettings.textContent = "Show more settings";
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
    
    advancedContents.style.display = "none";
    searchWells.textContent = "Show more settings";
  }
});
