const nameinput = document.querySelector('.name')
const courseinput = document.querySelector('.course')
const authorinput = document.querySelector('.author')
const submit = document.querySelector('.submit')
const blocks = document.querySelector('.blocks')
submit.disabled = true
addEventListener('keyup', function(){
    if (nameinput.value != '' && courseinput.value != '' && authorinput.value != '') {
        submit.disabled = false
        submit.style.opacity = '100%'
    } else {
        submit.disabled = true
        submit.style.opacity = '30%'
    }
})
submit.addEventListener('click', function(){
    let block = blocks.insertAdjacentHTML('beforeend', '<div class="block"><p class="block_name">Name: <span class="block_name_content">' + nameinput.value + '</span></p><p class="block_course">Course: <span class="block_course_content">' + courseinput.value + '</span></p><p class="block_author">Author: <span class="block_author_content">' + authorinput.value + '</span></p></div>')
})