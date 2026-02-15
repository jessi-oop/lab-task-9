const door1 = document.getElementById("door-1");
const door2 = document.getElementById("door-2");
const door3 = document.getElementById("door-3");

const modal = new bootstrap.Modal(document.getElementById("modal-result"));
const modalTitle = document.getElementById("modal-title");
const modalMessage = document.getElementById("modal-message");

let correctDoor = Math.floor(Math.random() * 3) + 1;

door1.addEventListener("click", () => checkDoor(1));
door2.addEventListener("click", () => checkDoor(2));
door3.addEventListener("click", () => checkDoor(3));

function checkDoor(doorNumber) {
  if (doorNumber === correctDoor) {
    modalTitle.innerText = "You survived.";
    modalMessage.innerText = "You have escaped deaths clutches. Rejoice.";

    modal.show();

    correctDoor = Math.floor(Math.random() * 3) + 1;
  } else {
    modalTitle.innerText = "You have fallen.";
    modalMessage.innerText = "Succumb to deaths embrace.";

    modal.show();
  }
}
