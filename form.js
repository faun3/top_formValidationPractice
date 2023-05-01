/*
all validation must occur in this javascript file
*/

const form = document.querySelector("form");

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

const checkZipcode = () => {
  const zipcodeInput = document.getElementById("zipcode");
};
