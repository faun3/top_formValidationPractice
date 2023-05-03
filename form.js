/*
all validation must occur in this javascript file
*/

const form = document.querySelector("form");

//TODO
//form must be its own object that inherits some sort of boolean returning
//  function that every input field associated function must expose
//
//if all those functions return true, we submit the form
//  else we do not submit by preventing the event

const formObject = (() => {
  const formSubmitButton = document.getElementById("submitButton");
  formSubmitButton.addEventListener("click", () => {
    if (checkAllValids()) {
      alert("Everything was filled in properly!");
    } else {
      alert("Bad form submission attempt!");
      event.preventDefault();
    }
  });

  const checkAllValids = () => {
    const emailInput = document.getElementById("email");
    const countryInput = document.getElementById("country");
    const zipcodeInput = document.getElementById("zipcode");
    const passConfirmInput = document.getElementById("passwordConfirm");

    if (
      emailInput.validity.valid &&
      countryInput.validity.valid &&
      zipcodeInput.validity.valid &&
      !passConfirmInput.classList.contains("invalid")
    )
      return true;
    else return false;
  };
})();

const emailObject = (() => {
  const emailInput = document.getElementById("email");
  const emailError = document.querySelector("#email + span.error");
  emailInput.addEventListener("input", (event) => {
    if (emailInput.validity.valid) {
      //clear error text content if valid
      emailError.textContent = "";
      emailError.className = "error";
    } else {
      printEmailError();
      //don't let the form submit if we have errors
      event.preventDefault();
    }
  });

  const printEmailError = () => {
    if (emailInput.validity.valueMissing) {
      emailError.textContent = "You need to enter an email address!";
    } else if (emailInput.validity.typeMismatch) {
      emailError.textContent = "Entered value needs to be an email!";
    } else if (emailInput.validity.tooShort) {
      emailError.textContent = `Email should be at least ${emailInput.minLength} characters; you entered ${emailInput.value.length}.`;
    }
    emailError.className = "error active";
  };
})();

const passConfirmObject = (() => {
  const passInput = document.getElementById("password");
  const passConfirmInput = document.getElementById("passwordConfirm");

  const confirmError = document.querySelector("#passwordConfirm + span.error");

  passConfirmInput.addEventListener("blur", (event) => {
    if (matchChecker()) {
      confirmError.textContent = "";
      passConfirmInput.className = "valid";
      confirmError.className = "error";
    } else {
      passConfirmInput.className = "invalid";
      printMismatchError();
      event.preventDefault;
    }
  });

  const matchChecker = () => {
    if (passInput.value !== passConfirmInput.value) {
      return false;
    } else return true;
  };

  const printMismatchError = () => {
    confirmError.textContent = "Passwords do not match!";
    confirmError.className = "error active";
  };
})();

const checkZipcode = () => {
  const zipcodeInput = document.getElementById("zipcode");
};
