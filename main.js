const form = document.querySelector("#form");
const alert = document.querySelector(".alert");
const email = document.querySelector(".email");

function isValid(emailTest) {
  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexEmail.test(emailTest);
}

function checkFieldValidity() {
  const emailValue = email.value;

  if (isValid(emailValue)) {
    alert.innerText = "";
    email.classList.remove("invalid");
  } else {
    alert.innerText = "Please fill a valid email";
    email.classList.add("invalid");
  }
}

form.addEventListener("submit", () => {
  event.preventDefault();

  checkFieldValidity();
});
