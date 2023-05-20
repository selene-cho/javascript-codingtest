// https://www.acmicpc.net/problem/2884
// 제목: 알람시계
// 난이도: ⭐️
// 유형: 기초문법
// 추천 풀이시간: 10분

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

/* 나의 풀이 */
data = input[0].split(' ');

H = Number(data[0]);
M = Number(data[1]);

function timeCheck(a, b) {
  if (0 <= b - 45) console.log(a, b - 45);
  else if (b - 45 < 0 && 0 <= a - 1) console.log(a - 1, b + 15);
  else if (b - 45 < 0 && a - 1 < 0) console.log(23, b + 15);
}

timeCheck(H, M);

/* 정답 예시 */
let hour = Number(input[0].split(' ')[0]);
let minute = Number(input[0].split(' ')[1]);

if (minute < 45) {
  hour -= 1;
  minute += 15;
  if (hour < 0) hour = 23;
} else minute -= 45;

console.log(`${hour} ${minute}`);
