// constants of buttons
const add = document.querySelector('.add')
const subtract = document.querySelector('.subtract')
const multiply = document.querySelector('.multiply')
const divide = document.querySelector('.divide')
const C = document.querySelector('.clear')
const D = document.querySelector('.del')
const dot = document.querySelector('.dot')
const equal = document.querySelector('.equal')
// other constants
var display1 = document.getElementById('display1')
var display2 = document.getElementById('display2')
var thisIsAValue = ''
// nodelist of all buttons
let numbers = document.querySelectorAll('.number')
// for...of loop to addEventListener to each number, that passes
// the buttons value when clicked to the display function
for (i of numbers) {
    i.addEventListener('click', (event) => {
        const numberVal = event.target.value
        displayThis(numberVal)
    })
}

// variables for calculating
let x = ''
let y = ''
let operator = ''
let oldoperator = ''

// adding event listeners
equal.addEventListener('click', (event) => {equalsF(oldoperator)})
dot.addEventListener('click', decimal)
add.addEventListener('click', (event) => {storeValue('+')})
subtract.addEventListener('click', (event) => {storeValue('-')})
multiply.addEventListener('click', (event) => {storeValue('x')})
divide.addEventListener('click', (event) => {storeValue('/')})
D.addEventListener('click', (event) => {delThis(x)})
C.addEventListener('click', (event) => {clearThis()})

// code for calculator
// round to 1 decimal for division
function round(value,precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
// creating functions to do the basic mathematics
function addThis (x,y) {return x+y}
function subtractThis (x,y) {return x-y}
function divideThis (x,y) {
    if (y!==0) {
    return x/y
    } else {return "ERR: Can't Div / 0"}
}
function multiplyThis (x,y) {return x*y}
// function allowing use of multiple operators. 
// first checks if x is empty.
// then checks if y is empty. if so, y is assigned x's value and that value is "STORED"
// it also stores the value of the operator used.
// clicking more operators, solves the current equation, pushes that value to y, stores it, and awaits further instructions.
function storeValue(operator) { 
    if (x=='') {
        display1.textContent = y+operator
        oldoperator = operator
        return
    } else if (y=='') {
        display1.textContent = x + operator
        display2.textContent = null
        y = x
        x = ''
        oldoperator = operator
    } else if (oldoperator=='x') { 
        display1.textContent = round(multiplyThis(parseFloat(y),parseFloat(x)),1) + operator
        display2.textContent = null
        newValue=round(multiplyThis(parseFloat(y),parseFloat(x)),1)
        oldoperator = operator
        y = newValue
        x=''
        newValue =''
    } else if (oldoperator=='-') {
        display1.textContent = subtractThis(parseFloat(y),parseFloat(x))+ operator
        display2.textContent = null
        newValue=subtractThis(parseFloat(y),parseFloat(x))
        oldoperator = operator
        y = newValue
        x=''
        newValue =''
    } else if (oldoperator=='+') { 
        display1.textContent = addThis(parseFloat(y),parseFloat(x))+ operator
        display2.textContent = null
        newValue=addThis(parseFloat(y),parseFloat(x))
        oldoperator = operator
        y = newValue
        x=''
        newValue =''
    } else if (oldoperator=='/') {
        display1.textContent = round(divideThis(parseFloat(y),parseFloat(x)),1)  + operator
        display2.textContent = null
        newValue= round(divideThis(parseFloat(y),parseFloat(x)),1)
        oldoperator = operator
        y = newValue
        x=''
        newValue =''
    } 
}
// equals function, works similar to the above function
// instead of waitng, it displays the value on display1. allows for further input
function equalsF(operator) {
    if (x=='') {
        return
    } else if (operator=='x') { 
        display1.textContent = round(multiplyThis(parseFloat(y),parseFloat(x)),1)
        display2.textContent = null
        y=round(multiplyThis(parseFloat(y),parseFloat(x)),1)
        x=''
        oldoperator=''
    } else if (operator=='-') {
        display1.textContent = subtractThis(parseFloat(y),parseFloat(x))
        display2.textContent = null
        y=subtractThis(parseFloat(y),parseFloat(x))
        x=''
        oldoperator=''
    } else if (operator=='+') { 
        display1.textContent = addThis(parseFloat(x),parseFloat(y))
        display2.textContent = null
        y=addThis(parseFloat(x),parseFloat(y))
        x=''
        oldoperator=''
    } else if (operator=='/') {
        display1.textContent = round(divideThis(parseFloat(y),parseFloat(x)),1)
        display2.textContent = null
        y = round(divideThis(parseFloat(y),parseFloat(x)),1)
        x=''
        oldoperator=''
    }
}
// function that adds a decimal
function decimal() {
    display2.textContent += '.'
    x += '.'
}
// function that allows the last value of x to be deleted
function delThis(deletedValue) {
    if (deletedValue = '') {return}
    else {
        console.log(x)
        x = x.slice(0,-1)
        display2.textContent = x
    }
}
// function that resets the calculator
function clearThis() {
    display2.textContent = null
    display1.textContent = null
    x = ''
    y = ''
}
// Function that displayed the value of x on the bottom screen
function displayThis(numberVal) {
    x += numberVal
    display2.textContent += numberVal
}
