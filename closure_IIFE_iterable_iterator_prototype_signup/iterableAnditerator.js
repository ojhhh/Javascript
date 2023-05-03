// 이터러블과 이터레이터 ES6에 추가

// 이터러블 : 반복이 가능한 객체라는 뜻
// 이터러블을 반복하는 반복문
// forEach : 배열을 순회하면서 아이템의 갯수만큼 아이템을 반복 실행
// for of : 이터러블의 아이템을 반복 실행
// 반복자 Symbol.iterator : 이터러블 객체를 나타내는 메소드 이름으로 사용. 해당 객체가 이터러블
// Symbol : ES6에 추가된 원시타입. 값이 겹치지 않고 선언 후 변경이 불가능. 객체의 속성에 접근하기 위해 사용

// Symbol.iterator 메소드가 이터레이터 객체를 반환
// 이터레이터 : 이터러블 객체의 각 아이템에 접근하기 위한 기능
// 이터레이터 객체의 next 메소드 : next 메소드를 사용하면 {value, done} 객체를 반환
// 반복중인 아이템을 value에 할당 done은 끝났는지 안끝났는지를 boolean 값으로 반환
// 이터레이터는 이터러블(반복 가능한 객체)를 순차적으로 접근 할 수 있는 기능

// 자바스크립트의 배열이나 문자열 등이 이터러블

const Arr = [1, 2, 3, 4, 5];
const objIter = {
  index: 0,
  next: function () {
    if (this.index < Arr.length) {
      // done 마지막 요소가 맞는지확인
      return { value: Arr[this.index++], done: false };
    } else {
      return { done: true };
    }
  },
};

let result = objIter.next();
console.log(result.value, result.done);

result = objIter.next();
console.log(result.value, result.done);

result = objIter.next();
console.log(result.value, result.done);

result = objIter.next();
console.log(result.value, result.done);

result = objIter.next();
console.log(result.value, result.done);

result = objIter.next();
console.log(result.value, result.done);

console.log("");

// 이터러블 작성
const Arr2 = [1, 2, 3, 4, 5];
// Symbol로 객체에 속성으로 접근
// Arr2[Symbol.iterator]() 이터레이터 객체를 반환
const iter2 = Arr2[Symbol.iterator]();

let result2 = iter2.next();
console.log(result2.value, result2.done);

result2 = iter2.next();
console.log(result2.value, result2.done);

result2 = iter2.next();
console.log(result2.value, result2.done);

result2 = iter2.next();
console.log(result2.value, result2.done);

result2 = iter2.next();
console.log(result2.value, result2.done);

result2 = iter2.next();
console.log(result2.value, result2.done);

console.log("");

// reduce : 값을 바꾸는데 적합한 함수
// 이터러블 이터레이터를 따르는 이터레이터 값이 value가 숫자라면 문자로도 바꿀 수 있고 여러가지 방법으로 값을 바 꿀 수 있음
// 배열이나 객체와 같은 데이터도 줄일 수 있음

const Arr3 = [1, 2, 30, 4, 5, 15, 10];

// reduce 메소드
// 첫번째 매개변수는 콜백 함수, 두번째 매개변수는 초기값. 초기값을 넣지않으면 배열의 0번 인덱스의 값을 초기값으로 설정

// 두 값을 더하면서 반환 시키는 기능 구현
// acc는 이전 결과 값이 return
const temp7 = Arr3.reduce(function (acc, value) {
  console.log("acc : ", acc);
  console.log("value : ", value);
  console.log(acc + value);
  if (acc == 33) {
    return 50;
  }
  return acc + value;
}, 0);

console.log("");

// 배열을 순회하면서 제일 큰 값을 반환
const max = Arr3.reduce(function (acc, value) {
  console.log("acc : ", acc);
  console.log("value : ", value);
  // 이전값과 다음 값을 비교하여 큰 수 반환
  return acc > value ? acc : value;
});

console.log(max);

console.log("");

// 배열을 순회하면서 제일 작은 값 반환
const min = Arr3.reduce(function (acc, value) {
  return acc < value ? acc : value;
});

console.log(min);
