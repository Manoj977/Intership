var result,
  n = [],
  positive = 0,
  negative = 0,
  odd = 0,
  even = 0,
  zero = 0,
  total = 20;

// for (var i = 0; i < 20; i++) {
//   var a = i + 1;
//   var number = parseInt(prompt("Enter your " + a + " number"));
//   n.push(number);
// }
var number = prompt("Enter 20 Numbers");
var arrayReturn = (values) => Number(values);
n = Array.from(number, arrayReturn);
if (n.length == 20) {
  for (var i = 0; i < total; i++) {
    if (n[i] < 0) ++negative;
  }
  for (var i = 0; i < total; i++) {
    if (n[i] > 0) ++positive;
  }
  for (var i = 0; i < total; i++) {
    if (n[i] == 0) ++zero;
  }
  for (var i = 0; i < total; i++) {
    if (n[i] % 2 == 0) ++even;
  }
  for (var i = 0; i < total; i++) {
    if (n[i] % 2 != 0) ++odd;
  }
  console.log("Your Entered Digits are: " + n);
  document.getElementById("total").innerHTML = n;
  console.log("no.of.-ve numbers are: " + negative);
  document.getElementById("negative").innerHTML = negative;
  console.log("no.of.+ ve numbers are: " + positive);
  document.getElementById("positive").innerHTML = positive;
  console.log("no.of.zeros: " + zero);
  document.getElementById("zeros").innerHTML = zero;
  console.log("no.of.odd numbers: " + odd);
  document.getElementById("odd").innerHTML = odd;
  console.log("no.of.even numbers: " + even);
  document.getElementById("even").innerHTML = even;
} else if (n.length < 20) {
  document.getElementById("total").innerHTML =
    "Your Entered Digits are lesser than 20";
}
else if (n.length > 20) {
  document.getElementById("total").innerHTML =
    "Your Entered Digits are Greater than 20";
}