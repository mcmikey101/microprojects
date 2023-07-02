// @ts-nocheck
const btn = document.getElementById("btn")
const err = document.getElementById("error")
const input = document.querySelector("input")
const info = document.querySelector(".defs")
//получает json обЪект по адресу ввода инпута и создает элемены li с лексическими значениями
async function getdata(word) {
    let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    // если с ссылкой что то не так кинет ошибку
    if (!response.ok) {
        let error = new Error("Didn't find such word :(", response.status)
        throw error
    }
    // переводит полученый json в обЪект
    let data = await response.json()
    // сбрасывает список элементов что бы не скапливались предыдущие значения
    info.innerHTML = ""
    // за каждый элемент в списке обЪектов находит определение и создает тег li с классом анимации и задержкой анимации
    for (let i = 0; i < data.length; i++) {
        const definition = document.createElement("li")
        definition.innerHTML = JSON.stringify((data[i].meanings[0].definitions[0].definition))
        definition.style.animationDelay = `${0.1 * i}s`
        definition.classList.add("definition")
        info.appendChild(definition)
    }
}
btn?.addEventListener("click", () => {
    // если в поле ввода есть значение получает данные с api, если в процессе кидает ошибку - меняет внутренний текст тега с ошибкой 
    if (input.value) {
        getdata(input.value).then(() => err.innerText = "").catch((error) => {
            err.innerText = error.message
            info.innerHTML = ""
        })
    // если поле ввода пусто сбрасывает список определений и выводит ошибку
    } else {
        info.innerHTML = ""
        err.innerText = "Please enter a word"
    }
})

