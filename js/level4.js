const nameInput = document.getElementById("character-name");
const submitButton = document.getElementById("submit-name-btn");
const validationMessage = document.getElementById("validation-message");

submitButton.addEventListener("click", function () {
  const namevalue = nameInput.value.trim();

  if (namevalue === "") {
    validationMessage.textContent = "Error! Name is required!";
    validationMessage.style.color = "#FF0000";
    return;
  }

  validationMessage.textContent =
    "Character has been recorded in the annals of history.";

  validationMessage.style.color = "#008000 ";
});
