const btn = document.querySelector('.btn');
const slider = document.querySelector('.slider');
const text = document.querySelector('.text');
const body = document.querySelector('body');
const circle = document.querySelector('.circle');
let posX = 0;
let posY = 0;
let btnActive = false

function spawn() {
    posX = Math.floor(Math.random() * 1000)
    posY = Math.floor(Math.random() * 700)
    circle.style.left = posX + 'px'
    circle.style.top = posY + 'px'
}

btn.addEventListener('click', function(){
    if (btnActive == false) {
        spawn()
        circle.style.transform = 'scale(6000)'
        btn.style = 'position: relative; left: 240px;'
        slider.style = 'background-color: lightgreen;'
        text.style.color = 'white'
        text.innerHTML = 'Dark mode: enabled'
        btnActive = true
    }
    else{
        spawn()
        circle.style.transform = 'scale(0)'
        btn.style = 'position: relative; right: 480px;'
        slider.style = 'background-color: grey;'
        text.style.color = 'black'
        text.innerHTML = 'Dark mode: disabled'
        btnActive = false
    }
})