// https://www.acmicpc.net/problem/10998

/*
 * 두 정수 A와 B를 입력받은 다음, A + B 를 출력하는 프로그램을 작성하시오.
 * 입력 : 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10) -> ex) 1 2
 * 출력 : 첫째 줄에 A+B를 출력한다. -> ex) 3
 */

// fs 모듈을 이용해서 파일 전체를 읽어와서 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

// 첫째줄의 데이터를 공백 기준으로 나누기
data = input[0].split(' '); // data = ["1", "2"]

let a = Number(data[0]); // 1
let b = Number(data[1]); // 2

console.log(a * b);
