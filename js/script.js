const errorMessage = document.getElementById("error-message");
const email = document.getElementById("email");
const button = document.getElementById("button");
const signUp = document.getElementById("sign-up");
const successBox = document.getElementById("success-box");
const dismissMessageBtn = document.getElementById("dismiss-message");

button.addEventListener("click", () => {
  const emailValue = email.value;

  let value = emailValue.split("").some((word) => {
    if (word !== "@") {
      return false;
    } else {
      return true;
    }
  });

  if (emailValue === "") {
    errorMessage.textContent = "Valid email required";
    email.style.backgroundColor = "hsla(4, 100%, 67%, 0.1)";
  } else if (value === false) {
    errorMessage.textContent = "Valid email required";
  } else {
    errorMessage.textContent = "";
    email.value = "";
    successBox.style.display = "flex";
    signUp.style.display = "none";
  }
});

dismissMessageBtn.addEventListener("click", () => {
  successBox.style.display = "none";
  signUp.style.display = "flex";
});
