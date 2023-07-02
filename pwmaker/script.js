let lists = {}
let result = ''
let randList = []
let randElem = ""
const btn_nums = document.querySelector('.btn_nums')
const btn_letters = document.querySelector('.btn_letters')
const btn_signs = document.querySelector('.btn_signs')
const get_result = document.querySelector('.div-21')
const result_block = document.querySelector('.div-24')
const input_length = document.querySelector('.div-20')
let numsActive = false
let lettersActive = false
let signsActive = false

function randomprop(obj) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};
btn_nums.addEventListener('click', function(){
    if (numsActive == false){
        btn_nums.style = 'background-color: rgba(174, 236, 152, 1); border-radius: 50%;'
        lists.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        numsActive = true
    }
    else{
        btn_nums.style = 'background-color: rgba(217, 217, 217, 1); border-radius: 0%;'
        delete lists.numbers
        numsActive = false
    }
})
btn_letters.addEventListener('click', function(){
    if (lettersActive == false) {
        btn_letters.style = 'background-color: rgba(174, 236, 152, 1); border-radius: 50%;'
        lists.letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'u', 'v', 'w', 'x', 'y', 'z'];
        lettersActive = true;
    }
    else{
        btn_letters.style = 'background-color: rgba(217, 217, 217, 1); border-radius: 0%;'
        delete lists.letters
        lettersActive = false;
    }
})
btn_signs.addEventListener('click', function(){
    if (signsActive == false) {
        btn_signs.style = 'background-color: rgba(174, 236, 152, 1); border-radius: 50%;'
        lists.signs = ['!', '^', '-', '+', '-', '*', '%', '&', '$', '#', '/', '?'];
        signsActive = true;
    }
    else{
        btn_signs.style = 'background-color: rgba(217, 217, 217, 1); border-radius: 0%;'
        delete lists.signs
        signsActive = false;
    }
})
function makepw() {
    for (let i = 0; i < input_length.value; i++) {
        randList = randomprop(lists)
        randElem = randList[Math.floor(Math.random() * randList.length)];
        result += randElem
    }
    result_block.innerHTML = result
    result = ""
};
get_result.addEventListener('click', makepw)