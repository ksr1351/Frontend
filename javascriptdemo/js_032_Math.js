//js_032_Math.js

//최대값
console.log(Math.max(1, 2, 3, 4, 5)); //5

//최소값
console.log(Math.min(1, 2, 3, 4, 5)); //1

//절대값
console.log(Math.abs(-10)); //10

//반올림 - 자릿수 지정할 수 없음
console.log(Math.round(25.9533)); //26 (정수값만 출력됨 )

//올림
console.log(Math.ceil(23.344)); //24 (무조건 올림)

//버림
console.log(Math.floor(23.56)); //23 (무조건 버림)

//난수 (임의의 값 / 0.0 이상 ~ 1.0미만) / 값은 매번 바뀜
console.log(Math.random());

//반올림(tofixed)
console.log((25.523).toFixed(2)); //25.52 (소수점 2번째 자리까지 구하라)
console.log((25.526).toFixed(2)); //25.53 (3번째자리가 반올림되어 2번째자리까지 구해짐)
