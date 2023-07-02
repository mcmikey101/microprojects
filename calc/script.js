const buttons = document.querySelectorAll('.button')
const screen = document.querySelector('.screen')
const operators = ['/', '*', '-', '+']
let a = 0
let b = 0
let result = 0
let currentop = ''

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
    let value = e.target.dataset.num;
    if (value == 'D'){
        screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1);
        a = Number(screen.innerHTML)
    }
    if (value == 'C'){
        screen.innerHTML = ''
        a = Number(screen.innerHTML)
        b = Number(screen.innerHTML)
        currentop = ''
    }
    if (operators.indexOf(value) > -1) {
        currentop = value
        screen.innerHTML = ''
    }
    if (value != 'C' & value != 'D' & value != '=' & operators.includes(value) == false & currentop == '') {
        screen.innerHTML += value
        a = Number(screen.innerHTML)
    }
    if (value != 'C' & value != 'D' & value != '=' & operators.includes(value) == false & currentop != ''){
        screen.innerHTML += value
        b = Number(screen.innerHTML)
    }
    if (value == "=") {
        if (currentop == "/") {
            result = a / b
            screen.innerHTML = result
        }
        if (currentop == "+") {
            result = a + b
            screen.innerHTML = result
        }
        if (currentop == "-") {
            result = a - b
            screen.innerHTML = result
        }
        if (currentop == "*") {
            result = a * b
            screen.innerHTML = result
        }
        currentop = ''
    }
})
});