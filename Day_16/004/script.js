var value1 = parseInt(prompt("Enter a Value One:"));
var value2 = parseInt(prompt("Enter a value Two"));
var add = 0,
  sub = 0,
  mul = 0,
  div = 0,
  mol = 0,
  count = 0;
do {
  add = value1 + value2;
  console.log(
    "Addition of two values " + value1 + " and " + value2 + " are: " + add
  );
  sub = value1 - value2;
  console.log(
    "Subraction of two values " + value1 + " and " + value2 + " are: " + sub
  );
  mul = value1 * value2;
  console.log(
    "Multiplication of two values " + value1 + " and " + value2 + " are: " + mul
  );
  div = value1 / value2;
  console.log(
    "Division of two values " +
      value1 +
      " and " +
      value2 +
      " are: " +
      div.toFixed(2)
  );
  mol = value1 % value2;
  console.log(
    "Modulo of two values " + value1 + " and " + value2 + " are: " + mol
  );
  count++;
} while (count == 0);
