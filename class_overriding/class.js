// class
// ED6 부터 지원
// class는 상속을 지원하여 코드의 재사용성을 높힘

class student {
  // class의 생성자 함수
  // constructor() 생성자 함수를 작성하면 빈 생성자 함수가 자동으로 생김
  constructor(age, phone, city) {
    this.age = age;
    this.phone = phone;
    this.city = city;
  }
  getInfo() {
    return (
      "나이 : " +
      this.age +
      "살 핸드폰 번호 : " +
      this.phone +
      " 거주지 : " +
      this.city
    );
  }
}

let st = new student(1, "010-1111-2222", "seoul");

console.log(st);
console.log(st.getInfo());

class Character {
  constructor(hp, mp, atk) {
    this.hp = hp;
    this.mp = mp;
    this.atk = atk;
  }
  getState() {
    return this.hp + this.mp + this.atk;
  }
  // 정적 메소드 : 일반적으로 공용함수를 만들기 위해 사용
  // 클래스의 인스턴스에서 호출 x
  // static 메소드는 클래스를 동적 할당 할 때마다 생성 되지 않음 (1개만 있음)
  // 인스턴스를 생성할때 더 생성되지 않음
  static getAtk(n) {
    return n.atk;
  }
}

let ca = new Character(100, 100, 100);
console.log(ca);
console.log(ca.getState());
// 이렇게 생성한 인스턴스에서 호출하면 안됨
// console.log(ca.getAtk(1));
console.log(Character.getAtk(ca));

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  // getter setter
  // get : 값을 호출
  // set : 값을 수정
  // 클래스의 값을 가져오거나 설정할때 getter와 setter 제공
  // 클래스의 값에 접근할때 직접 변수에 접근하는 형태가 아닌 get과 set을 통한 접근방법
  // 내부구조를 캡슐화하는데 좋음
  // 전역적으로 데이터가 사용되지 않게 위험성을 방지
  // 객체지향
  get getName() {
    return "product Name : " + this.name;
  }

  set setPrice(price) {
    this.price = price;
  }
}

let pr = new Product("galaxy note", 1000000);
console.log(pr);
// getter 확인
console.log(pr.getName);
//
pr.setPrice = 2000000;
console.log(pr);
