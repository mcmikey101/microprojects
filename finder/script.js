const input = document.querySelector(".input");
const search = document.querySelector(".search");
const blocks = document.querySelector(".blocks").children

function sort(){
    for (let i = 0; i < blocks.length; i++){
        if (blocks.item(i).innerHTML != input.value){
            blocks.item(i).style.display = 'none';
        }
        if (blocks.item(i).innerHTML == input.value){
            blocks.item(i).style.display = 'block';
        }
    }
    if (input.value == ''){
        for (let i = 0; i < blocks.length; i++){
                blocks.item(i).style.display = 'block';
        }
    }}

search.addEventListener('click', sort)
addEventListener('keydown', function(event){
    if (event.key == 'Enter'){
        sort()
    }
})