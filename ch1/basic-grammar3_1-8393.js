// https://www.acmicpc.net/problem/8393
// 제목: 합
// 난이도: ⭐️
// 유형: 기초문법
// 추천 풀이시간: 10분

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

/* 나의 풀이 */
let data = Number(input[0]); // 문자열을 숫자로 변환할 때, parseInt에 비하여 Number의 속도가 더 빠르게 동작
let summary = 0;

for (let i = 1; i <= data; i++) {
  summary += i;
}

console.log(summary);

/* 정답 예시 */
// 등차수열의 합 공식 이용 (같은 차이가 나는 수들의 합)
// 첫번째 항 a ~ 마지막 n항 l까지의 합
// n * ( 첫번째항:a + 마지막항:l )/2

let n = Number(input[0]);

console.log((n * (n + 1)) / 2);
