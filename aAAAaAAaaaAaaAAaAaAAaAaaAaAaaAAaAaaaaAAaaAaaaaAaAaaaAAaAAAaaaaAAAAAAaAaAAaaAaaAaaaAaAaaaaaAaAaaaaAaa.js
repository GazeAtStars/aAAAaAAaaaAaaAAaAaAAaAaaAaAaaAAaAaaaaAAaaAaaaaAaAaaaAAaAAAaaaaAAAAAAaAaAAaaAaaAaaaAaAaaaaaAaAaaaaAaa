function letter(repeat) {
    let str = "";
    for (let i = 0; i<repeat; i++) {
        str += Math.random() > 0.5 ? "a".toLowerCase() : "a".toUpperCase()
    }
    return str 
}

const txt = document.getElementById("atext")
for (let k = 0; k<50; k++) {txt.innerText = letter(50)}
for (let j = 0; j<26; j++) {console.log(letter(26))}
