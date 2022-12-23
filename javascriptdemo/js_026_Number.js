//js_026_Number.js

let data = 10;
let fData = Number(data);
let nObj = new Number(data);
console.log(`data=${typeof data}`);
console.log(`fData=${typeof fData}`);
console.log(`nObj=${typeof nObj}`);

//toString() : number, Number -> string (모든 문자열을 문자로)
console.log(typeof nObj.toString()); //string
console.log(typeof data.toString()); //string

console.log(data + fData); // number + number = 20
console.log(data + nObj); //number + object = 20

//Number -> number
//valueOf() : object -> primitive(기본데이터타입)
console.log(typeof nObj.valueOf()); //number
console.log(typeof new String('javascript').valueOf()); //string

// let val = '10.0'; //문자열이라 더해지지 않음
//let val = 10.3';
//let val = 'A';
let val = '10A';
//let val = 'A10';
console.log(val + val); //10.010.0
console.log(val);

//Number(), parseINt()
console.log(Number(val) + Number(val)); // 20 //문자열인 val을 숫자로 바꿈
console.log(parseInt(val) + parseInt(val)); // 20
console.log(parseFloat(val) + parseFloat(val)); // 20
