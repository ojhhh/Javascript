// 가위바위보 배열 생성
let gameArr = ["scissors", "rock", "paper"];
// 묵찌빠 배열 생성
let mjbArr = ["mm", "jj", "bb"];

// 가위바위보 버튼 태그 정보를 가져옴
let playerBtns = document.querySelectorAll(".player-btn");
// 플레이어의 가위바위보 선택 정보를 가져옴
let playerSelect = document.querySelector(".player-select");

// 묵찌빠 버튼 태그 정보를 가져옴
let mjbBtns = document.querySelectorAll(".mjb-btn");
// 플레이어의 묵찌빠 선택 정보를 가져옴
let playerPick = document.querySelector(".player-pick");

// 커버를 씌우기 위해 부모태그를 가져옴
let wwrap = document.querySelector(".wrap");
let wwrap2 = document.querySelector(".wrap2");

// 난이도 태그
let lv1 = document.querySelector(".level1");
let lv2 = document.querySelector(".level2");
let lv3 = document.querySelector(".level3");

// 플레이어 및 컴퓨터 소지금
let playerMoney = document.querySelector(".pmoney");
let comMoney = document.querySelector(".cmoney");

// 플레이어와 컴퓨터의 가위바위보 승리를 판별하기 위해
let plwin = false;
let comwin = false;

// 플레이어와 컴퓨터 기본 소지금
let plm = 0;
let comm = 50000;

// 배팅금액을 받기 위하 변수 생성
let bat = 0;

// 난이도 선택시 번호를 받기 위한 변수
let level = 0;

// 플레이어의 이름과 소지금을 받기 위한 생성자 함수 생성
function createplayer({ name, money }) {
  this.name = name;
  this.money = money;
}

// 플레이어와 컴퓨터 정보 생성
let p1 = new createplayer({
  name: "플레이어",
  money: plm,
});
let p2 = new createplayer({
  name: "컴퓨터",
  money: comm,
});

// 난이도 쉬움 선택
function level1() {
  if (level != 0) {
    return;
  }
  level = 1;
  lv1.style.fontSize = "25px";
  lv1.style.fontWeight = "bold";
  lv2.style.fontSize = "16px";
  lv3.style.fontSize = "16px";

  moneyrender(100000);

  init();
}

// 난이도 어려움 선택
function level2() {
  if (level != 0) {
    return;
  }
  level = 2;
  lv1.style.fontSize = "16px";
  lv2.style.fontSize = "25px";
  lv2.style.fontWeight = "bold";
  lv3.style.fontSize = "16px";

  moneyrender(50000);

  init();
}

// 난이도 매우 어려움 선택
function level3() {
  if (level != 0) {
    return;
  }
  level = 3;
  lv1.style.fontSize = "16px";
  lv2.style.fontSize = "16px";
  lv3.style.fontSize = "25px";
  lv3.style.fontWeight = "bold";

  moneyrender(10000);

  init();
}

// 사용자 금액 출력
function moneyrender(a) {
  p1.money += a;
  playerMoney.innerHTML = `<h2>${p1.name} 소지금</h2>\n<span>${p1.money}</span>`;
  plwin = false;
  if (p1.money <= 0) {
    alert("컴퓨터가 승리하였습니다.");
    location.reload();
  }
}

// 컴퓨터 금액 출력
function cmoneyrender(a) {
  p2.money += a;
  comMoney.innerHTML = `<h2>${p2.name} 소지금</h2>\n<span>${p2.money}</span>`;
  comwin = false;
  if (p2.money <= 0) {
    alert("플레이어가 승리하였습니다.");
    location.reload();
  }
}

// 가위바위보 끝났을때 버튼 숨기고 커버 씌우기
function rsphidden() {
  wwrap.classList.add("cover");
  wwrap2.classList.remove("cover");
  playerBtns.forEach(function (a, b) {
    playerBtns[b].classList.add("btnhidden");
  });
  mjbBtns.forEach(function (a, b) {
    mjbBtns[b].classList.remove("btnhidden");
  });
}

// 묵찌빠 끝났을때 버튼 숨기고 커버 씌우기
function mjbhidden() {
  wwrap.classList.remove("cover");
  wwrap2.classList.add("cover");
  playerBtns.forEach(function (a, b) {
    playerBtns[b].classList.remove("btnhidden");
  });
  mjbBtns.forEach(function (a, b) {
    mjbBtns[b].classList.add("btnhidden");
  });
}

// 난이도 선택시 함수 실행
function init() {
  // 게임 시작시 묵찌빠 버튼 가림
  mjbBtns.forEach(function (a, b) {
    mjbBtns[b].classList.add("btnhidden");
  });

  bat = prompt("배팅금액을 입력하세요.");

  gameArr.forEach(function (item, index) {
    playerBtns[index].addEventListener("click", function () {
      playerSelect.className = "player-select " + item;
      // 구조분해할당으로 내용을 받아옴
      let { value, text } = gameStart(item);
      // value 출력
      document.querySelector(".result").innerHTML = value;
      // text 출력
      document.querySelector(".subResult").innerHTML = text;
    });
  });
  // 묵찌빠 게임
  mjbArr.forEach(function (a, b) {
    mjbBtns[b].addEventListener("click", function () {
      playerPick.className = "player-pick " + a;

      let { v, t } = mjb(a);
      document.querySelector(".mjbresult").innerHTML = v;
      document.querySelector(".mjbsubResult").innerHTML = t;
    });
  });
}

// 가위바위보 게임 함수
function gameStart(player) {
  // 랜덤값을 이용하여 gameArr에 있는 가위,바위,보 중 하나를 가져옴
  let comSelect = gameArr[Math.floor(Math.random() * gameArr.length)];
  document.querySelector(".com-select").className = "com-select " + comSelect;

  // 함수가 실행되면 객체를 반환함
  if (player == comSelect) {
    return { value: "무승부", text: "다시" };
  } else if (
    (player == "rock" && comSelect == "scissors") ||
    (player == "paper" && comSelect == "rock") ||
    (player == "scissors" && comSelect == "paper")
  ) {
    plwin = true;
    rsphidden();

    return { value: "플레이어 승리", text: "ㅊㅋ" };
  } else {
    comwin = true;
    rsphidden();
    return { value: "플레이어 패배", text: "ㅅㄱ" };
  }
}

// 묵찌빠 게임 함수
function mjb(a) {
  let comPick = mjbArr[Math.floor(Math.random() * mjbArr.length)];
  let ww = parseInt(Math.floor(Math.random() * 2 + 2));
  let winmoney = bat * ww;
  let losemoney = -(bat * ww);
  document.querySelector(".com-pick").className = "com-pick " + comPick;
  if (
    (plwin == true && a == "jj" && comPick == "jj") ||
    (plwin == true && a == "mm" && comPick == "mm") ||
    (plwin == true && a == "bb" && comPick == "bb")
  ) {
    mjbhidden();
    moneyrender(winmoney);
    cmoneyrender(losemoney);
    return { v: "플레이어 승", t: `+${winmoney}` };
  }
  if (
    (comwin == true && a == "jj" && comPick == "jj") ||
    (comwin == true && a == "mm" && comPick == "mm") ||
    (comwin == true && a == "bb" && comPick == "bb")
  ) {
    mjbhidden();
    moneyrender(losemoney);
    cmoneyrender(winmoney);
    return { v: "컴퓨터 승", t: `+${winmoney}` };
  }

  if (
    (a == "jj" && comPick == "mm") ||
    (a == "mm" && comPick == "bb") ||
    (a == "bb" && comPick == "jj")
  ) {
    plwin = false;
    comwin = true;
    return { v: "컴퓨터 가위바위보 승", t: "" };
  }

  if (
    (comPick == "jj" && a == "mm") ||
    (comPick == "mm" && a == "bb") ||
    (comPick == "bb" && a == "jj")
  ) {
    plwin = true;
    comwin = false;
    return { v: "플레이어 가위바위보 승", t: "" };
  }
}
