---
lang: ko-KR
title: Tibero
description: SQL > Tibero
icon: fas fa-magnifying-glass
category:
  - SQL
  - Tibero
tag: 
  - sql
  - tibero
  - tibero6
  - ddl
  - dml
  - sql-privilege
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## A. 유용한 쿼리

### A1. GRANT 처리

#### A1-i. 조회

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

- [TIBERO 6 설치(ORACLE DB-LINK, JAVA 모듈 적용)](https://gampol.tistory.com/m/entry/Tibero-6-%EC%84%A4%EC%B9%98Oracle-DBLink-Java-%EB%AA%A8%EB%93%88-%EC%A0%81%EC%9A%A9)
- [Tibero SQL 튜닝](https://augustines.tistory.com/149)

---

<TagLinks />