'use strict';

// Get input
// Get all number buttons
// Get all math operator buttons
// Create a function that displays input from buttons on
// Create a function that handles math operations
// Attach eventhandlers

const calculatorInput = document.querySelector('#calculator-input');
// const numberBtns = document.querySelectorAll('.numbers');
// const mathOperatorBtns = document.querySelectorAll('.math_operators');
// const numberBtns = document.querySelectorAll('.numbers');

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
    // This will check to see if there are any characters that shouldnt be included
    // If there are characters that arent in the calculator
    // This will also convert characters from html codes to math operators
    // It will then return an array of characters joined in a string to be called by newCalculation
    this.newCalculation(calcInput);
  }
  newCalculation(filteredInput) {
    console.log(filteredInput);
    this.returnSum = new Calculation(filteredInput).returnSum();
    this.updateUI();
  }
}

const newCalculator = new Calculator();
