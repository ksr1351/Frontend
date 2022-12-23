//js_026_String.js

let data = 'It`s alright';
console.log(data);

//length : 문자열의 길이
console.log(data.length); //12

/*
특정 범위 데이터를 리턴해주는 3가지 메소드
1. substring(start, end);
2. substr(start, length);
3. slice(start, end); 
*/

data = 'Apple, Banana, Kiwi';
//Banana
console.log(`substring:${data.substring(7, 13)}`); // 7인덱스부터, 13인덱스미만 //substring:Banana
//substring()은 음수값을 지원하지 않는다.
console.log(`substring:${data.substring(-12, -6)}`); //substring :

//Banana
console.log(`substr: ${data.substr(7, 6)}`); // 7인덱스부터 6개 //substr : Banana
//Banana
console.log(`substr: ${data.substr(-12, 6)}`); //substr : Banana

//Banana
console.log(`slice: ${data.slice(7, 13)}`); // 7인덱스부터 13개미만 //slice : Banana
//Banana
console.log(`slice: ${data.slice(-12, -6)}`); //slice : Banana

console.log(`data:${data}`); //data:Apple, Banana, Kiwi

//replace('찾을 문자열|RegExp', '바꿀 문자열');
// i : 대소문자 구분없음,  g : 모든 문자열
console.log(`replace: ${data.replace('Banana', 'Grape')}`); //replace : Apple, Grape, Kiwi

console.log(`data:${data}`);

data = 'Mr Blue has a blue house and a blue car';
//Mr Blue has a red house and a blue car
console.log(data.replace(/blue/, 'red'));

data = 'Mr Blue has a blue house and a blue car';
//Mr Blue has a red house and a red car
console.log(data.replace(/blue/g, 'red')); // g를 입력해서 모든 blue를(소문자) red로 변경

data = 'Mr Blue has a blue house and a blue car';
//Mr red has a blue house and a blue car
console.log(data.replace(/blue/i, 'red')); // i를 입력해서 대문자 Blue를 red로 변경

data = 'Mr Blue has a blue house and a blue car';
//Mr red has a red house and a red car
console.log(data.replace(/blue/gi, 'red')); // gi를 입력해서 대문자/소문자 상관없이 모든 blue를 red로 변경

data = 'Hello World';
//HELLO WORLD
console.log(`toUpperCase() : ${data.toUpperCase()}`); //대문자출력
//hello world
console.log(`toLowerCase() : ${data.toLowerCase()}`); //소문자출력

let data2 = 'javascript';
//Hello Worldjavascript
console.log(`concat():${data.concat(data2)}`); //문장과 문장 연결
//Hello World javascript
console.log(`concat() : ${data.concat(' ', data2)}`);
//Hello World_javascript
console.log(`concat() : ${data.concat('_', data2)}`);

//H
console.log(`charAt() : ${data.charAt(0)}`);
//72 (unicode value)
console.log(`charAt() : ${data.charCodeAt(0)}`);

// match() : 검색데이터와 일치하는 문자열이 있으면 문자열 모두를 찾아서 배열로 리턴하고
// 일치하는 문자열이 없으면 null로 리턴한다.

data = 'Mr Blue has a blue house and a blue car';
let res = data.match(/blue/g);
//blue,blue object true
console.log(`match() : ${res} ${typeof res} ${res instanceof Array}`);

res = data.match(/red/g);
//null object false
console.log(`match() : ${res} ${typeof res} ${res instanceof Array}`);

//search( ) : 검색데이터와 일치하는 문자열이 있으면 처음의 index를 리턴하고
//            일치하는 문자열이 없으면 -1 을 리턴한다.

res = data.search(/blue/g);
//14
console.log(`search() : ${res}`); //첫 blue 인덱스가 14

res = data.search(/red/g);
//-1
console.log(`search() : ${res}`); // 값이 없을경우 -1

data = 'Mr Blue has a blue house and a blue car';
//indexOf() : 문자열의 인덱스를 리턴
//0
console.log(data.indexOf('M'));

//3
console.log(data.indexOf('B'));

let position = data.indexOf('blue'); //0번째 인덱스부터 찾기
console.log(position); //14
//31
console.log(data.indexOf('blue', position + 1)); //15번부터 blue를 찾기

data = 'Mr Blue has a blue house and a blue car';
let pos = -1;
do {
  pos = pos + 1;
  pos = data.indexOf('blue', pos);
  if (pos != -1) console.log(pos);
  else break;
} while (true); // 14, 31 (blue의 인덱스값)

//repeat()
let text = 'korea';
console.log(typeof text); //string
//koreakoreakoreakoreakoreakoreakoreakoreakoreakorea
console.log(text.repeat(10)); // .을 넣으면 string(객체)으로 변환

text = '*';
//**********
console.log(text.repeat(10));

let text2 = '  korea   data '; //앞에 2개 , 가운데 3개 , 뒤에 1개의 공백을 줌
//15
console.log(text2.length);

//12
console.log(text2.trim().length);
