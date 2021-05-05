class Calculator {
    constructor(displayElementX, displayElementY, displayOperators) {
        this.displayElementX = displayElementX;
        this.displayElementY = displayElementY;
        this.displayOperators = displayOperators;
        this.clear();
    }

    // clear and delete elements 
    clear() {
        this.displayX = '';
        this.displayY = '';
        this.operators = '';
        this.dot = false;
        this.result = '';
    }
    delete() {}
    clearEntity() {}

    // Buttons 
    updateDsiplay(operation) {
        if(operation === '.' && !this.displayY) this.dot = true;
        if(operation === '.' && this.displayY.includes('.')) return;
        this.displayY += operation;
    }
    appendUpdates() {
        this.displayElementY.innerText = this.displayY;
    }

    // operators
    updateOperator() {}
    compute() {}
    computeOperation() {} 
}

const displayElementX = document.querySelector('.small-output');
const displayElementY = document.querySelector('.current-output');
const displayOperators = document.querySelector('.operators-output');
const allNumbers = document.querySelectorAll('.number')
const allOperators = document.querySelectorAll('.data_operators');
const equal = document.querySelector('.equal-calc');
const clear = document.querySelector('.clear')
const ce = document.querySelector('.ce')
const del = document.querySelector('.del_image');

const calculator = new Calculator(displayElementX, displayElementY, displayOperators);

//Buttons: code here

allNumbers.forEach(number => {
    number.addEventListener('click', e => {
        calculator.updateDsiplay(e.target.innerText);
        calculator.appendUpdates();
    })
})






clear.addEventListener('click', () => {
    calculator.clear();
})