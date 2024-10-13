---
lang: ko-KR
title: Query
description: Altibase > Query
icon: fas fa-magnifying-glass
category:
  - Altibase 
  - Query
tag: 
  - database
  - db
  - sql
  - altibase
  - altibase7
  - ddl
  - dml
  - sql-privilege
head:
  - - meta:
    - property: og:title
      content: Altibase > Query
    - property: og:description
      content: Query
    - property: og:url
      content: https://chanhi2000.github.io/data-science/altibase/query.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## A. 유용한 쿼리

### A1. GRANT 처리

#### A1-i. 조회

```sql
SHOW GRANT FOR :사용자;
```

#### A1-ii. (사용자에게) DML권한 부여

```sql
GRANT SELECT,DELETE,UPDATE,INSERT ON :테이블명 TO :사용자;
```

#### A1-iii. (사용자에게) DDL권한 부여

```sql
GRANT ALTER,INDEX,EXECUTE ON :테이블명 TO :사용자;
```

#### A1-iv. (사용자에게) 전 권한 부어

```sql
GRANT ALL PRIVILEGES ON :테이블명 TO :사용자; 
```

### A2. DDL 생성방법 조회

```sql
SHOW CREATE TABLE :테이블명;
```

### A3. DML

#### A3-i. UPSERT문

```sql
INSERT INTO :테이블명 (
    :컬럼명1, :컬럼명2 /* ...[이하생략] */
) VALUES (
    :컬럼1의값, :컬럼2의값 /* ...[이하생략] */
) ON DUPLICATE KEY UPDATE 
    :컬럼명1 = :컬럼1의값
    , :컬럼명2 = :컬럼2의값
    /* ...[이하생략] */
;
```

---

<TagLinks />