function letter(letter) {
    let str = "";
    str += Math.random() > 0.5 ? letter.toLowerCase() : letter.toUpperCase()
    return str 
}

for (let i = 0; i<10; i++) {
    console.log(letter("a"))
}
