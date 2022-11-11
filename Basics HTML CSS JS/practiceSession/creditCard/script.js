const expirationMonth = document.querySelector("[data-expiration-month]");
console.log(expirationMonth);
for (let i = 1; i <= 12; i++) {
  const option = document.createElement("option");
  option.innerText = i;
  if (option.innerText < 10) {
    option.innerText = "0" + option.innerText;
  }
  expirationMonth.append(option);
}
const expirationYear = document.querySelector("[data-expiration-year]");
const currentYear = new Date().getFullYear();
for (let i = currentYear; i < currentYear + 10; i++) {
  const option = document.createElement("option");
  option.innerText = i;
  expirationYear.append(option);
}
document.addEventListener("keydown", (e) => {
  const inputKey = e.target;
  const keyPress = e.key;
  if (!isConnectedInput(inputKey)) return;
  console.log("selectionStart: " + inputKey.selectionStart);
  console.log("selectionEnd: " + inputKey.selectionEnd);
  switch (keyPress) {
    case "ArrowLeft": {
      if (inputKey.selectionStart === 0 && inputKey.selectionEnd === 0) {
        const previous = inputKey.previousElementSibling;
        previous.focus();
        previous.selectionStart = previous.value.length - 1;
        previous.selectionEnd = previous.value.length - 1;
        previous.preventDefault();
      }
      break;
    }
    case "ArrowRight": {
      if (
        inputKey.selectionStart === inputKey.value.length &&
        inputKey.selectionEnd === inputKey.value.length
      ) {
        const next = inputKey.nextElementSibling;
        next.focus();
        next.selectionStart = 1;
        next.selectionEnd = 1;
        next.preventDefault();
      }
      break;
    }
    case "Delete": {
      if (
        inputKey.selectionStart === inputKey.value.length &&
        inputKey.selectionEnd === inputKey.value.length
      ) {
        const next = inputKey.nextElementSibling;
        next.value = next.value.substring(1, next.value.length);
        next.focus();
        next.selectionStart = 0;
        next.selectionEnd = 0;
        e.preventDefault();
      }
      break;
    }
    case "Backspace": {
      if (inputKey.selectionStart === 0 && inputKey.selectionEnd === 0) {
        const prev = inputKey.previousElementSibling;
        prev.value = prev.value.substring(0, prev.value.length - 1);
        prev.focus();
        prev.selectionStart = prev.value.length;
        prev.selectionEnd = prev.value.length;
        e.preventDefault();
      }
      break;
    }
    default: {
      if (e.ctrlKey || e.altKey) return; // to prevent copy and paste
      if (keyPress.length > 1) return;
      if (keyPress.match(/^[^0-9]$/)) return e.preventDefault(); //type only a number from 0-9
      e.preventDefault();
      onInputValueChange(inputKey, keyPress);
    }
  }
});
function onInputValueChange(input, newValue) {
  const start = input.selectionStart;
  console.log("start: " + start);
  const end = input.selectionEnd;
  updateInputValue(input, newValue, start, end);
  focusInput(input, newValue.length + start);
  const firstFour = input
    .closest("[data-connected-inputs]")
    .querySelector("input").value;
  if (firstFour.startsWith("4")) {
    logo.src = "visa.svg";
  } else if (firstFour.startsWith("5")) {
    logo.src = "maestro.svg";
  } else if (firstFour.startsWith("6")) {
    logo.src = "rupay.svg";
  } else if (firstFour.startsWith("8")) {
    logo.src = "discover_logo.svg";
  }
}
function updateInputValue(input, extraValue, start = 0, end = 0) {
  const newValue = `${input.value.substring(
    0,
    start
  )}${extraValue}${input.value.substring(end, 4)}`;
  input.value = newValue.substring(0, 4);
  if (newValue > 4) {
    const next = input.nextElementSibling;
    if (next == null) return;
    updateInputValue(next, newValue.substring(4));
  }
}
function focusInput(input, dataLength) {
  let currentInput = input;
  let addedCharts = dataLength;
  while (addedCharts > 4 && currentInput.nextElementSibling != null) {
    addedCharts -= 4;
    console.log("addedCharts: " + addedCharts);
    currentInput = currentInput.nextElementSibling;
  }
  if (addedCharts > 4) addedCharts = 4;
  currentInput.focus();
  currentInput.selectionStart = addedCharts;
  currentInput.selectionEnd = addedCharts;
}
function isConnectedInput(userInput) {
  const parent = userInput.closest("[data-connected-inputs]");
  return userInput.matches("input") && parent != null;
}
