function solution(myString, pat) {
    let converted = "";

    for (let i = 0; i < myString.length; i++) {
        if (myString[i] === "A") {
            converted += "B";
        } else if (myString[i] === "B") {
            converted += "A";
        } else {
            converted += myString[i];
        }
    }

    return converted.includes(pat) ? 1 : 0;
}
