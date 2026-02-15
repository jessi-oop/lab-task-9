const displayCoin = document.getElementById("display-coin-count");
const increaseCoins = document.getElementById("increase-coins-btn");
const decreaseCoins = document.getElementById("decrease-coins-btn");

let counter = 0;

increaseCoins.addEventListener("click", function () {
  counter++;

  displayCoin.textContent = `Coins: ${counter}`;
});

decreaseCoins.addEventListener("click", function () {
  if (counter === 0) {
    return;
  }

  counter--;

  displayCoin.textContent = `Coins: ${counter}`;
});
