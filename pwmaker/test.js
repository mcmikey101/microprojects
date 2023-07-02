lists = {}
lists.nums = ['1', '2', '3', '4']
lists.letters = ['a', 'b', 'c', 'd']
lists.signs = ['!', '<', '>', '?']
result = ""

function randomprop(obj) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};
function makepw(length) {
    for (let i = 0; i < length; i++) {
        let randList = randomprop(lists)
        let randElem = randList[Math.floor(Math.random() * randList.length)];
        result += randElem
    }
    console.log(result)
};