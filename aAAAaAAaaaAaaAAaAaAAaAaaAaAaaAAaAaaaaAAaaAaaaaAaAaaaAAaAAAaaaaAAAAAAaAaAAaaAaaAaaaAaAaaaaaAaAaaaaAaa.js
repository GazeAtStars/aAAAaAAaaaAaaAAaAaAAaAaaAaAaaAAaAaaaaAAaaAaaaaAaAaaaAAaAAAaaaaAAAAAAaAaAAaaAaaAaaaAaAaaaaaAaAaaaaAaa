function letter() {
    let str = "";
    for (let i = 0; i<26; i++) {
        str += Math.random() > 0.5 ? "a".toLowerCase() : "a".toUpperCase()
    }
    return str 
}

for (let j = 0; j<26; j++) {console.log(letter())}
