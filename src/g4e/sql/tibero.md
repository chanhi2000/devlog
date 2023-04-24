---
lang: ko-KR
title: 🔎SQL > Tibero
description: 🔎SQL > Tibero
tags: ["sql", "tibero", "tibero6", "ddl", "dml", "sql-privilege"]
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

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



<TagLinks />