let operator = '';
let previousValue = '';
let currentValue = '';

const screenDigits = document.querySelector('.screen-digits');
const operatorSymbol = document.querySelector('.operator-sign');
const clearBtn = document.querySelector('.clear');
const digits = document.querySelectorAll('.numbers');
const operatorBtn = document.querySelectorAll('.operators');
const equals = document.querySelector('.equals');

clearBtn.addEventListener('click', () => {
  operator = '';
  previousValue = '';
  currentValue = '';
  operatorSymbol.textContent = '';
  screenDigits.textContent = '';
});

digits.forEach(button => {
  button.addEventListener('click', () => {

    if (operator === '' && previousValue !== '') {
      
      screenDigits.textContent = '';
      previousValue = '';
    }
    if (screenDigits.textContent.length < 5) { 
        screenDigits.textContent += button.textContent;
      }  
    });
});

operatorBtn.forEach(op => {
  op.addEventListener('click', () => {
    if (screenDigits.textContent === '') return; 

    operator = op.textContent;
    operatorSymbol.textContent = operator;
    previousValue = screenDigits.textContent;
    screenDigits.textContent = '';
  });
});

equals.addEventListener('click', () => {
  if (!operator || !previousValue) return;

  currentValue = screenDigits.textContent;
  if (currentValue === '') return;
  
  const num1 = parseFloat(previousValue);
  const num2 = parseFloat(currentValue);
  
  if (isNaN(num1) || isNaN(num2)) {
    screenDigits.textContent = 'Error';
    return;
  }

  const result = calculate(num1, num2);
  
  screenDigits.textContent = result;
  previousValue = result.toString();
  operator = '';
  operatorSymbol.textContent = '';
});

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