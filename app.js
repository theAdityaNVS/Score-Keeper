// const p1Button = document.querySelector("#p1Button");
// const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#resetButton");
// const p1Display = document.querySelector("#p1Display");
// const p2Display = document.querySelector("#p2Display");
const scoreSelect = document.querySelector("#limit");

const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

const players = [p1, p2];

// let p1Score = 0;
// let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      disabler();
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener("click", function () {
  updateScores(p1, p2);
});
p2.button.addEventListener("click", function () {
  updateScores(p2, p1);
});

// p1Button.addEventListener("click", function () {
//   if (!isGameOver) {
//     p1Score += 1;
//     if (p1Score === winningScore) {
//       isGameOver = true;
//       p1Display.classList.add("has-text-success");
//       p2Display.classList.add("has-text-danger");
//       disabler();
//     }
//     p1Display.textContent = p1Score;
//   }
// });

// p2Button.addEventListener("click", function () {
//   if (!isGameOver) {
//     p2Score += 1;
//     if (p2Score === winningScore) {
//       isGameOver = true;
//       p2Display.classList.add("has-text-success");
//       p1Display.classList.add("has-text-danger");
//       disabler();
//     }
//     p2Display.textContent = p2Score;
//   }
// });

scoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  resetter();
});

// function disabler() {
//   p1Button.disabled = true;
//   p2Button.disabled = true;
// }

function disabler() {
  p1.button.disabled = true;
  p2.button.disabled = true;
}

function enabler() {
  p1.button.disabled = false;
  p2.button.disabled = false;
}

resetButton.addEventListener("click", resetter);

// function resetter() {
//   p1Score = 0;
//   p2Score = 0;
//   p1Display.textContent = p1Score;
//   p2Display.textContent = p2Score;
//   isGameOver = false;

//   p2Display.classList.remove("has-text-success", "has-text-danger");
//   p1Display.classList.remove("has-text-success", "has-text-danger");
// }

function resetter() {
  isGameOver = false;
  for (let p of players) {
    p.score = 0;
    p.display.textContent = p.score;
    p.display.classList.remove("has-text-success", "has-text-danger");
  }
  enabler();
}
