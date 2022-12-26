//js_028_array.js

let score = [100, 90, 100];
console.log(score[0]); //100
console.log(score[1]); //90
console.log(score[2]); //100
console.log(score[3]); //undefined (선언이 되어있지만 값이 없음,아무 값도 할당받지 않은 상태)
console.log(score.length); //3

let person = ['John', 'Doe', 26, true]; //데이터 타입이 다른 값들도 가능

/*
John string
Doe string
26 'number'
true 'boolean'
(데이터의 타입 출력)*/

for (let idx in person) {
  console.log(person[idx], typeof person[idx]);
}

//배열도 객체를 이용해 생성 가능
/*
Sasb string
Volvo string
BMW string
*/

let cars = new Array('Sasb', 'Volvo', 'BMW');
for (let idx in cars) {
  console.log(cars[idx], typeof cars[idx]);
}

//가변
let color = [];
console.log(color.length); //0
color[0] = 'red';
console.log(color.length); //1
color.push(1);
console.log(color.length); //2 //push로도 값 넣어줄 수 있음
color.push(759);
console.log(color.length); //3
color[8] = 'blue';
console.log(color.length); //9(갯수)

for (let idx in color) {
  console.log(`${idx} : ${color[idx]}`);
}

for (let i = 0; i < color.length; i++) {
  console.log(`${i} : ${color[i]} => ${typeof color[i]}`);
}

//3개의 크기를 가진 배열을 생성
let point = new Array(3);
console.log(`point length: ${point.length}`); //3

//2개의 요소를 가진 배열을 생성
let shape = new Array(10, 20);
console.log(`shape length: ${shape.length}`); //2

shape[2] = 50;
console.log(shape.length); //3

/*
for()
for ~ in : index
for ~ of : element
*/

//forEach() : 배열 전용 메소드
//배열.forEach(element => {수행문장})
shape.forEach((element) => {
  console.log(`${element}`);
}); // 10, 20, 50

let choice = 'javascript';
//문자열은 forEach()를 제공하지 않으므로 사용할 수 없다.
//Uncaught TypeError: choice.forEach is not a function
// choice.forEach((element) => {
//   console.log(element);
// });

//배열명.map(callback);
const numbers = [4, 9, 16, 25];
const res = numbers.map(function (value, index) {
  return value * 2;
}); //배열에 있는 값 하나하나 처리해서 리턴해줌(map) => 함수형 프로그램

console.log(res); // [8, 18, 32, 50]

const sqt = numbers.map(Math.sqrt);
console.log(`sqt : ${sqt}`); //2,3,4,5

function getSum(total, num) {
  //total : 누적 , num : 요소
  return total + num;
}

const sum = numbers.reduce(getSum);
console.log(`sum: ${sum}`); // 54

const ages = [32, 33, 16, 40];
const per = ages.filter((value, index) => {
  return value >= 18;
});
console.log(`per: ${per}`); //32,33,40
