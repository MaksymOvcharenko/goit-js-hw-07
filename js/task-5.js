const btnChange = document.querySelector(".change-color");
const bgColor = document.querySelector("body");
const span = document.querySelector(".color");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
getRandomHexColor();
btnChange.addEventListener("click", (color) => {
  color = getRandomHexColor();

  bgColor.style.background = color;
  span.textContent = color;
});
