let students = ["홍길동", "이몽룡", "이춘향"];
let award = ["홍길동"];

for (let i = 0; i < 3; i++) {
  if (students[i] == award) {
    console.log("수상자 : " + award);
  }
}

let aaa = ["aaa", "bbb", "ccc", "ddd", "eee"];
let abc = ["bbb", "aaa", "ccc"];

for (let a = 0; a < abc.length; a++) {
  for (let b = 0; b < aaa.length; b++) {
    if (aaa[b] == abc[a]) {
      console.log("수상자 : " + aaa[b]);
      b++;
      if (a == b) {
        break;
      }
    }
  }
}
