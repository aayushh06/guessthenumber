'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='Correct Number!';
// // console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;

// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent =
      'No Number! Please Enter a number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.highscore').textContent = score;
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#00FF7F';
    document.querySelector('.number').style.width = ' 50rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Tooo High!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (score === 0) {
      document.querySelector('.message').textContent = 'You lose the game!';
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Tooo Loww!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (score === 0) {
      document.querySelector('.message').textContent = 'You lose the game!';
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '? ';
  document.querySelector('.guess').value = '';
});
