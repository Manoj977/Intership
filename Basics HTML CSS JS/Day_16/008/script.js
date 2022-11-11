var grade = "";
function userDetails() {
  var id = parseInt(document.gradecalculation.Id.value);
  console.log("id: " + id);
  var name = document.gradecalculation.Name.value;
  console.log("name: " + name);
  var english = parseInt(document.gradecalculation.English.value);
  console.log("english: " + english);
  var tamil = parseInt(document.gradecalculation.Tamil.value);
  console.log("tamil:" + tamil);
  var maths = parseInt(document.gradecalculation.Maths.value);
  console.log("maths: " + maths);
  var science = parseInt(document.gradecalculation.Science.value);
  console.log("science: " + science);
  var social = parseInt(document.gradecalculation.Social.value);
  console.log("social: " + social);
  var average = (english + tamil + maths + science + social) / 5;
  document.getElementById("Average").innerHTML = average;

  ////////////////////////////////////////////////////////////////////
  let calculation = (grade) =>
    (document.getElementById("Grade").innerHTML = grade);
  ///////////////////////////////////////////////////////////////////

  if (average >= 90 && average <= 100) {
    grade = "A";
    calculation(grade);
  } else if (average >= 80 && average < 90) {
    grade = "B";
    calculation(grade);
  } else if (average >= 70 && average < 80) {
    grade = "C";
    calculation(grade);
  } else if (average >= 60 && average < 70) {
    grade = "D";
    calculation(grade);
  } else if (average >= 0 && average < 60) {
    grade = "F";
    calculation(grade);
  }
}

function resete() {
  document.getElementById("Average").innerHTML = "";
  document.getElementById("Grade").innerHTML = "";
}
