// 배열 함수

// 배열 [1,2,3,4,5,6] 레퍼런스 타입
// 리스트 형태
// 인덱스의 순서로 해당 값에 접근
// 배열의 번호는 0 부터 시작
// 자바스크랩트의 배열은 객체
// 배열안에 배열(다른 언어에서는 이중 배열이라고함)은 객체 배열
let a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// 출력값 : [1, 2, 3]
// 이중배열
console.log(a[0]);
// 출력값 : 2
// a[0]에 있는 값중 1번째 즉, 2번째 인덱스 2를 출력
console.log(a[0][1]);

// length : 배열의 길이를 알려줌
console.log(a.length);
// 배열의 인덱스에 접근할 떄 0 ~ 배열의 길이 - 1
// 반복문에 숫자를 작성하게되면 반복횟수를 동적으로 변경하기 힘듬
console.log("==================================");
let b = [1, 2, 3, 4, 5, 6, 7];
b.push(8); // 객체
b.push(9);
for (let i = 0; i < b.length; i++) {
  console.log(b[i]);
}

// 객체
// const 한번 선언하면 값을 변경할 수 없음. 재선언도 안됨
// 상수에 주로 사용
// 객체에는 key와 value가 있음. 키와 값
const obj = {
  a: "im obj",
  // 익명 함수 : 이름이 없는 함수
  // 보통 함수를 작성할떄 function 이름() {} 이런식으로 작성하는데 익명함수는 이름을 안붙히고 씀
  push: function (num) {
    console.log("obj push");
    console.log("매개변수 출력 : " + num);
  },
};

console.log(obj.a);
obj.push(2);
console.log("==================================");

// 배열의 인덱스에 따른 값을 구하는 함수
let d = [1, 2, 3, 4, 5];
// indexOf를 사용하면 배열의 값을 찾아서 위치를 리턴
// d 배열에서 3이라는 문자의 위치가 몇번째 인지 알려줌
let r2 = d.indexOf(3);
console.log(r2);

let arr = ["사과", "딸기", "포도"];

// arr 배열에서 딸기라는 값을 가진 인덱스의 위치를 리턴
let r3 = arr.indexOf("딸기");

console.log(r3);

// find : 검색할 때 사용 하는 함수
// 매개변수로 함수를 전달받음
let r4 = arr.find(function (i) {
  // 배열의 값이 순서대로 들어옴
  // return 값이 없으면 arr 배열에 있는 "사과" "딸기" "포도" 가 순서대로 출력
  console.log("item " + i);
  // return 뒤의 조건 즉,i의 값이 사과가 됬을떄 true로 변하고 값을 출력
  return i === "사과";
});

// return true; 로 했을때 true가 나온 첫번째 값인 사과 출력
console.log(r4);

// findindex
// arr 배열에서 값의 index 번로를 찾는 함수
let r5 = arr.findIndex(function (i) {
  // 딸기는 arr 배열의 1번 인덱스에 위치 해있기 때문에 1 반환
  return i === "딸기";
});

// 출력값 : 1
console.log(r5);

// filter
let arr2 = ["1사과", "2딸기", "3포도"];
let str = "가나다";
// 문자열도 인덱스로 한글자씩 접근가능
console.log(str[1]);
let r6 = arr2.filter(function (i) {
  return i[0] === "2";
});

// 2를 가진 2딸기 출력
console.log(r6);

// map
let r7 = arr2.map(function (i) {
  // arr2의 인덱스를 순서대로 출력
  console.log(i);
  // 반환값을 배열의 형태로 나타내줌 (true, false로 반환)
  // arr2의 인덱스 중 2라는 값을 가진 2딸기찾아 true 반환
  return i[0] === "2";
});

// 출력값 : [false, true, false]
console.log(r7);

// forEach
// 해당 배열을 반복시켜 작업해야할 경우 용이하게 사용
// 배열의 길이만큼 반복
// 2개의 반복문은 동일하게 동작함
console.log("for 문 ==================================");

for (let j = 0; j < arr2.length; j++) {
  console.log(arr2[j]);
}

console.log("forEach ==================================");

arr2.forEach(function (i) {
  console.log(i);
});

// join
// join 함수는 매개변수로 문자열을 전달
// 배열을 문자열로 변경
// 배열에 들어있는 값들의 구분을 매개변수로 전달한 문자열 출력
// 출력값 : 1사과.2딸기.3포도
console.log(arr2.join("."));

// split 함수
// 문자열을 배열로 변경
// split 함수의 매개변수로 문자열 값을 자를 문자값을 넣어줌
let str3 = arr2.join(".");
// .마다 잘라서 배열로 만듬
// 출력값 : ["1사과", "2딸기", "3포도"]
console.log(str3.split("."));
