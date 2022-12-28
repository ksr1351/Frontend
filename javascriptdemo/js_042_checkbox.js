// js_042_checkbox.js

// 약관 동의
document.frm.onsubmit = () => {
  let admin = document.frm.admin;
  if (!admin.checked) {
    //약관에 동의합니다 에 체크가 되어있지 않다면
    alert('약관에 동의해야 합니다.');
    return false;
  }
};

// 전체 선택
document.frm.allCheck.onclick = function () {
  //   console.log(this.checked); //this => 현재 이벤트가 발생된 객체를 나타냄

  //   document.frm.subject1.checked = this.checked;
  //   document.frm.subject2.checked = this.checked;
  //   document.frm.subject3.checked = this.checked;

  // type : NodeList
  let checkgroup = document.querySelectorAll('.checkgroup');
  //console.log(checkgroup.length); //3

  //   for (let element of checkgroup) {
  //   console.log(this, typeof this, `${this}`)
  //   break;
  //     //element가 의미하는 건 document.frm.subject까지임
  //     element.checked = this.checked;
  //   }

  ///////////////////////////////////////////////
  //ES6 Spread operator : NodeList를 Array로 변경
  let myThis = this;
  //let iArray = [...checkgroup];
  //iArray.map(function (element) {
  //map은 배열일 때 사용가능 (스프레드 연산자 사용)
  // alert(this); 여기에서 this 는 Window
  // element.checked = myThis.checked;
  // });

  ////////////////////////////////////////////////////
  // Array.from() : NodeList를 Array로 변경
  //let myArray = Array.from(checkgroup);
  //console.log(`${myArray}`); //[object HTMLInputElement],[object HTMLInputElement],[object HTMLInputElement]

  //myArray.map(function (element) {
  //  element.checked = myThis.checked;
  // });
  ////////////////////////////////////////////////////
  //forEach()

  checkgroup.forEach(function (element) {
    //console.log(element);
    //console.log(this);
    element.checked = myThis.checked;
  });
}; /////////////////////////////////////////////////////
