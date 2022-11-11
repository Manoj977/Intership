// //01 EB Bill Calculation:

var ebReadingValue = prompt("Enter Your EB reading");

var ebUnits = ebReadingValue - 100;
var ebcalc = 0;

if (ebReadingValue <= 0 || ebReadingValue > 1001) {
  alert("Incorrect Value Try again");
}

 if (ebUnits < 150) {
  ebcalc = ebUnits * 5;
  console.log(ebcalc);
} else if (ebUnits < 400) {
  ebcalc = 150 * 5 + (ebUnits - 150) * 8;
  console.log(ebcalc);
} else if (ebUnits < 650) {
  ebcalc = 150 * 5 + 250 * 8 + (ebUnits - 400) * 10;
  console.log(ebcalc);
} else if (ebUnits < 900) {
  ebcalc = 150 * 5 + 250 * 8 + 250 * 10 + (ebUnits - 650) * 13;
  console.log(ebcalc);
}
