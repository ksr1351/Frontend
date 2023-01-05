SELECT first_name
FROM employees;
-- 실행: Ctrl+Enter 

-- 한라인 주석처리
/* 여러라인 주석처리 */

-- 도구 > 환경설정 > 코드편집기  > 글꼴 > 글꼴 크기

SELECT * FROM tab; --테이블(tab)

/* 
컬럼명, 테이블명에 별칭(alias)을 지정할 수 있다.
별칭(alias)에 공백이 있을 때는 " " (쌍따옴표)를 지정한다.
*/

SELECT salary, salary*10 AS bonus
FROM employees; -- select 는 테이블만 가져올 수 있음
-- 식별자(ex.employees)는 소문자로만!

SELECT salary, salary*10 AS 보너스 --한글로는 거의 사용하지 않는다.
FROM employees;

SELECT salary, salary*10 AS "b o n u s"
FROM employees;


SELECT last_name || '님의 급여는 ' || salary || '입니다' AS name --(Alias 값 부여)
FROM employees;

-- DISTINCT는 중복제거를 한 후 출력해주는 명령어이다.
SELECT DISTINCt first_name
FROM employees;

SELECT DISTINCT first_name, last_name --두 값을 모두 반영해서 중복제거
FROM employees;

/* 
first_name   last_name
sunder         Able -- 중복값
sunder         Able -- 중복값
sunder         Ande -- last name이 다르기 때문에 중복값이 아님
*/ 


/* 
-- SELECT 입력순서
SELECT column_name1, column_name2 --여러개의 값은 쉼표로 구분
FROM table_name1, table_name2 -- 쉼표로 구분
WHERE column_name='value'
GROUP BY column_name
HAVING column_name='value'
ORDER BY column_name ASC, column_name DESC;

-- SELECT 해석순서
FROM table_name1, table_name2
WHERE column_name='value'
GROUP BY column_name
HAVING column_name='value'
SELECT column_name1, column_name2
ORDER BY column_name ASC, column_name DESC;
*/

-- employees 테이블에서 first_name컬럼의 값이 'David' 일때의 
-- first_name, salary를 출력하라.
SELECT first_name, salary --테이블에서 first_name과 salary만 가져오기
FROM employees --employees라는 테이블에서
WHERE first_name = 'David'; --실제 값을 써줄 때는 대소문자 구분 / (=) => 비교, 같은가
-- first_name에 해당하는게 David인지


-- employees 테이블에서 salary이 3000미만 일때의
-- first_name, salary를 출력하라.
SELECT first_name, salary 
FROM employees
WHERE salary < 3000;


-- employees 테이블에서 first_name컬럼의 값이 'David' 가 아닐때의
-- first_name, salary를 출력하라.

-- 같지 않다 ( != / <> / ^= )
SELECT first_name, salary
FROM employees
WHERE first_name != 'David';

SELECT first_name, salary
FROM employees
WHERE first_name <> 'David';

SELECT first_name, salary
FROM employees
WHERE first_name ^= 'David';


-- 논리연산자 : AND(&&), OR(||) 
--employee테이블에서 salary가 3000, 9000, 17000일 때
--first_name, hire_date, salary를 출력하라.
SELECT first_name, hire_date, salary
FROM employees
WHERE salary  = 3000 OR  salary = 9000 OR salary = 17000;

SELECT first_name, hire_date, salary
FROM employees
WHERE salary IN(3000,9000,17000); 
--IN: 비교되는 컬럼이 같고 비교되는 값이 일치할 때 사용할 수 있음(조건에 해당되는 값들 찾기)



--employees테이블에서 salary가 3000부터 5000까지 일때의
--first_name, hire_date, salary를 출력하라.
SELECT first_name, hire_date, salary
FROM employees
WHERE salary >= 3000 AND salary <= 5000; 

SELECT first_name, hire_date, salary
FROM employees
WHERE salary BETWEEN 3000 AND 5000 ; 
-- BETWEEN a AND b : 비교되는 컬럼이 같고 a,b값이 포함될 때 사용 가능


-- employees테이블에서 job_id가 'IT_PROG'가 아닐 때
-- first_name, email, job_id를 출력하라
SELECT first_name, email, job_id
FROM employees
WHERE job_id  != 'IT_PROG';

SELECT first_name, email, job_id
FROM employees
WHERE job_id  <> 'IT_PROG';

SELECT first_name, email, job_id
FROM employees
WHERE job_id  ^= 'IT_PROG';

SELECT first_name, email, job_id
FROM employees
WHERE NOT (job_id  = 'IT_PROG');



--employee테이블에서 salary가 3000, 9000, 17000가 아닐 때
--first_name, hire_date, salary를 출력하라.
SELECT first_name, hire_date, salary
FROM employees
WHERE NOT (salary  = 3000 OR  salary = 9000 OR salary = 17000);

SELECT first_name, hire_date, salary
FROM employees
WHERE salary NOT IN(3000,9000,17000); 



--employees테이블에서 salary가 3000부터 5000까지 아닐 때의
--first_name, hire_date, salary를 출력하라.
SELECT first_name, hire_date, salary
FROM employees
WHERE NOT (salary >= 3000 AND salary <= 5000); 

SELECT first_name, hire_date, salary
FROM employees
WHERE salary NOT BETWEEN 3000 AND 5000 ;  -- 괄호로 감싸게 되면 문법적인 오류 생김


-- employees테이블에서 commission_pct가 null일 때
-- first_name, salary, commission_pct를 출력하라.
SELECT first_name, salary, commission_pct
FROM employees
WHERE commission_pct IS NULL; --null을 비교할 때 IS NULL을 사용해야함. (문법)


-- employees테이블에서 commission_pct가 null이 아닐 때
-- first_name, salary, commission_pct를 출력하라.
SELECT first_name, salary, commission_pct
FROM employees
WHERE commission_pct IS NOT NULL;


--employees 테이블에서 first_name에 'der'이 포함된
--first_name, salary, email을 출력하라
SELECT first_name, salary, email
FROM employees
WHERE  first_name  LIKE '%der%';


-- employees테이블에서 frist_name의 값 중 'A'로 시작하고
-- 두번째 문자는 임의 문자이면 'exander'로 끝나는
-- first_name, salary, email을 출력하라.
SELECT first_name, salary, email
FROM employees
WHERE first_name LIKE 'A_exander';


/*

WHERE절에서 사용된 연산자 3가지 종류
1. 비교연산자 : = , > , >= , <= , != , <> , ^=
2. SQL연산자 : BETWEEN a AND b,  IN,  LIKE,  IS NULL
3. 논리연산자 : AND,  OR,  NOT

우선순위
1. 괄호()
2. NOT연산자
3. 비교연산자, SQL연산자
4. AND
5. OR

*/


--employees테이블에서 job_id를 오름차순으로 
--first_name, email, job_id를 출력하시오.
SELECT first_name, email, job_id
FROM employees
ORDER BY job_id ASC;

SELECT first_name, email, job_id
FROM employees
ORDER BY job_id;


--employees테이블에서 job_id를 오름차순하고 
--first_name을 내림차순으로
--department_id, first_name, salary를 출력하시오.
SELECT department_id, first_name, salary
FROM employees
ORDER BY department_id ASC , first_name DESC;



-- employees테이블에서 업무(job_id)이 'FI_ACCOUNT'인 사원들의
-- 급여(salary)가 높은순으로 first_name, job_id, salary를 출력하시오
SELECT first_name, job_id, salary
FROM employees
WHERE job_id = 'FI_ACCOUNT'
ORDER BY salary DESC;

select *
from employees; --employees의 전체 컬럼 및 내용 확인

DESC employees; --employees에 제공되는 컬럼확인(테이블의 구조)
--유형에 따라서 다름

/*/////////////////////////////////////
//문제
////////////////////////////////////// */
-- 1) employees테이블에서 급여가 17000이하인 사원의 사원번호, 사원명(first_name), 급여를 출력하시오.
SELECT employee_id, first_name, salary
FROM employees
WHERE salary <= 17000;


-- 2) employees테이블에서 2005년 1월 1일 이후에 입사한 사원을 출력하시오.
-- 이전 <= ,  이후 >= ,  4월 21일전(<) , 4월 21일이전(<=)
SELECT *
FROM employees
WHERE hire_date >= '2005-01-01';
 
 
-- 3) employees테이블에서 급여가 5000이상이고 업무(job_id)이 'IT_PROG'이 사원의 사원명(first_name), 급여, 
--   업무을 출력하시오.
SELECT first_name, salary, job_id
FROM employees 
WHERE salary >= 5000 AND job_id = 'IT_PROG';


-- 4) employees테이블에서 부서번호가 10, 40, 50 인 사원의 사원명(first_name), 부서번호, 이메일(email)을 출력하시오.
SELECT first_name, department_id, email
FROM employees
WHERE department_id IN(10,40,50);
-- WHERE department_id =10 OR department_id =40 OR department_id =50;


-- 5) employees테이블에서 사원명(first_name)이 even이 포함된 사원명,급여,입사일을 출력하시오.
SELECT first_name, salary, hire_date
FROM employees
WHERE first_name LIKE '%even%';


-- 6) employees테이블에서 사원명(first_name)이 teve앞뒤에 문자가 하나씩 있는 사원명,급여,입사일을 출력하시오.
SELECT first_name,salary, hire_date
FROM employees
WHERE first_name LIKE '_teve_';


-- 7) employees테이블에서 급여가 17000이하이고 커미션이 null이 아닐때의 사원명(first_name), 급여, 
--  커미션을 출력하시오.
 SELECT first_name, salary, commission_pct
 FROM employees
 WHERE salary <= 17000 AND commission_pct IS NOT NULL;
  
  
-- 8) 2005년도에 입사한 사원의 사원명(first_name),입사일을 출력하시오.

--날짜에서 입사날짜 및 연도만 가져오기
SELECT hire_date, to_char(hire_date, 'yyyy')
FROM employees;


 SELECT first_name, hire_date
 FROM employees
 WHERE to_char(hire_date, 'yyyy') = '2005';  --문자열 및 날짜는 무조건 홑따옴표!


-- 9) 커미션 지급 대상인 사원의 사원명(first_name), 커미션을 출력하시오.
-- null 값이 아닌 값을 가져오기
 SELECT first_name, commission_pct
 FROM employees
 WHERE commission_pct IS NOT NULL;

-- 10) 사번이 206인 사원의 이름(first_name)과 급여를 출력하시오.
 SELECT first_name, salary
 FROM employees
 WHERE employee_id = 206; -- 유형이 숫자이기 때문에 홑따옴표 x

-- 11) 급여가 3000이 넘는 업무(job_id),급여(salary)를 출력하시오.
SELECT job_id, salary
FROM employees
WHERE salary  > '3000';

-- 12)'ST_MAN'업무을 제외한 사원들의 사원명(first_name)과 업무(job_id)을 출력하시오.
SELECT first_name, job_id
FROM employees
WHERE job_id != 'ST_MAN';

SELECT first_name, job_id
FROM employees
WHERE job_id <> 'ST_MAN';

SELECT first_name, job_id
FROM employees
WHERE job_id ^= 'ST_MAN';

SELECT first_name, job_id
FROM employees
WHERE NOT(job_id = 'ST_MAN');


-- 13) 업무이 'PU_CLERK' 인 사원 중에서 급여가 3000 이상인 사원명(first_name),업무(job_id),급여(salary)을 출력하시오.
SELECT first_name, job_id, salary
FROM employees
WHERE job_id = 'PU_CLERK' AND salary >= 3000;

-- 14) commission을 받는 사원명(first_name)을 출력하시오.
 SELECT first_name
 FROM employees
 WHERE commission_pct IS NOT NULL;

-- 15) 20번 부서와 30번 부서에 속한 사원의 사원명(fist_name), 부서를 출력하시오.
 SELECT first_name, department_id
 FROM employees
 WHERE department_id=20 OR department_id=30;
 
 
 SELECT first_name, department_id
 FROM employees
 WHERE department_id IN(20, 30);
   

-- 16) 급여가 많은 사원부터 출력하되 급여가 같은 경우 사원명(first_name) 순서대로 출력하시오.
 SELECT *
 FROM employees
 ORDER BY salary DESC, first_name ASC;

-- 17) 업무가 'MAN' 끝나는 사원의 사원명(first_name), 급여(salary), 업무(job_id)을 출력하시오.

SELECT first_name, salary, job_id
FROM employees
WHERE job_id LIKE '%MAN';




/*===================================================
집합연산자 (Set Operations)
=====================================================

-둘 이상의 query결과를 하나의 결과로 조합한다.
-select의 인자 갯수가 같아야 한다.
  첫번째 select가 2개이면 두번째 select도 2개여야 한다.
-타입이 일치해야 한다.  
 예를 들어 character이면 character이여야 한다.

집합연산자 종류
union(합집합)- 중복행이 제거된 두 query
union all(합집합)-중복행이 포함된 두 query행
intersect(교집합)-두 query에 공통적인 행
minus(차집합)-첫번째 query에 있는 행 중 두번째 query에 없는 행표시

집합연산자 사용이유
-서로 다른 테이블에서 유사한 형태의 결과를 반환하기 위해서
-서로 같은 테이블에서 서로 다른 질의를 수행하여 결과를 합치기 위해서

*/


-- union (합집합)
-- WHERE => 조건
--두 개의 조건의 합집합 가져오기

SELECT department_id, first_name, last_name
FROM employees
WHERE department_id = 20 OR department_id = 40
UNION
SELECT department_id, first_name, last_name
FROM employees
WHERE department_id = 20 OR department_id = 60;



-- union all (합집합)
--두 개의 조건의 전체 합집합 가져오기

SELECT department_id, first_name, last_name
FROM employees
WHERE department_id = 20 OR department_id = 40
UNION ALL
SELECT department_id, first_name, last_name
FROM employees
WHERE department_id = 20 OR department_id = 60;



-- intersect (교집합)
-- 두 개의 조건에 부합하는 값만 가져오기

SELECT department_id, first_name, last_name
FROM employees
WHERE department_id = 20 OR department_id = 40
INTERSECT
SELECT department_id, first_name, last_name
FROM employees
WHERE department_id = 20 OR department_id = 60;


-- minus ( =except) 차집합

SELECT department_id, first_name, last_name
FROM employees
WHERE department_id = 20 OR department_id = 40
MINUS
SELECT department_id, first_name, last_name
FROM employees
WHERE department_id = 20 OR department_id = 60;


















