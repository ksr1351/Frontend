//js_034_dom.js

let hNode = document.getElementById('selector');
console.log(hNode);
console.log(hNode, typeof hNode); //object

let hId = document.querySelector('#selector'); // querySelector :선택자 방식을 선택하겠다는 뜻
console.log(hId, typeof hId);

let hClass = document.querySelector('.choice');
alert(hClass);
console.log(hClass, typeof hClass);

//HTMLColooection(4) (content가 4개-html파일)
let pNode = document.getElementsByTagName('p');
console.log(typeof pNode); // object
console.log(pNode.length); // 4
console.log(pNode[0]); // <p>content1<p>
console.log(pNode.item(0)); // <p>content1<p>
console.log(pNode[0].innerText); // content1
pNode[0].style.color = 'red';
pNode[0].style.backgroundColor = 'blue';

function process() {
  alert('test');
  let fname = document.frm.fname;
  console.log('fname:', fname);
  console.log(fname.value);
  console.log(fname.defaultValue);

  return false;
}
