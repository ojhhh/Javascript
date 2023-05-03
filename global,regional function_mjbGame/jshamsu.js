function hi() {
  console.log("안녕하세요");
}

hi();

let temp = "전역변수";

function test() {
  console.log(temp);
}

test();

let num1 = 1;
let num2 = 2;
let num3 = 3;
function test1(a, b, c) {
  console.log(a + b + c);
}

test1(num1, num2, num3);

function test2(a) {
  console.log(`${a}`);
}

test2("사과");
test2("나무");

function test3() {
  return "test3 반환됨";
}
let num4 = test3();

console.log(num4);

function gugudan(num) {
  for (let i = 1; i < 10; i++) {
    console.log(`${num}단 ${num} x ${i} = ${num * i}`);
  }
}
gugudan(3);
