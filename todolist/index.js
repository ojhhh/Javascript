// 쿠키, 세션, 로컬 스토리지

// 쿠키

function createCookie(name, value) {
  // 현재 날짜와 시간 정보를 가지고 있는 객체 생성
  let date = new Date();
  // 10초 이후 시간 저장
  date.setTime(date.getTime() + 10000);
  document.cookie =
    name + "=" + value + ";expires=" + date.toUTCString() + ":path=/";
}

// createCookie("popup", true);

// 세션
// 브라우저를 이용하는 사용자의 상태를 관리할때 사용
// 로그인 서버쪽에서 세션 id를 생성하고 프론트에서 세션의 id를 서버에서 받아아 사용
// 로그인 유지를 시키기 위해서 세션 id를 사용해서 로그인이 유효한지 상태를 유지시키는 개념
// 브라우저가 종료될때까지 유지됨

// setItem 메소드 : 첫번째 매개변수 : 키/ 두번째 매개변수는 : 값
sessionStorage.setItem("Token", "date content");
// 세션의 저장된 데이터를 호출
// getItem : 세션에 저장된 데이터를 호출. 매개변수로 키값을 전달
console.log(sessionStorage.getItem("Token"));

// 문서에 내용을 쓰기
document.write(sessionStorage.getItem("Token"));

// 세션의 개수 구하기
console.log(sessionStorage.length);

// 세션의 키값을 인덱스로 호출
// key 메소드
document.write(sessionStorage.key(0));

// 세션 삭제
sessionStorage.clear();

// 로컬 스토리지
// 로컬 스토리지 추가
window.localStorage.setItem("key", "value");

// 로컬 스토리지에 있는 값을 호출
window.localStorage.getItem("key");

// 로컬스토리지에 있는 값 전체 제거
window.localStorage.clear();

// 로컬스토리지에 있는 값 개수 구하기
window.localStorage.length;

// 로컬스토리지 키값 호출
window.localStorage.key(0);
