-- dba³»ºÎ¿¡ À§Ä¡ÇÑ ¸ðµç Å×ÀÌºí Ãâ·Â
select * from all_tables;

-- ÇöÀç Á¢¼Ó µÈ 'hr` À¯Àú°¡ °®°í ÀÖ´Â ¸ðµç Å×ÀÌºí Ãâ·Â
select * from user_tables;

-- ÀüÃ¼ »ç¿ëÀÚ¿¡ ´ëÇÑ Á¤º¸¸¦ °Ë»öÇÒ ¶§ (GRANT ÈÄ ¼­¹ö ÀçÁ¢¼Ó ±ÇÀå)
select * from dba_users;

 
/**
  * ½ÇÁ¦ ½ÇÇà°èÈ¹ ¼³Á¤ set autotrace $PARAMETER
  * on explain : °èÈ¹¸¸
  * on statistics : Åë°è¸¸
  * traceonly explain : °á°úÃâ·Â Á¦¿Ü, °èÈ¹¸¸ 
  * traceonly statistics : °á°úÃâ·Â Á¦¿Ü, Åë°è¸¸
*/

set autotrace on explain;
select * from DEPARTMENTS;

-- ¿¹»ó ½ÇÇà°èÈ¹È®ÀÎ
explain plan for
select * from DEPARTMENTS;
select * from table(DBMS_XPLAN.DISPLAY);

-- ¿¹»ó ½ÇÇà°èÈ¹È®ÀÎ  
SELECT * 
  FROM TABLE(DBMS_XPLAN.DISPLAY(NULL, NULL, 'ADVANCED LAST'));

-- ½ÇÁ¦ ½ÇÇà°èÈ¹È®ÀÎ
SELECT * 
  FROM TABLE(DBMS_XPLAN.DISPLAY_CURSOR(NULL, NULL, 'ADVANCED LAST'));

/** 
 * SQL Äõ¸® Åë°è °ü·Ã Á¶È¸
 * °ü·Ã¸µÅ©: https://docs.oracle.com/cd/B19306_01/server.102/b14237/dynviews_2113.htm
 */
SELECT /* HNJ */ * from DEPARTMENTS;
SELECT SQL_ID, CHILD_NUMBER, SQL_TEXT
  FROM V$SQL
 WHERE SQL_TEXT LIKE '%HNJ%'
   AND SQL_TEXT NOT LIKE '%V$SQL%';

SELECT * 
  FROM TABLE(DBMS_XPLAN.DISPLAY_CURSOR('4as1hpqvptnrs', 0, 'ADVANCED LAST'));

SELECT * FROM V$SQLAREA;

show parameter block;

-- ROWID¸¦ »ç¿ëÇÒ µ¥ÀÌÅ¸ ÃßÀû
SELECT *
  FROM user_objects;
  
select A.*, ROWID
  FROM DEPARTMENTS A;
  
/** 
  * È°¿ë01 : Áßº¹µ¥ÀÌÅÍ Á¦°Å
  */
-- ½ÇÁ¸ Å×ÀÌºí È®ÀÎ
SELECT *
  FROM ALL_TABLES
 WHERE OWNER = 'SCOTT';

-- Å×ÀÌºí º¹Á¦1
CREATE TABLE HR.EMPT_T AS 
SELECT * 
  FROM SCOTT.EMP;

INSERT INTO EMPT_T
SELECT *
  FROM SCOTT.EMP;
-- »óÅÂ ÀúÀå
COMMIT;
  
SELECT COUNT(*) FROM SCOTT.EMP;
SELECT COUNT(*) FROM HR.EMPT_T;

-- scott.emp Å×ÀÌºí ÀÎµ¦½º ¼Ó¼º È®ÀÎ
SELECT *
  FROM ALL_INDEXES
  WHERE OWNER = 'SCOTT'
    AND TABLE_NAME = 'EMP'; 
    
SELECT *
  FROM ALL_IND_COLUMNS
 WHERE INDEX_OWNER = 'SCOTT'
   AND INDEX_NAME = 'PK_EMP';  


-- °íÀ¯ ÀÎµ¦½º »ý¼º (¿À·ù: ÀÌ¹Ì UNIQUEÇÏ±â ¶§¹®¿¡ Áßº¹ÀÌ »ý±è)


-- Áßº¹µ¥ÀÌÅÍ È®ÀÎ / »èÁ¦
  select *
  -- DELETE
    from HR.EMPT_T
   where ROWID NOT IN (SELECT MAX(ROWID) FROM HR.EMPT_T GROUP BY EMPNO);

SELECT SQL_ID, CHILD_NUMBER, SQL_TEXT
  FROM V$SQL
 WHERE SQL_TEXT LIKE '%MAX(ROWID) FROM HR.EMPT_T%'
   AND SQL_TEXT NOT LIKE '%V$SQL%';

SELECT * 
  FROM TABLE(DBMS_XPLAN.DISPLAY_CURSOR('6r73uhg4xbd06', 0, 'ADVANCED LAST'));

-- ÀÎµ¦½º »ý¼º
CREATE UNIQUE INDEX HR.PK_EMPT_T ON HR.EMPT_T(EMPNO);

SELECT *
  FROM ALL_INDEXES
  WHERE OWNER = 'HR'
    AND TABLE_NAME = 'EMPT_T'; 
    
SELECT *
  FROM ALL_IND_COLUMNS
 WHERE INDEX_OWNER = 'SCOTT'
   AND INDEX_NAME = 'PK_EMP';  

-- È°¿ë : Merge Into È°¿ë
ALTER TABLE EMPT_T ADD (DEPTNO_TMP VARCHAR2(10));
ALTER TABLE EMPT_T DROP COLUMN DEPTNO_TMP;

TRUNCATE TABLE EMPT_T;
INSERT INTO EMPT_T
SELECT * FROM SCOTT.EMP;
COMMIT;

-- ¸ÓÂ¡ ÀÛ¾÷
MERGE INTO HR.EMPT_T
USING (SELECT ROWID AS RID
       FROM HR.EMPT_T
       WHERE ROWID NOT IN (SELECT MAX(ROWID)
                           FROM HR.EMPT_T
                           GROUP BY EMPNO)) B
ON (A.ROWID = B.RID)
WHEN MATCHED THEN 
UPDATE SET A.EMP_NO = 'X';

ROLLBACK;

SELECT * FROM ALL_IND_COLUMNS WHERE INDEX_OWNER = 'HR' AND TABLE_NAME = 'EMPT_T' ORDER BY COLUMN_POSITION;

SELECT /*+ INDEX_DESC(T EMPT_T_PK) */ * 
 FROM EMPT_T T 
 WHERE EMPNO = 7521;


-- º´·Ä Ã³¸®
SELECT /*+ PARALLEL(T 4) INDEX_FFS(A EMPT_T_PK) */ * 
  FROM EMPT_T T;

-- CLUSTERING FACTOR
  create table t as 
  select * from all_objects 
  order by object_id;
  
-- cf = good
create index t_object_id_idx
on t(object_id);

-- cf = bad  
create index t_object_name_idx 
on t(object_name);

-- Åë°èÁ¤º¸ »ý¼º
exec dbms_stats.gather_table_stats(user, 'T');

-- CLUSTERING FACTOR°¡ ÀÛÀ»¼ö·Ï ÁÁÀº ¼öÄ¡
select i.index_name, t.blocks table_blocks, i.num_rows, i.clustering_factor
from   user_tables t, user_indexes i
where t.table_name = 'T'
and   i.table_name = t.table_name;



