for (let i = 0; i < 10; i++) {
  if (i % 3 == 0) {
    console.log(i);
    console.log("hi");
  }
}

// 컴파일 언어와 인터프리터 언어

// 컴파일러 언어 : 프로그램 코드를 컴파일해서 컴퓨터가 알아들을 수 있는 있는 기계어로 번역. 소스코드 전체를 한번에 번역하고 실행 파일을 만들어서 실행
// 장점 : 파일의 크기가 크지만 실행 속도가 빠름(전체소스코드를 번역하기 때문)
// 실행 전 전체 코드를 번역하기 떄문에 오류를 미리 알 수 있다.
// 대신 번역하는 시간이 좀 걸림
// C, C++, Java, Python 등등

// 인터프리터 언어 : 프로그램 코드를 한줄 씩 번역하고 실행
// 장점 : 프로그램 실행 도중에 동적으로 소스코드를 수정 가능
// 소스 코드의 수정이 용이하고 크기가 작음. 디버깅하기가 편함
// 소스 코드가 실행될 때마다 번역과 실행을 반복하기 때문에 속도가 좀 느림
// 오류를 실행중에 발견할 수 있다.
// javascript 등이 있다.

// 논리 연산자 ||, &&

// || 논리합(or)
// a || b --> a나 b 둘 중에 하나라도 참이면 참
// 0 || 0 --> false
// 0 || 1 --> true
// 1 || 0 --> true
// 1 || 1 --> true

let a = true;
let b = false;
console.log(a || b); // true

// && 논리곱(AND)
// a && b --> 둘다 참이여야 참
// 0 && 0 --> false
// 0 && 1 --> false
// 1 && 0 --> false
// 1 && 1 --> true

let c = true;
let d = false;
console.log(c && b); // false

let text = "backhome";
let age = 20;

// 두 조건 모두 만족하니 log 출력
if (text === "backhome" && age === 20) {
  console.log("집에가고 싶은 20살");
}
// 둘중 하나라도 맞기 때문에 log 출력
if (text === "backhome" || age === 20) {
  console.log("집에가고 싶은 20살");
}

// 삼항연산자
// 코드를 한줄로 표현할 수 있지만 가독성이 많이 떨어짐
// 조건 ? (앞의 조건이 참일떄) : (앞의 조건이 거짓일떄)
console.log(1 < 2 ? "참" : "거짓"); // 1은 2보다 작기 떄문에 참
console.log(1 < 2 ? (3 < 4 ? "참참" : "거거짓짓") : "거짓"); // 1은 2보다 작고 3은 4보다 작기 때문에 참참 출력

// switch 조건문
// switch ("조건값") {
//   case 1: // if 부분
//     break;
//   case 2: // else if
//     break;

//   case 3: // else if
//     break;

//   default: // else
//     break;
// }

let month = 11;
let monthName = "";
switch (month) {
  case 1:
    break;
  case 2:
    break;
  case 3:
    break;
  case 4:
    break;
  case 5:
    break;
  case 6:
    break;
  case 7:
    break;
  case 8:
    break;
  case 9:
    break;
  case 10:
    // month의 값을 10을 주게되면 아무것도 없기 때문에 아무것도 출력하지않음
    break; // break문을 주석 처리하게 되면 break 문을 만날 때까지 다음 코드를 잃기 때문에 다음 case인 11을 읽게 되어 November문구 출력
  case 11:
    // month의 값이 11이기 떄문에 이쪽 실행
    monthName = "November";
    break; // switch문 탈출
  case 12:
    break;

  default:
    break;
}
console.log(monthName);

// break문이 없으면 끝까지 다 읽음
switch (1) {
  case 1:
    console.log("first case");
  // break;
  case 2:
    console.log("second case");
  // break;
  case 3:
    console.log("third case");
  // break;

  default:
    console.log("end");
    break;
}

// while 반복문
// while("값이 true면 무한히 돌아감. false로 변경해야 반복문이 멈춤")
// break문으로 반복을 종료 시킬 수도 있음
// while (true) {
//   if ("멈추는 조건") {
//     break; // 조건이 맞으면 반복을 끝냄
//   }
// }

let num = 1;
while (num !== 5) {
  console.log(num); // 1 2 3 4
  num++;
}
let num2 = 1;
while (true) {
  console.log(num2);
  num2++;
  if (num2 === 5) {
    break;
  }
}

// 브라우저에 입력받을 수 있는 상태창을 띄워줌
// prompt() : 간단한 입력 값을 받을 수 있음
// let value = prompt("값을 입력해보세요");
// console.log("value : ", value);

// let inputNum = prompt("첫번째 숫자 입력");
// let inputNum2 = prompt("두번째 숫자 입력");
// 입력 받은 숫자는 문자열
// let result = inputNum + inputNum2;
// 숫자로 변환시켜주는 형변환 작업이 필요
// parseInt("정수로 변경할 변수")
// Number("숫자로 변경할 변수")
// let result = parseInt(inputNum) + Number(inputNum2);

// console.log("결과 : ", result);

// let value1 = prompt("1 ~ 5 사이 사이 숫자 입력");
// let play = true;

// while (play) {
//   switch (value1) {
//     case "1":
//       console.log("1번");
//       play = false;
//       break;
//     case "2":
//       console.log("2번");
//       play = false;
//       break;
//     case "3":
//       console.log("3번");
//       play = false;
//       break;
//     case "4":
//       console.log("4번");
//       play = false;
//       break;
//     case "5":
//       console.log("5번");
//       play = false;
//       break;

//     default:
//       console.log("1 ~ 5 사이로 입력하세요.");
//       value1 = prompt("1 ~ 5 사이 숫자를 다시 입력해주세요.");
//       break;
//   }
// }

// 랜덤값을 만들기
Math.random(); // 0 ~ 1까지 랜덤한 숫자 생성
console.log(Math.random()); // 0과 1사이의 소숫점 출력됨
// 1에서 100 사이의 랜덤한 수 생성
// parseInt()를 사용해서 정수로 변환하고 곱함
console.log(parseInt(Math.random() * 99 + 1));

// 가위바위보 만들기
// 3가지의 랜덤값을 만들어 가위바위보 게임을 만들어 줄 수 있음
let com = parseInt(Math.random() * 3);
console.log(com);

// console.log("com : ", com, "me : ", me);

// if (com == me) {
//   console.log("com : ", com, " me : ", me, "무승부");
// } else if (com == "바위" && me == "가위") {
//   console.log("com : ", com, " me : ", me, "컴퓨터 승");
// } else if (com == "바위" && me == "보") {
//   console.log("com : ", com, " me : ", me, "사용자 승");
// } else if (com == "가위" && me == "보") {
//   console.log("com : ", com, " me : ", me, "컴퓨터 승");
// } else if (com == "가위" && me == "바위") {
//   console.log("com : ", com, " me : ", me, "사용자 승");
// } else if (com == "보" && me == "바위") {
//   console.log("com : ", com, " me : ", me, "컴퓨터 승");
// } else if (com == "보" && me == "가위") {
//   console.log("com : ", com, " me : ", me, "사용자 승");
// } else {
//   console.log("다시 입력하세요.");
// }

// let pp = true;
// let num1 = 1;

// while (pp) {
// let me = prompt("가위바위보 입력");

// if (me == "바위") {
//   me = 0;
// } else if (me == "가위") {
//   me = 1;
// } else if (me == "보") {
//   me = 2;
// } else {
//   console.log("다시 입력");
// }

//   switch (num1) {
//     case 1:
//       if (com == me) {
//         console.log("com : ", com, ",", "me : ", me, " > 무승부");
//         com = parseInt(Math.random() * 3);
//         me = prompt("무승부 입니다. 가위바위보 입력");
//         break;
//       }
//     case 2:
//       if (com == 0 && me == 1) {
//         console.log("com : 바위, me : 가위 > 컴퓨터 승");
//         com = parseInt(Math.random() * 3);
//         me = prompt("컴퓨터가 이겼습니다. 다시 가위바위보 입력");
//         break;
//       }
//     case 3:
//       if (com == 0 && me == 2) {
//         console.log("com : 바위, me : 보 > 사용자 승");
//         pp = false;
//         break;
//       }
//     case 4:
//       if (com == 1 && me == 0) {
//         console.log("com : 가위, me : 바위 > 사용자 승");
//         pp = false;
//         break;
//       }
//     case 5:
//       if (com == 1 && me == 2) {
//         console.log("com : 가위, me : 보 > 컴퓨터 승");
//         com = parseInt(Math.random() * 3);
//         me = prompt("컴퓨터가 이겼습니다. 다시 가위바위보 입력");
//         break;
//       }
//     case 6:
//       if (com == 2 && me == 0) {
//         console.log("com : 보, me : 바위 > 컴퓨터 승");
//         com = parseInt(Math.random() * 3);
//         me = prompt("컴퓨터가 이겼습니다. 다시 가위바위보 입력");
//         break;
//       }
//     case 7:
//       if (com == 2 && me == 1) {
//         console.log("com : 보, me : 가위 > 사용자 승");
//         pp = false;
//         break;
//       }
//     default:
//         me = prompt("정확하게 가위바위보 다시 입력");
//       break;
//   }
// }

//
