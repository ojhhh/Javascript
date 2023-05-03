// 클릭의 시작 위치를 가지고 있고 끝나면 끝난 좌표와 비교를 해서 움직일 위치를 정함

let _start;
let _index = 1;

let _swiper = document.querySelector(".swiper");
let _swiperContent = document.querySelector(".swiper-content");

let { length } = document.querySelectorAll(".swiper-item");

let _prev = document.querySelector(".prev");
let _next = document.querySelector(".next");

// 적용된 스타일 값을 가져옴
let _swiperWidth = parseInt(getComputedStyle(_swiper).width);

_swiper.addEventListener("mousedown", function (e) {
  console.log(e);
  e.clientX;
  _start = e.clientX;
  console.log(_start);
});

_swiper.addEventListener("mouseup", function (e) {
  if (e.clientX + 50 < _start) {
    if (_index < length - 1) {
      _index++;
      swiperMove();
    }
  } else {
    if (_index > 0 && e.clientX - 50 > _start) {
      _index--;
      swiperMove();
    }
  }
});

// 인덱스를 기준으로 움직임
function swiperMove() {
  _swiperContent.style.left = -(_index * _swiperWidth) + "px";
  let num1 = 0 + "px";
  let num2 = -3000 + "px";
  console.log(_swiperContent.style.left);
  if (_swiperContent.style.left == num1) {
    setTimeout(() => {
      _swiperContent.style.transition = `all 0s ease 0s`;

      _swiperContent.style.left = -2500 + "px";
      _index = length - 2;
    }, 1000);
  }

  if (_swiperContent.style.left == num2) {
    setTimeout(() => {
      _swiperContent.style.transition = `all 0s ease 0s`;

      _swiperContent.style.left = -500 + "px";
      _index = 1;
      console.log(_swiperContent.style.left);
    }, 1000);
  }
  _swiperContent.style.transition = `all 1s ease 0s`;
}

_prev.addEventListener("click", function () {
  if (_index > 0) {
    _index--;
    swiperMove();
  }
});
_next.addEventListener("click", function () {
  if (_index < length - 1) {
    _index++;
    swiperMove();
  }
});
