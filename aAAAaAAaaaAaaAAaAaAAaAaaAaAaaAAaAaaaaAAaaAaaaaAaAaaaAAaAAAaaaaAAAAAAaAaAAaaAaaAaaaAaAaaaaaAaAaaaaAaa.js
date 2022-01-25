function letter(letter) {
    let str = "";
    str += Math.random() > 0.5 ? letter.toLowerCase() : letter.toUpperCase()
    return str 
}

for (let i = 0; i<Infinity; i++) {
    console.log(letter("a"))
}
