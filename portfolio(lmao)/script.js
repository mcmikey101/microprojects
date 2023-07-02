const toggle = document.querySelector('.skillstoggle');
const skills = document.querySelector('.skills');
const block1 = skills.querySelector('.block1');
const block2 = skills.querySelector('.block2');
const block3 = skills.querySelector('.block3');
const project1 = document.querySelector('.project1')
const project2 = document.querySelector('.project2')
const project3 = document.querySelector('.project3')
const project4 = document.querySelector('.project4')
const back = document.querySelector('.back')
const projectsheader = document.querySelector('.projectsheader')
const detailsheader = document.querySelector('.detailsheader')
const details = document.querySelector('.details')
const contacts = document.querySelector('.contacts')
let toggleactive = false
toggle.addEventListener('click', function() {
    if (toggleactive == false) {
        block1.style.height = '240px'
        block2.style.height = '240px'
        block3.style.height = '240px'
        toggleactive = true
    } else {
        block1.style.height = '0px'
        block2.style.height = '0px'
        block3.style.height = '0px'
        toggleactive = false
    }
})
window.addEventListener('wheel', function(){
    if (window.pageYOffset > 100) {
        projectsheader.style.opacity = '100'
    }
    if (window.pageYOffset > 300) {
        project1.style.height = '210px'
    }
    if (window.pageYOffset > 500) {
        project2.style.height = '210px'
    }
    if (window.pageYOffset > 700) {
        project3.style.height = '210px'
    }
    if (window.pageYOffset > 900) {
        project4.style.height = '210px'
    }
    if (window.pageYOffset > 1200) {
        detailsheader.style.opacity = '100'
    }
    if (window.pageYOffset > 1250) {
        details.style.height = '400px'
    } 
})
back.addEventListener('click', function(){
    window.scrollTo({top: 0, behavior: 'smooth'})
})