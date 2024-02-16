let secretNumber;
let attempts = 0;

function startGame() {
  const min = parseInt(document.getElementById('minNumber').value);
  const max = parseInt(document.getElementById('maxNumber').value);

  if (isNaN(min) || isNaN(max) || min >= max) {
    alert('Неверно задан диапазон чисел');
    return;
  }

  secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  attempts = 0;

  document.getElementById('output').innerHTML = '';
}

function checkGuess() {
  const guess = parseInt(document.getElementById('guessField').value);

  if (isNaN(guess)) {
    alert('Пожалуйста, введите число.');
    return;
  }

  attempts++;

  const range =
    parseInt(document.getElementById('maxNumber').value) -
    parseInt(document.getElementById('minNumber').value);
  const difference = Math.abs(secretNumber - guess);
  const percentDifference = (difference / range) * 100;
  let message;

  if (percentDifference === 0) {
    message = `Поздравляем! Вы угадали число ${secretNumber} за ${attempts} попыток.`;
  } else if (percentDifference <= 10) {
    message = 'Горячо!';
  } else if (percentDifference <= 20) {
    message = 'Тепло.';
  } else if (percentDifference <= 30) {
    message = 'Прохладно.';
  } else {
    message = 'Холодно.';
  }

  document.getElementById('output').innerHTML = message;
}
