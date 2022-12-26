//js_030_spred_operator.js

//Spread Operator = 스프레드 연산자 = 전개연산자 = 펼침연산자
//형태 : (...변수)

/////////////////////////////////////////////////////////
//[1] 배열에서의 Spread Operator

//1. 배열복사(Array Copy)
let arr1 = [1, 2, 3];
let arr2 = arr1; //얇은 복사(shallow copy)
console.log(`arr1: ${arr1}`); // arr1: 1,2,3
console.log(`arr2: ${arr2}`); // arr2: 1,2,3

arr2.push(4);
console.log(`arr1: ${arr1}`); // arr1: 1,2,3,4
console.log(`arr2: ${arr2}`); // arr2: 1,2,3,4

let arr3 = [1, 2, 3];
let arr4 = [...arr3]; //깊은 복사(deep copy)
console.log(`arr3: ${arr3}`); // arr3: 1,2,3
console.log(`arr4: ${arr4}`); // arr4: 1,2,3

arr4.push(4);
console.log(`arr3: ${arr3}`); // arr3: 1,2,3
console.log(`arr4: ${arr4}`); // arr4: 1,2,3,4

let arr5 = [10, 20, ...arr3, 40, 50];
console.log(arr5); // [10, 20, 1, 2, 3, 40, 50]

let arr6 = [5, 6, [7, 8]];
let arr7 = [1, ...arr6];
console.log(arr7); // [1, 5, 6, Array(2)]

//2. 배열 병합 (Array Concatenation)
let arr8 = [1, 2, 3];
let arr9 = [4, 5, 6];
let arr10 = [7, 8, 9];
let arr11 = [...arr8, ...arr9, ...arr10];
console.log(arr11); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

let arr12 = [arr8, arr9, arr10];
console.log(arr12); //[Array(3), Array(3), Array(3)]
/*0: (3) [1, 2, 3]
  1: (3) [4, 5, 6]
  2: (3) [7, 8, 9]
*/

//////////////////////////////////////////////////////////////
//[2] 함수에서의 Spread Operator

//1.Rest Parameter(나머지 파라미터)
function display(...params) {
  return params.reduce((sum, a) => {
    return sum + a;
  });
}

console.log(display(1, 2)); //3
console.log(display(1, 2, 3, 4, 5)); //15

//2. 함수 호출 인수(Argument)
console.log(Math.max(1, 2, 3, 4, 5)); //5 (spread 연산자로 받아 배열로 처리됨)
console.log(Math.min(1, 2, 3, 4, 5)); //1 (spread 연산자로 받아 배열로 처리됨)

let arr13 = [10, 20, 30, 40, 50];
console.log(Math.max(arr13)); //NaN

console.log(Math.max(...arr13)); //50
console.log(...arr13); //10 20 30 40 50

//////////////////////////////////////////////////////////////////
//[3] 객체에서 Spread Operator

//1. 객체복사
let prevState = { name: '고수', age: 30 };
let currentState = { ...prevState }; //복사
console.log(currentState); //{name: '고수', age: 30}

prevState = { ...prevState, loc: '서울' }; //기존에 있는 객체에 새로운 값 추가할 때
console.log(prevState); //{name: '고수', age: 30, loc: '서울'}

// prevState = { prevState, loc: '서울' };
// console.log(prevState); //{prevState: {…}, loc: '서울'}

//2. 객체 업데이트
let prevState2 = { name: '고수', age: 30 };
// prevState2.name = '여진구';
// console.log(prevState2); //{name: '여진구', age: 30}

// prevState2 = { ...prevState2, name: '여진구' }; //주의 ! 나열 순서를 바꾸면 안됨
// console.log(prevState2); //{name: '여진구', age: 30}

prevState2 = { name: '여진구', ...prevState2 }; //나열 순서는 바꾸면 안됨
console.log(prevState2); //{name: '고수', age: 30}
