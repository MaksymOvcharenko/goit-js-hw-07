const quantityItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${quantityItem.length}`);
quantityItem.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements:${item.querySelectorAll("li").length}`);
});

function addClass(listPlace, className) {
  document
    .querySelectorAll(listPlace)
    .forEach((item) => item.classList.add(className));
}
addClass(".item h2", "item_title");
addClass(".item ul li", "item_list");
