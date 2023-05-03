// 배열 메소드
// Array.of() : 전달된 인자를 요소로 가지는 배열을 만들어줌. 배열을 생성할때 사용하는 메소드
const arr = Array.of(1, 2, 3, 4, 5, 6);
console.log(arr);

// 배열 원본을 수정하는 메소드
arr.push(2);
console.log(arr);

// 배열 원본이 수정되지 않고 새로운 배열을 반환
const result = arr.concat(5);
console.log(result);
console.log(arr);

// 레퍼런스 타입
console.log(result == arr);

// 참조 타입은 주소를 비교하기 때문에 b는 a의 주소를 참조하기 때문에 true
let a = [1, 2, 3];
let b = a;
console.log(a == b);

// 값은 같지만 참조 타입의 주소가 다르기 때문에 false
let c = [1, 2, 3];
let d = [1, 2, 3];
console.log(c == d);

// 값만 복사해서 새로만듬
let e = [1, 2, 3];
let f = [...e];
console.log(e == f);

const foods = ["apple", "banana", "orange"];

// foods 배열에서 banana가 있는지 확인
if (foods.indexOf("banana") === -1) {
  // 없으면 추가
  foods.push("banana");
}

console.log(foods);

// includes : ES7에 도입. 배열에 요소가 있는지 확인해서 boolean 타입으로 반환
if (!foods.includes("banana")) {
  foods.push("banana");
}

console.log(foods);

// 배열에 추가 할때 push 메소드를 사용하는데 자바스크립트에서는 index 에러가 따로 뜨지 않기 떄문에 정해진 사이즈가 없음
const arr2 = [1, 2, 3];
// 자바스크립트에서만 가능
// 배열의 끝에 추가하지 않고 최대 인덱스 이후에 값을 추가하면 중간에 값은 비어있음
arr2[arr2.length + 1] = 3;

console.log(arr2);

// 배열의 마지막 요소를 제거하는 메소드 (원본 수정)
const arr3 = [1, 2, 3, 4, 5];
// arr3.pop();
// console.log(arr3);

// 배열의 첫번째 요소 제거 (원본 수정)
arr3.shift();
console.log(arr3);

// 배열 2개를 합쳐서 하나로 만들기
const arr4 = [1, 2];
const arr5 = [3, 4];
const arr6 = arr4.concat(arr5);
console.log(arr6);

// 배열의 중간 요소 제거 및 추가
// splice
const arr7 = [1, 2, 3, 4];
// 1, 2번 인덱스를 제거하고 20과 30을 추가
const res = arr7.splice(1, 2, 20, 30);
console.log(arr7);
// 제거된 요소 반환
console.log(res);

// 배열의 1,2번 인덱스 제거
const arr8 = [1, 2, 3, 4, 5];
const res2 = arr8.splice(1, 2);
console.log(arr8);
console.log(res2);

// 배열에서 특정 요소를 제거 해주는 함수 만들기
const arr9 = [1, 20, 3, 44, 5];
function remove(a, b) {
  // 제거할 item의 인덱스 찾기
  const inx = a.indexOf(b);
  if (inx !== -1) {
    // 해당 인덱스 1개만 제거
    a.splice(inx, 1);
    return a;
  }
}

console.log(remove(arr9, 20));

// slice 메소드 : 전달 받은 범위의 아이템을 복사해서 배열을 반환해주는 함수 만들기
// 원본 배열이 바뀌지 않음
const arr10 = [1, 2, 3];
console.log(arr10.slice(0, 2));

// join 메소드 : 원본 배열의 모든 요소를 문자열로 변환
const arr11 = [1, 2, 3];
console.log(arr11.join());

// reverse : 배열의 순서를 뒤집어줌
console.log(arr11.reverse());

// fill : 전달 받은 값으로 배열을 채움. 배열의 개수를 유지하되 값을 초기화 해야할때 사용
const arr12 = [1, 2, 3, 4, 5];
console.log(arr12.fill(1));

// ES10
// [1,2,3,4,5,[6,7]] -> [1,2,3,4,5,6,7] 로 변환
// flat 메소드 : 배열의 뎁스를 1뎁스씩 올려줌
const arr13 = [1, 2, 3, 4, 5, [6, 7]];
console.log(arr13.flat());

const arr14 = [1, 2, , [3, 4, 5, [6, 7]]];
console.log(arr14.flat());
console.log(arr14.flat(2));

const arr15 = [[[[[[[[[[[1]]]]]]]]]]];
console.log(arr15.flat(Infinity));
