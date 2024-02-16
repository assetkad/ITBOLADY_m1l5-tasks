function showPyramid() {
  const number = parseInt(document.getElementById('numberInput').value);
  const symbol = document.getElementById('symbolInput').value || '#';

  const pyramid = buildPyramid(number, symbol);
  document.getElementById('pyramidContainer').innerHTML =
    '<pre>' + pyramid + '</pre>';
}

function buildPyramid(number, symbol = '#') {
  if (number <= 0 || !Number.isInteger(number)) {
    throw new Error('Сумма не должна быть равна нулю или ниже нуля');
  }

  if (symbol.length > 1) {
    alert('Можно ввести только один символ');
    return '';
  }

  if (number % 2 == 0) number -= 1;

  let str = '';
  let spaces = Math.floor(number / 2);

  for (let i = 1; i <= number; i += 2) {
    const row = ' '.repeat(spaces) + symbol.repeat(i) + '\n';
    str += row;
    spaces--;
  }

  return str;
}
