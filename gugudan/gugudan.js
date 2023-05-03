// for문을 활용한 구구단 만들기

for (let a = 2; a < 10; a++) {
  console.log(a + "단");
  for (let b = 1; b < 10; b++) {
    console.log(a + " * " + b + " = " + a * b);
  }
  console.log("======================================================");
}
