function init() {
  const signupButton = document.querySelector(".promotion__button");
  const emailInput = document.querySelector(".promotion__input");
  const errorEl = document.querySelector(".promotion__error");

  function isEmailValid(emailInput) {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailInput.value.match(validRegex) ? true : false;
  }

  signupButton.addEventListener("click", function (e) {
    e.preventDefault();
    errorEl.style.display = "none";
    const isValid = isEmailValid(emailInput);

    if (!isValid) {
      errorEl.style.display = "block";
      return;
    }

    alert("Thank you for your support; we are glad to have you on board!");
  });
}

init();
