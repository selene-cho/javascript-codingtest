// https://www.acmicpc.net/problem/2588
// 제목: 곱셉
// 난이도: ⭐️
// 유형: 기초문법
// 추천 풀이시간: 15분

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// ['472', '385']

/* 나의 풀이 */
data = input[1].split(''); // ['3', '8', '5']

let a = Number(input[0]) * Number(data[2]);
let b = Number(input[0]) * Number(data[1]);
let c = Number(input[0]) * Number(data[0]);
console.log(a); // 2360
console.log(b); // 3776
console.log(c); // 1416

let result = Number(input[0]) * Number(input[1]);
console.log(result); // 181720

/* 정답 예시 */

// let a = input[0]; // 472
// let b = input[1]; // 385

// x_1 = b[2]; // 1의 자리
// x_2 = b[1]; // 10의 자리
// x_3 = b[0]; // 100의 자리

// console.log(Number(a) * Number(x_1));
// console.log(Number(a) * Number(x_2));
// console.log(Number(a) * Number(x_3));
// console.log(Number(a) * Number(b));
