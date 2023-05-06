drop table t
create table t as
 select dbms_random.value(1, 1000000) id,
 rpad('*', 40, '*') data
 from dual connect by level <= 100000;


-- procedure 
begin
   dbms_stats.gather_table_stats(user, 'T');
end;

alter session set statistics_level = 'ALL';

-- paging query example
create index t_id_idx on t(id);

select *
  from t;
  
select * 
  from (select * 
          from (select /*+ index(t t_id_idx) */  
                        rowid as rid    
                from t 
               where id > -100
               order by id) a
        where rownum <= 10)

;
    
select * from table(dbms_xplan.display_cursor(null, null, 'ALLSTATS LAST'));
  
  
  
-- 실습 2: PAGING QUERY
DROP TABLE DEPT_T;
CREATE TABLE DEPT_T AS
SELECT DEPTNO+ROW_NUMBER() OVER(ORDER BY 1) AS DEPTNO
     , DNAME
     , LOC AS LOCATION
     , NO AS DNO
FROM SCOTT.DEPT, (SELECT /*+ NO_MERGE */LEVEL AS NO FROM DUAL CONNECT BY LEVEL <= 50)
;
exec dbms_stats.gather_table_stats(user, 'dept_t');

-- PK생성
CREATE UNIQUE INDEX DEPT_T_PK ON DEPT_T(DEPTNO);
ALTER TABLE DEPT_T ADD CONSTRAINT DEPT_T_PK PRIMARY KEY (DEPTNO) USING INDEX DEPT_T_PK;

DROP TABLE EMP_T;
CREATE TABLE EMP_T as 
SELECT  9999 + ROW_NUMBER() OVER(ORDER BY 1) AS EMPNO
       ,ENAME
       ,JOB
       ,MGR
       ,HIREDATE
       ,SAL
       ,COMM
       ,DEPTNO+MOD(NO2,50)+1 AS DEPTNO
 FROM SCOTT.EMP
      , (SELECT /*+ NO_MERGE */LEVEL AS NO2 FROM DUAL CONNECT BY LEVEL <= 10000);

exec dbms_stats.gather_table_stats(user, 'emp_T');
-- PK생성 
CREATE UNIQUE INDEX EMP_T_PK ON EMP_T(EMPNO);
ALTER TABLE EMP_T ADD CONSTRAINT EMP_T_PK PRIMARY KEY (EMPNO) USING INDEX EMP_T_PK;


-- 실행계획확인
select * from table (dbms_xplan.display_cursor(null, null, 'ALLSTATS LAST'));
  
DELETE FROM EMP_T
 WHERE ENAME = 'SMITH'
 AND ROWNUM < 99
;
COMMIT;


SELECT *
  FROM EMP_T S
 WHERE S.ROWID IN  (SELECT RID 
                      FROM (SELECT ROWID AS RID, ROW_NUMBER() OVER(ORDER BY 1) AS RN 
                              FROM EMP_T 
                             WHERE ENAME = 'SMITH')
                    WHERE RN > 1)
 ;
 
SELECT * FROM EMP_T;
SELECT * FROM DEPT_T;


CREATE INDEX EMP_T_IDX1 ON EMP_T(EMPNO, DEPTNO, ENAME); -- 실패
CREATE INDEX EMP_T_IDX2 ON EMP_T(ENAME);  -- 실패
CREATE INDEX EMP_T_IDX3 ON EMP_T(ENAME, EMPNO, DEPTNO);
CREATE INDEX DEPT_T_IDX1 ON DEPT_T(DEPTNO);

DROP INDEX DEPT_T_IDX1;
DROP INDEX EMP_T_IDX1;
DROP INDEX EMP_T_IDX2;
DROP INDEX EMP_T_IDX3;


SELECT EMPNO SAL, DEPTNO, DNAME
  FROM (SELECT A.EMPNO, A.SAL, A.DEPTNO, B.DNAME, ROWNUM AS RUM
          FROM EMP_T A, DEPT_T B
         WHERE A.DEPTNO = B.DEPTNO
           AND A.ENAME = 'ALLEN'
        ORDER BY A.EMPNO, A.DEPTNO)
WHERE RUM <= 10
;

SELECT EMPNO SAL, DEPTNO, DNAME
  FROM (SELECT /*+ ORDERED USE_NL(B) INDEX(A EMP_T_IDX3) */
                A.EMPNO, A.SAL, A.DEPTNO, B.DNAME, ROWNUM AS RUM
          FROM EMP_T A, DEPT_T B
         WHERE A.DEPTNO = B.DEPTNO
           AND A.ENAME = 'ALLEN'
        ORDER BY A.EMPNO, A.DEPTNO)
WHERE RUM BETWEEN 11 AND 20
 AND ROWNUM <= 20
ORDER BY RUM
;

