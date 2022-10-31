var fullName = document.getElementById("Name");
var userName = document.getElementById("UserName");
var emailId = document.getElementById("email");
var passWord = document.getElementById("Password");
var cnfmPass = document.getElementById("cnfmpass");
var form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var catcher = [];

  if (fullName.value == "") {
    catcher.push("Enter your Full name");
  }
  if (userName.value == "") {
    catcher.push("Enter your User name");
  }
  if (emailId.value == "") {
    catcher.push("Enter your EmailId");
  }
  if (passWord.value == "") {
    catcher.push("Enter your Password");
  }
  if (cnfmPass.value == "") {
    catcher.push("Enter you Confirm Password");
  }
  if (
    fullName.value != "" &&
    userName.value != "" &&
    emailId.value != "" &&
    passWord.value != "" &&
    cnfmPass.value != ""
  ) {
    alert("Registered SuccessFully");
    clearfield();
  }

  var message = document.getElementById("message");
  message.innerHTML = catcher;
});

clearfield = () => {
  fullName.value = "";
  userName.value = "";
  emailId.value = "";
  passWord.value = "";
  cnfmPass.value = "";
};

clears = () => {
  var message = document.getElementById("message");
  message.innerHTML = "";
};
