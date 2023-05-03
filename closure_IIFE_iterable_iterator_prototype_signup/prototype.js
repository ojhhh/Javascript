// 프로토타입 : 객체의 원형
// 자바스크립트의 객체는 프로토타입을 상속 받음
// object.prototype

function Car(model, color, speed) {
  this.model = model;
  this.color = color;
  this.speed = speed;
  this.accel = function () {
    this.speed -= 10;
  };
}

// 생성자 함수로 동적할당해서 생성
let temp = new Car("벤츠", "검정", 200);
let temp2 = new Car("현대", "노랑", 200);

console.log(temp);
console.log(temp2);

function Car2(m, c, s) {
  this.model = m;
  this.color = c;
  this.speed = s;
  // 속도를 올리고 올린 속도의 값을 반환
  this.speedUP = function () {
    this.speed += 10;
    return this.speed;
  };
}

let temp3 = new Car2("기아", "파랑", 150);
// battery 키 true 값 추가
temp3.battery = true;
// 원형은 10이 올라가지만 20을 올라가는 함수 작성
// 객체에 새 속성을 추가 할 수 있지만 원형에는 추가 할 수 없음
temp3.speedUP = function () {
  this.speed += 20;
  return this.speed;
};

console.log(temp3);
temp3.speedUP();
console.log(temp3);

// 프로토타입의 정의 기본 형식
// 객체명.prototype.메소드 = function(){}
// 원형을 가진 객체들은 전부 프로토타입으로 추가한 메소드를 사용 할 수 있음
// 생성자에 의해 생성된 모든 객체는 생성자 함수의 모든 속성과 메소드를 상속 받음
// 각 객체는 상속된 속성과 메소드를 메모리에 저장하고 동일한 메소드는 중복 저장을 피함
// 생성자 함수에 메소드를 정의하지 않고 생성자 외부에 별도의 메소드를 정의해서 사용하는 방법이 프로토타입
function Car3(m, c, s) {
  this.model = m;
  this.color = c;
  this.speed = s;
}

Car3.prototype.speedUP = function () {
  this.speed += 20;
  return this.speed;
};

Car3.prototype.speedDown = function () {
  this.speed -= 20;
  return this.speed;
};

let temp4 = new Car3("대우", "하얀", 100);
let temp5 = new Car3("쌍용", "하얀", 100);
console.log(temp4.speedUP());

temp4.stop = function () {
  this.speed = 0;
  return this.speed;
};

// temp4.stop()의 출력값을 제대로 나오지만 temp5.stop()은 에러
console.log(temp4.stop());
// console.log(temp5.stop());

// 생성자 함수로 만든 객체들에게 전부 메소드를 추가해 주어야 할때
// 프로토 타입으로 원형에 메소드 추가

Car3.prototype.stop = function () {
  this.speed = 0;
  return this.speed;
};

console.log(temp4.stop());
console.log(temp5.stop());

// 문자열의 원형 String
String.prototype.replaceOf = function () {
  console.log("add prototype");
};

// console.log("update".replace());
console.log("add prototype".replace("dd", "pp"));
