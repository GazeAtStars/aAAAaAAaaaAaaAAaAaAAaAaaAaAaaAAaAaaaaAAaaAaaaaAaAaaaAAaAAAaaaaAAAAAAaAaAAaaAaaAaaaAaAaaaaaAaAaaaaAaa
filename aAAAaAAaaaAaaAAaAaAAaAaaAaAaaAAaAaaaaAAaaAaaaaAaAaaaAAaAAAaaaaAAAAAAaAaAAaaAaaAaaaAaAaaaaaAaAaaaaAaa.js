function letter(letter, repeat) {
    let str = "";
    for (let i = 0; i <Infinity; i++) {
        str += Math.random() > 0.5 ? letter.toLowerCase() : letter.toUpperCase()
    }
    return str 
}

while;; console.log(letter("a"))
