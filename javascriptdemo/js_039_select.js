// js_039_select.js

document.frm.onsubmit = () => {
  let optFruit = document.querySelector('#sel');
  console.log(optFruit);

  let optSelect = optFruit.selectedIndex + ' ' + optFruit.value;
  console.log(optSelect); //인덱스 숫자 및 선택된 내용 같이 출력됨

  return false;
};
