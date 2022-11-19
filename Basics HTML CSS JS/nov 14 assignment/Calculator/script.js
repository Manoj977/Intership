let one = () => (document.calc.textBox.value += "1");
let two = () => (document.calc.textBox.value += "2");

let three = () => (document.calc.textBox.value += "3");

let four = () => (document.calc.textBox.value += "4");

let five = () => (document.calc.textBox.value += "5");

let six = () => (document.calc.textBox.value += "6");

let seven = () => (document.calc.textBox.value += "7");

let eight = () => (document.calc.textBox.value += "8");

let nine = () => (document.calc.textBox.value += "9");

let zero = () => (document.calc.textBox.value += "0");
let deci = () => (document.calc.textBox.value += ".");
let calucation = () => {
  let textBoxValue = document.calc.textBox.value;

  if (
    textBoxValue == "+" ||
    textBoxValue == "-" ||
    textBoxValue == "*" ||
    textBoxValue == "/"
  ) {
    document.calc.textBox.value = "";
  }
  
};
let addnum = () => {
  document.calc.textBox.value += "+";
  calucation();
};
let subnum = () => {
  document.calc.textBox.value += "-";
  calucation();
};

let mulnum = () => {
  document.calc.textBox.value += "*";
  calucation();
};

let divnum = () => {
  document.calc.textBox.value += "/";
  calucation();
};

let clearscreen = () => (document.calc.textBox.value = "");

let myfunc = () => {
  let result = eval(document.calc.textBox.value);
  if (!isNaN(result)) {
    document.calc.textBox.value = result;
  }
  return;
};
