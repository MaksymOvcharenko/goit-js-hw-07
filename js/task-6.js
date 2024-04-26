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
  boxPlace.innerHTML = "";
  if (!(0 < ammount > 100)) {
    for (let i = 0; i < ammount; i++) {
      boxPlace.insertAdjacentHTML(
        "beforeend",
        `<div style="background-color: ${getRandomHexColor()}; width: ${
          30 + i * 10
        }px; height: ${30 + i * 10}px"></div>`
      );
    }
  }
  quantityBoxes.value = "";
}
function destroyBoxes() {
  boxPlace.innerHTML = "";
}
