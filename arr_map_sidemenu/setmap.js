// 이터러블 이터레이터

// Set, Map

// Set : 배열은 중복된 값을 저장 할 수 있는데 set은 배열에 중복되지 않은 값을 저장. 중복되지 않는 유일한 값. set을 사용하면 배열의 요소의 순서가 의미가 없고 인덱스로 접근이 안됨.
// 즉, 값으로만 이루어져있고 중복값은 허용이 되지 않음
const s = new Set();
console.log(s);

// 요소를 추가하는 방법
s.add("one");
s.add("two");
s.add("three");
// 중복값은 허용하지 않음
s.add("one");
console.log(s);

const arr = [1, 2, 3, 4, 5];
// 생성단계에서 생성자 함수에 배열 전달
const ss = new Set(arr);
console.log(ss);

// has() : 값이 있으면 true 반환 없으면 false 반환
console.log(ss.has(2));
console.log(ss.has(9));

// delete() : 요소를 제거하는 메소드
ss.delete(2);
console.log(ss);

// clear() : 값을 제거하는 메소드
// ss.clear();
// console.log(ss);

// forEach는 이터러블
ss.forEach(function (i) {
  console.log(i);
});

// SetIterator 객체로 반환
// 이터러블에 이터레이터를 반환
const temp = ss.entries();
console.log(temp.next().value);
console.log(temp.next().value);
console.log(temp.next().value);
console.log(temp.next().value);
console.log(temp.next().value);

// Map : key와 value를 저장하는데 key값을 객체로 저장 할 수 있음. key와 value를 한쌍으로 저장하고 중복된 key값은 사용하지 않음. iterator를 통해 Map 객체 내부 순회 가능
const m = new Map();

// map은 값을 추가할 때 key와 value 값을 한쌍으로 추가
// set() 메소드를 통해 key와 value를 저장
// key value로 저장하는 이유는 key를 통해 저장된 값을 호출하기 위해 사용
m.set("one", 2);
// key가 겹치면 나중에 입력된 key의 value가 저장
m.set("one", 1);
m.set("two", 2);
m.set("three", 3);
console.log(m);

// get() 메소드를 사용하여 값을 호출
console.log(m.get("one"));
console.log(m.get("two"));

// delete() 메소드를 사용하여 값을 삭제
m.delete("three");
console.log(m);

// map에 저장된 요소의 size 확인
console.log(m.size);

// keys() : key만 반환
const keys = m.keys();
console.log(keys);

// values() : value만 반환
const values = m.values();
console.log(values);

// entries() : [key, value] 형태의 정보들을 모아서 MapIterator 객체로 변환해서 반환
const iter = m.entries();
console.log(iter);

// console.log(iter.next().value);

// key 정보만 출력하는 for of 문 작성
// 이터레이터 요소가 끝날때까지 반복하며 요소를 출력
for (const iterator of keys) {
  console.log(iterator);
}

// value 만 출력하는 for of 문 작성
for (const iterator of values) {
  console.log(iterator);
}

// key value 모두를 출력하는 for of 문 작성
for (const [key, value] of iter) {
  console.log(`key : ${key}, value : ${value}`);
}

m.forEach(function (value, key) {
  console.log(`key : ${key}, value : ${value}`);
});
