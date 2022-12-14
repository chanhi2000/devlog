---
lang: ko-KR
title: ๐SQL > Cubrid
description: ๐SQL > Cubrid
tags: ["sql", "cubrid", "ddl", "dml", "sql-privilege"]
---

# {{ $frontmatter.description }} ๊ด๋ จ

[[toc]]

---
## A. ์ ์ฉํ ์ฟผ๋ฆฌ

### A1. GRANT ์ฒ๋ฆฌ 

#### A1-i. ์กฐํ

```sql
SHOW GRANT FOR :์ฌ์ฉ์;
```

#### A1-ii. (์ฌ์ฉ์์๊ฒ) DML๊ถํ ๋ถ์ฌ

```sql
GRANT SELECT,DELETE,UPDATE,INSERT ON :ํ์ด๋ธ๋ช TO :์ฌ์ฉ์;
```

#### A1-iii. (์ฌ์ฉ์์๊ฒ) DDL๊ถํ ๋ถ์ฌ

```sql
GRANT ALTER,INDEX,EXECUTE ON :ํ์ด๋ธ๋ช TO :์ฌ์ฉ์;
```

#### A1-iv. (์ฌ์ฉ์์๊ฒ) ์  ๊ถํ ๋ถ์ด

```sql
GRANT ALL PRIVILEGES ON :ํ์ด๋ธ๋ช TO :์ฌ์ฉ์; 
```

### A2. DDL ์์ฑ๋ฐฉ๋ฒ ์กฐํ
```sql
SHOW CREATE TABLE :ํ์ด๋ธ๋ช;
```

### A3. DML

#### A3-i. UPSERT๋ฌธ

```sql
INSERT INTO :ํ์ด๋ธ๋ช (
    :์ปฌ๋ผ๋ช1, :์ปฌ๋ผ๋ช2, ...
) VALUES (
    :์ปฌ๋ผ1์๊ฐ, :์ปฌ๋ผ2์๊ฐ, ...
) ON DUPLICATE KEY UPDATE 
    :์ปฌ๋ผ๋ช1 = :์ปฌ๋ผ1์๊ฐ
    , :์ปฌ๋ผ๋ช2 = :์ปฌ๋ผ2์๊ฐ
    /* ...[์ดํ์๋ต] */
;
```

## B. ๋ช๋ น์ด

### B1. ์ ์ฒด translist ํ์ธ

#### B1-i. ์คํ์ค์ธ ์ฟผ๋ฆฌ ์กฐํ

```shell
watch -n 1 cubrid translist \
    -p <์ ๊ทผ ๋น๋ฐ๋ฒํธ> <ํ์ด๋ธ์คํ์ด์ค๋ช>@<IP์ฃผ์> \
    --sort-key=7 --reverse
```

#### B1-ii. ์คํ์ค์ธ ์ฟผ๋ฆฌ ์ค์ง

```shell
cubrid killtran \
    -p <์ ๊ทผ ๋น๋ฐ๋ฒํธ> \
    -i <์กํฐ๋ธ๋ฒํธ> <ํ์ด๋ธ์คํ์ด์ค๋ช>@<IP์ฃผ์>
```
