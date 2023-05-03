let signBtn = document.querySelector(".sign_up");
function isEmail(asValue) {
  var regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  // 정규식 형식이 맞으면 true 아니면 false 반환
  return regExp.test(asValue);
}
function isPassword(asValue) {
  var regExp =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

  return regExp.test(asValue);
}
signBtn.onclick = function () {
  // console.log("click");
  let userId = document.querySelector(".user_id").value;
  let userPw = document.querySelector(".user_pw").value;
  // console.log(userId, " ", userPw);

  console.log("email : ", isEmail(userId));
  console.log("password : ", isEmail(userPw));

  if (!isEmail(userId) || !isPassword(userPw)) {
    document.querySelector(".text").innerHTML = "id pw 확인";
  } else {
    document.querySelector(".text").innerHTML = "서버에 값으로 요청";
  }
};
