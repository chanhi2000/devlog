drop table tables;
drop table indexes;
drop table ind_columns;

create table tables as select owner , table_name from dba_tables;
create table indexes as select owner , table_name, index_name from dba_indexes;
create table ind_columns as select table_owner as owner, table_name, index_name, column_name, column_position from dba_ind_columns;

-- 통계정보생성
exec dbms_stats.gather_table_stats(user, 'tables');
exec dbms_stats.gather_table_stats(user, 'indexes');
exec dbms_stats.gather_table_stats(user, 'ind_columns');
alter session set statistics_level = 'ALL';

select 
       A.OWNER, A.TABLE_NAME, B.INDEX_NAME, C.COLUMN_NAME
  from tables a
      ,indexes b
      ,ind_columns c
 where a.owner = 'SCOTT'
   AND A.TABLE_NAME = 'EMP'
   AND A.OWNER = B.OWNER
   AND A.TABLE_NAME = B.TABLE_NAME
   AND B.OWNER = C.OWNER
   AND B.TABLE_NAME = C.TABLE_NAME
   AND B.INDEX_NAME = C.INDEX_NAME
  ORDER BY C.COLUMN_POSITION
;

-- 실행계획확인
select * 
  from table (dbms_xplan.display_cursor(null, null, 'ALLSTATS LAST'));

-- NL JOIN 유도
create index tables_tbname_idx on tables(OWNER, TABLE_NAME);
CREATE INDEX INDEXES_IDX2 ON INDEXES(OWNER, TABLE_NAME);
CREATE INDEX IND_COLUMNS_IDX ON IND_COLUMNS(OWNER, TABLE_NAME, INDEX_NAME);

DROP INDEX tables_tbname_idx;
DROP INDEX INDEXES_IDX2;
DROP INDEX IND_COLUMNS_IDX;


-- INDEX를 생성할 때 DRIVING TABLE 조회 ACCESS 수가 작은 건수를 찾는다.
-- select /*+  LEADING(A B) USE_NL(B) */
select /*+  ORDERED USE_NL(A B C) */
       A.OWNER, A.TABLE_NAME, B.INDEX_NAME, C.COLUMN_NAME
  from tables a
      ,indexes b
      ,ind_columns c
 where a.owner = 'SCOTT'
   AND A.TABLE_NAME = 'EMP'
   AND A.OWNER = B.OWNER
   AND A.TABLE_NAME = B.TABLE_NAME
   AND B.OWNER = C.OWNER
   AND B.TABLE_NAME = C.TABLE_NAME
   AND B.INDEX_NAME = C.INDEX_NAME
  ORDER BY C.COLUMN_POSITION
;

-- HASH JOIN 유도
create index TABLES_IDX2 on tables(OWNER, TABLE_NAME);

DROP INDEX TABLES_IDX2;


select /*+  FULL(A) FULL(B) USE_HASH(A B) */
       A.OWNER, A.TABLE_NAME, B.INDEX_NAME, C.COLUMN_NAME
  from tables a
      ,indexes b
      ,ind_columns c
 where a.owner = 'SCOTT'
   AND A.TABLE_NAME = 'EMP'
   AND A.OWNER = B.OWNER
   AND A.TABLE_NAME = B.TABLE_NAME
   AND B.OWNER = C.OWNER
   AND B.TABLE_NAME = C.TABLE_NAME
   AND B.INDEX_NAME = C.INDEX_NAME
  ORDER BY C.COLUMN_POSITION
;

-- TABLES, INDEXES HASH JOIN, IND_COLUMNS NL JOIN 유도
