const shape = document.querySelectorAll(".shape")

function bchange() {
    for (let i = 0; i < shape.length; i++) {
        let set1 = Math.floor(Math.random() * 255)
        let set2 = Math.floor(Math.random() * 255)
        let set3 = Math.floor(Math.random() * 255)
        shape[i].style.backgroundColor = `rgba(${set1}, ${set2}, ${set3})`
    }
}
setInterval(function() {
    bchange()
}, 4000)

