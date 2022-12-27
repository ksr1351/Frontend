//js_035_dom.js

let myNode = document.getElementById('p2');
console.log(myNode); // <p id="p2">content2</p>
console.log(`myNode : ${myNode}`); //myNode : [object HTMLParagraphElement]

////////////////////////////////////////////////////
let ptNode = myNode.parentNode;
console.log(ptNode); // div#wrap
console.log(`ptNode : ${ptNode}`); //ptNode : [object HTMLDivElement]

ptNode.style.color = 'blue';
////////////////////////////////////////////////////
//previousSibling : 모든 노드를 검색한다.
let prevNode = myNode.previousSibling;
console.log(`prevNode:${prevNode}`); //prevNode:[object Text]

prevNode = prevNode.previousSibling;
console.log(prevNode); // p#p1
console.log(`prevNode:${prevNode}`); //prevNode:[object HTMLParagraphElement]
////////////////////////////////////////////////////
// previousElementSibling : element node만 검색한다.
let prevElementNode = myNode.previousElementSibling;
console.log(prevElementNode); // <p id="p1">content1</p>
console.log(`${prevElementNode}`); // [object HTMLParagraphElement]

////////////////////////////////////////////////////
//nextSibling
let nextNode = myNode.nextSibling;
console.log(`${nextNode}`); //[object Text]

nextNode = nextNode.nextSibling;
console.log(nextNode); // <p id="p3">content3</p>
console.log(`${nextNode}`); //[object HTMLParagraphElement]

///////////////////////////////////////////////////
//nextElementSibling
let nextElementSibling = myNode.nextElementSibling;
console.log(`${nextElementSibling}`); //[object HTMLParagraphElement]

//////////////////////////////////////////////////
//childNodes

let divNode = document.getElementById('wrap');
console.log(`${divNode}`); //[object HTMLDivElement]

let divChildsNods = divNode.childNodes;
console.log(`${divChildsNods}`); // [object NodeList]
console.log(divChildsNods); //NodeList(9) [text, p#p1, text, p#p2, text, p#p3, text, p#p4, text]

///////////////////////////////////////////////
//children
let divChildren = divNode.children;
console.log(`${divChildren}`); //[object HTMLCollection]

console.log(divChildren); //HTMLCollection(4) [p#p1, p#p2, p#p3, p#p4, p1: p#p1, p2: p#p2, p3: p#p3, p4: p#p4]

let p4Node = document.querySelector('#p4');
console.log(p4Node); // <p id="p4">
console.log(`${p4Node}`); //[object HTMLParagraphElement]

let aNode = p4Node.firstElementChild;
console.log(aNode); //<img src="images1/gosu.jpg" alt="영화배우" />
console.log(`${aNode}`); //[object HTMLImageElement]

//////////////////////////////////////////////
// 객체.getAttribute('속성명'),  객체.setAttribute('속성명','값')
// 객체.속성명,  객체.속성명 = '값

let aAttrNode = aNode.getAttribute('src');
console.log(aAttrNode); //images1/gosu.jpg

aAttrNode = aNode.src;
console.log(aAttrNode); //http://127.0.0.1:5500/javascriptdemo/images1/gosu.jpg (전체코드를 가져옴)

console.log(aNode.getAttribute('class'));
console.log(aNode.class);

// aNode.setAttribute('title', '스타배우');
// console.log(aNode.getAttribute('title')); //스타배우
// console.log(aNode.title); //스타배우
// aNode.id = 'imgGosu';
// console.log(aNode.id); //imgGosu
// console.log(aNode.getAttribute('id')); //imgGosu

console.log(aNode.getAttribute('title'));
console.log(aNode.title);
console.log(aNode.getAttribute('id'));
console.log(aNode.id);

let aAttrList = aNode.getAttributeNode;
console.log(aAttrList.length); //1
console.log(aAttrList); //ƒ getAttributeNode() { [native code] }
