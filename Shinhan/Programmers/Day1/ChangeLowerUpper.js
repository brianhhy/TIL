const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0].split('');
    str.forEach((value, index) => {
        if (value === value.toUpperCase()) {
            str[index] = value.toLowerCase();
        } else {
            str[index] = value.toUpperCase();
        }
    });
    console.log(str.join(''));
});


/* toUpperCase => 대문자 변환
   toLowerCase => 소문자 변환*/