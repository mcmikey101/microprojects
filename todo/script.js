const input = document.querySelector('.input')
const add = document.querySelector('.add')
const tasksbox = document.querySelector('.tasks')
const clear = document.querySelector('.clear')

add.addEventListener('click', function(){
    let item = tasksbox.insertAdjacentHTML('beforeend', '<div class="task"><p class="text"><p class="content">' + input.value + '</p><p class="donemsg"> Done!</p></p><div class="actions"><button class="done">O</button><button class="delete">+</button></div></div>')
    input.value = ''
    handleItem(item)
})
const handleItem = function(){
    const tasks = document.querySelectorAll('.task')
    tasks.forEach(function(item){
        item.querySelector('.done').addEventListener('click', function(){
            item.querySelector('.donemsg').style.display = 'inline'
        })
        item.querySelector('.delete').addEventListener('click', function(){
            tasksbox.removeChild(item)
        })
        clear.addEventListener('click', function(){
            tasksbox.removeChild(item)
        })
    })  
}
