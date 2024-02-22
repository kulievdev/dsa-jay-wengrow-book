function everyPassword(n) {
    for (let i = 0; i < 26 ** n; i++) {
        let str = "";
        for (let j = 0; j < n; j++) {
            str += String.fromCharCode(97 + (i % 26));
            i = Math.floor(i / 26);
        }
        console.log(str);
    }
}

console.log(everyPassword(3));
