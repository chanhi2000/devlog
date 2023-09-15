# D-03d

## JOIN

### 방식
- #### NESTED LOOP JOIN
- #### SORT MERGE JOIN
- #### HASH JOIN


### OUTER JOIN

### NESTED LOOP JOIN


- SQL 문 
```sql
SELECT A.DNAME, B.ENAME, B.SAL
  FROM EMP B, DEPT A
 WHERE A.DEPTNO = B.DEPTNO
   AND B.SAL > 200
   AND A.LOCATION = 'DALLAS'
```

- 실행계획
NESTED LOOP
  TABLE ACCESS (BY INDEX ROWID) OF `DEPT` (TABLE)
    INDEX (RANGE SCAN) OF `DEPT_IDX` (INDEX)
  TABLE ACCESS (BY INDEX ROWID) OF `EMP` (TABLE)
    INDEX (RANGE SCAN) OF `EMP_IDX` (INDEX)

### SORT MERGE JOIN


### HASH JOIN
- Hash area size 관리 중요 (한정적 공간)
- Hash 함수를 사용
- 많은 부하 발생 (내부자원 사용이 많음 0)


```sql
select /*+ LEADING(A) FULL(A) FULL(B) USE_HASH(A B) */
		A.CARD__NO A.CRE_DT, B.STORE_ID, B.AMOUNT
FROM CARD A, TRX_LIST B
WHERE A.CARD=NO = B.CARD_NO
AND A.CRE_DT >= 20160115
AND B.TRX_DT >= 20160115
```

### SEMI JOIN

```sql
select DEPTNO
from DEPT a
where EXISTS(select 'X',
			 from emp B
			 where a.deptno = b.deptno)
```