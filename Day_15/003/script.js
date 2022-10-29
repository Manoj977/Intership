var result,
  n = [],
  positive = 0,
  negative = 0,
  odd = 0,
  even = 0,
  zero = 0,
  total=20;
for (var i = 0; i < 20; i++) {
  var a = i + 1;
  var number = parseInt(prompt("Enter your " + a + " number"));
  n.push(number);
}

for (var i = 0; i < total; i++) {
  // if (n.includes(NaN) == false) {
  if (n[i] < 0) ++negative;
  // } else {
  //   n.find((notavl) => notavl == NaN);
  //   var not = n.indexOf(NaN);
  //   console.log("number is not available in" + n + "th number");
  // }
}
for (var i = 0; i < total; i++) {
  // if (n.includes(NaN) == false) {
  if (n[i] > 0) ++positive;
  // } else {
  //   n.find((notavl) => notavl == NaN);
  //   var not = n.indexOf(NaN);
  //   console.log("number is not available in" + n + "th number");
  // }
}
for (var i = 0; i < total; i++) {
  // if (n.includes(NaN) == false) {
  if (n[i] == 0) ++zero;
  // } else {
  //   n.find((notavl) => notavl == NaN);
  //   var not = n.indexOf(NaN);
  //   console.log("number is not available in" + n + "th number");
  // }
}
for (var i = 0; i < total; i++) {
  // if (n.includes(NaN) == false) {
  if (n[i] % 2 == 0) ++even;
  // } else {
  //   n.find((notavl) => notavl == NaN);
  //   var not = n.indexOf(NaN);
  //   console.log("number is not available in" + n + "th number");
  // }
}
for (var i = 0; i < total; i++) {
  // if (n.includes(NaN) == false) {
  if (n[i] % 2 != 0) ++odd;
  // } else {
  //   n.find((notavl) => notavl == NaN);
  //   var not = n.indexOf(NaN);
  //   console.log("number is not available in" + n + "th number");
  // }
}

console.log("Your Entered Digits are: " + n);
console.log("no.of.-ve numbers are: " + negative);
console.log("no.of.+ ve numbers are: " + positive);
console.log("no.of.zeros: " + zero);
console.log("no.of.odd numbers: " + odd);
console.log("no.of.even numbers: " + even);
