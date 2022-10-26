//01 EB Bill Calculation:

var ebReadingValue = prompt("Enter Your EB reading");

if (ebReadingValue <= 0 || ebReadingValue > 1001) {
  alert("Incorrect Value Try again");
}

if (ebReadingValue > 0 && ebReadingValue <= 100) {
  alert("You Need not to Pay any Fees");
}

if (ebReadingValue >= 101 && ebReadingValue <= 250) {
  var reading = 5 * (ebReadingValue - 150) + 100 * 0;
  alert("You Need to Pay: " + reading);
}

if (ebReadingValue >= 251 && ebReadingValue <= 500) {
  var reading = 8 * (ebReadingValue - 250) + 100 * 0 + 150 * 5;
  alert("You Need to Pay: " + reading);
}

if (ebReadingValue >= 501 && ebReadingValue <= 750) {
  var reading = 10 * (ebReadingValue - 500) + 100 * 0 + 150 * 5 + 250 * 8;
  alert("You Need to Pay: " + reading);
}

if (ebReadingValue >= 750 && ebReadingValue <= 1000) {
  var reading =
    13 * (ebReadingValue - 750) + 100 * 0 + 150 * 5 + 250 * 8 + 500 * 10;
  alert("You Need to Pay: " + reading);
}
