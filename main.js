// all calculator functions

//     clear() {

//     }

//     delete() {

//     }

//     appendNumber() {

//     }



//     compute() {

//     }

//     updateDisplay() {

//     }




const smallOutput = document.querySelector('.small-output');
const smallOperatorOutput = document.querySelector('.operators-output');
const bigOutput = document.querySelector('.current-output');
const allNumbers = document.querySelectorAll('.number')
const dataOperators = document.querySelectorAll('.data_operators');
const equal = document.querySelector('.equal-calc');
const clear = document.querySelector('.clear')
const del = document.querySelector('.del');

let display1Num = '';
let display2Num = '';
let result = null;
let displayOperator = '';
let dot = false;

allNumbers.forEach(number => {
    number.addEventListener('click', e => {
        if (e.target.innerText === '.' && !dot) {
            dot = true;
        } else if (e.target.innerText === '.' && dot) {
            return;
        }
        display2Num += e.target.innerText;
        bigOutput.innerText = display2Num;
    })
})

dataOperators.forEach(operator => {
    operator.addEventListener('click', e => {
        if (!display2Num) return;
        dot = false;
        if (display1Num && display2Num && displayOperator) {
            compute();
        } else {
            operations();
            displayOperator += e.target.innerText;
            smallOperatorOutput.innerText = displayOperator;
        }
    })
})

equal.addEventListener('click', e => {
    if(displayOperator === "*") {
        const compute = parseFloat(display1Num) * parseFloat(display2Num)
        bigOutput.innerText = compute;
    }
    operations();
})

//test function
//if this work add this function code to class functions
function operations() {
    result = parseFloat(display2Num);
    display1Num += result;
    smallOutput.innerText = display1Num;
    display2Num = '';
    bigOutput.innerText = '';
}