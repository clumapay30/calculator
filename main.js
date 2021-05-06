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
        this.displayElementX.innerText = '';
        this.displayY = '';
        this.displayElementY.innerText = '';
        this.operators = '';
        this.displayOperators.innerText = '';
        this.dot = false;
        this.result = null;
    }
    delete() { }
    clearEntity() { }

    // X and Y Number Buttons 
    updateDsiplay(operation) {
        if (operation === '.' && !this.displayY) this.dot = true;
        if (operation === '.' && this.displayY.includes('.')) return;
        this.displayY += operation;
    }
    appendUpdates() {
        this.displayElementY.innerText = this.displayY;
    }

    // operators
    updateOperator(operator) {
        this.dot = false;
        if (this.displayX) { }
        if (this.displayX && this.displayY && this.operators) {
            this.computeOperation();
            this.updateDisplayX();
        } else {
            this.operators = operator;
            this.displayOperators.innerText = this.operators;
            this.displayX = this.displayY;
            this.displayElementX.innerText = this.displayX;
            this.displayY = '';
            this.displayElementY.innerText = '';
        }
    }
    updateDisplayX() {
        this.displayX = '';
        this.displayElementX.innerText = '';
        this.displayY = this.result;
        this.displayElementY.innerText = this.displayY;
        this.operators = '';
        this.displayOperators.innerText = '';
    }

    // Calculation
    computeOperation(operator) {
        if (operator = '*') {
            const tempResult = parseFloat(this.displayX) * parseFloat(this.displayY)
            this.result = tempResult;
        } else if (operator = '/') {
            const tempResult = parseFloat(this.displayX) / parseFloat(this.displayY)
            this.result = tempResult;
        } else if (operator = '+') {
            const tempResult = parseFloat(this.displayX) + parseFloat(this.displayY)
            this.result = tempResult;
        } else if (operator = '-') {
            const tempResult = parseFloat(this.displayX) - parseFloat(this.displayY)
            this.result = tempResult;
        }
    }
    compute() { }
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
        calculator.computeOperation(e.target.innerText)
        calculator.updateDsiplay(e.target.innerText);
        calculator.appendUpdates();
    })
})

allOperators.forEach(operator => {
    operator.addEventListener('click', e => {
        calculator.updateOperator(e.target.innerText)
        calculator.computeOperation()
    })
})


clear.addEventListener('click', () => {
    calculator.clear();
})