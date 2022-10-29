const ms = 86100000;
// console.log(ms);

let dates = parseInt(new Date().getDate());
let months = parseInt(new Date().getMonth() + 1);
let years = parseInt(new Date().getFullYear());
let a = (dates, "+", months, "+", years);
// console.log(dates, months, years);

let user_date = prompt("Enter your Date of birth(DD-MM-YYYY):").toString();
let user_date_day = parseInt(user_date.slice(0, 2));
let user_date_month = parseInt(user_date.slice(3, 5));
let user_date_year = parseInt(user_date.slice(6, 10));

//  let d = Math.abs(dates - user_date_day);
//  let m = Math.abs(months - user_date_month);
//  let y = Math.abs(years - user_date_year);

//  console.log(d,m,y);

var calc =
  (new Date() - new Date(user_date_year, user_date_month, user_date_day)) / ms;
console.log(Math.abs(calc.toFixed())-1);

//   console.log("updated: "+new Date(years-months-dates));
