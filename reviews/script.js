// сразу говорю дизайн залупа и вообще уродство. Но как говорится красота в душе(коде).
const review1 = {
    icon: 'white',
    namecontent: 'John',
    textcontent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eveniet in ex, alias, libero cumque eligendi consequuntur sint perferendis error provident nisi non optio neque sit fugit illum aliquam itaque? Lorem ipsum dolor sit amet, consectetur adip'
}
const review2 = {
    icon: 'blue',
    namecontent: 'Mary',
    textcontent: 'Im happy!!',
}
const review3 = {
    icon: 'red',
    namecontent: 'Bruce',
    textcontent: 'This sucks!!',
}
const revlist = [review1, review2, review3]
const next = document.querySelector('.btn1')
const prev = document.querySelector('.btn2')
const icon = document.querySelector('.icon')
const name = document.querySelector('.name')
const text = document.querySelector('.text')
let counter = 0

next.addEventListener('click', function(){
    if (counter <= revlist.length - 1){
        icon.style.backgroundColor = revlist[counter].icon
        name.innerHTML = revlist[counter].namecontent
        text.innerHTML = revlist[counter].textcontent
        counter++
    } else {
        counter = 0
        icon.style.backgroundColor = revlist[counter].icon
        name.innerHTML = revlist[counter].namecontent
        text.innerHTML = revlist[counter].textcontent
        counter++
    }
})
prev.addEventListener('click', function(){
    if (counter > 0){
        counter--
        icon.style.backgroundColor = revlist[counter].icon
        name.innerHTML = revlist[counter].namecontent
        text.innerHTML = revlist[counter].textcontent
    } else {
        counter = revlist.length - 1
        icon.style.backgroundColor = revlist[counter].icon
        name.innerHTML = revlist[counter].namecontent
        text.innerHTML = revlist[counter].textcontent
    }
})