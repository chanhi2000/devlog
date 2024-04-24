---
lang: ko-KR
title: Query
description: Oracle SQL > Query
icon: fas fa-magnifying-glass
category:
  - SQL
  - Oracle 
  - Query
tag: 
  - sql
  - oracle
  - pssql
  - ddl
  - dml
  - sql-privilege
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## A. 유용한 쿼리

### A3. DML

#### A3-i. UPSERT문

```sql
MERGE INTO :테이블명 USING DUAL ON CONFLICT (:index컬럼명1, :index컬럼명2 /* ...[이하생략] */) 
WHEN MATCHED THEN UPDATE SET 
    :컬럼명1 = :컬럼1의값
    , :컬럼명2 = :컬럼2의값
    /* ...[이하생략] */ 
WHEN NOT MATCHED THEN INSERT (
    :컬럼명1, :컬럼명2 /* ...[이하생략] */
) VALUES (
    :컬럼1의값, :컬럼2의값 /* ...[이하생략] */
);
```

---

## B. CLI

---

## C. References

- [Oracle / PLSQL: `CREATE TABLESPACE` statement](https://www.techonthenet.com/oracle/tablespaces/create_tablespace.php)
- [How to Grant All Privileges to a User in Oracle](https://www.oracletutorial.com/oracle-administration/oracle-grant-all-privileges-to-a-user)

---

<TagLinks />