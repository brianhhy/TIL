const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    console.log("!@#$%^&*(\\'\"<>?:;");
});

/* 
이스케이프 처리를 통한 문자열 출력
*/