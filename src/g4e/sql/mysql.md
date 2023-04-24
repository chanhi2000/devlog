---
lang: ko-KR
title: MySQL
description: 🔎SQL > MySQL
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

### A4. 기타

#### A4-i. 현재날짜

```sql
SELECT now()
```

```sql
SELECT DATE_FORMAT(now(), '%y-%m-%d')
```

---

## B. CLI

### B1. DB 접근

```sh
mysql -h <HOST> -P <PORT_NUMBER> -u <USERNAME> -p
```

#### B1-a. 💀ERROR 2002 (HY000)

```
ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/tmp/mysql.sock' (2)
```
##### 원인

`mysql.sock` 파일이 경로 및 심볼릭링크 정확하지 않아서 발생하는 오류
보통 `mysql-server` 가 기동되지 않아 생기는 문제

##### 해결법

1. `mysql.sock` 위치 찾기

```sh
mysql_config --socket
```

2a. `my.cnf` 설정 된 socket경로를 심볼릭링크 설정

```sh
sudo ln -s /var/lib/mysql/mysql.sock /tmp/mysql.sock
```

2b. `/var/lib/mysql` 위치에 `mysql.sock` 파일이 없을 경우

2b-i. `/etc/my.cnf` 파일이 설정한 값 중 `socket` 경로가 어디 있는지 보면 알 수 있다.

```conf
[mysqld]
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock
user=mysql
... 
```

2b-ii. `mysqld` service 동작 확인

```sh
service mysqld status
service mysqld start # 결과가 `mysql is stopped` 일 경우, 
```

---

## 📚References

- [MySQL SQL 독학 강의 전체 A to Z](https://stricky.tistory.com/333)



<TagLinks />
