// 쿠키, 세션, 로컬스토리지

// 쿠키 : 사용자의 웹사이트 방문을 기록할 간단한 데이터. pc에 저장해 두었다 값을 호출해서 사용가능. 브라우저가 종료되도 남아있음
// 세션 : 브라우저가 동작되는 동안에 남아있는 데이터. 예) 로그인 되어있는 상태

// 쿠키
console.log(document.cookie);

// 쿠키 구조 : 키와 값이 있고 문자열로 저장가능

// name : 쿠키의 이름(키). value : 값. time : 유효시간
function createCookie(name, value, time) {
  // 쿠키 유효기간
  // 생성자로 시간과 날짜 년도를 정보를 제공해주는 객체 구현 가능
  let date = new Date();
  console.log(date);

  // 쿠키 유지시간을 하루동안으로 설정
  let _day = 1;
  // getTime() : 현재 시간을 밀리세컨드로 출력
  console.log(date.getTime() + _day * 24 * 60 * 60 * 1000);

  // setTime()
  date.setTime(date.getTime() + _day * 24 * 60 * 60 * 1000);
  // 지금 시간 기준으로 시간이 얼마나 지났는지 기록

  // 쿠키를 추가하는 방법
  // toUTCString  : 날짜, 시간 표시방법을 변경
  document.cookie =
    name + "=" + value + ";expires" + date.toUTCString() + ";path=/";

  console.log(date.toUTCString());
}

// createCookie("이벤트 팝업", "true", "");
// createCookie("이벤트 팝업2", "true2", "");
console.log(document.cookie);

function getCookie(name) {
  // = 제거 하고 배열로 변경
  let value = document.cookie.split("=");
  console.log(value);
  return value[1];
}

console.log(getCookie());

function getCookie2(name) {
  // match 메소드
  // 매개변수로 정규식 전달
  let value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  console.log(value);
  return value ? value[2] : null;
}

console.log(getCookie2("이벤트 팝업2"));

// 쿠키를 제거하는 함수
function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
}

deleteCookie("이벤트 팝업");
deleteCookie("이벤트 팝업2");

// 로컬 스토리지
// 로컬 스토리지 : 브라우저에 데이터를 저장하는 방법들중 하나. pc에 데이터가 저장되고 만료일이 없음

// window 객체 안에 있는 메소드를 사용
// getItem() : 값을 호출할 떄 사용. 키값을 매개변수로 전달
// window.localStorage.getItem();
// setItem() : 값을 키와 함꼐 저장,
// window.localStorage.setItem("user_id", "oh");
let a = window.localStorage.getItem("user_id");
console.log(a);
