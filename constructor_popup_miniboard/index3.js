let objArr = [];

// 생성자 함수 생성
function create(name, age, content) {
  this.name = name;
  this.age = age;
  this.content = content;
}

// 버튼을 누르면 실행
function divBtn() {
  console.log("push button");
  addArr();
  render();
}

function addArr() {
  // input 태그명을 querySelectorAll 메소드 매개변수로 전달
  // input 태그들을 배열로 가져와 inputs 변수에 담음
  // input에 입력한 값이 value 키에 값으로 담김
  let inputs = document.querySelectorAll("input");
  console.log(inputs);
  console.log(inputs[0].value);
  console.log(inputs[1].value);
  console.log(inputs[2].value);
  // new 키워드로 빈 객체를 만들고 함수에서 this로 그 객체를 참조하여 값을 매개변수로 넘겨줌
  let obj = new create(inputs[0].value, inputs[1].value, inputs[2].value);
  objArr.push(obj);
  console.log(objArr);
  // 객체와 배열은 레퍼런스 타입이기 때문에 값이 아니라 주소를 참조
}

// 무언가를 그려주는 함수
function render() {
  let text = "";
  objArr.forEach(function (i) {
    // console.log(i.name);
    text += `<li>이름 : ${i.name} 나이 : ${i.age} 내용 : ${i.content}</li>`;
  });
  console.log(text);
  document.querySelector("#tables").innerHTML = text;
}
