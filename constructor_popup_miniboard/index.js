// 생성자 함수. 객체를 함수로 만들때 사용
// 객체를 생성할 때 사용하는 함수
function createObj(_name, _atk, _def, _speed) {
  // 실행된 객체 참조
  this.name = _name;
  this.atk = _atk;
  this.def = _def;
  this.speed = _speed;
}

// createObj 함수를 가지고 객체를 생성하는 방법
// new : 새로운 키워드를 사용할수 있게 해줌 (메모리를 동적으로 사용 할 수 있게 할당)
// 새로운 객체를 생성하기 위한 메모리 공간
// new 키워드를 사용하여 빈 객체를 만들어주고 실행자 함수를 실행시켜 this를 활용하여 키값을 추가해주고 객체를 만듬

// 객체를 키와 값으로 만들어 하나의 오브젝트화
let obj = new createObj("고블린", 100, 100, 10);
console.log(obj);
let obj2 = new createObj("troll", 200, 200, 10);
console.log(obj2);

// 전역변수로만 프로그램을 관리하기에는 힘들기 때문에 오브젝트화 객체화 시킴
console.log(obj.name);
console.log(obj["name"]);
console.log(obj[0]);

let arr = [1, 2, 3, 4, 5];
arr.forEach((i) => {
  console.log(i);
});

// for in 반복문
for (const key in obj) {
  // key값이 순서대로 출력
  // console.log(key);

  console.log(obj);
  // console.log(obj.key); // undefined
  console.log(obj[key]);
}

// 페이지에 동적인 기능 추가
// BOM 브라우저 객체
// 브라우저의 기능들을 객체로 사용할 수 있게 해준것
console.log(window);

// onload 메소드 : 브라우저의 랜더링이 끝나고 보여줄 준비가 되었을떄 실행 되는 함수
window.onload = function () {
  // windows onload 키값에 함수값 전달
  console.log("randering");
};

// DOM(문서 객체 모델) : 문서를 객체의 모양으로 만든 것. 문서의 접근을 가능하게 해줌
// DOM은 페이지에 있는 태그들을 객체로 표현한것
// document 객체에서 태그를 선택하는 방법
// 객체를 이용하여 찾고싶은 태그를 자바스크립트로 가져와 사용할 수 있음
console.log(document);

// id 선택

// html 문서에 있는 div1이라는 id를 가진 태그를 가져옴
let div2 = document.getElementById("div1");
// id 값이 있는 태그는 변수처럼 사용가능
let div3 = div1;
// 가장 많이 쓰임
// querySelector 는 css 처럼 선택가능
let div4 = document.querySelector("#div1");

console.log(div2);
console.log(div3);
console.log(div4);

// class 선택
// console.log(class_div2); // 안됨
// class가 중복되있을경우 가장 처음있는 class의 내용을 가져옴
let div5 = document.querySelector(".class_div2");
console.log(div5);

// querySelectorAll 해당되는 전체 태그를 배열로 가져옴
let divArr = document.querySelectorAll(".class_div2");
console.log(divArr);
console.log(divArr[3]);

// 태그 이름 선택자
let div6 = document.querySelector("div");

// innerHTML : 태그에 내용 추가
div1.innerHTML = "gg";
console.log(div1.innerHTML);

div1.innerHTML = "<div>gg</div>";
console.log(div1.innerHTML);

div1.innerHTML = "<ul><li>gg</li></ul>";
console.log(div1.innerHTML);

let div7 = document.querySelector(".class_div2");
div7.innerHTML = "im class_div2 first";

let div8 = document.querySelectorAll(".class_div2");
div8[3].innerHTML = "im class_div2 four";

// button 기능

// 버튼을 누르면 함수 실행
function btnFn() {
  // class_div2 클래스를 가지고 있는 태그들을 class_div2 변수에 배열로 담음
  let class_div = document.querySelectorAll(".class_div2");
  // 배열을 반복하여 아이템을 매개변수로 받아옴
  class_div.forEach(function (i) {
    i.innerHTML = "push the button";
    // console.log(i);
  });
}

// html 함수를 가져와서 사용
