let popupBtn = document.querySelector(".popup-btn");
let popupEvent = document.querySelector(".event-btn");
let popupCookie = getCookie("event-popup");

function popupOpen() {
  let popup = document.querySelector(".popup-wrap");
  if (popup.classList.contains("is-on")) {
    popup.classList.remove("is-on");
  } else {
    popup.classList.add("is-on");
  }
}

popupBtn.addEventListener("click", popupOpen);
popupOpen();

popupEvent.addEventListener("click", function () {
  console.log("event");
  // 쿠키 추가
  setCookie("event-popup", true, 10);
  location.reload();
});

// 쿠키 추가 ========================================================= //

function setCookie(name, value, time) {
  let date = new Date();
  date.setTime(date.getTime() + time * 1000);
  let str = name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
  let str2 = getCookieTime(str);
  // 문자열로 데이터를 저장하는데 값이 여러개일 경우 배열이나 객체를 사용
  // 문자열을 받아서 객체로 변환
  document.cookie =
    name +
    "=" +
    `{"value" : "${value}", "time" : "${str2}"}` +
    ";expires=" +
    date.toUTCString() +
    ";path=/";
}

// 쿠키값이 없으면 팝업 작동
if (popupCookie != undefined) {
  popupOpen();
}

function getCookie(name) {
  var i,
    x,
    y,
    ARRcookies = document.cookie.split(";");
  for (i = 0; i < ARRcookies.length; i++) {
    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
    x = x.replace(/^\s+|\s+$/g, "");
    if (x == name) {
      return unescape(y);
    }
  }
}

function getCookieTime(cookie) {
  console.log(cookie);
  // 쿠키 문자열을 배열로 변환
  let str = cookie.split(";");
  console.log(str);

  let str2 = str.find(function (i) {
    let temp = i.trim();
    return temp.startsWith("expires=");
    // trim 메소드 : 문자열 양끝 공백 제거
    // startsWith 메소드 : 해당 문자로 시작하는지 확인 매개변수로 시작하는 문자열 전달
    // let _bool = i.trim().startsWith("expires=");
    // if (_bool) {
    //   return new Date()
    // } else {
    //   return null;
    // }
  });
  console.log(str2);
  if (str2) {
    let str3 = str2.trim();
    console.log(str3);
    // 쿠키의 시간을 가져와 Date 객체로 생성
    return new Date(str3.slice(9));
  } else {
    return null;
  }
}

function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
}

// 시간이 차이나는 값 만들기
function times(time) {
  // 밀리초로 생성
  let day = Math.floor(time / (24 * 60 * 60 * 1000));
  time %= 24 * 60 * 60 * 1000;
  console.log(time);
  let hour = Math.floor(time / (60 * 60 * 1000));
  time %= 60 * 60 * 1000;
  let min = Math.floor(time / (60 * 1000));
  time %= 60 * 1000;
  let sec = Math.floor(time / 1000);
  return day + "일 " + hour + "시간 " + min + "분 " + sec + "초";
}

// 비동기 함수
// setInterval() : 매초마다 동작하는 함수
let setTime = setInterval(() => {
  let date2 = new Date();
  // // 객체가 아닌 값이 들어옴
  let timetag = document.querySelector(".popup-time");
  if (popupCookie != undefined) {
    let time = JSON.parse(popupCookie).time;
    let date = new Date(time);
    timetag.innerHTML = times(popupTime(date, date2));
  } else {
    timetag.innerHTML = "Time Over";
  }
}, 1000);

function popupTime(date1, date2) {
  return date1.getTime() - date2.getTime();
}

function times(time) {
  let day = Math.floor(time / (24 * 60 * 60 * 1000));
  time %= 24 * 60 * 60 * 1000;
  let hour = Math.floor(time / (60 * 60 * 1000));
  time %= 60 * 60 * 1000;
  let min = Math.floor(time / (60 * 1000));
  time %= 60 * 1000;
  let sec = Math.floor(time / 1000);

  if (time <= 0) {
    // setInterval()을 멈춤. 매개변수로 전달
    clearInterval(setTime);
    let timetag = document.querySelector(".popup-time");
    timetag.innerHTML = "";
    popupOpen();
  }

  return `${day}일 ${hour}시 ${min}분 ${sec}초`;
}
