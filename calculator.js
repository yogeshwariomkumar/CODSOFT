let displayValue = '';
let extraDisplayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  extraDisplayValue = '';
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(displayValue);
    extraDisplayValue = displayValue + ' = ' + result.toString();
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    extraDisplayValue = '';
    updateDisplay();
  }
}

function deleteLastCharacter() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function performExtraFunction() {
  // Implement your extra functionality here
  // For demonstration, let's just clear the extra display
  extraDisplayValue = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
  document.getElementById('extra-display').innerText = extraDisplayValue;
}
