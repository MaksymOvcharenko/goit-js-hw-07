const form = document.querySelector(".login-form");
form.addEventListener("submit", formSubmit);
const userBase = {};
function formSubmit(event) {
  event.preventDefault();
  const forms = event.target;
  const email = forms.elements.email.value;
  const password = forms.elements.password.value;
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  userBase.email = email.trim();
  userBase.password = password.trim();
  form.reset();
  return console.log(userBase);
}
