// 팝업 여는 함수
function openPopup() {
  let popup = document.querySelector(".popup-wrap");
  console.log(popup);

  // popup.className는 문자열 그대로 대입
  // popup.classList는 메소드를 사용
  // popup.classList;

  // 클래스 구분을 줘야 하기 때문에 띄어쓰기를 해야함
  // popup.className = popup.className + " is-active";

  // 조건문으로 처리
  let strArr = popup.className.split(" ");

  // is-active 클래스가 있는지 확인
  // if (popup.classList.contains("is-active"))

  if (strArr.indexOf("is-active") != -1) {
    popup.classList.remove("is-active");
  } else {
    // popup.className = popup.className + " is-active";
    popup.classList.add("is-active");
  }

  //
}
