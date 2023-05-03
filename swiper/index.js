// 구조분해 할당(디스트럭처링)

// ES5 문법에서 배열의 값을 호출해서 변수에 담거나 사용할때
let one;
let two;

let arr = [1, 2, 3, 4, 5];
// 하나씩 인덱스를 사용해서 값을 할당
one = arr[1];
two = arr[3];
// ES6 에서 도입
// 구조분해 할당

// 변수를 선언하고 배열의 arr2의 값을 구조분해 할당해서 순서대로 할당
let arr2 = [1, 2, 3];
let [one1, two1, three1] = arr2;

console.log(one1, two1, three1);

let [a, b] = [1, 2];
console.log(a, b);

let [c, d] = [1];
console.log(c, d);

let [e, f] = [1, 2, 3];
console.log(e, f);

let [g, h, i = 1] = [1, 2];
console.log(g, h, i);

// ES6에서 구조분해할당이 도입
// 배열이나 객체의 값을 분해해서 편하게 변수에 할당하여 사용
// 코드 작성시 시간 절약 가능
// 코드의 길이도 줄어며 가독성도 좋아짐

// 객체의 구조분해 할당
// ES5
let name1 = { firstName: "oh", lastName: "lee" };
// let name2 = name1.firstName;
// let name3 = name1.lastName;

// 객체의 각 키를 뽑아서 변수에 할당
// ES6
// 키를 기준으로 구조분해 할당이 이루어짐
let { firstName, lastName } = name1;
console.log(firstName, lastName);

let name4 = ({ firstName = "kim", lastName } = { lastName: "park" });
console.log(firstName, lastName);

// 문자열을 담은 변수에서 구조분해할당
let str = "sdasdf";
let { length } = str;
console.log(length);

// 객체안에 필요한 값만 호출해서 사용
let list1 = [
  { id: 1, content: "dasfkdjf", isActive: true },
  { id: 2, content: "dasfkdjf", isActive: true },
  { id: 3, content: "dasfkdjf", isActive: true },
  { id: 4, content: "dasfkdjf", isActive: true },
];
// id값만 뽑아오기
list1.forEach(function (i) {
  let { id } = i;
  console.log(id);
});

let user = {
  name: "oh",
  address: {
    city: "seoul",
  },
};
// city 값 할당
let {
  address: { city },
} = user;
console.log(city);

// 스프레드 연산자
// 객체가 변경되는 것이 아니라 새로운 객체를 만듬. 값만 참조
let temp = [1, 2, 3];
let temp2 = [4, 5, 6];
let temp3 = [...temp, ...temp2];
console.log(temp3);

// 값이 다르면 뒤에 있는 값으로 덮어 씌워짐
let obj = {
  a: 1,
  b: 2,
};

let obj2 = {
  a: 1,
  b: 3,
  c: 1,
};

let obj4 = {
  a: 3,
  b: 4,
  c: 4,
};

let obj3 = { ...obj, ...obj2, ...obj4 };

console.log(obj3);
