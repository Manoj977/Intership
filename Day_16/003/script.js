var number = parseInt(prompt("Enter a number to find its prime or not"));
console.log(number);
var prime = 0;
if (number > 0) {
  for (var i = 2; i <= number; i++) {
    if (number % 2 == 0) {
      prime++;
    }
  }
  if (prime == 0) {
    console.log(number+" Its Prime Number ");
  } else {
    console.log(number+" Its not a prime number ");
  }
} else {
  console.log("err");
}
