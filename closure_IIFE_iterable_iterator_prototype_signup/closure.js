// 클로저 : 내부 함수에서 외부 함수의 변수에 접근 할 수 있음

function funcVar() {
  // 블록 스코프와 함수 스코프
  // var는 함수 스코프 let은 블록 스코프
  // var로 선언한 변수는 함수 스코프를 가지고 함수의 어느곳에서든 접근 가능
  // for문도 함수 내부에서 실행되고 for문에 선언한 var 변수는 함수의 어디서든 접근이 가능
  // for문 안에서 비동기 처리 함수가 호출되고 for문은 이미 다 종료되고 함수가 실행되기 때문에 for문이 끝나고 난 뒤의 값안 i = 5가 출력
  // vscode에서 debugger 키워드를 작성하면 브라우저에서 브레이크 포인트를 설정 가능(개발자 모드)
  for (var i = 0; i < 5; i++) {
    debugger;
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}

funcVar();

function funcLet() {
  for (let i = 0; i < 5; i++) {
    debugger;
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
funcLet();

// 함수 스코프 : 변수가 선언된 함수에서 유효. 함수에서 선언된 변수는 함수가 호출되고 종료되면 해제
// 블록 스코프 : 변수가 선언된 블록에서 블록이 종료될때 사라짐

function func2() {
  // for (let j = 0; j < 5; j++) {
  //   // 블록 스코프
  // }
  if (true) {
    // 함수 스코프
    // var는 함수 스코프
    var a = 45;
    // 블록 스코프
    let b = 50;
  }
  console.log(a);
  // 접근안됨
  // console.log(b);
}

func2();

// 클로저의 개념은 함수의 외부 변수와 변수 선언 기준으로 어디까지 변수를 활용 할 수 있는지 정도 숙지

// 함수의 변수를 참조해주고 메모리상에서 변수가 유지 되도록 함
// func4 함수가 func3의 value 변수를 참조하고 func4 함수가 실행되면 value를 선언하고 func4 함수는 func3의 실행 컨텍스트에 생성된 value 값을 변경 할 수 있음
// 자바스크립트가 함수를 생성할 때 함수나 변수 선언 위치를 기억해서 함수를 반환한 이후에도 참조 가능

function func3() {
  let value = "";
  // 내부 함수에서 외부 함수의 변수를 사용
  function func4() {
    if (value == "") {
      value = "closure";
      return value;
    }
  }
  return func4;
}

let closure = func3();
console.log(closure);
console.log(closure());

let aa = closure();
console.log(aa);
