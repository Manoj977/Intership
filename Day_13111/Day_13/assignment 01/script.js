//01 EB Bill Calculation:

var ebReadingValue = prompt("Enter Your EB reading");

if ((ebReadingValue > 0)&&(ebReadingValue <= 100)){
    alert("You Need not to Pay any Fees");
}
else if ((ebReadingValue >= 101)&&(ebReadingValue <= 250)){
    var reading=ebReadingValue * 5;
    alert("You Need to Pay: "+reading);
}
else if ((ebReadingValue >= 251)&&(ebReadingValue <= 500)){
    var reading=ebReadingValue * 8;
    alert("You Need to Pay: "+reading);
}
else if ((ebReadingValue >= 501)&&(ebReadingValue <= 750)){
    var reading=ebReadingValue * 10;
    alert("You Need to Pay: "+reading);
}
else if ((ebReadingValue >= 751)&&(ebReadingValue <= 1000)){
    var reading=ebReadingValue * 13;
    alert("You Need to Pay: "+reading);
}   else if ((ebReadingValue <= 0)||(ebReadingValue > 1001)){
    alert("Incorrect Value Try again")
}



