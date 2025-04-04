const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    a = input[0];
    b = input[1];
    c = Number(a) + Number(b);
    console.log(`${a} + ${b} = ${c}`);
});

/* 문자열 객체끼리 더할 때 ${}로 감쌀것 */