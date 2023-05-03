// window.localStorage.clear();

function addlist() {
  let _input = document.querySelector("input");
  let _todo = window.localStorage.getItem("todo");

  if (window.localStorage.length == 0) {
    window.localStorage.clear();
    window.localStorage.setItem("todo", `{ "content" : "${_input.value}" }`);
  } else {
    window.localStorage.setItem(
      "todo",
      _todo + "," + `{ "content" : "${_input.value}" }`
    );
  }
  let _div = document.querySelector("#bottom");
  _div.innerHTML = "";
  ren();
}

reg.addEventListener("click", addlist);

function ren() {
  let _todo = window.localStorage.getItem("todo");
  _todo = _todo.split(",");
  if (_todo[0] == null) {
    cli.innerHTML = _todo[0];
    cul.append(cli);
  }

  let _div = document.querySelector("#bottom");
  let cul = document.createElement("ul");
  let cli = document.createElement("li");

  _todo.forEach(function (i) {
    let cli = document.createElement("li");
    cli.classList.add("alal");

    cli.innerHTML = JSON.parse(i).content;

    cul.append(cli);
  });
  _div.append(cul);
}

if (window.localStorage.length != 0) {
  ren();
}

bottom.onmousedown = function (e) {
  let ok = e.target.innerText;
  let del = `{ "content" : "${ok}" }`;

  console.log(del);
  let _todo = window.localStorage.getItem("todo");
  let todosplit = _todo.split(",");

  let todoArr = [];

  for (let i = 0; i < todosplit.length; i++) {
    todoArr.push(todosplit[i]);
  }

  for (let j = 0; j < todoArr.length; j++) {
    if (del == todoArr[j]) {
      todoArr.splice(j, 1);
    }
  }

  console.log(todoArr.length);

  window.localStorage.removeItem("todo");

  window.localStorage.setItem("todo", todoArr);

  let _div = document.querySelector("#bottom");
  _div.innerHTML = "";

  if (todoArr.length == 0) {
    window.localStorage.clear();
  }
  ren();
};
