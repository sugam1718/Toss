const img = document.querySelector(".img");
const topText = document.querySelector(".top");

function tossCoin() {
  const side = Math.random() < 0.5 ? "heads" : "tails";

  img.style.visibility = "hidden";
  topText.textContent = "Flipping...";

  setTimeout(() => {
    img.src = `${side}.png`;
    topText.textContent = `It's ${side}.`;
    img.style.visibility = "visible";
  }, 2000);
}
