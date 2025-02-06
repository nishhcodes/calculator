let operator = '';
let previousValue = '';
let currentValue = '';

const screenDigits = document.querySelector('.screen-digits');
const operatorSymbol = document.querySelector('.operator-sign');
const clearBtn = document.querySelector('.clear');
const digits = document.querySelectorAll('.numbers');
const operatorBtn = document.querySelectorAll('.operators');
const equals = document.querySelector('.equals');

// Clear everything
clearBtn.addEventListener('click', () => {
  operator = '';
  previousValue = '';
  currentValue = '';
  operatorSymbol.textContent = '';
  screenDigits.textContent = '';
});

// Handle digit input
digits.forEach(button => {
  button.addEventListener('click', () => {
    if (operator === '' && previousValue !== '') {
      // New calculation after result
      screenDigits.textContent = '';
      previousValue = '';
    }
    screenDigits.textContent += button.textContent;
  });
});

// Handle operator input
operatorBtn.forEach(op => {
  op.addEventListener('click', () => {
    if (screenDigits.textContent === '') return; // Prevent empty operand
    
    operator = op.textContent;
    operatorSymbol.textContent = operator;
    previousValue = screenDigits.textContent;
    screenDigits.textContent = '';
  });
});

// Handle equals
equals.addEventListener('click', () => {
  if (!operator || !previousValue) return; // No operation requested
  
  currentValue = screenDigits.textContent;
  if (currentValue === '') return; // Second operand missing
  
  const num1 = parseFloat(previousValue);
  const num2 = parseFloat(currentValue);
  
  if (isNaN(num1) || isNaN(num2)) {
    screenDigits.textContent = 'Error';
    return;
  }

  const result = calculate(num1, num2);
  
  screenDigits.textContent = result;
  previousValue = result.toString(); // Allow chaining
  operator = '';
  operatorSymbol.textContent = '';
});

// Calculation logic
function calculate(num1, num2) {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case 'x': return num1 * num2;
    case '/': 
      return num2 === 0 ? 'Error' : num1 / num2;
    default: return 'Error';
  }
}