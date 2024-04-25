const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (text) => {
  output.textContent = text.currentTarget.value.trim() || "Anonymus";
});
