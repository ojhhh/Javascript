// DOM 내용 추가

// DOM 트리

// html - head - title
//      |      ㄴ meta
//      ㄴ body

// DOM 트리의 기본 단위를 노드라고 함
// 1.
// 문자를 태그사이에 넣어서 태그를 추가하는 방법
// document.querySelector(".add_class").innerHTML = "<div>태그내용</div>";

// 2.
// 노드에 추가하는 방법
// document.createElement : 태그 생성
// 생성된 태그는 메모리공간에 있음
let _div = document.createElement("div");
console.log(_div);
// 생성된 태그에 내용 추가
_div.innerHTML = "<div>test</div><p>content</p>";
// 생성된 태그에 클래스 추가
_div.classList.add("new_tag");

// 태그를 추가하고 싶은 위치에 추가

// append() : 태그를 원하는 위치에 추가 시켜주는 메소드
document.body.append(_div);
// 위치가 변하는 것을 보기위해 타이머 설정

setTimeout(() => {
  // add_class 아래 new_tag 추가
  // document.querySelector(".add_class").append(_div);
  // document.body.append(_div);
}, 2000);

// innerHTML 과 append()의 차이
// innerHTML : 문자로 내용이 들어가 보안이 취약
// append() : DOM 트리의 노드이기 때문에 보안에 좋고 태그작업을 세분화 할 수 있음

// 태그 내용 확인
console.log(_div.innerHTML);

// 태그의 내용에서 문자만 출력
// innerText : 태그 사이의 문자만 가져옴
console.log("_div.innerText : ", _div.innerText);

// 버튼 태그 생성
let _button = document.createElement("button");
_button.innerHTML = "누르면 _div 태그 내용 삭제";

// remove() : 태그 제거
// 태그의 자식 태그도 제거
// 자식태그만 지우려면 removeChild()를 사용해야함
_button.onclick = function () {
  // _div 태그 제거
  // _div.remove();
  // _div에 있는 자식 태그 제거
  // body 태그 아래 있는 new_class 태그 삭제
  document.body.removeChild(_div);
  // add_class 밑에 있는 new_class 태그 삭제
  // document.querySelector(".add_class").removeChild(_div);
};

document.body.append(_button);

// 이벤트를 구독 시킴
// addEventListener("이벤트타입", 함수);
// addEventListener 메소드의 매개변수로 구독할 이벤트의 이름을 전달
// addEventListener 메소드는 이벤트 누적 가능하여 추가가 가능하지만 onclick은 덮어씌움
_button.addEventListener("click", function () {
  console.log("addEventListener 구독 ");
});
_button.addEventListener("click", function () {
  console.log("addEventListener 구독2 ");
});

_button.onclick = function () {
  console.log("onclick 이벤트");
};
_button.onclick = function () {
  console.log("onclick 이벤트2");
};

console.log(_button.onclick);

// 이벤트 종류
// onload - 페이지 로딩이 끝났을때
// on이 붙으면 attribute 방식
window.onload = function () {
  console.log("window.onload");
};
// load 이벤트 구독
window.addEventListener("load", function () {
  // load이벤트가 실행되면 내용 실행
});

// onresize : 브라우저의 창 크기 바뀌면 실행되는 이벤트
window.onresize = function () {
  console.log("window.onresize");
};

window.addEventListener("resize", function () {
  console.log("window.onresize");
});

// scroll : 사용자가 태그나 페이지를 스크롤 했을때 동작
// 구독한 이벤트에서 스크롤의 변화가 있으면 이벤트 실행
_div.onscroll = function () {
  // 이벤트가 실행되면 출력
  console.log("_div.onscroll");
};
// body 태그에서 스크롤 변화가 있으면 이벤트 실행
document.body.onscroll = function () {};

// ====================================== //

// 키보드 이벤트
// onkeydown : 키보드를 누르자마자 이벤트 발생
window.onkeydown = function () {
  console.log("window.onkeydown");
};

// onkeyup : 키보드를 누르고 땟을때 이벤트 발생
window.onkeyup = function () {
  console.log("window.onkeyup");
};

// onkeypress : 키보드를 누르고 있을때 이벤트 발생
window.onkeypress = function () {
  console.log("window.onkeypress");
};

// ====================================== //
// 마우스 이벤트
// click : 사용자가 해당 태그를 클릭했을때 발생하는 이벤트
window.onclick = function () {
  console.log("window.onclick");
};

// dbclick : 더블 클릭 했을때 실행되는 함수
window.ondbclick = function () {
  console.log("window.ondbclick");
};

// mousedown과 mouseup을 활용해 드래그 기능을 만들 수 있음
// mousedown : 마우스를 누르자마자 실행되는 이벤트
window.onmousedown = function () {
  console.log("window.onmousedown");
};

// mouseup : 마우스를 누르고 땠을때 실행되는 이벤트
window.onmouseup = function () {
  console.log("window.onmouseup");
};

// mousemove : 마우스가 태그 내에서 이동되는 동안 실행되는 이벤트
// _div.onmousemove = function () { // 태그에서만 이벤트 적용 할때

window.onmousemove = function () {
  console.log("window.onmousemove");
};

let _box = document.querySelector(".box");
// mouseenter : 마우스를 태그에 올렸을때 실행되는 이벤트
_box.onmouseenter = function () {
  console.log("onmouseenter");
};

// mouseleave : 마우스가 태그에서 빠져나갔을때 실행되는 이벤트
_box.onmouseleave = function () {
  console.log("onmouseleave");
};

// ====================================== //
// 모바일 환경에서 실행되는 이벤트
// touchstart : 화면을 터치하는 순간 실행되는 이벤트
window.ontouchstart = function () {
  console.log("window.ontouchstart");
};

// touchend : 화면을 터치하고 땔때 실행되는 이벤트
window.ontouchend = function () {
  console.log("window.ontouchend");
};

// touchmove : 화면을 터치하고 이동할때 실행되는 이벤트
window.ontouchmove = function () {
  console.log("window.ontouchmove");
};

// ====================================== //
// 이벤트 매개변수 활용
// click 이벤트 매개변수
_box.onclick = function (event) {
  // 이벤트가 실행되면 이벤트의 내용이 값으로 넘어옴
  console.log(event);
  // event.target을 확용해 클릭된 태그를 가져옴
  console.log(event.target);
};

// 마우스의 위치를 가져옴
window.onmousemove = function (e) {
  // 이벤트 타입 확인
  console.log("이벤트 타입 : ", e.type);
  // 마우스 x 좌표값 표시. 좌표값은 px 단위
  console.log("마우스 좌표 X 값 : ", e.pageX);
  // 마우스 y 좌표값 표시. 좌표값은 px 단위
  console.log("마우스 좌표 Y 값 : ", e.pageY);
};

// 키보드 입력
window.onkeydown = function (e) {
  // e.keyCode : ascii 코드로 표현
  console.log(e.keyCode);
  if (e.keyCode == 65) {
    console.log("a 입력");
  }
};

// 기본동작 취소 방법
// button은 기본적으로 type이 submit이라 버튼을 누르면 페이지가 새로고침이 되는데
// preventDefault를 사용하여 기본기능을 삭제하여 화면이 새로고쳐지지 않음
let _button2 = document.querySelector(".btn_class");
_button2.onclick = function (e) {
  e.preventDefault();
};
