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
// nodelist of all buttons
let numbers = document.querySelectorAll('.number')
// for...of loop to addEventListener to each number, that returns
// the buttons value when clicked
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

// adding event listeners
equal.addEventListener('click', equalsF)
dot.addEventListener('click', decimal)
add.addEventListener('click', (event) => {storeValue('+')})
subtract.addEventListener('click', (event) => {storeValue('-')})
multiply.addEventListener('click', (event) => {storeValue('*')})
divide.addEventListener('click', (event) => {storeValue('/')})
D.addEventListener('click', delThis)
C.addEventListener('click', clearThis)

// code for calculator
// creating functions to do the basic mathematics
function readThis () {}
function addThis (x,y) {return x+y}
function subtractThis (x,y) {return x-y}
function divideThis (x,y) {
    if (y!==0) {
    return x/y
    } else {return "ERR: Can't Div / 0"}
}
function multiplyThis (x,y) {return x*y}
function storeValue(operator) {
    console.log(operator)
    // assign value to be the contents of #display [x=display.text()]
    // add to this value the operator that was used [x+=operator]
    // wipe botton display2, and attach this to top display1
}
function equalsF () {
    // assign value to y, the second display value
    console.log(this)
}
function decimal () {
    display2.textContent += '.'
}
function delThis () {
    display2.textContent -= this
    // this will be hard
}
function clearThis() {
    display2.textContent = null
}
function displayThis(x) {
    display2.textContent += x
}


// IDEAS
// ----- if statement, that checks all options;
//  and this gives a value to the click

// pressing any of the other functions clears the screen
// stores the number
// waits for new number