function generateRandomNumber() {
  let x = Math.floor(Math.random() * 100) + 1;
  console.log("generated", x);
  return x; // random number between 1 and 100
}

function celciusToFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

module.exports = { generateRandomNumber, celciusToFahrenheit };
