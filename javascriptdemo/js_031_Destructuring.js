//js_031_Destructuring.js

/*
Destructuring(구조 분해 할당)
: Destructuring(디스트럭쳐링)은 structuring(구조화)된 배열 또는
객체를 Destructuring(비구조화)하여 개별적으로 변수에 할당하는 개념이다.
*/

//1. 배열 Destructruing
let level = [5, 10];
let a, b;
a = level[0];
b = level[1];
console.log(`a=${a}, b=${b}`); // a=5, b=10

let c, d;
[c, d] = [5, 10];
console.log(`c=${c}, d=${d}`); // c=5, d=10

[d, c] = [c, d]; //c,d에 있는 값을 d,c에 대입(교환)
console.log(`c=${c}, d=${d}`); //c=10, d=5

let k, p, next;
// [k, p, next] = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(`k=${k}`); // k=1
// console.log(`p=${p}`); // p=2
// console.log(`next=${next}`); // next=3

// [k, p, ...next] = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(`k=${k}`); // k=1
// console.log(`p=${p}`); // p=2
// console.log(`next=${next}`); // next=3,4,5,6,7,8

// [k, _, p, _, ...next] = [1, 2, 3, 4, 5, 6, 7, 8]; //2,4번을 받지 않겠다는 뜻
// console.log(`k=${k}`); // k=1
// console.log(`p=${p}`); // p=3
// console.log(`next=${next}`); // next=5,6,7,8

[k, , p, , ...next] = [1, 2, 3, 4, 5, 6, 7, 8]; //2,4번을 받지 않겠다는 뜻
console.log(`k=${k}`); // k=1
console.log(`p=${p}`); // p=3
console.log(`next=${next}`); // next=5,6,7,8

let u, t, w;
[u, t, w] = [1, 2];
console.log(`u=${u}  t=${t}  w=${w}`); //u=1  t=2  w=undefined

[u, t, w = 3] = [1, 2];
console.log(`u=${u}  t=${t}  w=${w}`); //u=1  t=2  w=3

[u, t = 4, w = 5] = [1, 2];
console.log(`u=${u}  t=${t}  w=${w}`); //u=1  t=2  w=5

[u = 3, t, w = 5] = [1, 2];
console.log(`u=${u}  t=${t}  w=${w}`); //u=1  t=2  w=5

/////////////////////////////////////////////////////////////
//2. 객체 Destructuring(구조 분해 할당)
const customer = { fullname: '고수', job: '연기자' };
let fullname = customer.fullname;
let job = customer.job;
console.log(`fullname:${customer.fullname}, job:${customer.job}`); //fullname:고수, job:연기자

let { fullname: fn, job: jb } = customer;
console.log(`fullname:${fn}, job:${jb}`); //fullname:고수, job:연기자

let { fullname: name, job: jbn, loc = '서울' } = customer; //변수 선언 (:) / 새로운 값 선언 (=)
console.log(`fullname:${name}, job:${jbn}, loc=${loc}`); //fullname:고수, job:연기자, loc=서울

//let {s:s, r:r} = {s:1,r:2}; //간단히 아래와 같이 구현 가능
let { s, r } = { s: 1, r: 2 };
console.log(`s:${s},r:${r}`); //s:1,r:2

let v, q; //외부에 별도의 변수를 설정하면 오류 뜸
({ v, q } = { v: 1, q: 2 }); //외부에 별도 변수 설정하게 된다면 값을 괄호로 감싸기
console.log(`v:${v}, q:${q}`); //v:1, q:2

///////////////////////////////////////////////////////////
//completed의 값이 true인 데이터만 검색하라.

let habits = [
  { id: 1, content: '수영', completed: false },
  { id: 2, content: '걷기', completed: true },
  { id: 3, content: '명상', completed: true },
  { id: 4, content: '독서', completed: false },
];

let listHabit = [];
for (let element of habits) {
  //console.log(element);
  if (element.completed) listHabit.push(element);
}

console.log(listHabit);

/////////////////////////////////////////////////////////////
let completedHabit = habits.filter((element) => {
  return element.completed;
});

console.log(completedHabit);

//////////////////////////////////////////////////////////
// member변수에서 데이터를 추출하여 '고수 고객님은 서울에 거주합니다.' 라고 출력하세요.

let member = { hname: '고수', address: { zipCode: '526-143', city: '서울' } };
let {
  hname,
  address: { city },
} = member;
console.log(`${hname} 고객님은 ${city}에 거주합니다.`); //고수 고객님은 서울에 거주합니다.

///////////////////////////////////////////////////////
({
  hname,
  address: { city },
} = member);
console.log(`${hname} 고객님은 ${city}에 거주합니다.`); //고수 고객님은 서울에 거주합니다.

/////////////////////////////////////////////////////////
