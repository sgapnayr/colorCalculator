const display1El = document.querySelector('.display-num1')
const display2El = document.querySelector('.display-num2')
const tempResultEl = document.querySelector('.display-numTemp')
const numbersEl = document.querySelectorAll('.number')
const operationsEl = document.querySelectorAll('.operation')
const equalEl = document.querySelector('.equals')
const clearEl = document.querySelector('.clear')
const clearLastEl = document.querySelector('.clear-last')

let dis1Num = ''
let dis2Num = ''
let result = null
let lastOperation = ''
let haveDot = false

numbersEl.forEach(number => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !haveDot) {
            haveDot = true
        } else if (e.target.innerText === '.' && haveDot) {
            return
        }
        dis2Num += e.target.innerText
        display2El.innerText = dis2Num
    })
})

operationsEl.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if (!dis2Num) result
        haveDot = false
        const operationName = e.target.innerText
        if (dis1Num && dis2Num && lastOperation) {
            mathOperation()
        } else {
            result = parseFloat(dis2Num)
        }
        clearVar(operationName)
        console.log(result);
    })
})

function clearVar(name = '') {
    dis1Num += dis2Num + ' ' + name + ' '
    display1El.innerText = dis1Num
    display1El.innerText = ''
    dis2Num = ''
}

















// numbersEl.forEach((number) => {
//     number.addEventListener('click', (e) => {
//         currentNumber += e.target.innerText
//         display2.innerText = currentNumber
//     })
// })

// operationsEl.forEach((operator) => {
//     operator.addEventListener('click', (e) => {
//         let output;
//         switch (e.target.innerText) {
//             case 'C':
//                 currentNumber = ''
//                 break
//             case 'CE':
//                 if (e.target.innerText)
//                     currentNumber = currentNumber.slice(0, -1)
//                 break
//             case '%':
//                 currentNumber = currentNumber + '%'
//                 break
//             case '+':
//                 currentNumber = currentNumber + '+'
//                 break
//             case '-':
//                 currentNumber = currentNumber + '-'
//                 break
//             case 'X':
//                 currentNumber = currentNumber + 'X'
//                 break
//             case '/':
//                 currentNumber = currentNumber + '/'
//                 break
//         }
//         display2.innerText = currentNumber
//     })
// })

// display2.forEach((operator) => {
//     equals.addEventListener('click', () => {
//         switch (operator.innerText) {
//             case '+':
//                 currentNumber + 1
//         }
//         display1.innerText = currentNumber
//     })
// })

// function mathOperation() {
//     if (lastOperation === 'X') {
//         result = parseFloat(result) * parseFloat(dis)
//     }
// }