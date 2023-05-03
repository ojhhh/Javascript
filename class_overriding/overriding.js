class Mother {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    return console.log(`이름 : ${this.name} 나이 : ${this.age}`);
  }
}

let temp = new Mother("mother", 1);
temp.getInfo();

// 클래스의 상속
// 자식 클래스가 부모클래스를 상속받아 부모클래스의 기능을 사용
// extends 키워드를 사용해서 클래스를 상속시킬 수 있음
class Child extends Mother {
  // 비워놓으면 constructor가 자동으로 생성
}

let temp2 = new Child("child", 2);
temp2.getInfo();

class Car {
  constructor(name) {
    this.name = name;
    this.speed = 0;
    this.age = 20;
  }
  run(speed) {
    this.speed += speed;
    console.log(`[부모함수] 이름 : ${this.name} 속도 : ${this.speed}`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} 멈춤`);
  }
}

let car = new Car("car");
car.run(10);
car.stop();

// 부모의 함수를 받아 오버라이딩
// 함수를 받아서 기능을 재정의
// run이라는 함수가 없으면 부모에서 상속받은 run 함수 실행
// run 함수가 있어도 재정의 해서 사용 가능 (오버라이딩)
class Tico extends Car {
  run(speed) {
    this.speed = speed;
    console.log(
      `[자식함수] 이름 : ${this.name} 속도 : ${this.speed} [오버라이딩]`
    );
  }
  speak() {
    console.log("빵빵");
  }
  // 부모의 stop을 실행
  // 상속받은 부모의 클래스 키워드로 부모의 함수를 실행 할 수 있음
  // super : 상속받은 부모의 클래스 키워드
  stop() {
    super.stop();
    // 본인의 함수를 실행
    this.speak();
  }
}

let tico = new Tico("tico");
tico.run(10);
tico.stop();

// 상속받은 클래스는 부모 클래스를 호출해서 사용하는게 좋음
// 상속 클래스 Man 생성자 함수가 실행되면 일반함수에서 일어나는 일이 발생하지 않음
class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Man extends Human {
  constructor(name, age) {
    super(name, age);
    this.name = name;
    this.age = age;
  }
}

let ma = new Man("gg", 30);
console.log(ma);
