-- 권한에서 사용 할 수 있는 모든 테이블을 출력
select *
  from user_tables;

-- 전에 만들었던 테이블을 출력;
select * 
  from empt_t;

-- 아무런 조건 없이 통계정보를 생성/실행
-- 주의: 실행계획을 관장하는 기능 임으로 함부로 돌려선 안된다.
exec DBMS_STATS.GATHER_TABLE_STATS('HR', 'EMPT_T');


-- 구체적으로 더 자세히 알아보자.
select TABLE_NAME, NUM_ROWS, BLOCKS, LAST_ANALYZED
  from user_tables;

-- 통계정보를 알수 있는 간편한 테이블을 생성.
-- 당연히 이 테이블은 통계정보가 없음을 알 수 있다.
CREATE TABLE test
(
COL1 NUMBER,
COL2 VARCHAR2(10)
);

-- WITH을 쓸 때는 결과 데이타가 상대적으로 많이 작아야 효율적으로 쓸 수 있다.
-- View처럼 되어 Temp Table Space의 공간을 차지 하게 된다.
WITH TMP AS 
(
SELECT EMPNO, ENAME, JOB FROM EMPT_T
)
SELECT * FROM TMP WHERE ENAME = 'SMITH'
 UNION ALL
SELECT * FROM TMP WHERE EMPNO = 7499;