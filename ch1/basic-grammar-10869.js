// https://www.acmicpc.net/problem/10869
// 제목: 사칙연산
// 난이도: ⭐️
// 유형: 기초문법
// 추천 풀이시간: 5분

/*
 * 두 자연수 A와 B가 주어진다. 이때, A + B, A - B, A * B, A / B(몫), A % B(나머지)를 출력하는 프로그램을 작성하시오.
 * 입력 : 두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000)
 * -> ex) 7 3
 * 출력 : 첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.
 * -> ex) 10 >> 4 >> 21 >> 2 >> 1
 */

// fs 모듈을 이용해서 파일 전체를 읽어와서 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

data = input[0].split(' ');

let a = Number(data[0]);
let b = Number(data[1]);
// 위 세줄과 같은 식
// let a = Number(input[0].split(' ')[0]);
// let b = Number(input[0].split(' ')[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);
