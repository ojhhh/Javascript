// 함수
// 함수는 실행할 코드를의 이름을 지어줌 (반복 사용하는 기능들을 묶어서 관리)
// function 함수이름() { 실행할 코드 }
// fun 함수 선언
function fun() {
  console.log("fun 함수 실행");
  console.log("fun 함수 실행");
  console.log("fun 함수 실행");
}
// fun 함수 실행
fun();
// 함수를 실행 시키면 스택이라는 곳에 함수 실행이 쌓임. 순서대로 실행됨

// 변수의 스코프 개념이라는게 있음
// 전역 스코프와 지역 스코프가 있음
// 전역 스코프 : 문서 내의 모든 곳에서 접근이 가능
// 전역 스코프에 많은 변수를 선언하면 관리하기 힘들어짐
// 협업할떄
let temp = "전역변수"; // 범위 밖에 있지만 인식가능
function con() {
  let temp = "지역변수"; // 함수의 실행이 끝나면 해제됨
  console.log(temp);
}

// 전역 변수 예시
let temp2 = "access";
function con2() {
  console.log(temp2);
}

con2();

// 지역 변수 예시
// 지역 스코프는 특정영역에서만 접근 가능
function con3() {
  // let temp3 = "access";
}
// console.log(temp3); // 지역 변수기 때문에 함수 밖에 서 읽지 못함

con3();

// 호이스팅 : 변수가 선언되기전에 호출 했을 경우 발생 되는 에러
// 변수는 상단에 작성하는것이 좋음
function tmp() {
  // console.log(x);
  // var x = 5; // var를 사용하였기 때문에 호이스팅이 일어나도 오류를 출력하지 않음
  // let x = 5; // 호이스팅 에러 발생
}
tmp();

// 매개변수
function fun2(v) {
  // 전달 받은 매개변수 사용
  console.log(v);
}

function fun3(num) {
  console.log(`전달 받은 매개 변수 : ${num}`);
}

let a = 1;
let b = 2;

fun3(a);
fun3(b);
fun3(3);

// cup 함수 생성. 물이나 음료수를 따를 수 있는 기능이 있음
// cup 함수에 매개변수로 drink 음료수를 따라보기

function cup(drink) {
  // drink라는 매개변수에 값을 받음
  console.log(`컵에 ${drink}를 따랐음`);
  console.log(`${drink}를 이컵에 따라서 마시닌까 기분이 좋다`);
}

// 전달 되는 매개변수에 따라 다른 결과물을 보여줌
let c = "오렌지주스";
cup("홍차"); // cup함수에 "홍차" 값을 넘겨줌
cup("포도주스");
cup(c);

// 거스름돈 자판기 기능 구현
// 자주사용할 것 같은 기능들을 함수로 작성해놓고 재사용
function vending(money, unit) {
  // 매개변수는 여러게 줄 수 있음
  console.log(unit + "짜리" + money / unit + "개");
}

// 지폐 1000짜리 넣고 500단위로 거슬러 받음
vending(1000, 500);
vending(1000, 100);

// 함수도 값
// 변수에 함수를 대입할때 함수의 이름을 전달해야함
let e = vending;
console.log(e);
// e 변수에 vending 함수가 들어 있기 때문에 함수처럼 실행 가능
e(1000, 100);

// ()는 함수의 실행식이기 때문에 담기지 않음
let f = vending();
console.log(f); // undefined

// return : 함수안에서 값을 내보내는 식
function ab() {
  // 함수의 실행 도중에 return식에 도달하면 값을 반환하고 함수 종료
  return "반환값";
  console.log("위에 return 식이 실행되어 함수가 종료됬기 때문에 이건 안보임");
}

// 반환값이 있는 함수를 실행
let g = ab();
console.log(g);

// 숫자를 더해 주는 함수 작성

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(1, 2));

// 구구단 함수
// 코드의 재사용성을 높힘
function gg(num) {
  for (let i = 1; i < 10; i++) {
    console.log(`${num}단 ${num} x ${i} = ${num * i}`);
  }
}
gg(3);

// 성격 유형 검사 함수(간단버전)
function type(value) {
  switch (value) {
    case 1:
      return "분노조절잘해";
    case 2:
      return "과묵하지만 상냥";
    case 3:
      return "조용하지만 주사심함";
  }
}

// 위의 구구단 함수에서는 console이 찍혀 있기때문에 출력이 됬지만 switch문에는 return 밖에 없음
// type(1)은 반환된 값을 저장하고 있기때문에 console.log로 출력해 줘야함
type(1);
console.log(type(1));
