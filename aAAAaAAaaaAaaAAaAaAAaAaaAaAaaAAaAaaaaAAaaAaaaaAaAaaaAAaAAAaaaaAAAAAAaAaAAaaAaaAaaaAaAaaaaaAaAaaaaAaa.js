function letter() {
    let str = "";
    for (let i = 0; i<10; i++) {
        str += Math.random() > 0.5 ? "a".toLowerCase() : "a".toUpperCase()
    }
    return str 
}

console.log(letter())
