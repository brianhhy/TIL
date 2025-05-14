let birthYear = 1990;
let bigNumber = 1234567890123456789012345678901234567890n;
let str="Hello, World!";
let b = true;
let arr = [1, 2, 3, 4, 5];
let obj = { name: "John", age: 30 };
let f = function() { return "Hello"; };
let d = new Date();

console.log(typeof birthYear); 
console.log(typeof bigNumber); 
console.log(typeof str); 
console.log(typeof b); 
console.log(typeof arr);
console.log(typeof obj);
console.log(typeof f);
console.log(typeof d);

let name = 'kim';
let classroom = 204;
let text = name +"님, " + classroom + "호 강의실로 입장해주세요";
text = `${name}님, ${classroom}호 강의실로 입장해주세요`;
console.log(text);

// 문자열을 숫자로 변환 Number는 정수, 소수, boolean등 안가림 / parseInt는 정수만 변환
let r =  Number("10") + 2;
let p = parseInt("10") - 2;

console.log(r);
