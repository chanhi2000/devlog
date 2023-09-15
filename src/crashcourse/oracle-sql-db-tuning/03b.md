#D-03b:

## trace


1. 테스트 테이블 생성

create table big_table as 
 select * 
  from dba_tables, (select level from dual connect by level <= 1000) ;



2. 실습 sql

SELECT *
  FROM BIG_TABLE
WHERE OWNER = 'SYSTEM'
  AND TABLESPACE_NAME = 'SYSTEM'
  AND TABLE_NAME LIKE 'REPCAT$%'
ORDER BY TABLE_NAME DESC;



3. 실제실행계획 및 statistics 확인



3.1 trace file 로 확인

3.1.1 trace file 구분을 위한 identifier 적용

alter session set tracefile_identifier ='hnj';



3.1.2 trace 생성파일 확인

 SELECT r.value || '/' || LOWER(t.instance_name) || '_ora_'
      || ltrim(to_char(p.spid)) || '_hnj'||'.trc' trace_file
    FROM v$process p, v$session s, v$parameter r, v$instance t
   WHERE p.addr = s.paddr
     AND r.name = 'user_dump_dest'
     AND s.sid = (SELECT sid FROM v$mystat WHERE rownum = 1)
; 



3.1.3 세션에 trace 적용

ALTER SESSION SET EVENTS '10046 trace name context forever, level 12' ; -- level 12로 생성



3.1.4 실습 sql 수행
SELECT *
  FROM BIG_TABLE
WHERE OWNER = 'SYSTEM'
  AND TABLESPACE_NAME = 'SYSTEM'
  AND TABLE_NAME LIKE 'REPCAT$%'
ORDER BY TABLE_NAME DESC;



3.1.5 세션에 trace off

ALTER SESSION SET EVENTS '10046 trace name context forever, off';



3.1.6 3.1.2 에서 확인한 파일 경로 및 파일명 위치로 이동 후 tkprof 로 trace 파일 생성

tkprof ~.trc chg_trc.txt sys=no

참조: http://blog.hkwon.me/oracle-sql-trace-tkprof/

3.1.7 chg_trc.txt  파일확인

trace 파일 확인하여 sql 수행시간 읽은 블럭 실행게획 등 확인

call     count       cpu    elapsed       disk      query    current        rows
------- ------  -------- ---------- ---------- ---------- ----------  ----------
Parse        1      0.00       0.00          0          0          0           0
Execute      1      0.00       0.00          0          0          0           0
Fetch        1      0.01       0.00          0         86          0           1
------- ------  -------- ---------- ---------- ---------- ----------  ----------
total        3      0.01       0.00          0         86          0           1




3.2  dbms_xplan 확인

3.2.1  세션에 statistics_level  설정

alter session set statistics_level = 'ALL';



3.2.2 실습sql 수행

SELECT *
  FROM BIG_TABLE
WHERE OWNER = 'SYSTEM'
  AND TABLESPACE_NAME = 'SYSTEM'
  AND TABLE_NAME LIKE 'REPCAT$%'
ORDER BY TABLE_NAME DESC;



3.2.3 dbms_xplan.display_cursor 확인

select * from table( dbms_xplan.display_cursor( null, null, 'ALLSTATS LAST'));