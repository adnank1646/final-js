```
## PROJECT 3 Solution Code

```JAVASCRIPT
const clock = document.getElementById('clock');
//document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);



```project BACKGROUNDCHANGER

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});



```BMI CALCULATOR ``` 



const form = document.querySelector('form');
//this usecase will give you empty
//const weight = parseInt(document.querySelector(#weight).value);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const condition = document.querySelector('#condition');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      condition.innerHTML = 'Under-Weight';
    }
    if (bmi < 18.6) {
      condition.innerHTML = 'Under-Weight';
    }
    if (bmi >= 18.6 && bmi <= 24.9) {
      condition.innerHTML = 'Normal-Range';
    }
    if (bmi > 24.9) {
      condition.innerHTML = 'Over-Weight';
    }
  }
});


```CLOCK PROJECT 3```
const clock = document.getElementById('clock');
// document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);



```PROJECT-04```
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessages(`Game Over, Random no. was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //check guess equal high or low
  if (guess === randomNumber) {
    displayMessages(`Your guess is correct`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessages(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessages(`Number is too high`);
  }
}

function displayGuess(guess) {
  //
  userInput.value = '';
  guessSlot.innerHTML += `${guess},`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessages(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
