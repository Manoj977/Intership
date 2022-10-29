let num = parseInt(prompt("Enter a day number from (1 to 7)"));

switch (num) {
  case 1:
    alert(num + " Monday");
    break;
  case 2:
    alert(num + " Tuesday");
    break;
  case 3:
    alert(num + " Wednesday");
    break;
  case 4:
    alert(num + " Thursday");
    break;
  case 5:
    alert(num + " Friday");
    break;
  case 6:
    alert(num + " Saturday");
    break;
  case 7:
    alert(num + "Sunday");
    break;
  default:
    alert("Incorrect number");
    break;
}
