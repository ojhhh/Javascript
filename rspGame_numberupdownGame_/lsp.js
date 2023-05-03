// 가위바위보 만들기

let tt = true;

while (tt) {
  let comlan = parseInt(Math.random() * 3);
  let abc = prompt("가위바위보 입력");

  if (comlan == 0) {
    comlan = "바위";
  } else if (comlan == 1) {
    comlan = "가위";
  } else {
    comlan = "보";
  }
  switch (abc) {
    case "바위":
      if (comlan == "가위") {
        console.log("사용자 : 바위, 컴퓨터 : 가위 > 사용자가 승리하였습니다.");
        tt = false;
      } else if (comlan == "바위") {
        console.log("사용자 : 바위, 컴퓨터 : 바위 > 무승부");
      } else {
        console.log("사용자 : 바위, 컴퓨터 : 보 > 컴퓨터가 승리하였습니다.");
      }
      break;
    case "가위":
      if (comlan == "가위") {
        console.log("사용자 : 가위, 컴퓨터 : 가위 > 무승부");
      } else if (comlan == "바위") {
        console.log("사용자 : 가위, 컴퓨터 : 바위 > 컴퓨터가 승리하였습니다.");
      } else {
        console.log("사용자 : 가위, 컴퓨터 : 보 > 사용자가 승리하였습니다.");
        tt = false;
      }
      break;
    case "보":
      if (comlan == "가위") {
        console.log("사용자 : 보, 컴퓨터 : 가위 > 컴퓨터가 승리하였습니다.");
      } else if (comlan == "바위") {
        console.log("사용자 : 보, 컴퓨터 : 바위 > 사용자가 승리하였습니다.");
        tt = false;
      } else {
        console.log("사용자 : 보, 컴퓨터 : 보 > 무승부");
      }
      break;

    default:
      abc = prompt("가위바위보를 정확하게 입력해주세요.");
      break;
  }
}
