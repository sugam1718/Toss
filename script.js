const img = document.querySelector(".img");
const topText = document.querySelector(".top");

function tossCoin() {
  const side = Math.random() < 0.5 ? "heads" : "tails";

  topText.textContent = "Flipping...";
  img.style.visibility = "hidden";

  setTimeout(() => {
    img.src = side + ".png";
    topText.textContent = `It's ${side}.`;
    img.style.visibility = "visible";
  }, 2000);
}
