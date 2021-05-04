class Calculator {
    constructor(display1, display2, operators){
        this.display1 = display1;
        this.display2 = display2;
        this.operators = operators;
    }
    bigOutput() {

    }

}

const displayElement1 = document.querySelector('.small-output');
const displayOperators = document.querySelector('.operators-output');
const displayElement2 = document.querySelector('.current-output');
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

const calculator = new Calculator();
//Buttons: code here

