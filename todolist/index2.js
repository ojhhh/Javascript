let _boxContents = document.querySelectorAll(".boxContent");
console.log(_boxContents);

// getBoundingClientRect() : 태그의 사각면을 구할 수 있음
// 반환된 객체의 값이 top left bottom right
console.log(_boxContents[0].getBoundingClientRect().top + window.pageYOffset);
console.log(_boxContents[1].getBoundingClientRect().top + window.pageYOffset);
console.log(_boxContents[2].getBoundingClientRect().top + window.pageYOffset);
console.log(_boxContents[3].getBoundingClientRect().top + window.pageYOffset);

let posY = [];
function init() {
  _boxContents.forEach(function (i) {
    // box 4개의 top값을 저장
    // 페이지를 새로고침했을때나 접속했을대 스크롤이내려가있으면 그값을 가져와 문제가 생김(상대좌료)
    posY.push(i.getBoundingClientRect().top + window.pageYOffset);
  });
}
init();
// console.log(window.pageYOffset);

window.onscroll = function () {
  // console.log("scrolling");
  // 브라우저 Y 스크롤 값을 불러옴
  console.log(window.scrollY);
  // 브라우저의 높이를 더해 주어 제일 밑단을 기준으로 바꿈
  console.log(window.scrollY + window.innerHeight);
  let _scroll = window.scrollY + window.innerHeight;

  _boxContents.forEach(function (i, index) {
    if (_scroll > posY[index]) {
      if (!i.classList.contains("is-active")) {
        i.classList.add("is-active");
      } else {
        i.classList.remove("is-active");
      }
    }
  });
};
