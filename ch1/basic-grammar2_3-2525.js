// https://www.acmicpc.net/problem/2525
// 제목: 오븐시계
// 난이도: ⭐️
// 유형: 기초문법
// 추천 풀이시간: 10분

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

/* 나의 풀이 */
let hour = Number(input[0].split(' ')[0]);
let minute = Number(input[0].split(' ')[1]);

let time = Number(input[1].split(' '));

if (60 <= minute + time) {
  hour += parseInt((minute + time) / 60);
  minute = (minute + time) % 60;
  if (23 < hour) hour -= 24;
} else minute += time;

console.log(`${hour} ${minute}`);

/* 정답 예시 */
// 입력: A시 B분 -> 분으로 바꾸기 (24시간 = 1440분)
// 걸리는 시간: C분

// 띄어쓰기로 배열 만든 후, 각 원소 정수로 바꿔준 뒤 a, b로 리턴
// let [a, b] = input[0].split(' ').map(Number);
// let c = Number(input[1]);

// let totalMinute = a * 60 + b + c; // 걸리는 총 시간 '분' 단위로 변환
// totalMinute %= 1440; // 하루 초과 할 수 있기 때문에 24시간으로 나눈 나머지만 취함
// let hour = parseInt(totalMinute / 60);
// let minute = totalMinute % 60;

// console.log(hour + " " + minute);
