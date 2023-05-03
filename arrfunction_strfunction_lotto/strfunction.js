// 문자열 함수
// 문자열은 배열이 아니지만 인덱스로 값에 접근이 가능
let str = "가나다라마바사";

// str 문자열에서 "가" 의 인덱스 번호를 출력
console.log(str.indexOf("가"));

// 문자열의 길이
console.log(str.length);

// slice
// 문자열의 범위를 정하여 잘라냄
// 매개변수를 두개 전달 해야함 (시작 지점과 끝점)
// 인덱스 1번에 있는 값인 "나" 부터 인덱스 3번인 "라" 전까지 출력
// 출력값 : 나다
console.log(str.slice(1, 3));

// split
// 문자열을 자름
// 출력값 : "가", "나", "다", "라", "마", "바". "사"
console.log(str.split(""));
// 문자열에 " " 즉, 띄어쓰기가 되면 잘라서 배열의 형태로 변환하라는 함수지만 띄어쓰기가 없기 때문에 문자열이 그대로 배열로 변환
// 출력값 : [가나다라마바사]
console.log(str.split(" "));

// 대소문자 변경
let str2 = "abcdE";
let str3 = "ABCDe";

// toUpperCase : 대문자로 변경
console.log(str2.toUpperCase());

// toLowerCase : 소문자로 변경
console.log(str3.toLowerCase());
