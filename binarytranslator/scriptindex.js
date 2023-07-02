// присвоение элементам переменных
const btn_up1 = document.querySelector(".btn_up");
const btn_down1 = document.querySelector(".btn_down");
const btn_up2 = document.querySelector(".btn_up2");
const btn_down2 = document.querySelector(".btn_down2");
const input = document.querySelector('.content')
const output = document.querySelector('.content2')
const num = document.querySelector(".num")
const convert = document.querySelector(".convert")
let result_cont = document.querySelector(".result_content")

// каждая кнопка добавляет или убавляет, а потом чекает подходит ли результат по значению, если нет то счетчик изменения становится равним нулю
btn_up1.addEventListener("click", function(){
        let add = 1
        if (Number(input.innerHTML) >= 10){
                add = 0
        }
        input.innerHTML = Number(input.innerHTML) + add
})
btn_down1.addEventListener("click", function(){
        let add = 1
        if (Number(input.innerHTML) <= 2){
                add = 0
        }
        input.innerHTML = Number(input.innerHTML) - add
})
btn_up2.addEventListener("click", function(){
        let add = 1
        if (Number(output.innerHTML) >= 10){
                add = 0
        }
        output.innerHTML = Number(output.innerHTML) + add
})
btn_down2.addEventListener("click", function(){
        let add = 1
        if (Number(output.innerHTML) <= 2){
                add = 0
        }
        output.innerHTML = Number(output.innerHTML) - add
})
convert.addEventListener("click", function(){
        let result = ""
        // короче если перевод из меньшей в большую то там надо переворачивать результат поэтому две штуки переменных
        let otherresult = 0
        // значение инпута
        let number = num.value;
        // проверка равенства тк алгоритмы различаются
        if (Number(input.innerHTML) > Number(output.innerHTML)) {
                // проверяет равно ли значение инпута делителю тк надо прервать процесс когда частное не сможет быть делимо нормально
                while (number >= Number(output.innerHTML)){
                        // процесс перевода
                        // нахождение остатка от деления на индекс искомой системы исчисления
                        result += number % Number(output.innerHTML)
                        // округление значения инпута
                        number = Math.floor(number / output.innerHTML)
                }
                // разворот результата потому что так надо единичка хз зачем сам не пойму
                result_cont.innerHTML = 1 + result.split('').reverse().join('')
        }
        if (Number(input.innerHTML) < Number(output.innerHTML)){
                // разворот значения инпута потому что при перемножении членов на степени это происходит с конца
                number = number.split('').reverse()
                // каждый член списка умножается на индекс системы в степени равной позиции члена начиная с нуля
                for (let i = 0; i < number.length; i++){
                        otherresult += number[i] * (input.innerHTML ** i)
                }
                // в случае если надо перевести в десятичную то пофиг просто сразу выводит
                if (output.innerHTML == '10'){
                        console.log(otherresult)
                        result_cont.innerHTML = otherresult
                }
                // если во что то другое то сначала нужно перевести в десятку а потом в искомую по выше описанному алгоритму
                // по хорошему бы функцию прописать но мне пох :)
                if (output.innerHTML != '10') {
                        console.log(otherresult)
                        while (otherresult > 0.5){
                             result += otherresult % Number(output.innerHTML)
                             otherresult = Math.floor(otherresult / output.innerHTML)
                        }
                        result_cont.innerHTML = result.split('').reverse().join('')
                }

        }
        // в случае равенства выведет само себя
        if (Number(input.innerHTML) == Number(output.innerHTML)) {
                result_cont.innerHTML = number
        }
})