const inputEl = document.querySelector(".input input"),
  iconEyes = document.querySelector(".input i"),
  popup = document.querySelector(".popup"),
  popupText = document.querySelector(".result");

let numbers = /[0-9]/;
let letters = /[a-zA-Z]/;
let symboles = /[^a-zA-Z0-9]/;

const verifyPassword = (e) => {
  if (!inputEl.value) return inputEl.classList.remove("active");

  if (inputEl.value) {
    popup.classList.add("active");

    if (
      numbers.test(inputEl.value) ||
      letters.test(inputEl.value) ||
      (symboles.test(inputEl.value) && inputEl.value.length >= 4)
    ) {
      popupText.textContent = "weak";
      popup.classList.add("weak");
    }

    if (
      numbers.test(inputEl.value) &&
      letters.test(inputEl.value) &&
      inputEl.value.length >= 4
    ) {
      popupText.textContent = "medium";
      popup.classList.replace("weak", "medium");
    }

    if (
      numbers.test(inputEl.value) &&
      letters.test(inputEl.value) &&
      symboles.test(inputEl.value) &&
      inputEl.value.length >= 4
    ) {
      popupText.textContent = "strong";
      popup.classList.replace("medium", "strong");
    }
  }

  inputEl.classList.add("active");
};

inputEl.addEventListener("input", verifyPassword);

iconEyes.addEventListener("click", () => {
  inputEl.type = inputEl.type === "password" ? "text" : "password";
  iconEyes.className = `${
    inputEl.type === "password"
      ? "fa-regular fa-eye-slash"
      : "fa-regular fa-eye"
  }`;
});
