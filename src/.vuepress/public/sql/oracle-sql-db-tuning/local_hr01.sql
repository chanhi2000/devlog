SELECT * FROM all_tables;		-- dba내부에 위치한 모든 테이블 출력
SELECT * FROM user_tables;	-- 현재 접속 된 'hr` 유저가 갖고 있는 모든 테이블 출력
SELECT * FROM dba_users;		-- 전체 사용자에 대한 정보를 검색할 때 (GRANT 후 서버 재접속 권장)
 
/**
 * 실제 실행계획 설정 set autotrace $PARAMETER
 * on explain : 계획만
 * on statistics : 통계만
 * traceonly explain : 결과출력 제외, 계획만 
 * traceonly statistics : 결과출력 제외, 통계만
 */
SET AUTOTRACE ON EXPLAIN;
SELECT * FROM departments;

-- 예상 실행계획확인
EXPLAIN PLAN FOR
SELECT * FROM departments;

SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY);

-- 예상 실행계획확인  
SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY(NULL, NULL, 'ADVANCED LAST'));

-- 실제 실행계획확인
SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY_CURSOR(NULL, NULL, 'ADVANCED LAST'));

/** 
 * SQL 쿼리 통계 관련 조회
 * 관련링크: https://docs.oracle.com/cd/B19306_01/server.102/b14237/dynviews_2113.htm
 */
SELECT /* HNJ */ * from DEPARTMENTS;

SELECT SQL_ID, CHILD_NUMBER, SQL_TEXT
	FROM V$SQL
 WHERE 1=1
   AND SQL_TEXT LIKE '%HNJ%'
	 AND SQL_TEXT NOT LIKE '%V$SQL%';

SELECT * 
  FROM TABLE(DBMS_XPLAN.DISPLAY_CURSOR('4as1hpqvptnrs', 0, 'ADVANCED LAST'));

SELECT * 
  FROM V$SQLAREA;

SHOW PARAMETER BLOCK;

-- ROWID를 사용할 데이타 추적
SELECT * FROM user_objects;
	
SELECT A.*, ROWID FROM departments A;
	
/** 
 * 활용01 : 중복데이터 제거
 */
-- 실존 테이블 확인
SELECT *
	FROM ALL_TABLES
 WHERE 1=1
   AND OWNER = 'SCOTT';

-- 테이블 복제1
CREATE TABLE HR.empt_t AS SELECT * FROM SCOTT.emp;

INSERT INTO empt_t
SELECT * FROM SCOTT.emp;
-- 상태 저장
COMMIT;

SELECT COUNT(*) FROM SCOTT.emp;
SELECT COUNT(*) FROM HR.empt_t;

-- SCOTT.emp 테이블 인덱스 속성 확인
SELECT *
	FROM ALL_INDEXES
	WHERE 1=1
	  AND OWNER = 'SCOTT'
		AND TABLE_NAME = 'EMP';
		
SELECT *
	FROM ALL_IND_COLUMNS
 WHERE 1=1
   AND INDEX_OWNER = 'SCOTT'
	 AND INDEX_NAME = 'PK_EMP';  

-- 고유 인덱스 생성 (오류: 이미 UNIQUE하기 때문에 중복이 생김)


-- 중복데이터 확인 / 삭제
SELECT *
-- DELETE
	FROM HR.EMPT_T
 WHERE 1=1
   AND ROWID NOT IN (
   	  SELECT MAX(ROWID) FROM HR.EMPT_T GROUP BY EMPNO
   );

SELECT SQL_ID, CHILD_NUMBER, SQL_TEXT
	FROM V$SQL
 WHERE 1=1
   AND SQL_TEXT LIKE '%MAX(ROWID) FROM HR.EMPT_T%'
	 AND SQL_TEXT NOT LIKE '%V$SQL%';

SELECT * 
	FROM TABLE(DBMS_XPLAN.DISPLAY_CURSOR('6r73uhg4xbd06', 0, 'ADVANCED LAST'));

-- 인덱스 생성
CREATE UNIQUE INDEX HR.PK_EMPT_T ON HR.EMPT_T(EMPNO);

SELECT *
	FROM ALL_INDEXES
	WHERE OWNER = 'HR'
		AND TABLE_NAME = 'EMPT_T'; 
		
SELECT *
	FROM ALL_IND_COLUMNS
 WHERE INDEX_OWNER = 'SCOTT'
	 AND INDEX_NAME = 'PK_EMP';  

-- 활용 : Merge Into 활용
ALTER TABLE EMPT_T ADD (DEPTNO_TMP VARCHAR2(10));
ALTER TABLE EMPT_T DROP COLUMN DEPTNO_TMP;

TRUNCATE TABLE EMPT_T;

INSERT INTO EMPT_T
SELECT * FROM SCOTT.EMP;
-- 상태저장
COMMIT;

-- 머징 작업
MERGE INTO HR.EMPT_T USING (
	SELECT ROWID AS RID FROM HR.EMPT_T WHERE 1=1
	AND ROWID NOT IN (
		SELECT MAX(ROWID)
			FROM HR.EMPT_T
	GROUP BY EMPNO)
) B ON (A.ROWID = B.RID)
WHEN MATCHED THEN 
UPDATE SET A.EMP_NO = 'X';

ROLLBACK;

SELECT * 
  FROM ALL_IND_COLUMNS 
 WHERE 1=1
   AND INDEX_OWNER = 'HR' 
   AND TABLE_NAME = 'EMPT_T' 
ORDER BY COLUMN_POSITION;

SELECT /*+ INDEX_DESC(T EMPT_T_PK) */ * 
 FROM EMPT_T T 
WHERE 1=1
  AND EMPNO = 7521;


-- 병렬 처리
SELECT /*+ PARALLEL(T 4) INDEX_FFS(A EMPT_T_PK) */ * 
	FROM EMPT_T T
 WHERE 1=1;

-- CLUSTERING FACTOR
CREATE TABLE t AS
SELECT * FROM all_objects 
ORDER BY object_id;
	
-- cf = good
CREATE INDEX t_object_id_idx
ON t(object_id);

-- cf = bad  
CREATE INDEX t_object_name_idx 
ON t(object_name);

-- 통계정보 생성
EXEC DBMS_STATS.GATHER_TABLE_STATS(user, 'T');

-- CLUSTERING FACTOR가 작을수록 좋은 수치
SELECT i.index_name, t.blocks table_blocks, i.num_rows, i.clustering_factor
  FROM  user_tables t, user_indexes i
 WHERE 1=1
   AND t.table_name = 'T'
   AND i.table_name = t.table_name;



