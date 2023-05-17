---
lang: ko-KR
title: 🔍Query
description: 📦Cubrid > 🔍Query
tags: ["sql", "mysql", "mysql5", "ddl", "dml", "sql-privilege"]
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

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

## B. CLI

### B1. 전체 translist 확인

#### B1-i. 실행중인 쿼리 조회

```shell
watch -n 1 cubrid translist \
    -p <접근 비밀번호> <테이블스페이스명>@<IP주소> \
    --sort-key=7 --reverse
```

#### B1-ii. 실행중인 쿼리 중지

```shell
cubrid killtran \
    -p <접근 비밀번호> \
    -i <액티브번호> <테이블스페이스명>@<IP주소>
```

<TagLinks />