const smallOutput = document.querySelector('.small-output');
const smallOperatorOutput = document.querySelector('.operators-output');
const bigOutput = document.querySelector('.current-output');
const allNumbers = document.querySelectorAll('.number')
const allOperators = document.querySelectorAll('.data_operators');
const equal = document.querySelector('.equal-calc');
const clear = document.querySelector('.clear')
const del = document.querySelector('.del');

let displayOutput1 = '';
let displayOutput2 = '';
let result = null;
let displayOperator = '';
let dot = false;

allNumbers.forEach( number => {
    number.addEventListener('click', e => {
        if(e.target.innerText === '.' && !dot) {
            dot = true;
        } else if (e.target.innerText === '.' && dot) {
            return;
        }
        displayOutput2 += e.target.innerText;
        bigOutput.innerText = displayOutput2;
    })
})

//Next: continue working with event listener and functions