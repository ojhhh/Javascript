// 많이 사용는 구문

// if문 : 조건문
if (false) {
  // () 안의 값이 조건문을 실행 시키는 조건(true, false)
  console.log();
}
if (true) {
  console.log();
}

let age = 1;
let age2 = 10;

// age보다 age2가 크기 때문에 true
// true기 때문에 출력됨
if (age < age2) {
  console.log("age2 값 : " + age2);
}

// false 일떄 실행
// else 문
// if의 조건이 false 일때 else 문 실행
if (age > age2) {
  console.log("age2 값 : " + age2);
} else {
  console.log("age 값 : " + age);
}

// else if 문
let aa = 5;
let bb = 5;
// if 조건이 맞으면 if문 실행
if (aa < bb) {
  // 같은 값이기 때문에 false. else if문 실행
  console.log("if문");
  // if 조건이 틀리고 else if문의 조건문이 맞으면 else if 문 실행
} else if (aa == bb) {
  // 값이 같기 때문에 true. else if 문 실행
  console.log("else if문");
  // if, else if 두개의 조건이 틀리면 else 문 실행
} else {
  console.log("else문");
}

// for문 : 반복문
let b = 5;
// 변수를 선언하고 값을 확인, 구문 실행하고 값을 증가 시킴
// 조건문의 조건이 맞지 않을때 반복문 종료
for (let a = 1; a < b; a++) {
  console.log(a);
}
