# D-03c:

## Partitioning

### Range Partitioning 
typically by date

```sql
CREATE TABLE 주문(주문번호 NUMBER, 주문일자 VARCHAR2(8), 고객 ID VARCHAR2(5) )
PARTITION BY RANGE(주문일자) (
	PARTITION P2009_Q1 VALUES LESS THAN ('20090401')
,	PARTITION P2009_Q2 VALUES LESS THAN ('20090701')
,	PARTITION P2009_Q3 VALUES LESS THAN ('20091001')
,	PARTITION P2009_Q4 VALUES LESS THAN ('20100101')
,	PARTITION P2010_Q1 VALUES LESS THAN ('20090701')
,	PARTITION P9999_MX VALUES LESS THAN (MAXVALUE)
);
```
MAX 파티션을 생성 안할 시 파티션 범위에 포함 안되는 값들이 들어가지 못하는 상황이 생긴다.

### Hash Partitioning
- 데이터 분포를 신중히 고려해야 할 때
- 파티션 키 설정에 따라 성능 변화
- 파티션 개수는 2의 제곱으로 설정 권고

```sql
...
PARTITION
```


### LIST PARTITIONING
- 내 마음 대로

```SQL
PARTITION BY LIST(지역분류) (
	PARTITION P_지역1 VALUES ('서울')
,	PARTITION P_지역2 VALUES ('경기', '인천')
,	PARTITION p_지역3 VALUES ('대전', '부산', '광주')
)
```

### Composite PARTITIONING


### Local/Global Partition Index

