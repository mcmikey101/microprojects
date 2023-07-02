const pic = document.querySelector('.pic');
const next = document.querySelector('.btn1')
const prev = document.querySelector('.btn2')
let list = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg']
let counter = 0;
next.addEventListener('click', function(){
    if (counter <= list.length - 1){
        pic.src = list[counter]
        counter++
    } else {
        counter = 0
        pic.src = list[counter]
        counter++
    }
})
prev.addEventListener('click', function(){
    if (counter > 0){
        counter--
        pic.src = list[counter]
    } else {
        counter = list.length - 1
        pic.src = list[counter]
    }
})