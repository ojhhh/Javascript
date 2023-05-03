// promise 객체
// 비동기 처리를 가능하게 해주는 객체

function testPromise(num) {
  // 함수값에 resolve, reject 두가지 매개변수를 받음
  // resolve() 함수는 처리가 완료되면 반환
  // reject() 함수는 오류나면 반환
  return new Promise(function (res, rej) {
    try {
      if (num > 10) rej({ date: "over" });

      setTimeout(function () {
        res(num + 10);
      }, num * 1000);
    } catch (error) {
      rej(error);
    }
  });
}
// then 과 catch를 같이 사용하면 안됨
// 실습을 위해서 같이 사용한거

// testPromise(5)
//   .then(function (date) {
//     console.log(date);
//     // 데이터를 가져오고 처리할 구문을 작성
//     return testPromise(date);
//   })
//   // res를 실행하면 then() 메소드가 실행
//   .then(function (date) {
//     console.log(date);
//   })
//   // rej를 실행하면 catch() 메소드 실행
//   .catch(function (error) {
//     console.log(error);
//   });

// async await 구문
// async 와 await는 짝으로 붙어 다닌다. 같이써야함
async function asyncFun() {
  try {
    // await 뒤에 promise 객체
    let temp = await testPromise(3);
    // res나 rej이 처리될때까지 기다렸다 출력
    console.log(temp);

    temp = await testPromise(temp);
    // await + promise = promise를 기다리고 resolve 값을 반환
    console.log(temp);
  } catch (error) {}
}
asyncFun();
