// 콜백 함수

// 함수의 매개변수로 함수를 전달하여 함수에 코드작성시 필요한 순간에 매개변수로 받아 함수를 실행

function test(callback) {
  console.log("1번 작업끝");
  console.log("2번 작업끝");
  if (true) {
    callback();
  }
}
function test2() {
  console.log("콜백 함수");
}

// 함수를 직접 전달 할때는 괄호를 넣지 않는다.
test(test2);

// 배열 메소드
let arr = [1, "2", 3, "4"];
// i : 인덱스 위치에 있는 요소 출력
// v : 인덱스 번호 출력
arr.map(function (i, v) {
  console.log(i);
  console.log(v);
});

// 배열 메소드 map 흉내 내기
let arr2 = {
  map: function (callback) {
    // 함수의 매개변수가 몇개 들어있는지 파악
    if (callback.length == 1) {
      let a = 2;
      console.log("매개변수 1개 받음 " + a + " 결과");
      callback(a);
    } else if (callback.length == 2) {
      let a = 2;
      let b = 3;
      console.log("매개변수 2개 받음 " + a, b + " 결과");
      callback(a, b);
    }
  },
};
// 문자열이 1개인 경우
arr2.map(function (a) {
  console.log("나는 콜백 함수. 전달받은 매개 변수 : " + a + " 임");
});
// 문자열이 2개인 경우
// a, b : a와 b를 출력하지만 a + b를 하면 형변환이되 더하기가 됨
// 결과 23
arr2.map(function (a, b) {
  console.log("나는 콜백 함수. 전달받은 매개 변수 : " + a + b + " 임");
});
// 결과 5
arr2.map(function (a, b) {
  console.log("나는 콜백 함수. 전달받은 매개 변수 : ", a + b, " 임");
});

function temp(callback) {
  if (callback.length === 0) {
    callback();
  } else if (callback.length === 1) {
    let temp = "사과";
    callback(temp);
  } else if (callback.length === 2) {
    let temp = "딸기";
    let temp2 = "포도";
    callback(temp, temp2);
  } else {
    console.log("매개변수 초과");
  }
}

// 매개변수 1개를 전달 했을때
// 사과를 받아옴
function temp2(v) {
  console.log("temp 콜백 함수", v + " 받음");
}
// 딸기, 포도를 받아옴
function temp2(v, b) {
  console.log("temp 콜백 함수", v + " 받음 " + b + " 받음");
}
// 매개변수 초과
function temp2(v, b, c) {
  console.log("temp 콜백 함수", v + " 받음 " + b + " 받음 " + c + " 받음 ");
}

temp(temp2);

// function 함수명 : 일반함수
// 메소드 : 객체 안에 있는 함수

// 매개변수를 3개까지 받는 함수 작성
// 전달 받은 콜백 함수는 구구단을 출력
// 매개변수 1개를 받으면 2단 2개를 받으면 2,3단 3개를 받으면 2,3,4단 출력

let abc;
// 매개변수가 몇개인지 만들어줌
function mm() {
  let bas = parseInt(
    prompt(`매개변수를 몇개 넣을지 입력하세요. \n(1 ~ 3 까지 가능)`)
  );
  if (bas === 1) {
    abc = 2;
    console.log(abc);
    aa(abc);
  } else if (bas === 2) {
    abc = 3;
    console.log(abc);
    aa(abc);
  } else if (bas === 3) {
    abc = 4;
    console.log(abc);
    aa(abc);
  }
}

function aa(callback) {
  if (callback === 2) {
    console.log(callback);
    gugudan(callback);
  } else if (callback === 3) {
    console.log(callback);
    gugudan(callback);
  } else if (callback === 4) {
    console.log(callback);
    gugudan(callback);
  }
}

function gugudan(num) {
  for (let i = 2; i <= num; i++) {
    for (let j = 1; j < 10; j++) {
      console.log(i + " * " + j + " = " + i * j);
    }
  }
}

// mm();

// =========================================== //

// 객체에 키 값 형식으로 작성
let obj2 = {
  gugu: function (i) {
    switch (i.length) {
      case 1:
        i(2);
        break;
      case 2:
        i(2);
        i(3);
        break;
      case 3:
        i(2);
        i(3);
        i(4);
        break;

      default:
        console.log("매개변수 확인");
        break;
    }
  },
};

// 기능 단위로 함수를 만들자
function temp3(a) {
  for (let x = 1; x < 10; x++) {
    console.log(`${a} x ${x} = ${a * x}`);
  }
}

obj2.gugu(temp3);

// 콜 스택
// 스택은 데이터를 사용하기 위해서 잠시 저장해둠
// 후입 선출로 마지막에 추가된 데이터 부터 제거
// 함수 실행 컨텍스트 함수를 실행하게 되면 스택에 추가되고 반환될때 스택에서 제거됨
// 함수 실행 컨텍스트 : 함수가 실행될 때 마다 생성. 함수의 실행 정보를 가지고 있음
// 콜 스택은 함수가 실행되면 실행 컨텍스트 저장하는 스택의 구조
// 콜 스택은 컴퓨터의 메모리 크기나 운영체제에 따라 크기가 다름
// 콜 스택이 초과하게 되면 스택오버플로우 에러 발생 (더 이상 실행 불가능. 비워줘야함)
// 스택오버플로우는 함수를 무한으로 실행 할 시 나올 수 있다.

function fun1() {
  fun2();
}
function fun2() {
  fun3();
}
function fun3() {
  console.log("마지막 실행 함수");
}

// 전역 실행 컨택스트가 실행 -> fun1 함수 실행 컨택스트 생성 -> fun2 함수 실행 컨택스트 -> fun3 함수 실행 컨택스트 생성
// 마지막에 실행된 fun3 함수 실행 컨텍스트 제거 -> fun2 함수 실행 컨텍스트 제거 -> fun1 함수 실행 컨텍스트 제거
fun1();

// 콜 스택 확인하는 방법 (디버깅 용이)
// 1. 브라우저 개발자 모드에서 디버깅 모드 활성화
// 2. 코드줄 번호를 클릭하면 브레이크 포인트가 찍힘
// 3. 포인트를 찍어놓은 곳에서 코드가 실행되다 실행을 멈춤
// 4. 재생버튼을 눌러 다음 포인트가 있는 곳 까지 실행하다 멈춤

// 화살표 함수 =>
// ES6에서 새로나온 함수의 방식
// ES6 템플릿 리터럴
// => 으로 함수를 선언
// 선언 방식. ()안에 매개변수 입력
let temp4 = () => console.log("화살표 함수");
temp4();

// 화살표함수와 일반 함수의 차이
// 일반함수에서 값을 반환할때 return 식을 사용해서 반환하는 반면 화살표 함수는 return식 없이도 반환 가능

let temp5 = () => 5;

let ab = temp5();
console.log(ab);

// this 키워드 : 자바스크립트 객체를 참조하는 특별한 구문
// 일반 함수와 화살표 함수는 this가 가르키는 대상이 다음
// 일반 함수의 this : 함수가 실행될 위치(스코프)에서 this를 가져옴(다이나믹 스코프)
// 화살표 함수의 this :  선언한 위치에서 this를 가져옴(렉시컬 스코프)
// window 객체
// BOM(Brower Object model) : 브라우저를 객체 모델로 표현
// BOM 은 브라우저 기능들을 접근할 수 있는 객체

// 전역 공간에서 this 사용
let obj = {
  a: function () {
    b();
    // obj의 객체를 출력
    console.log(this);
    // 선언된 곳에서 this를 찾기 때문에 obj를 찾음
    let c = () => {
      console.log(this);
    };
    c();
  },
};

// 윈도우 함수 출력
function b() {
  console.log(this);
}

obj.a();
// 선언된 곳이 전역 공간이기 떄문에 윈도우 함수를 가져옴
let d = () => {
  console.log(this);
};

d();

// 비동기 함수 : 다른 작업이 돌아가는 중에도 따로 실행
// 비동기 함수 종류
// setTimeout : 비동기 함수이며 매개변수를 2개 받음. 첫번째 매개변수는 함수이고 2번째 매개변수는 숫자 타입으로 작성
setTimeout(function () {
  console.log("비동기 1초뒤 실행");
}, 1000);
console.log("동기");
// 동기 함수 : 순차적으로 실행. 하나의 작업이 끝나면 다음 작업 진행

// 변수를 선언할때 let, var, const 를 사용하지않고 선언 할 경우 window 키값으로 값이 추가되어 모든곳에서 적용됨

function temp6() {
  let b = 1;
  c = 11;
}
console.log(b);
console.log(c);
console.log(window.c);
