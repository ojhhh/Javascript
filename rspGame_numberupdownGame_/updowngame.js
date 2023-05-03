// 숫자 업다운 게임 만들기

// 플레어와 컴퓨터 둘이 진행
// 플레이어는 선택 할 수 있고 컴퓨터는 랜덤 값
// 플레이어가 선택할 수 있는 제어문
// 게임 종료시점을 정함

let playerSelect;
// 1 ~ 100까지 랜덤 숫자 생성
let comSelect = parseInt(Math.random() * 99 + 1);

// 게임 시도 횟수
let count = 0;

// 플레이어가 선택가능한 최대 숫자를 조절
let max = 100;
// 플레이어가 선택가능한 최소 숫자를 조절
let min = 0;

// 컴퓨터가 알려줄 문구
let subText = "";
let maxCount = parseInt(prompt("게임 횟수"));

while (playerSelect !== comSelect && count < maxCount) {
  // ES6에서 문자열을 사용할 떄 편하게 사용할 수 있는 기법
  // 템플릿 리터럴 문자를 다룰때 줄바꿈을 편하게 사용할 수 있게 해줌
  // ` : 백틱이라 부름 (option + `)
  // `${변수}문자열`

  playerSelect = prompt(
    `${subText}\n숫자를 입력하세요 \n 최소 : ${min} | 최대 ${max} | 남은 횟수 : ${
      maxCount - count
    }`
  );
  // 입력된 값이 입력된 경우
  // playselect = parseInt(playselect);
  // isNaN : 숫자가 아닌 값을 입력했는지 확인할때 사용
  if (isNaN(playerSelect)) {
    subtext = "숫자를 입력하세요.";
    // continue 구문 부터 읽지 않고 다시 반복문의 시작점으로 돌아감
    continue;
  }
  // 범위내의 값이 맞는지 확인
  if (min >= playerSelect || max <= playerSelect) {
    subText = `입력값을 확인하세요 최소 : ${min} | 최대 : ${max}`;
    continue;
  }
  // 게임 로직
  if (playerSelect > comSelect) {
    // max 최대값을 다시 겹치지 않게 입력
    max = playerSelect;
    subText = "다운";
  } else if (playerSelect < comSelect) {
    // min 최소값을 다시 겹치지 않게 입력
    min = playerSelect;
    subText = "업";
  } else {
    count = count + 1;
    console.log(`${count} 번 만에 맞췄습니다.`);
    break;
  }
  // 게임 횟수 증가
  count++;
  if (count >= maxCount) {
    console.log("gameover");
  }
}
