// js_042_checkbox_2.js

//Arrow Function에서 this는 브라우저 최상위 객체인 window를 의미한다.

let allCheckNode = document.frm.allCheck;
document.frm.allCheck.onclick = () => {
  //console.log(this);

  document.frm.subject1.checked = allCheckNode.checked;
  document.frm.subject2.checked = allCheckNode.checked;
  document.frm.subject3.checked = allCheckNode.checked;
}; /////////////////////////////////////
