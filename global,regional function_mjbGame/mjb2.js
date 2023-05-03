// 묵찌빠 게임(함수)

// 1. 가위바위보 함수
// 2. 묵찌빠 함수
// 3. 최소, 최대 금액 함수

let comArr = ["가위", "바위", "보", "묵", "찌", "빠"];
let com1 = comArr[parseInt(Math.random() * 3)];
let com2;
let user1 = "";
let user2 = "";

let pp = true;
let chk = true;

let lsptxt = "";
let userWin = 0;
let comWin = 0;
let smsm = 0;
let wintxt = "";
let cnt = true;

let userCnt = 0;
let comCnt = 0;
let maxCnt = 0;

let money = 0;
let maxmoney = 20000;

// 가위바위보 함수
function lsp(a, b) {
  if (`${a}` == `${b}`) {
    console.log(`${maxCnt + 1} 회차 사용자 : ${a}, 컴퓨터 : ${b} > 무승부 승`);
    smsm++;
  }

  if (a == "가위") {
    if (a == "가위" && b == "바위") {
      console.log(
        `${maxCnt + 1} 회차 사용자 : ${a}, 컴퓨터 : ${b} > 가위바위보 컴퓨터 승`
      );
      comWin++;
    } else if (a == "가위" && b == "보") {
      console.log(
        `${maxCnt + 1} 회차 사용자 : ${a}, 컴퓨터 : ${b} > 가위바위보 사용자 승`
      );
      userWin++;
    }
  }

  if (a == "바위") {
    if (a == "바위" && b == "가위") {
      console.log(
        `${maxCnt + 1} 회차 사용자 : ${a}, 컴퓨터 : ${b} > 가위바위보 사용자 승`
      );
      userWin++;
    } else if (a == "바위" && b == "보") {
      console.log(
        `${maxCnt + 1} 회차 사용자 : ${a}, 컴퓨터 : ${b} > 가위바위보 컴퓨터 승`
      );
      comWin++;
    }
  }

  if (a == "보") {
    if (a == "보" && b == "가위") {
      console.log(
        `${maxCnt + 1} 회차 사용자 : ${a}, 컴퓨터 : ${b} > 가위바위보 컴퓨터 승`
      );
      comWin++;
    } else if (a == "보" && b == "바위") {
      console.log(
        `${maxCnt + 1} 회차 사용자 : ${a}, 컴퓨터 : ${b} > 가위바위보 사용자 승`
      );
      userWin++;
    }
  }

  if (userWin > 0) {
    wintxt = `${
      maxCnt + 1
    } 회차 사용자 : ${a}, 컴퓨터 : ${b} > 가위바위보 사용자 승`;
  }
  if (comWin > 0) {
    wintxt = `${
      maxCnt + 1
    } 회차 사용자 : ${a}, 컴퓨터 : ${b} > 가위바위보 컴퓨터 승`;
  }
}

// 묵찌빠 함수
function mjb() {
  // 가위바위보에서 유저가 이겼을때
  if (user1 != com1) {
    while (cnt) {
      if (userWin == 1) {
        user2check();
        com2 = comArr[parseInt(Math.random() * 3 + 3)];

        if (`${user2}` == `${com2}`) {
          console.log(
            `${
              maxCnt + 1
            } 회차 사용자 : ${user2}, 컴퓨터 : ${com2} > 묵찌빠 사용자 승`
          );
          userWin = 0;
          comWin = 0;

          userCnt++;
          maxmoney = maxmoney + money * 2;
          cnt = false;
        } else if (user2 == "묵" && com2 == "찌") {
          console.log(
            `${
              maxCnt + 1
            } 회차 사용자 : ${user2}, 컴퓨터 : ${com2} > 묵찌빠 가위바위보 사용자 승리 다시 묵찌빠 입력`
          );
        } else if (user2 == "찌" && com2 == "빠") {
          console.log(
            `${
              maxCnt + 1
            } 회차 사용자 : ${user2}, 컴퓨터 : ${com2} > 묵찌빠 가위바위보 사용자 승리 다시 묵찌빠 입력`
          );
        } else if (user2 == "빠" && com2 == "묵") {
          console.log(
            `${
              maxCnt + 1
            } 회차 사용자 : ${user2}, 컴퓨터 : ${com2} > 묵찌빠 가위바위보 사용자 승리 다시 묵찌빠 입력`
          );
        } else if (user2 == "묵" && com2 == "빠") {
          console.log(
            `${
              maxCnt + 1
            } 회차 사용자 : ${user2}, 컴퓨터 : ${com2} > 묵찌빠 가위바위보 컴퓨터 승리 공수전환 묵찌빠 입력`
          );
          uesrWin = 0;
          comWin++;
        } else if (user2 == "찌" && com2 == "묵") {
          console.log(
            `${
              maxCnt + 1
            } 회차 사용자 : ${user2}, 컴퓨터 : ${com2} > 묵찌빠 가위바위보 컴퓨터 승리 공수전환 묵찌빠 입력`
          );
          uesrWin = 0;
          comWin++;
        } else if (user2 == "빠" && com2 == "찌") {
          console.log(
            `${
              maxCnt + 1
            } 회차 사용자 : ${user2}, 컴퓨터 : ${com2} > 묵찌빠 가위바위보 컴퓨터 승리 공수전환 묵찌빠 입력`
          );
          uesrWin = 0;
          comWin++;
        }
      }

      // 가위바위보에서 컴퓨터가 이겼을떄
      if (comWin == 1) {
        user2check();
        com2 = comArr[parseInt(Math.random() * 3 + 3)];
        if (`${user2}` == `${com2}`) {
          console.log(
            `${
              maxCnt + 1
            } 회차 사용자 : ${user2}, 컴퓨터 : ${com2} > 묵찌빠 컴퓨터 승`
          );
          comWin = 0;
          userWin = 0;

          comCnt++;
          maxmoney = maxmoney - money * 2;
          cnt = false;
        } else if (user2 == "묵" && com2 == "빠") {
          console.log(
            `${
              maxCnt + 1
            } 회차 사용자 : ${user2}, 컴퓨터 : ${com2} > 묵찌빠 가위바위보 컴퓨터 승리 다시 묵찌빠 입력`
          );
        } else if (user2 == "찌" && com2 == "묵") {
          console.log(
            `${
              maxCnt + 1
            } 회차 사용자 : ${user2}, 컴퓨터 : ${com2} > 묵찌빠 가위바위보 컴퓨터 승리 다시 묵찌빠 입력`
          );
        } else if (user2 == "빠" && com2 == "찌") {
          console.log(
            `${
              maxCnt + 1
            } 회차 사용자 : ${user2}, 컴퓨터 : ${com2} > 묵찌빠 가위바위보 컴퓨터 승리 다시 묵찌빠 입력`
          );
        } else if (user2 == "묵" && com2 == "찌") {
          console.log(
            `${
              maxCnt + 1
            } 회차 사용자 : ${user2}, 컴퓨터 : ${com2} > 묵찌빠 가위바위보 사용자 승리 공수전환 묵찌빠 입력`
          );
          comWin = 0;
          userWin++;
        } else if (user2 == "찌" && com2 == "묵") {
          console.log(
            `${
              maxCnt + 1
            } 회차 사용자 : ${user2}, 컴퓨터 : ${com2} > 묵찌빠 가위바위보 사용자 승리 공수전환 묵찌빠 입력`
          );
          comWin = 0;
          userWin++;
        } else if (user2 == "빠" && com2 == "찌") {
          console.log(
            `${
              maxCnt + 1
            } 회차 사용자 : ${user2}, 컴퓨터 : ${com2} > 묵찌빠 가위바위보 사용자 승리 공수전환 묵찌빠 입력`
          );
          comWin = 0;
          userWin++;
        }
      }
    }
    cnt = true;
  }
}

function don() {
  money = parseInt(prompt(`배팅 금액 입력 최소 : 2000 최대 : ${maxmoney}`));

  if (money > `${maxmoney}` || money < 2000) {
    while (cnt) {
      if (money > `${maxmoney}`) {
        money = parseInt(
          prompt(
            `배팅 최대 금액은 ${maxmoney} 입니다.\n배팅 금액 입력 최소 : 2000 최대 : ${maxmoney}`
          )
        );
      } else if (money < 2000) {
        money = parseInt(
          prompt(
            `배팅 최소 금액은 2000 입니다.\n배팅 금액 입력 최소 : 2000 최대 : ${maxmoney}`
          )
        );
      } else if (money <= `${maxmoney}` && money >= 2000) {
        cnt = false;
      }
    }
  }
  cnt = true;
}

function endgame() {
  if (maxCnt >= 20) {
    pp = false;
  }
  if (maxmoney <= 0) {
    pp = false;
  }
}
function user1check() {
  user1 = prompt("가위 바위 보 입력 ");
  if (user1 !== "가위" && user1 !== "바위" && user1 !== "보") {
    while (chk) {
      user1 = prompt(`잘못입력하셧습니다.\n가위 바위 보 입력 `);
      if (user1 == "가위" || user1 == "바위" || user1 == "보") {
        chk = false;
      }
    }
  }
  chk = true;
}
function user2check() {
  user2 = prompt(`${wintxt}\n묵 찌 빠 입력`);

  if (user2 !== "묵" && user2 !== "찌" && user2 !== "빠") {
    while (chk) {
      user2 = prompt(`잘못입력하셧습니다.\n${wintxt}\n묵 찌 빠 입력`);
      if (user2 == "묵" || user1 == "찌" || user1 == "빠") {
        chk = false;
      }
    }
  }
  chk = true;
}

// 메인
while (pp) {
  don();

  user1check();

  lsp(user1, com1);

  mjb();

  maxCnt++;

  endgame();
}

console.log(
  `${maxCnt}번 진행 \n 무승부 : ${smsm}번 \n 사용자 승 : ${userCnt}번 \n 컴퓨터 승 : ${comCnt}번\n 남은 금액 : ${maxmoney}`
);
