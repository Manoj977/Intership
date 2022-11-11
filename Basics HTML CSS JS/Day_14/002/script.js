var number = parseInt(
  prompt("Enter a number to check it's positive or negative")
);
if (number > 0) {
  alert(number + " Is Positive");
} else if (number < 0) {
  alert(number + " Is Negative");
} else {
  alert("it's Zero");
}
