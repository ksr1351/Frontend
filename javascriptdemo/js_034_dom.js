//js_034_dom.js

let hNode = document.getElementById('selector');
console.log(hNode);
console.log(hNode, typeof hNode); //object

let hId = document.querySelector('#selector'); // querySelector :선택자 방식을 선택하겠다는 뜻
console.log(hId, typeof hId);

let hClass = document.querySelector('.choice');
console.log(hClass, typeof hClass);
