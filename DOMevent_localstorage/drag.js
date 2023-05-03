let _target = null;

// ondragstart : 드래그가 시작될떄 실행되는 이벤트
document.ondragstart = function (e) {
  if (e.target.classList.contains("item")) {
    console.log(e.target);
    _target = e.target;
    // 태그에 스타일 값을 추가
    e.target.style.backgroundColor = "red";
  }
};

// ondragend : 드래그가 끝날때 실행되는 이벤트
document.ondragend = function (e) {
  _target = null;
  // e.target이 item 클래스를 가지고 있는 태그라면
  if (e.target.classList.contains("item")) {
    // 처음에 입혀줬던 색으로 다시 변경
    e.target.style.backgroundColor = "blue";
  }
};

// ondragenter : 드래그하고 태그위에 올려졌을때 실행되는 이벤트
document.ondragenter = function (e) {
  // e.target이 box 클래스를 가지고 있고 _target이 비어있지 않을때 실행
  if (e.target.classList.contains("box") && _target !== null) {
    e.target.style.backgroundColor = "yellow";
  }
};

// ondragleave : 드래그 하는중 태그에서 빠져나갔을때 실행되는 이벤트
document.ondragleave = function (e) {
  if (e.target.classList.contains("box") && _target !== null) {
    e.target.style.backgroundColor = "transparent";
  }
};

// ondropover : 대상의 드롭 가능 여부 설정
document.ondragover = function (e) {
  if (e.target.classList.contains("box") && _target !== null) {
    // preventDefault : 브라우저에서 기본적으로 동작하는 기능을 제거
    e.preventDefault();
  }
};

// ondrop : 드래그를 하다 마우스 버튼을 때면 드롭
document.ondrop = function (e) {
  if (e.target.classList.contains("box") && _target !== null) {
    e.target.style.backgroundColor = "transparent";
    e.target.append(_target);
  }
};
