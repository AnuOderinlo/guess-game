'use strict';

/* Algorithmn */

/* CHECK FUNCTION
1. check if the input is not empty
2. If yes, update the content to No number
4. Get the value of the input
3. Display the a guess number btw 1- 20 in the ? field
5. check if the input value is less than or greater than the guessed number
6. if less than, update message to "Too Lower"
7. if Greater than, update message to "Too High"
8. if less or greater, minus the score by 1
8. if it is equal to the guessed number, game over. 
    a. change the background color to Green
    b. display the input value to the ?
    c. update the highscore to the present score.
*/

// Get elements
const check = document.querySelector('.check');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const number = document.querySelector('.number');
const again = document.querySelector('.again');
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
scoreEl.textContent = score;

function updateScore() {
  score--;
  scoreEl.textContent = score;
}

function displayMessage(msg) {
  message.textContent = msg;
}

check.addEventListener('click', e => {
  e.preventDefault();
  let guessValue = +guess.value;

  if (!guessValue) {
    displayMessage('⛔ No number');
  } else if (guessValue !== secretNumber) {
    if (score > 1) {
      displayMessage(guessValue > secretNumber ? '💥 Too high' : '💥 Too low');
      updateScore();
    } else {
      score = 0;
      scoreEl.textContent = score;
      message.textContent = "💥 You've lost the game";
    }
  }

  if (guessValue === secretNumber) {
    message.textContent = 'Correct number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.textContent = secretNumber;
    highscore.textContent = score;
  }
});
console.log(secretNumber);

/*
AGAIN function

1. Change background to default black
2. update score back to default 20
3. update message to default message
4. update guess number to ?;

*/
again.addEventListener('click', () => {
  scoreEl.textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  message.textContent = 'Start guessing...';
  number.textContent = '?';
  guess.value = '';
  console.log(score);
});
