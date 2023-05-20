// https://www.acmicpc.net/problem/9498
// 제목: 시험성적
// 난이도: ⭐️
// 유형: 기초문법
// 추천 풀이시간: 10분

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

data = Number(input[0]);

function gradeCheck(a) {
  if (90 <= a && a <= 100) console.log('A');
  else if (80 <= a) console.log('B');
  else if (70 <= a) console.log('C');
  else if (60 <= a) console.log('D');
  else console.log('F');
}

gradeCheck(data);

// 정확성을 위해 && 뒤에 써주면 좋음

// function gradeCheck(a) {
//   if (90 <= a && a <= 100) console.log('A');
//   else if (80 <= a && a <= 89) console.log('B');
//   else if (70 <= a && a <= 79) console.log('C');
//   else if (60 <= a && a <= 69) console.log('D');
//   else console.log('F');
// }

// gradeCheck(data);
