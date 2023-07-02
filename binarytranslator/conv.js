result = ""
function conv(fromnum, tonum){
    while (fromnum >= tonum){
        result += String(fromnum % tonum);
        fromnum = Math.floor(fromnum / tonum)
    }
    console.log(1 + String(result).split('').reverse().join(''));
}
conv(6553, 2)