---
lang: ko-KR
title: Query
description: Cubrid > Query
icon: fas fa-magnifying-glass
category:
  - Relational Database
  - DB
  - Cubrid
  - Query
tag:
  - sql
  - cubrid
  - ddl
  - dml
  - sql-privilege
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## A. 유용한 쿼리

### A1. 

```sql
-- 조회
SHOW GRANT FOR :사용자;

-- (사용자에게) DML권한 부여
GRANT SELECT,DELETE,UPDATE,INSERT ON :테이블명 TO :사용자;

-- (사용자에게) DDL권한 부여
GRANT ALTER,INDEX,EXECUTE ON :테이블명 TO :사용자;

-- (사용자에게) 전 권한 부어
GRANT ALL PRIVILEGES ON :테이블명 TO :사용자; 

-- DDL 생성방법 조회
SHOW CREATE TABLE :테이블명;
```

### A2. DML

```sql
-- UPSERT문
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