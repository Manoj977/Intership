var number = parseInt(prompt("Enter a number to find its prime or not"));
console.log(number);
var prime = 0;
if (number > 0) {
  for (var i = 2; i < number/2; i++) {
    if (number % i == 0) {
      prime++;
    }
  }
  if (prime == 0) {
    alert(number+" Its Prime Number ");
  } else {
    alert(number+" Its not a prime number ");
  }
} else {
  console.log("err");
}
