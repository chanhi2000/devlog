---
lang: ko-KR
title: Query
description: PostgreSQL > Query
icon: fas fa-magnifying-glass
category:
  - Data Science
  - PostgreSQL 
  - Query
tag: 
  - data-science
  - db
  - sql
  - postgres
  - postgresql
  - ddl
  - dml
  - sql-privilege
head:
  - - meta:
    - property: og:title
      content: PostgreSQL > Query
    - property: og:description
      content: Query
    - property: og:url
      content: https://chanhi2000.github.io/data-science/postgres/query.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## A. 유용한 쿼리

### A2. DML

#### A2-i. UPSERT문

```sql
INSERT INTO :테이블명 (
    :컬럼명1, :컬럼명2, :컬럼명3 /* ...[이하생략] */
) VALUES (
    :컬럼1의값, :컬럼2의값, :컬럼3의값 /* ...[이하생략] */
) ON CONFLICT (:index컬럼명1, :index컬럼명2 /* ...[이하생략] */) DO UPDATE SET
    :컬럼명1 = :컬럼1의값
    , :컬럼명2 = :컬럼2의값
    , :컬럼명3 = :컬럼3의값
    /* ...[이하생략] */
;
```

### A3. 기타

### A3-i. 커낵션 상태 조회

```sql
-- PostgreSQL Connection 상태 조회
SELECT pid, usename, application_name, client_addr, state, query
FROM pg_stat_activity
WHERE 1=1
AND usename = :username
AND state = 'idle';
```

### A3-ii. 'idle' 인 커낵션 해제

```sql
-- PostgreSQL 사용자 :username 의 사용하는 Connection 삭제
SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE 1=1
AND usename = :username
AND state = 'idle'
AND pid <> pg_backend_pid();
```

#### A3-iii. 테이블 정의서 내용 추출

```sql :collapsed-lines
-- 테이블 정의서 내용 추출
SELECT
  info.table_name
  , info.column_name
  , info.udt_name as type
  , case when info.character_maximum_length is null then info.numeric_precision else info.character_maximum_length end as length
  , info.column_default
  , info.is_nullable
  , comm.column_comment as comment
  , case when pri_key.column_name is null then '' else 'PK' end as PK
FROM
  information_schema.columns info
LEFT JOIN (
  SELECT
    ps.schemaname as schema_name
    , ps.relname as table_name
    , pa.attname as column_name
    , pd.description as column_comment
  FROM
    pg_stat_all_tables ps
    , pg_description pd
    , pg_attribute pa
  WHERE 1=1
  AND ps.relid = pd.objoid
  AND pd.objsubid <> 0
  AND pd.objoid = pa.attrelid
  AND pd.objsubid = pa.attnum
  ORDER BY ps.relname, pd.objsubid
) comm ON comm.schema_name=info.table_schema
AND comm.table_name=info.table_name
AND comm.column_name=info.column_name
LEFT JOIN (
  SELECT
    cc.*
  FROM
    information_schema.table_constraints tc
    , information_schema.constraint_column_usage cc
  WHERE 1=1
  AND tc.constraint_type = 'PRIMARY KEY'
  AND tc.table_catalog   = cc.table_catalog
  AND tc.table_schema    = cc.table_schema
  AND tc.table_name      = cc.table_name
  AND tc.constraint_name = cc.constraint_name
) pri_key ON pri_key.table_schema = info.table_schema
AND pri_key.table_name=info.table_name
AND pri_key.column_name=info.column_name
WHERE 1=1
AND info.table_schema = 'public'
ORDER BY info.table_name, info.ordinal_position;
```

---

## B. CLI

### Reload PostgreSQL service

```sh
systemctl reload rh-postgresql<버전>-postgresql
```

---

## C. References

- [WNine ways to shoot yourself in the foot with PostgreSQL](https://philbooth.me/blog/nine-ways-to-shoot-yourself-in-the-foot-with-postgresql)
- [PostgreSQL의 슬로우 쿼리에 대처하기](https://hyperconnect.github.io/2020/08/31/improve-slow-query.html)

---

<TagLinks />