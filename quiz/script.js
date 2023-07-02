const start = document.querySelector('.start')
const header = document.querySelector('.header')
const button1 = document.querySelector('.button1')
const button2 = document.querySelector('.button2')
const button3 = document.querySelector('.button3')
const buttoncont = document.querySelector('.btn_container')
const next = document.querySelector('.next')
const img = document.querySelector('.image')
const petname = document.querySelector('.petname')
const petimg = document.querySelector('.petimg')
const wikibtn = document.querySelector('.wikibtn')
const mapbtn = document.querySelector('.mapbtn')
const wikilink = document.querySelector('.wikilink')
const maplink = document.querySelector('.maplink')
let headcounter = 0
let buttoncounter = 0
let imagescounter = 0
let current = ''
let result = []
let count = 0
let headers = ['Ваш бюджет:', "Размер питомца:", 'Сколько времени вы можете уделить:', "Продолжительность жизни:", "Обучаемость питомца", "Ваш идеальный питомец:"]
let buttons = ['Маленький', 'Средний', 'Большой', 'Крохотный', 'Средний', 'Крупный', 'Около часа', '2-4 часа', 'Неограничено', 'Около года', '2-5 лет', '6 или более', 'Низкая', 'Средняя', 'Высокая']
let images = ["imgs/image1.png", "imgs/image2.png", "imgs/image3.png", "imgs/image4.png", "imgs/image5.png"]
let pets = [
    {
        name: "Хомяк",
        image: "https://severdv.ru/wp-content/uploads/2020/05/kak-pravilno-kupat-homyaka20.jpg",
        wikilink: "https://ru.wikipedia.org/wiki/Хомяки",
        maplink: "https://yandex.ru/maps/-/CCUZrAAGSC"
    },
    {
        name: "Кот",
        image: "https://images.wallpaperscraft.ru/image/single/kot_morda_vzglyad_89446_1600x1200.jpg",
        wikilink: "https://ru.wikipedia.org/wiki/Кошка",
        maplink: "https://yandex.ru/maps/213/moscow/search/купить%20кота/?from=tabbar&ll=37.756505%2C55.722302&sctx=ZAAAAAgBEAAaKAoSCWPt72yPpEJAEfm%2FIypU0UtAEhIJQPm7d9SYcD8R7FG4HoXrgT8iBgABAgMEBSgKOABAAUgBYityZWFycj1zY2hlbWVfTG9jYWwvR2VvL0VuYWJsZUJlYXV0eUZpbHRlcj0xagJydZ0BzcxMPaABAKgBAL0BJXt25cIBhQHB0I7iBP%2FO0%2BSEBpXY8P2IBuaXz40FvIe60AS%2B0fGCBamovsdqpbfEhATessX%2FA6fm7%2Bwv3%2BCx%2FAT2mM7EBoGj1%2F%2FwBpKEo%2BgDmrDQlv8G9NmLrgSUk66sgwOgo8vfhQeT8%2FeTVojv4scEk5f4hZkB5IWeoNwDobXkmgS61PaIBN2k2vYD6gEA8gEA%2BAEAggIV0LrRg9C%2F0LjRgtGMINC60L7RgtCwigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=37.756505%2C55.722302&source=serp_navig&sspn=1.214845%2C0.406092&z=10.25"
    },
    {
        name: "Собака",
        image: "https://infodog.ru/wp-content/uploads/2021/08/shveytsarskiy-zennenhund.jpg",
        wikilink: "https://ru.wikipedia.org/wiki/Собака",
        maplink: "https://yandex.ru/maps/-/CCUZrADyHB"
    },
]

start.addEventListener('click', function() {
    start.style.display = 'none'
    setTimeout(function() {
        header.innerHTML = headers[0]
        button1.style.display = 'block'
        button2.style.display = 'block'
        button3.style.display = 'block'
        next.style.display = 'block'
        img.style.display = 'block'
    }, 300)
})
next.addEventListener('click', function() {
    setTimeout(function(){
        button1.style.height = '0px'
        button2.style.height = '0px'
        button3.style.height = '0px'
        header.style.height = '0px'
        next.style.height = '0px'
        img.style.opacity = '0'
        setTimeout(function(){
            header.innerHTML = headers[headcounter]
            button1.innerHTML = buttons[buttoncounter]
            button2.innerHTML = buttons[buttoncounter + 1]
            button3.innerHTML = buttons[buttoncounter + 2]
            img.src = images[imagescounter]
        }, 300)
        setTimeout(function(){
            button1.style.height = '80px'
            button2.style.height = '80px'
            button3.style.height = '80px'
            header.style.height = '54px'
            next.style.height = '50px'
            img.style.opacity = '100'
        }, 300)
    }, 300)
    result.push(current)
    headcounter++
    imagescounter++
    buttoncounter += 3
    current = ''
    if (count == 4) {
        if(result[1] == 'Крохотный'){
            petname.innerHTML = pets[0].name
            petimg.src = pets[0].image
            wikilink.href = pets[0].wikilink
            maplink.href = pets[0].maplink
        }
        if(result[1] == 'Средний'){
            petname.innerHTML = pets[1].name
            petimg.src = pets[1].image
            wikilink.href = pets[1].wikilink
            maplink.href = pets[1].maplink
        }
        if(result[1] == 'Крупный'){
            petname.innerHTML = pets[2].name
            petimg.src = pets[2].image
            wikilink.href = pets[2].wikilink
            maplink.href = pets[2].maplink
        }
        setTimeout(function(){
            button1.style.opacity = '0'
            button2.style.opacity = '0'
            button3.style.opacity = '0'
            img.style.opacity = '0'
            next.style.opacity = '0'
            setTimeout(function(){
                button1.style.display = 'none'
                button2.style.display = 'none'
                button3.style.display = 'none'
                img.style.display = 'none'
                next.style.display = 'none'
                buttoncont.style.display = 'none'
                petimg.style.display = 'block'
            }, 400)
            setTimeout(function(){
                petname.style.opacity = '100'
                petimg.style.opacity = '100'
                wikibtn.style.opacity = '100'
                mapbtn.style.opacity = '100'
            }, 300)
        }, 400)
    }
    count++
});
button1.addEventListener('click', function() {
    current = button1.innerHTML
})
button2.addEventListener('click', function() {
    current = button2.innerHTML
})
button3.addEventListener('click', function() {
    current = button3.innerHTML
})