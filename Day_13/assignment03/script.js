//03 Write a program to check if the given year is leap year or not:

var leapyear = prompt("Enter the Year");
if ((leapyear % 4 == 0  && leapyear % 100 != 0) || leapyear % 400 == 0){
        alert(leapyear + " is Leap year");
      }
else {
  alert(leapyear + " is not a Leap year");
}

