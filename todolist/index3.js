// JSON
// 데이터를 문자열로 받아서 객체로 변환
let _json = '{"key" : "value"}';
console.log(_json);

// JSON 객체 안의 parse 메소드가 객체형태의 문자열을 파싱해줌
console.log(JSON.parse(_json));

// stringify : 객체를 문자열로 변환
let obj = { key: 22 };
console.log(JSON.stringify(obj));

// window.localStorage.clear();

function addList() {
  let inputs = document.querySelectorAll("input");
  let value = window.localStorage.getItem("board");
  if (
    window.localStorage.length == 0 ||
    window.localStorage.getItem("board") == ""
  ) {
    window.localStorage.setItem(
      "board",
      `{"name" : "${inputs[0].value}", "age" : "${inputs[1].value}", "hobby" : "${inputs[2].value}", "tel" : "${inputs[3].value}"}`
    );
  } else {
    window.localStorage.setItem(
      "board",
      value +
        "|" +
        `{"name" : "${inputs[0].value}", "age" : "${inputs[1].value}", "hobby" : "${inputs[2].value}", "tel" : "${inputs[3].value}"}`
    );
  }

  console.log(value);
  // let _json = JSON.parse(window.localStorage.getItem("board"));
  // console.log(_json);
  render();
}

addbtn.addEventListener("click", addList);

function render() {
  let _json = window.localStorage.getItem("board");
  _json = _json.split("|");
  console.log(_json);
  _div.innerHTML = "";
  let _ul = document.createElement("ul");
  let _li = document.createElement("li");
  let _div1 = document.createElement("div");
  let _div2 = document.createElement("div");
  let _div3 = document.createElement("div");
  let _div4 = document.createElement("div");
  let _div5 = document.createElement("div");
  _div1.innerHTML = "이름";
  _div2.innerHTML = "나이";
  _div3.innerHTML = "취미";
  _div4.innerHTML = "전화번호";
  _div5.innerHTML = "삭제";
  _li.append(_div1, _div2, _div3, _div4, _div5);
  _ul.append(_li);

  if (_json[0] == "") {
    return;
  }
  _json.forEach(function (i, index) {
    let _li = document.createElement("li");
    let _div1 = document.createElement("div");
    let _div2 = document.createElement("div");
    let _div3 = document.createElement("div");
    let _div4 = document.createElement("div");
    let _div5 = document.createElement("div");
    let _button = document.createElement("button");
    _button.innerHTML = "del";
    _div1.innerHTML = JSON.parse(i).name;
    _div2.innerHTML = JSON.parse(i).age;
    _div3.innerHTML = JSON.parse(i).hobby;
    _div4.innerHTML = JSON.parse(i).tel;
    _div5.append(_button);

    _button.onclick = function () {
      _json.splice(index, 1);
      console.log(_json);
      console.log(_json.join("|"));
      window.localStorage.setItem("board", _json.join("|"));
      render();
    };

    _li.append(_div1, _div2, _div3, _div4, _div5);

    // _li.innerHTML = i;
    _ul.append(_li);
  });
  _div.append(_ul);
}
if (
  window.localStorage.length != 0 &&
  window.localStorage.getItem("board") == ""
) {
  render();
}
