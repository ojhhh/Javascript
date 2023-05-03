let mainArr = [];

function content(a, b, c, d, e) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  this.e = e;
}

function pushbtn() {
  funcrender();
  let boardcontent = new content(
    mainArr[0].value,
    mainArr[1].value,
    mainArr[2].value,
    mainArr[3].value,
    mainArr[4].value
  );
}

function funcrender() {
  mainArr = document.querySelectorAll("input");
  mainArr.forEach(function (num) {
    mainArr[num] += num;
  });
  let txt = document.querySelector("#mainul");
  console.log(mainArr[0].value);
  console.log(mainArr[1].value);
  console.log(mainArr[2].value);
  console.log(mainArr[3].value);
  console.log(mainArr[4].value);
}
