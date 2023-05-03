// 스프레드 연산자
let obj = { name: "park", content: "sp" };
let obj2 = obj;

obj2.name = "oh";

// 객체는 주소를 참조하는 레퍼런스 타입이기 때문에 키값이 둘다 바뀜
console.log(obj);
console.log(obj2);

let obj3 = { ...obj, ...obj2 };

obj3.name = "kim";

// 값을 복사해서 새로운 객체를 만듬
console.log(obj3);

// 스프레드 연산자를 사용하면 원본이 유지하고 작업을 진행 할 수 있음
// 데이터베이스에서 값을 가져와 검색기능을 만들때 사용하기 좋음

// 옵션 체이닝
// ES11 에서 도입
// 객체의 값을 호출할때 안전성을 유지하면서 호출 가능
// 객체의 키 앞에 ? 구문을 추가해서 작성
// 오류가 나지 않게 방지. 객체의 키값을 확인하고 type 에러가 나지않게 방지해주기 때문

let obj4 = { name: "aa", content: "bb" };

console.log(obj4?.name);
console.log(obj4?.age);

let obj5 = {
  name: "cc",
  content: {
    age: 1,
  },
};

console.log(obj5.content.key);
