// https://www.acmicpc.net/problem/1000

/*
 * 두 정수 A와 B를 입력받은 다음, A + B 를 출력하는 프로그램을 작성하시오.
 * 입력 : 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10) -> ex) 1 2
 * 출력 : 첫째 줄에 A+B를 출력한다. -> ex) 3
 */

// fs 모듈을 이용해서 파일 전체를 읽어와서 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

// ["1", "2"]
let line = input[0].split(' ');

let a = parseInt(line[0]); // 1
let b = parseInt(line[1]); // 2

console.log(a + b);
