const guessInput = document.getElementById("guess");
const sumbmitBtn = document.getElementById("submit");

const result = document.getElementById("result");
let target = Math.floor(Math.random() * 100) + 1; //34
sumbmitBtn.addEventListener("click", () => {
  let guess = parseInt(guessInput.value);
  if (guess === target) {
    result.textContent = "You win!The number was " + target;
    target = Math.floor(Math.random() * 100) + 1; //56
  } else if (guess < target) {
    result.textContent = "Too low";
  } else {
    result.textContent = "Too High";
  }
});
