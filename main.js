class Calculator {
    constructor(displayElementX, displayElementY, displayOperator) {
        this.displayElementX = displayElementX;
        this.displayElementY = displayElementY;
        this.displayOperator = displayOperator;
        this.clear();
    }

    updateNumber(target) {
        if (target === '.' && !this.dot) this.dot = true;
        if (target === '.' && this.displayY.includes('.')) return;
        this.displayY += target;
        this.displayElementY.innerText = this.displayY;
    }

    //Operators code: Beginning
    updateOperator(target) {
        this.dot = false;
        this.operator = target;
        if (this.displayY) {
            this.displayOperator.innerText = this.operator;
            this.displayX = this.displayY;
            this.displayElementX.innerText = this.displayX;
            this.displayY = '';
            this.displayElementY.innerText = '';
        } else {
            return;
        }
    }

    compute() {
        if (this.operator === '*') {
            const temp = parseFloat(this.displayX) * parseFloat(this.displayY)
            this.result = temp
        } else if (this.operator === '/') {
            const temp = parseFloat(this.displayX) / parseFloat(this.displayY)
            this.result = temp
        } else if (this.operator === '-') {
            const temp = parseFloat(this.displayX) - parseFloat(this.displayY)
            this.result = temp
        } else if (this.operator === '+') {
            const temp = parseFloat(this.displayX) + parseFloat(this.displayY)
            this.result = temp
        }
    }

    equal() {
        this.compute()
        if(!this.displayY) return;
        this.displayY = this.result;
        this.displayElementY.innerText = this.displayY;
        this.displayX = '';
        this.displayElementX.innerText = '';
        this.operator = '';
        this.displayOperator.innerText = '';
    }

    clear() {
        this.displayX = '';
        this.displayElementX.innerText = '';
        this.displayY = '';
        this.displayElementY.innerText = '';
        this.operator = '';
        this.displayOperator.innerText = '';
        this.dot = false;
        this.result = null;
    }

    ce() {
        this.displayY = '';
        this.displayElementY.innerText = '';
    }

    delete() {
        this.displayY = this.displayY.toString().slice(0, -1);
        this.displayElementY.innerText = this.displayY;
    }

}


const displayElementX = document.querySelector('.small-output')
const displayElementY = document.querySelector('.current-output')
const displayOperator = document.querySelector('.operators-output')
const clear = document.querySelector('.clear')
const ce = document.querySelector('.ce')
const del = document.querySelector('.del_image')
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.data_operators')
const equal = document.querySelector('.equal-calc');

const calculator = new Calculator(displayElementX, displayElementY, displayOperator)

//button code here

numbers.forEach(number => {
    number.addEventListener('click', e => {
        calculator.updateNumber(e.target.innerText);
    })
})

operators.forEach(operator => {
    operator.addEventListener('click', e => {
        calculator.updateOperator(e.target.innerText);
        calculator.compute();
    })
})

equal.addEventListener('click', () => {
    calculator.equal();
})

clear.addEventListener('click', () => {
    calculator.clear();
})

ce.addEventListener('click', e => {
    calculator.ce();
})

del.addEventListener('click', e => {
    calculator.delete();
})