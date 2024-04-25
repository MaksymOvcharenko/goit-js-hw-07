const quantityDiv = document.querySelector("#controls input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const divPlace = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let valueNew = btnCreate.addEventListener("click", () => {
  return (valueNew = quantityDiv.value);
});
console.log(valueNew);
btnCreate.addEventListener("click", () => {
  const divArray = [];
  let ammount = quantityDiv.value;
  if (!(ammount > 100)) {
    for (let i = 0; i < ammount; i++) {
      divArray.push({
        colors: getRandomHexColor(),
        size: 30 + i * 10,
        margin: 5,
      });
    }
    divPlace.innerHTML = divArray
      .map(
        (item) =>
          `<div class= "color_boxes" style="background-color: ${getRandomHexColor()}; width: ${
            item.size
          }px; height: ${item.size}px"></div>`
      )
      .join("");
  }
  quantityDiv.value = "";
});
btnDestroy.addEventListener("click", (value) => {
  divPlace.innerHTML = "";
});
