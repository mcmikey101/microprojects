const toss = document.querySelector('.toss');
const head = document.querySelector('.head');
const tail = document.querySelector('.tail');
const streak = document.querySelector('.streak');
const maxstreak = document.querySelector('.maxstreak');
const coinsgot = document.querySelector('.coinsgot');
const body = document.querySelector('body');
const skins = document.querySelector('.skins');
const skin1 = document.querySelector('.skin1');
const skin2 = document.querySelector('.skin2');
const skin3 = document.querySelector('.skin3');
const skin4 = document.querySelector('.skin4');
let coins = 0
let flipstreak = 0
let maxstreakcount = 0
let rotate = 0

toss.addEventListener('click', function() {
    rotate = Math.floor(Math.random() * (10 - 2 + 1) + 2) * 180 + Math.floor(Math.random() * (10 - 2 + 1) + 2) * 180
    head.style.transform = `translate(0px, -240px) rotateX(${rotate}deg)`
    setTimeout(function() {
        head.style.transform = `translate(0px, 0px) rotateX(-${rotate}deg)`
    }, 500)
    tail.style.transform = `translate(0px, -240px) rotateX(${rotate}deg)`
    setTimeout(function() {
        tail.style.transform = `translate(0px, 0px) rotateX(-${rotate}deg)`
    }, 500)
    if ((rotate / 180) % 2 == 0) {
        flipstreak += 1
        coins += (flipstreak + 1) * 5
    } else {
        if (flipstreak > maxstreakcount) {
            maxstreakcount = flipstreak
        }
        flipstreak = 0
    }
    coinsgot.innerHTML = 'Coins you got: ' + coins
    maxstreak.innerHTML = 'Max Streak: ' + maxstreakcount
    streak.innerHTML = 'Streak: ' + flipstreak
})
skin1.addEventListener('click', function() {
    body.style.backgroundColor = 'white'
    head.style.backgroundColor = 'white'
    head.style.border = '3px solid black'
    tail.style.backgroundColor = 'white'
    tail.style.border = '3px solid black'
    toss.style.backgroundColor = 'white'
    toss.style.border = '3px solid black'
    toss.style.color = 'black'
    skins.style.backgroundColor = 'white'
    skins.style.border = '3px solid black'
    body.style.color = 'black'
})
skin2.addEventListener('click', function() {
    body.style.backgroundColor = 'black'
    head.style.backgroundColor = 'black'
    head.style.border = '3px solid white'
    tail.style.backgroundColor = 'black'
    tail.style.border = '3px solid white'
    toss.style.backgroundColor = 'black'
    toss.style.border = '3px solid white'
    toss.style.color = 'white'
    skins.style.backgroundColor = 'black'
    skins.style.border = '3px solid white'
    body.style.color = 'white'
})
skin3.addEventListener('click', function() {
    body.style.backgroundColor = '#0ddeb5'
    head.style.backgroundColor = '#30bf94'
    head.style.border = '3px solid black'
    tail.style.backgroundColor = '#86d45f'
    tail.style.border = '3px solid black'
    toss.style.backgroundColor = '#86d45f'
    toss.style.border = '3px solid black'
    toss.style.color = 'black'
    skins.style.backgroundColor = 'white'
    skins.style.border = '3px solid black'
    body.style.color = 'black'
})
skin4.addEventListener('click', function() {
    body.style.backgroundColor = '#f724a1'
    head.style.backgroundColor = '#e70047'
    head.style.border = '3px solid black'
    tail.style.backgroundColor = '#fb4f84'
    tail.style.border = '3px solid black'
    toss.style.backgroundColor = '#fb4f84'
    toss.style.border = '3px solid black'
    toss.style.color = 'black'
    skins.style.backgroundColor = 'white'
    skins.style.border = '3px solid black'
    body.style.color = 'black'
})
