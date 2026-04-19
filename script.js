let isFlipping = false;

function tossCoin() {
  if (isFlipping) return;

  isFlipping = true;

  const img = document.querySelector(".img");
  const topText = document.querySelector(".top");
  const side = Math.random() < 0.5 ? "heads" : "tails";

  topText.textContent = "Flipping...";
  img.classList.add("flipping");

  setTimeout(() => {
    img.src = `${side}.png`;
    img.classList.remove("flipping");
    topText.textContent = `It's ${side}.`;
    isFlipping = false;
  }, 2000);
}
