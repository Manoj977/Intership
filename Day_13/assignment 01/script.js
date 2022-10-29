//01 EB Bill Calculation:

var ebReadingValue = prompt("Enter Your EB reading");

if (ebReadingValue <= 0 || ebReadingValue > 1001) {
  alert("Incorrect Value Try again");
}

if (ebReadingValue > 0 && ebReadingValue <= 100) {
  alert("You Need not to Pay any Fees");
}

if (ebReadingValue >= 101 && ebReadingValue <= 250) {
  if (ebReadingValue <= 150) {
    var reading = 5 * (ebReadingValue - 100);
    alert("You Need to Pay: " + reading);
  }
  if (ebReadingValue <= 250) {
    var reading = 5 * (ebReadingValue - 150);
    alert("You Need to Pay: " + reading);
  }
}

if (ebReadingValue >= 251 && ebReadingValue <= 500) {
  if (ebReadingValue <= 250) {
    var reading = 8 * (ebReadingValue - 100) + 150 * 5;
    alert("You Need to Pay: " + reading);
  }
  if (ebReadingValue <= 500) {
    var reading = 8 * (ebReadingValue - 250) + 150 * 5;
    alert("You Need to Pay: " + reading);
  }
}

if (ebReadingValue >= 501 && ebReadingValue <= 750) {
  if (ebReadingValue <= 500) {
    var reading = 10 * (ebReadingValue - 100) + 150 * 5 + 250 * 8;
    alert("You Need to Pay: " + reading);
  }
  if (ebReadingValue <= 750) {
    var reading = 10 * (ebReadingValue - 500) + 150 * 5 + 250 * 8;
    alert("You Need to Pay: " + reading);
  }
}

if (ebReadingValue >= 750 && ebReadingValue <= 1000) {
  if (ebReadingValue <= 750) {
    var reading = 13 * (ebReadingValue - 100) + 150 * 5 + 250 * 8 + 500 * 10;
    alert("You Need to Pay: " + reading);
  }
  if (ebReadingValue <= 1000) {
    var reading = 13 * (ebReadingValue - 750) + 150 * 5 + 250 * 8 + 500 * 10;
    alert("You Need to Pay: " + reading);
  }
}
