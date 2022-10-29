//02 Write a program to allow only kids who are under 10 years inside the park:

var child_age = prompt("Enter Child Age:");

if (child_age > 0 && child_age <= 10) {
  alert("Welcome to the park 🎋");
} else {
  alert("Sorry you are not allowded to park 😔");
}
