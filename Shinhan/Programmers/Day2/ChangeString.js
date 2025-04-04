const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    for (let char of line) {
        console.log(char);
    }
    rl.close();
});

/* for문 활용 char of line => 문자열을 줄바꿈하면서 출력 */