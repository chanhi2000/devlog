---
lang: ko-KR
title: Query
description: PostgreSQL > Query
icon: fas fa-magnifying-glass
category:
  - PostgreSQL 
  - Query
tag: 
  - sql
  - db
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

### A3. DML

#### A3-i. UPSERT문

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