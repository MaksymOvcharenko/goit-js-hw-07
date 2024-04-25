const quantityBoxes = document.querySelector("#controls input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxPlace = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnCreate.addEventListener("click", () => {
  let ammount = quantityBoxes.value;
  createBoxes(ammount);
});

btnDestroy.addEventListener("click", () => {
  destroyBoxes();
});
function createBoxes(ammount) {
  const boxArray = [];
  if (!(ammount > 100)) {
    for (let i = 0; i < ammount; i++) {
      boxArray.push({
        size: 30 + i * 10,
      });
    }
    boxPlace.innerHTML = boxArray
      .map(
        (item) =>
          `<div style="background-color: ${getRandomHexColor()}; width: ${
            item.size
          }px; height: ${item.size}px"></div>`
      )
      .join("");
  }
  quantityBoxes.value = "";
}
function destroyBoxes() {
  boxPlace.innerHTML = "";
}
