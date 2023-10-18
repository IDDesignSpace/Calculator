'use strict';

// Get input
// Get all number buttons
// Get all math operator buttons
// Create a function that displays input from buttons on
// Create a function that handles math operations
// Attach eventhandlers

const calculatorInput = document.querySelector('#calculator-input');
const buttons = document.querySelector('.buttons');
// const numberBtns = document.querySelectorAll('.numbers');
// const mathOperatorBtns = document.querySelectorAll('.math_operators');
// const numberBtns = document.querySelectorAll('.numbers');
console.log(buttons);
class Calculation {
  // Store all input in an array
  // Convert all number strings to numbers
  // Convert all symbols to math operators;
  // Calculate input
  // return
  input;
  sum;

  constructor(input) {
    this.input = input;
    this.calculate();
    this.returnSum();
  }

  calculate() {
    this.sum = eval(this.input);
  }
  returnSum() {
    console.log(this.sum);
    return this.sum;
  }
}

class Calculator {
  input;
  returnSum;

  constructor() {
    // Handle enter key
    calculatorInput.addEventListener('keypress', this.returnKey.bind(this));
    buttons.addEventListener('click', this.handleButtons.bind(this));
  }

  updateUI() {
    console.log(this.returnSum);
    calculatorInput.value = this.returnSum;
  }
  returnKey(keypressed) {
    // If the key pressed is the enter key grab input value
    if (keypressed.keyCode === 13) this.filterInput(calculatorInput.value);
  }
  filterInput(calcInput) {
    const convertMathOperators = {
      '−': () => '-',
      '÷': () => '/',
      '×': () => '*',
    };
    const filteredInput = calcInput
      .split('')
      .map(character => {
        console.log(character);
        if (character === '×' || character === '÷' || character === '−')
          return convertMathOperators[character]();
        return character;
      })
      .join('');
    console.log(filteredInput);
    // This will check to see if there are any characters that shouldnt be included
    // If there are characters that arent in the calculator
    // This will also convert characters from html codes to math operators
    // It will then return an array of characters joined in a string to be called by newCalculation

    this.newCalculation(filteredInput);
  }
  newCalculation(filteredInput) {
    this.returnSum = new Calculation(filteredInput).returnSum();
    this.updateUI();
  }
  handleButtons(event) {
    event.preventDefault();
    const btnClicked = event.target;
    if (btnClicked.closest('.number_btn')) {
      let numClicked = btnClicked.closest('.number_btn').textContent;

      this.handleNumberBtns(numClicked);
    }

    if (btnClicked.closest('.math_op_btn')) {
      let mathOperatorClicked = btnClicked.closest('.math_op_btn').textContent;
      this.handleMathOperatorBtns(mathOperatorClicked);
    }
  }
  handleNumberBtns(numClicked) {
    console.log(numClicked);
    calculatorInput.value += numClicked;
  }
  handleMathOperatorBtns(operatorClicked) {
    console.log(operatorClicked);
    if (operatorClicked === 'Clear') {
      calculatorInput.value = 'CALCULATER FRIENDS';
      setTimeout(function () {
        calculatorInput.value = '';
      }, 2000);
    }
    if (operatorClicked === '=') this.filterInput(calculatorInput.value);
    if (operatorClicked !== '=' && operatorClicked !== 'Clear')
      calculatorInput.value += operatorClicked;
  }
}

const newCalculator = new Calculator();
