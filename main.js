const smallOutput = document.querySelector('.small-output');
const smallOperatorOutput = document.querySelector('.operators-output');
const bigOutput = document.querySelector('.current-output');
const allNumbers = document.querySelectorAll('.number')
const allOperators = document.querySelectorAll('.data_operators');
const equal = document.querySelector('.equal-calc');
const clear = document.querySelector('.clear')
const ce = document.querySelector('.ce')
const del = document.querySelector('.del_image');

let displayOutput1 = '';
let displayOutput2 = '';
let result = null;
let displayOperator = '';
let dot = false;

//Buttons: code here

allNumbers.forEach(number => {
    number.addEventListener('click', e => {
        if (e.target.innerText === '.' && !dot) {
            dot = true;
        } else if (e.target.innerText === '.' && dot) {
            return;
        }
        displayOutput2 += e.target.innerText;
        bigOutput.innerText = displayOutput2;
    })
})

allOperators.forEach(operator => {
    operator.addEventListener('click', e => {
        dot = false;
        displayOperator = e.target.innerText
        if(displayOutput2 === '.') {
            alert('Please give me a number to get a result');
            displayOutput2 = '';
            bigOutput.innerText = '';
            return;
        }
        if(!displayOutput2) {
            alert(`Please give me a number to get a result`)
            return;
            // compute()
            // operation()
        } else {
            smallOperatorOutput.innerText = displayOperator;
            displayOutput1 += displayOutput2;
            smallOutput.innerText = displayOutput1
            displayOutput2 = '';
            bigOutput.innerText = '';
        }
    })
})

equal.addEventListener('click', e => {
    if(!displayOutput2) {
        alert(`Please give me a number to get a result`)
        return bigOutput.innerText = '';
    }
    if (!displayOutput1 && !displayOutput2 && !displayOperator) {
        return;
    } else {
        compute()
        operation()
    }
})

del.addEventListener('click', e => {
    displayOutput2 = bigOutput.innerText.toString().slice(0, -1);
    bigOutput.innerText = displayOutput2;
})

ce.addEventListener('click', e => {
    bigOutput.innerText = '';
    displayOutput2 = '';
})

clear.addEventListener('click', e => {
    displayOutput1 = '';
    displayOutput2 = '';
    result = null;
    displayOperator = '';
    dot = false;
    bigOutput.innerText = '';
    smallOutput.innerText = ''
    smallOperatorOutput.innerText = '';
})
//Next: continue working with event listener and functions
//Functions: code here

function compute() {
    if (displayOperator === '*') {
        const tempResult = parseFloat(displayOutput1) * parseFloat(displayOutput2);
        result = tempResult
    } else if (displayOperator === '/') {
        const tempResult = parseFloat(displayOutput1) / parseFloat(displayOutput2);
        result = tempResult
    } else if (displayOperator === '+') {
        const tempResult = parseFloat(displayOutput1) + parseFloat(displayOutput2);
        result = tempResult
    } else if (displayOperator === '-') {
        const tempResult = parseFloat(displayOutput1) - parseFloat(displayOutput2);
        result = tempResult
    }
}

function operation() {
    displayOutput2 = '';
    smallOutput.innerText = ''
    bigOutput.innerText = result;
    displayOutput1 = result;
    displayOperator = '';
    smallOperatorOutput.innerText = displayOperator;
}

