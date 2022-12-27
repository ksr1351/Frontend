//js_036_dom.js
let pNode = document.getElementById('wrap');
console.log(`${pNode.nodeType} ${pNode.nodeName} ${pNode.nodeValue}`); //1 P null
//nodetype => 숫자(1) nodeName => 요소(P) nodeValue => 없음(null)

//속성
let pAttr = pNode.attributes; //p라는 요소에 있는 모든 속성 가져오기
console.log(pAttr); //NamedNodeMap {0: id, 1: class, id: id, class: class, length: 2}
console.log(pAttr[0]); //id (속성명 가져오기)
console.log(pAttr['id']); //id
console.log(pAttr.id); //id="wrap" (속성명 가져오기)
console.log(pAttr['length']); //2
console.log(pAttr.length); //2
console.log(pAttr[1]); //class="chk"
console.log(pAttr['class']); //class="chk"
console.log(pAttr.class); //class="chk"

console.log(pNode.getAttribute('class')); //chk
console.log(pNode.class); //undefined
console.log(pNode.getAttribute('id')); //wrap
console.log(pNode.id); //wrap

console.log(`${pAttr[0].nodeType} ${pAttr[0].nodeName} ${pAttr[0].nodeValue}`); //2 id wrap

let textNode = pNode.firstChild;
//#text
console.log(textNode); // "content"

console.log(`${textNode.nodeType} ${textNode.nodeName} ${textNode.nodeValue}`); //3 #text content

//////////////////////////////////////////////////////////
//innerText, innerHTML : 요소의 컨텐츠
let bodyNode = document.getElementsByTagName('body')[0];

//content
console.log(bodyNode.innerText);
console.log(bodyNode.innerHTML); //body에 있는 내용을 다 가져옴

//bodyNode.innerText = '<p>append</p>';
//bodyNode.innerHTML = '<p>append</p>';

////////////////////////////////////////////////////////
//value

let fname = document.querySelector('#fname');
console.log(fname.value); //홍길동

fname.value = '고수'; //직접 값 바꿔주기
