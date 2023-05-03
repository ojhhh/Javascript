// 정규 표현식(RegExp) 객체
// 문자의 패턴을 검색하기 위해 사용하는 문자
// 예) 회원가입에 email, id, address 같은 형식으로 입력하기 위해 사용
// 문자의 패턴을 정의하는데 유용

// 정규 표현식 메소드

// search() : 해당 문자열의 위치를 인덱스로 찾는 메소드
// replace() : 첫번째 매개변수로 전달된 문자열을 찾아 두번째 매개변수로 바꿈
// test() : 정규표현식과 일치하는 문자가 있으면 true 반환

// 정규식 패턴
// [abc] : 대괄호 안에 있는 문자들을 찾음
// [0-9] : 대괄호 사이의 숫자를 찾음
// [x|y] : x나 y 중 하나를 찾음

// 검색 옵션 설정. 플래그
// i : 대소문자를 구분안하고 비교
// g : 전체 문자열을 정규식과 비교. 첫번째로 일치한 문자열이 있으면 비교 중단
// m : 여러줄의 문자열을 정규표현식으로 비교

// 정규식 메타 문자
// 메타 문자는 숫자 이거나 알파벳이거나 숫자를 제외하거나 등의 속성을 표현

// ^문자 : ^뒤에 있는 문자로 시작하는 문자를 찾음
// 문자$ : $앞에 문자로 끝나는 문자를 찾음
// \w : 속하는 모든 문자를 찾음
// \W : 알파벳 대소문자, 숫자 _문자를 제외한 모든 문자를 찾음
// \d : 숫자를 찾음
// \D : 숫자를 제외하고 찾음(모든 문자를 찾음)
// \s : 공백문자를 찾음
// \S : 공백문자를 제외하고 찾음

// 정규 표현식

// 1.
let reg1 = /a/;

// 2.
let reg2 = new RegExp("a");

// 정규표현식을 만드는 이유는 규칙을 가진 문자열을 찾기 위해서임

let numstr = "0123456789";
// 6 이나 8 중에 1개를 뜻함
// 6이 먼저 나오기 떄문에 6의 인덱스 번호를 반환
let tempReg = /[6,8]/;
console.log(numstr.search(tempReg));

let numstr2 = "안녕하세요9876543210";
// 0 ~ 9 까지 라는 뜻
// 0 ~ 9 까지의 숫자 중 가장 처음 나온 인덱스의 번호를 반환
let tempReg1 = /[0-9]/;
console.log(numstr2.search(tempReg1));

let str = "Hello JavaScript Program...";
// str 문자열에서 JavaScript이 있으면 JavaScript가 시작되는 인덱스값을 반환
let regExp_search = str.search(/JavaScript/);
console.log(regExp_search);

// str 문자열에서 JavaScript를 찾고 내용을 CSS로 변환하여 str 출력
let regExp_replace = str.replace(/JavaScript/, "CSS");
console.log(regExp_replace);

// test
// 정규식 패턴에 대한 문자열 검색. true, false로 반환
let reg3 = /JavaScript/;
let reg4 = /JavaScript2/;
// JavaScript 이 있기 때문에 true 반환
console.log(reg3.test(str));
// JavaScript2는 없기 때문에 false 반환
console.log(reg4.test(str));

let str2 =
  "The best program is \n JavaScript... \n Javascript... \n javaScript... \n javascript... ";

// 대소문자를 구분하지 않기 때문에 가장 먼저 나오는 JavaScript 인덱스 출력
let temp1 = /javascript/i;
console.log(str2.match(temp1));

// 일치하는 문자열인 JavaScript를 출력
let temp2 = /JavaScript/g;
console.log(str2.match(temp2));

// javaScript의 인덱스 번호 출력
let temp3 = /javaScript/m;
console.log(str2.match(temp3));

let str3 = "The best1 program is2 JavaScript and3 HTML...";

// 플래그를 여러개 줄 수 있음
// str3 문자열에서 JavaScript만 찾아냄
let temp4 = /JavaScript/gi;
console.log(str3.match(temp4));

// A ~ K 사이의 알파벳을 찾아옴
let temp5 = /[A-K]/gi;
console.log(str3.match(temp5));

// p,o,z 문자열 만 가져옴
let temp6 = /p|o|z/gi;
console.log(str3.match(temp6));

// 문자열이 T로 시작하는지 확인하고 T가 맞으면 T 반환
let temp7 = /^T/gi;
console.log(str3.match(temp7));
let temp77 = /^h/gi;
console.log(str3.match(temp77));

// 문자열이 .으로 끝나는지 확인
let temp8 = /.$/gi;
console.log(str3.match(temp8));
// .으로 끝나지 않아 null 반환
let temp88 = /L$/gi;
console.log(str3.match(temp88));

// 모든 문자열을 1개씩 배열로 출력
let temp9 = /\w/gi;
console.log(str3.match(temp9));

// 공백과 .과 @만 반환됨
let temp10 = /\W/gi;
console.log(str3.match(temp10));

// 문자열에 있는 숫자만 반환됨
let temp11 = /\d/gi;
console.log(str3.match(temp11));

// 숫자를 제외한 나머지 문자열 반환
let temp12 = /\D/gi;
console.log(str3.match(temp12));

// 공백만 반환됨
let temp13 = /\s/gi;
console.log(str3.match(temp13));

// 공백만 빼고 반환됨
let temp14 = /\S/gi;
console.log(str3.match(temp14));
