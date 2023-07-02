const result = document.querySelector('.result')
const amount = document.querySelector('.amount_input')
const people = document.querySelector('.ate_input')
const box = document.querySelector('.box')
const tip = document.querySelector('.tip')
const cost = document.querySelector('.cost')
const divide = document.querySelector('.fromeach')
const percentage = document.querySelector('.list')


result.addEventListener('click', function(){
    box.style.height = '640px';
    tip.innerHTML = 'Total tip: '
    cost.innerHTML = 'Total cost: '
    divide.innerHTML = 'Each person to pay: '
    tip.innerHTML += (amount.value / 100) * percentage.value
    cost.innerHTML += Number(amount.value) + Number((amount.value / 100) * percentage.value)
    divide.innerHTML += (Number(amount.value) + Number((amount.value / 100) * percentage.value)) / Number(people.value)
})