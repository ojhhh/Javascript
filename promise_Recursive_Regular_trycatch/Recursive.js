// 재귀함수
// 함수가 함수 자신을 호출하는 함수

function add(a) {
  if (a < 5) {
    add(a + 1);
    console.log(a);
  }
}
add(0);

// 함수의 실행 컨택스트
// add(0) -> add(1) -> add(2) -> add(3) -> add(4)
// add(4) 실행이 끝 -> add(3) 실행 끝 -> add(2) 실행 끝 -> add(1) 실행 끝 -> add(0)
//  함수가 호출되면 실행컨택스트가 생성되고 함수의 안에서 함수를 호출하면서 실행 컨택스트가 쌓이고 뒤에서 부터 실행하고 실행 컨택스트 제거

// 피보나치 수열을 재귀함수로 만들어보기
// 피보나치 수열은 이전 두항의 합으로 만들어진 수열
let fiArr = [];
function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i < 20; i++) {
  fiArr += fibonacci(i) + " ";
  console.log(fibonacci(i));
  if (i == 19) {
    console.log(fiArr);
  }
}
