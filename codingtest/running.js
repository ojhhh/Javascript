// 달리기 경주
// 문제 설명
// 얀에서는 매년 달리기 경주가 열립니다. 해설진들은 선수들이 자기 바로 앞의 선수를 추월할 때 추월한 선수의 이름을 부릅니다. 예를 들어 1등부터 3등까지 "mumu", "soe", "poe" 선수들이 순서대로 달리고 있을 때, 해설진이 "soe"선수를 불렀다면 2등인 "soe" 선수가 1등인 "mumu" 선수를 추월했다는 것입니다. 즉 "soe" 선수가 1등, "mumu" 선수가 2등으로 바뀝니다.

// 선수들의 이름이 1등부터 현재 등수 순서대로 담긴 문자열 배열 players와 해설진이 부른 이름을 담은 문자열 배열 callings가 매개변수로 주어질 때, 경주가 끝났을 때 선수들의 이름을 1등부터 등수 순서대로 배열에 담아 return 하는 solution 함수를 완성해주세요.

// 제한사항
// 5 ≤ players의 길이 ≤ 50,000
// players[i]는 i번째 선수의 이름을 의미합니다.
// players의 원소들은 알파벳 소문자로만 이루어져 있습니다.
// players에는 중복된 값이 들어가 있지 않습니다.
// 3 ≤ players[i]의 길이 ≤ 10
// 2 ≤ callings의 길이 ≤ 1,000,000
// callings는 players의 원소들로만 이루어져 있습니다.
// 경주 진행중 1등인 선수의 이름은 불리지 않습니다.
// 입출력 예
// players	callings	result
// ["mumu", "soe", "poe", "kai", "mine"]	["kai", "kai", "mine", "mine"]	["mumu", "kai", "mine", "soe", "poe"]
// 입출력 예 설명
// 입출력 예 #1

// 4등인 "kai" 선수가 2번 추월하여 2등이 되고 앞서 3등, 2등인 "poe", "soe" 선수는 4등, 3등이 됩니다. 5등인 "mine" 선수가 2번 추월하여 4등, 3등인 "poe", "soe" 선수가 5등, 4등이 되고 경주가 끝납니다. 1등부터 배열에 담으면 ["mumu", "kai", "mine", "soe", "poe"]이 됩니다.

function solution(players, callings) {
  // players 배열을 순회하면서, 각 player의 이름을 키로, 해당 player의 인덱스를 값으로 가지는 playerIndex 객체를 생성
  // 이렇게 하면 callings 배열을 순회하면서 각 player의 위치를 즉시 찾음
  let playerIndex = players.reduce((obj, player, index) => {
    obj[player] = index; // player의 이름을 키로, 해당 인덱스를 값으로 obj에 추가
    return obj;
  }, {});

  // callings 배열을 순회합니다.
  for (let calling of callings) {
    let index = playerIndex[calling]; // 현재 calling player의 위치를 찾음

    // player가 배열의 첫 번째 요소가 아닌 경우에만 위치를 변경
    if (index > 0) {
      // player와 그 앞의 player의 위치를 교환합니다.
      players[index] = players[index - 1]; // 현재 player의 위치에 이전 player를 넣음
      players[index - 1] = calling; // 이전 player의 위치에 현재 player를 넣음

      // playerIndex 객체를 업데이트합니다.
      playerIndex[players[index]] = index; // 이전 player의 새로운 위치를 업데이트
      playerIndex[calling] = index - 1; // 현재 player의 새로운 위치를 업데이트
    }
  }

  // 위치가 변경된 players 배열을 반환
  return players;
}

// 테스트 결과 항상 처리하는 시간이 오래 걸려 통과하지 못하여서 문법을 여러가지 돌아가며 사용하여 테스틑 해봤지만 15개의 테스트중 항상 4개가 시간 초과로 실패함
// Reduce 를 사용해서 이름을 키로 받아 obj에 추가하는데 문법을 사용하는 방법을 몰라 결국 chatgpt의 도움을 받아 해결하였음
// 처리 속도가 느리다는 원인은 알았지만 해결방법을 몰라 처리속도에 관한 고민을 많이 하게된 문제인거 같아 처리속도에 관한 문법을 더 알아봐야 할거 같다는 생각이 든 문제였다.
