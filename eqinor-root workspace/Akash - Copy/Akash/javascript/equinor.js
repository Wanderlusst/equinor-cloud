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
