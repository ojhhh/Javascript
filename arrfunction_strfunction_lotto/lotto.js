// 로또 추첨기 만들기

// 로또 번호가 들어갈 배열
let lottoNum = [];

// 추첨 번호가 들어갈 배열
let res = [];

// 1. 로또는 숫자가 중복되면 안됨
// 2. 6개의 숫자 필요
// 3. 나온 6개의 숫자 출력

// 추첨 전에 세팅작업
function lottoInit() {
  // 로또 번호 모두 출력
  // 1에서 부터 45번까지 배열에 담음
  // 배열에 값을 추가하기전 초기화 해야하는지 확인하고 작업해야함
  lottoNum = [];
  for (let j = 1; j <= 45; j++) {
    lottoNum.push(j);
  }
  console.log("lotto setting" + lottoNum);
}

function lottoPlay() {
  res = [];
  // 추첨
  for (let i = 0; i < 6; i++) {
    // Math.floor() : 소수점은 버림
    // 1.5의 값이 나온다 했을때 소숫점은 버리고 1 출력(정수 출력)
    // 0부터 44번까지 랜덤한 숫자를 뽑아 인덱스로 사용
    let rndIndex = Math.floor(Math.random() * lottoNum.length);

    // 랜덤으로 뽑은 인덱스를 num에 저장
    let num = lottoNum[rndIndex];

    // 값이 중복되지 않게 하기 위해 배열에서 값을 제거
    // splice 함수 사용
    // 시작점(인덱스) , 시작점으로 부터 몇개를 제거할 것인지 매개변수로 전달
    // rndIndex 인덱스의 값 1개 제거
    // lottoNum 배열의 값이 제거되어 길이가 줄어들어도 랜던값을 구하는 과정에 lottoNum.length로 길이 값이 줄어들기 때문에 정상적으로 동작
    lottoNum.splice(rndIndex, 1);
    res.push(num);
  }
}

function main() {
  // 로또 세팅
  lottoInit();

  // 로또 추첨
  lottoPlay();

  console.log("로또 추첨 결과 : " + res);
}

// 함수 초기화나 play 같은 위의 코드 처럼 단위별로 기능을 정리해 두었을때 단위 테스트가 가능
// 단위별로 버그가 없는지 테스트가 가능
// 단위별 기능 오류가 없게 되면 통합 테스트를 진행
// 전체기능이 들어있는 함수를 만들고 함수가 실행될 떄마다 해당 기능이 동작할 수 있게 재사용성을 높힘
main();
main();
main();

// 작업을 단위로 정리해두는 습관들이기
