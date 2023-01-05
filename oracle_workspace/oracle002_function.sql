/*=====================================================
SQL(structured query language)함수
1. 단일행함수 : 행 하나당 하나의 결과를 출력한다
              (문자함수, 숫자함수, 날짜함수, 변환함수, 일반함수)
2. 복수행함수 : 행 여러개당 하나의 결과를 출력한다
               (합계, 평균, 최대, 최소, 갯수)  
====================================================== 
--SELECT문에서는 반드시 테이블명을 명시해야 한다.
--그래서 SELECT절에 식이나 특정함수를 이용해서 결과값을 가져올때
-- 사용할 수 있는 DUAL(가상테이블)이라는 테이블을 제공하고 있다. */

-- select에서 특정함수를 이용해서 결과값을 가져올 경우 어떤 테이블을 써도 무방하지만
-- 중복 출력을 방지하기 위해 테이블명은 가상테이블인 dual을 쓴다.
SELECT 3+1
FROM dual;

SELECT sysdate
FROM dual;


/*---------------------------------
문자함수
--------------------------------*/
-- 단어의 첫글자만 대문자로 변경해서 제공해주는 함수
SELECT initcap('korea hello')
FROM dual;

-- 모든 문자를 대문자로 변경해주는 함수
SELECT upper('korea hello')  /* toUpperCase() */
FROM dual;

SELECT first_name, upper(first_name) , last_name , upper(last_name)
FROM employees;


-- 모든 문자를 소문자로 변경해주는 함수
SELECT lower('KOREA HELLO')
FROM dual;

SELECT first_name, lower(first_name) , last_name , lower(last_name)
FROM employees;


-- employees테이블 first_name에서 대소문자 구분없이
-- 'Ja'가 포함이 된 first_name, salary를 출력하라.
SELECT first_name, salary
FROM employees
WHERE upper(first_name) LIKE upper ('%Ja%');


-- 문자열의 길이를 리턴해주는 함수
SELECT length('korea')
FROM dual;

SELECT length('한글')
FROM dual;

CREATE TABLE person1(
    data varchar2(5) --varchar2 => 문자열로 저장할 수 있다는 뜻  /varchar2(5) => 5개까지 저장가능함
);

DESC person1;


SELECT * FROM person1;


INSERT INTO person1(data)
VALUES('korea');

SELECT * FROM person1;

--ORA-12899: value too large for column "HR"."PERSON1"."DATA" (actual: 11, maximum: 5)
-- 5가 초과되니 오류 뜸
INSERT INTO person1(data)
VALUES ('south korea');


--ORA-12899: value too large for column "HR"."PERSON1"."DATA" (actual: 6, maximum: 5)
-- 5가 초과되어 오류 뜸
-- 한자, 일본어, 한글의 1자는 3byte로 처리됨
INSERT INTO person1(data)
VALUES ('한글');


-- 특정범위의 문자를 추출해주는 함수
-- substr('문자', 시작위치, 개수)
SELECT substr('oracle test', 1, 4) --1은 인덱스 / 4는 갯수    /*substring(start, end)*/
FROM dual; -- orac


SELECT substr('oracle test', -3, 4)
FROM dual; -- est


SELECT substr ('오라클 테스트', 3, 4)
FROM dual; -- 클 테스


SELECT substr ('오라클 테스트', -3, 4)
FROM dual; -- 테스트


--특정문자의 인덱스를 추출하는 함수
SELECT instr('korea','or')
FROM dual;

SELECT instr('한국자바', '자바')
FROM dual;


-- 주어진 문자열에서 왼쪽으로 특정문자를 채우는 함수이다.
SELECT lpad('korea', 8, '*')
FROM dual;

-- 주어진 문자열에서 오른쪽으로 특정문자를 채우는 함수이다.
SELECT rpad('korea', 8, '*')
FROM dual;


-- 주어진 문자열에서 왼쪽의 특정문자를 삭제하는 함수
SELECT ltrim('***korea', '*')
FROM dual;

-- 주어진 문자열에서 오른쪽의 특정문자를 삭제하는 함수
SELECT Rtrim('korea***', '*')
FROM dual;

-- 주어진 문자열에서 양쪽 특정문자를 삭제하는 함수
SELECT trim('*' from '***korea***')
FROM dual;


-- 주어진 문자열에서 왼쪽의 공백 제거
SELECT '   korea', length('   korea'), -- 공백 3개, 문자열 5개 / 총 8개
        ltrim('   korea'), length(ltrim('   korea')) -- 공백삭제, 문자열 5개 / 총 5개
FROM dual;


-- 주어진 문자열에서 오른쪽의 공백제거
SELECT 'korea   ', length('korea   '), -- 공백 3개, 문자열 5개 / 총 8개
       rtrim('korea   '), length(rtrim('korea   ')) -- 공백삭제, 문자열 5개 / 총 5개
FROM dual;



-- 주어진 문자의 아스키 코드값을 구하는 함수
SELECT ascii('A')
FROM dual;

-- 주어진 아스키 코드값의 문자를 구하는 함수
SELECT chr(65)
FROM dual;

-- 주어진 문자를 연결하는 함수
SELECT concat('java', 'jsp')
FROM dual;

SELECT 'java' || 'jsp'
FROM dual;



/*---------------------------------
 숫자함수
 -------------------------------*/
 
 -- 3.55을 소수점 1의 자리까지 구한다(반올림)
 SELECT round(3.55, 1)
 FROM dual;
 
 -- 42523.55을 십의 자리까지 구한다(반올림)
 SELECT round(42523.55 ,-1)
 FROM dual;
 
 -- 42523.55의 일의 자리까지 구한다(반올림)
 SELECT round(42523.55, 0)
 FROM dual;
 
 SELECT round(42523.55)
 FROM dual;
 
 
 -- 256.78을 무조건 올림한다. (올림)
 SELECT ceil(256.78)
 FROM dual;
 
 -- 289.78에서 소수 이하는 무조건 버린다.(버림)
 SELECT floor(289.78)
 FROM dual;
 
 -- 2의 3승(거듭제곱)
 SELECT power(2,3)
 FROM dual;
 
 --25의 제곱근
 SELECT sqrt(25)
 FROM dual;
 
 --나머지
 SELECT mod(10,3)
 FROM dual;
 
 SELECT mod(1,3,3) --mode는 횟수(가장 많이 사용되는 숫자를 구함)
 FROM dual;
 
 
 
 /*-----------------------------
 날짜 함수
 -----------------------------*/
 
 SELECT sysdate
 FROM dual; -- 오늘의 날짜
 
 SELECT sysdate +1
 FROM dual; -- 내일의 날짜
 
 SELECT sysdate -1
 FROM dual; -- 어제의 날짜


-- 오늘을 기준으로 10개월 후의 날짜
SELECT add_months(sysdate, 10)
FROM dual;


/*-----------------------------
변환형 함수

      숫자                  문자                날짜
to_number() <->  to_char()  <->  to_date()

--------------------------------*/
-- 숫자 -> 문자
SELECT to_char(2532, '9,999.99') -- 천의 자리 구분, 소수점 2번째 자리까지 표현하겠다
FROM dual; -- 소수점 두번째 자리까지 0으로 채워짐


SELECT to_char(2532, '999,999.99') 
FROM dual; --표현할 수 있는 값이 없을 때는 그 자리를 비움

SELECT to_char(2532, '000,000.00') 
FROM dual;

-- 각 나라의 통화를 표현해 줄 때 L기호를 사용한다.
SELECT to_char(2532, 'L999,999.99') 
FROM dual;

-- 날짜 -> 문자
SELECT to_char(sysdate, 'yyyy-mm-dd  hh:mi:ss day') /* 12시간 , day : 월요일 */
FROM dual;


SELECT to_char(sysdate, 'yyyy-mm-dd  hh:mi:ss dy')  /* 12시간 , day: 월 */
FROM dual;


SELECT to_char(sysdate, 'yyyy-mm-dd  hh24:mi:ss dy')  /* 24시간 , day: 월 */
FROM dual;




/*
 java
 
 HH : 24시간 ,  hh: 12시간
    String pattern = "yyyy-MM-dd  HH:mm:ss  a EEEE";
    
*/


/*-----------------------------
to_number( )
----------------------------*/
-- 문자 -> 숫자 

SELECT '253' || '12'
FROM dual;

SELECT concat('253' , '12')
FROM dual;

SELECT 253 || 12
FROM dual;

SELECT '253' + '12'
FROM dual;

SELECT to_number('253') + to_number('12')
FROM dual;



/*---------------------------
to_date( )
--------------------------------*/
-- 문자 -> 날짜

SELECT to_date('2023-01-04')
FROM dual;

SELECT first_name, hire_date
FROM employees;


-- hire_date(입사일)을 이용해서 '홍길동님은 2003년 1월 3일에 입사했습니다.' 로 출력하는 query를 작성하세요

SELECT first_name ||'님은 '||
    to_char(hire_date,'yyyy')|| '년 ' ||
    ltrim(to_char(hire_date,'mm'),'0') || '월 '||
    ltrim(to_char(hire_date,'dd'),'0') ||'일에 입사했습니다.'
FROM employees;


/*-------------------------------------------
일반함수(NULL)
1. nvl(컬럼, 대체값) : 첫번째 인자값이 null이면 0으로 대체해서 출력한다.
        - 대체할 값이 숫자이면 두번째 인자값에 숫자를 지정한다.
        - 대체할 값이 문자이면 두번째 인자값에 문자를 지정한다.
        - 대체할 값이 날짜이면 두번째 인자값에 날짜를 지정한다.
------------------------------------------*/










