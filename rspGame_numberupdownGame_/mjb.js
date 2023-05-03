let gameMaxCount = 20;
let basicMoney = 20000;
let moneyMin = 0;
let moneyMax = basicMoney;
let pp = true;
let maxCnt = 0;
let playerCnt = 0;
let comCnt = 0;
let minBat = 1999;
let comM;
let playerM;
let player = "";
let bating = 0;
let comWin = 0;
let playerWin = 0;

let batt = true;

while (maxCnt < 20) {
  let comPlayer = parseInt(Math.random() * 3);

  player = prompt("가위바위보 입력");

  while (batt) {
    bating = parseInt(
      prompt(
        `배팅금액을 입력하세요.(2000원 이상 입력) \n 최소 : 2000 | 최대 ${basicMoney} | 남은 횟수 : ${
          20 - maxCnt
        }`
      )
    );
    if (bating > minBat && bating <= basicMoney) {
      batt = false;
    }
  }
  batt = true;

  switch (player) {
    case "바위":
      if (comPlayer == 0) {
        console.log("player : 바위, com : 바위 > 무승부입니다.");
      } else if (comPlayer == 1) {
        // console.log("player : 바위, com : 가위 > player 승리입니다.");
        playerWin++;
      } else if (comPlayer == 2) {
        // console.log("player : 바위, com : 보 > com 승리입니다.");
        comWin++;
      }

      if (player == "바위") {
        while (pp) {
          if (playerWin == 1) {
            comPlayer = parseInt(Math.random() * 3);
            player = prompt("가위바위보 player 승리 묵찌빠 입력 ", comPlayer);
          }

          if (playerWin == 1 && player == "묵" && comPlayer == 0) {
            basicMoney = basicMoney + bating * 2;
            console.log(
              `player : 묵, com : 묵 > player 묵찌빠 승리. +${bating * 2}`
            );
            playerWin = 0;
            playerCnt++;
            pp = false;
          } else if (playerWin == 1 && player == "찌" && comPlayer == 1) {
            basicMoney = basicMoney + bating * 2;
            console.log(
              `player : 찌, com : 찌 > player 묵찌빠 승리. +${bating * 2}`
            );

            playerWin = 0;
            playerCnt++;

            pp = false;
          } else if (playerWin == 1 && player == "빠" && comPlayer == 2) {
            basicMoney = basicMoney + bating * 2;
            console.log(
              `player : 빠, com : 빠 > player 묵찌빠 승리. +${bating * 2}`
            );

            playerWin = 0;
            playerCnt++;

            pp = false;
          } else if (playerWin == 1 && player == "묵" && comPlayer == 2) {
            comPlayer = parseInt(Math.random() * 3);
            player = prompt("묵찌빠 가위바위보 player 승리 묵찌빠 다시 입력 ");
          } else if (playerWin == 1 && player == "찌" && comPlayer == 0) {
            comPlayer = parseInt(Math.random() * 3);
            player = prompt("묵찌빠 가위바위보 player 승리 묵찌빠 다시 입력 ");
          } else if (playerWin == 1 && player == "빠" && comPlayer == 1) {
            comPlayer = parseInt(Math.random() * 3);
            player = prompt("묵찌빠 가위바위보 player 승리 묵찌빠 다시 입력 ");
          }

          if (comWin == 1) {
            comPlayer = parseInt(Math.random() * 3);
            player = prompt("가위바위보 com 승리 묵찌빠 입력 ");
          }

          if (comWin == 1 && player == "묵" && comPlayer == 0) {
            basicMoney = basicMoney - bating * 2;
            console.log(
              `player : 묵, com : 묵 > com 묵찌빠 승리. -${bating * 2}`
            );

            comWin = 0;
            comCnt++;
            pp = false;
          } else if (comWin == 1 && player == "찌" && comPlayer == 1) {
            basicMoney = basicMoney - bating * 2;
            console.log(
              `player : 찌, com : 찌 > com 묵찌빠 승리. -${bating * 2}`
            );

            comWin = 0;
            comCnt++;
            pp = false;
          } else if (comWin == 1 && player == "빠" && comPlayer == 2) {
            basicMoney = basicMoney - bating * 2;
            console.log(
              `player : 빠, com : 빠 > com 묵찌빠 승리. -${bating * 2}`
            );

            comWin = 0;
            comCnt++;

            pp = false;
          } else if (comWin == 1 && player == "묵" && comPlayer == 1) {
            comPlayer = parseInt(Math.random() * 3);
            player = prompt("묵찌빠 가위바위보 com 승리 묵찌빠 다시 입력 ");
          } else if (comWin == 1 && player == "찌" && comPlayer == 2) {
            comPlayer = parseInt(Math.random() * 3);
            player = prompt("묵찌빠 가위바위보 com 승리 묵찌빠 다시 입력 ");
          } else if (comWin == 1 && player == "빠" && comPlayer == 0) {
            comPlayer = parseInt(Math.random() * 3);
            player = prompt("묵찌빠 가위바위보 com 승리 묵찌빠 다시 입력 ");
          }
        }
        comWin = 0;
        playerWin = 0;
        pp = true;
      }

      break;

    case "가위":
      if (comPlayer == 0) {
        // console.log("player : 가위, com : 바위 > com 승리입니다.");
        comWin++;
      } else if (comPlayer == 1) {
        console.log("player : 가위, com : 가위 > 무승부입니다.");
      } else if (comPlayer == 2) {
        // console.log("player : 가위, com : 보 > player 승리입니다.");
        playerWin++;
      }

      if (playerWin == 1 || comWin == 1) {
        while (pp) {
          if (playerWin == 1) {
            comPlayer = parseInt(Math.random() * 3);
            player = prompt("가위바위보 player 승리 묵찌빠 입력 ");
          }

          if (playerWin == 1 && player == "묵" && comPlayer == 0) {
            basicMoney = basicMoney + bating * 2;
            console.log(
              `player : 묵, com : 묵 > player 묵찌빠 승리.  +${bating * 2}`
            );

            playerWin = 0;
            playerCnt++;
            pp = false;
          } else if (playerWin == 1 && player == "찌" && comPlayer == 1) {
            basicMoney = basicMoney + bating * 2;
            console.log(
              `player : 찌, com : 찌 > player 묵찌빠 승리.  +${bating * 2}`
            );

            playerWin = 0;
            playerCnt++;

            pp = false;
          } else if (playerWin == 1 && player == "빠" && comPlayer == 2) {
            basicMoney = basicMoney + bating * 2;
            console.log(
              `player : 빠, com : 빠 > player 묵찌빠 승리. +${bating * 2}`
            );

            playerWin = 0;
            playerCnt++;

            pp = false;
          } else if (playerWin == 1 && player == "묵" && comPlayer == 1) {
            comPlayer = parseInt(Math.random() * 3);
            player = prompt("묵찌빠 가위바위보 player 승리 묵찌빠 다시 입력 ");
          } else if (playerWin == 1 && player == "찌" && comPlayer == 2) {
            comPlayer = parseInt(Math.random() * 3);
            player = prompt("묵찌빠 가위바위보 player 승리 묵찌빠 다시 입력 ");
          } else if (playerWin == 1 && player == "빠" && comPlayer == 0) {
            comPlayer = parseInt(Math.random() * 3);
            player = prompt("묵찌빠 가위바위보 player 승리 묵찌빠 다시 입력 ");
          }

          if (comWin == 1) {
            comPlayer = parseInt(Math.random() * 3);
            player = prompt("가위바위보 player 승리 묵찌빠 입력 ");
          }

          if (comWin == 1 && player == "묵" && comPlayer == 0) {
            basicMoney = basicMoney - bating * 2;
            console.log(
              `player : 묵, com : 묵 > com 묵찌빠 승리. -${bating * 2}`
            );

            comWin = 0;
            comCnt++;
            pp = false;
          } else if (comWin == 1 && player == "찌" && comPlayer == 1) {
            basicMoney = basicMoney - bating * 2;
            console.log(
              `player : 찌, com : 찌 > com 묵찌빠 승리. -${bating * 2}`
            );

            comWin = 0;
            comCnt++;
            pp = false;
          } else if (comWin == 1 && player == "빠" && comPlayer == 2) {
            basicMoney = basicMoney - bating * 2;
            console.log(
              `player : 빠, com : 빠 > com 묵찌빠 승리. -${bating * 2}`
            );

            comWin = 0;
            comCnt++;

            pp = false;
          } else if (comWin == 1 && player == "묵" && comPlayer == 1) {
            comPlayer = parseInt(Math.random() * 3);
            player = prompt("묵찌빠 가위바위보 com 승리 묵찌빠 다시 입력 ");
          } else if (comWin == 1 && player == "찌" && comPlayer == 2) {
            comPlayer = parseInt(Math.random() * 3);
            player = prompt("묵찌빠 가위바위보 com 승리 묵찌빠 다시 입력 ");
          } else if (comWin == 1 && player == "빠" && comPlayer == 0) {
            comPlayer = parseInt(Math.random() * 3);
            player = prompt("묵찌빠 가위바위보 com 승리 묵찌빠 다시 입력 ");
          }
        }
        comWin = 0;
        playerWin = 0;
        pp = true;
      }

      break;

    case "보":
      if (comPlayer == 0) {
        // console.log("player : 보, com : 바위 > player 승리입니다.");
        playerWin++;
      } else if (comPlayer == 1) {
        // console.log("player : 보, com : 가위 > com 승리입니다.");
        comWin++;
      } else if (comPlayer == 2) {
        console.log("player : 보, com : 보 > 무승부입니다.");
      }

      if (playerWin == 1 || comWin == 1) {
        while (pp) {
          if (playerWin == 1) {
            comPlayer = parseInt(Math.random() * 3);
            player = prompt("가위바위보 player 승리 묵찌빠 입력 ");
          }

          if (playerWin == 1 && player == "묵" && comPlayer == 0) {
            basicMoney = basicMoney + bating * 2;
            console.log(
              `player : 묵, com : 묵 > player 묵찌빠 승리. +${bating * 2}`
            );

            playerWin = 0;
            playerCnt++;
            pp = false;
          } else if (playerWin == 1 && player == "찌" && comPlayer == 1) {
            basicMoney = basicMoney + bating * 2;
            console.log(
              `player : 찌, com : 찌 > player 묵찌빠 승리. +${bating * 2}`
            );

            playerWin = 0;
            playerCnt++;

            pp = false;
          } else if (playerWin == 1 && player == "빠" && comPlayer == 2) {
            basicMoney = basicMoney + bating * 2;
            console.log(
              `player : 빠, com : 빠 > player 묵찌빠 승리. -${bating * 2}`
            );

            playerWin = 0;
            playerCnt++;

            pp = false;
          } else if (playerWin == 1 && player == "묵" && comPlayer == 1) {
            comPlayer = parseInt(Math.random() * 3);
            player = prompt("묵찌빠 가위바위보 player 승리 묵찌빠 다시 입력 ");
          } else if (playerWin == 1 && player == "찌" && comPlayer == 2) {
            comPlayer = parseInt(Math.random() * 3);
            player = prompt("묵찌빠 가위바위보 player 승리 묵찌빠 다시 입력 ");
          } else if (playerWin == 1 && player == "빠" && comPlayer == 0) {
            comPlayer = parseInt(Math.random() * 3);
            player = prompt("묵찌빠 가위바위보 player 승리 묵찌빠 다시 입력 ");
          }

          if (comWin == 1) {
            comPlayer = parseInt(Math.random() * 3);
            player = prompt("가위바위보 player 승리 묵찌빠 입력 ");
          } else if (comWin == 1 && player == "묵" && comPlayer == 0) {
            console.log(
              `player : 묵, com : 묵 > com 묵찌빠 승리. -${bating * 2}`
            );
            basicMoney = basicMoney - bating * 2;

            comWin = 0;
            comCnt++;
            pp = false;
          } else if (comWin == 1 && player == "찌" && comPlayer == 1) {
            basicMoney = basicMoney - bating * 2;
            console.log(
              `player : 찌, com : 찌 > com 묵찌빠 승리. -${bating * 2}`
            );

            comWin = 0;
            comCnt++;
            pp = false;
          } else if (comWin == 1 && player == "빠" && comPlayer == 2) {
            basicMoney = basicMoney - bating * 2;
            console.log(
              `player : 빠, com : 빠 > com 묵찌빠 승리. -${bating * 2}`
            );

            comWin = 0;
            comCnt++;

            pp = false;
          } else if (comWin == 1 && player == "묵" && comPlayer == 1) {
            comPlayer = parseInt(Math.random() * 3);
            player = prompt("묵찌빠 가위바위보 com 승리 묵찌빠 다시 입력 ");
          } else if (comWin == 1 && player == "찌" && comPlayer == 2) {
            comPlayer = parseInt(Math.random() * 3);
            player = prompt("묵찌빠 가위바위보 com 승리 묵찌빠 다시 입력 ");
          } else if (comWin == 1 && player == "빠" && comPlayer == 0) {
            comPlayer = parseInt(Math.random() * 3);
            player = prompt("묵찌빠 가위바위보 com 승리 묵찌빠 다시 입력 ");
          }
        }
        comWin = 0;
        playerWin = 0;
        pp = true;
      }

      break;

    default:
      player = prompt("정확하게 가위바위보 입력");
      break;
  }
  if (basicMoney <= 0) {
    break;
  }
  maxCnt++;
}

console.log(`총 ${maxCnt + 1} 판 진행. 소지금 ${basicMoney}`);
// console.log("com 이긴 횟수 : ", comCnt);
// console.log("plyaer 이긴 횟수 : ", playerCnt);
// console.log("소지금액 : ", basicMoney);
