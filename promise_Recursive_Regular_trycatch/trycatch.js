// 예외처리문

// try-catch문
// 코드 실행중 예외상황이 발생해도 프로그램이 종료되지 않고 프로그램 실행 유지
// 프로그램의 안정성을 높힐 수 있다.

// try {
// 오류가 발생할 거 같은 코드 작성하는 곳
// } catch (error) {
// 오류가 발생했을때 실행되는 코드를 작성하는 곳
// }

try {
  // throw : 에러 메시지를 던짐
  if (5 == 6) throw "Err";
} catch (error) {
  console.log(error);
}

function myStr() {
  let devValue = document.querySelector(".dev").value;
  try {
    if (devValue == "") throw "숫자를 입력해주세요.";
    // Number 타입으로 변경해주는 생성자 함수
    devValue = Number(devValue);
    // 문자가 숫자로 변환 될수 없음
    if (isNaN(devValue)) throw "잘못 입력하였습니다. 숫자를 입력해주세요.";
  } catch (error) {
    document.querySelector(".message").innerHTML = error;
  }
}
