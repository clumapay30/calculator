class Calculator {
    constructor(displayElement1, displayElement2, displayOperators) {
        this.displayElement1 = displayElement1;
        this.displayElement2 = displayElement2;
        this.displayOperators = displayOperators;
        this.clear();
    }

    clear() {
        this.display1 = '';
        this.display2 = '';
        this.allOperators = '';
        this.dot = false;
        this.result = null;
    }

    appendNumber(number) {
        if (number === '.' && !this.display2.includes('.')) this.dot = true;
        else if (number === '.' && this.display2.includes('.')) return;
        this.display2 += number;
    }

    updateOutPut() {
        this.displayElement2.innerText = this.display2;
    }

    updateOperator(operator) {
        this.dot = false;
        if(this.display1 && this.display2 && this.allOperators) {
            this.compute();
            this.operation();
        } else {
            this.displayOperators.innerText = this.allOperators;
            this.display1 += this.display2;
            this.displayElement1.innerText = this.display1;
            this.display2 = '';
            this.displayElement2.innerText = '';
        }
        this.allOperators = operator;
        this.displayOperators.innerText = this.allOperators;
        this.display1 += this.display2;
        this.displayElement1.innerText = this.display1
        this.display2 = '';
        this.displayElement2.innerText = '';
    }

    compute(operator) {
        if (operator === '*') {
            const tempresult = parseFloat(this.display1) * parseFloat(this.display2);
            this.result = tempresult;
        }
    }

    operation() {
        this.display2 = ''
        this.displayElement1.innerText = '';
        this.displayElement2.innerText = this.result;
        this.display1 = this.result;
        this.allOperators = '';
        this.displayOperators.innerText = this.allOperators;
    }
}

const displayElement1 = document.querySelector('.small-output');
const displayElement2 = document.querySelector('.current-output');
const displayOperators = document.querySelector('.operators-output');
const allNumbers = document.querySelectorAll('.number')
const allOperators = document.querySelectorAll('.data_operators');
const equal = document.querySelector('.equal-calc');
const clear = document.querySelector('.clear')
const ce = document.querySelector('.ce')
const del = document.querySelector('.del_image');

const calculator = new Calculator(displayElement1, displayElement2, displayOperators);

//Buttons: code here

allNumbers.forEach(number => {
    number.addEventListener('click', e => {
        calculator.appendNumber(e.target.innerText);
        calculator.updateOutPut();
    })
})

allOperators.forEach(operator => {
    operator.addEventListener('click', e => {
        calculator.updateOperator(e.target.innerText)
        calculator.compute(e.target.innerText);
    })
})