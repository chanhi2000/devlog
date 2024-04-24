---
lang: ko-KR
title: CLI
description: Cubrid > CLI
icon: fas fa-terminal
category:
  - Relational Database
  - DB
  - Cubrid
  - CLI
tag:
  - cli
  - csql
  - cubrid
  - cubrid-service
  - cubrid-broker
  - cubrid-manager
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## 구동/종료

::: tabs

@tab:active Service

```sh
#
# cubrid service 실행
#
cubrid service start
# @ cubrid master start
# ++ cubrid master start: success
# @ cubrid broker start
# ++ cubrid broker start: success
# @ cubrid manager server start
# ++ cubrid manager server start: success

#
# cubrid service 종료
#
cubrid service stop
# @ cubrid broker stop
# ++ cubrid broker stop: success
# @ cubrid manager server stop
# ++ cubrid manager server stop: success
# @ cubrid master stop
# ++ cubrid master stop: success
```

@tab Server

```sh
#
# cubrid server 구동
#
cubrid server start <DB이름>
# @ cubrid server start: <DB이름>
# 
# This may take a long time depending on the amount of recovery works to do.
#
# CUBRID R9.2
#
# ++ cubrid server start: success

#
# cubrid server 종료
#
cubrid server stop <DB이름>
# @ cubrid server stop: <DB이름>
# 
# Server <DB이름> notified of shutdown.
# This may take several minuts. Please wait.
# ++ cubrid server stop: success
```

@tab Broker

```sh
# 
# cubrid broker 구동
# 
cubrid broker start
# @ cubrid broker start
# ++ cubrid broker start: success
#
# (이미 구동중일 경우) ++ cubrid broker is already running

# 
# cubrid broker 종료
# 
cubrid broker stop
# @ cubrid broker stop
# ++ cubrid broker stop: success
#
# (이미 종요되어 있을 경우) ++ cubrid broker is not running
```

@tab Manager Server

```sh
# 
# cubrid manager 구동
# 
cubrid manager start
# @ cubrid manager server start
# ++ cubrid manager server start: success
#
# (이미 구동중일 경우) ++ cubrid manager server is already running

# 
# cubrid manager 종료
# 
cubrid manager stop
# @ cubrid manager server stop
# ++ cubrid manager server stop: success
#
# (이미 종요되어 있을 경우) ++ cubrid manager server is not running
```

:::

---

## 데이터베이스 관리

::: tabs

@tab:active Database 생성

```sh
#
# cubrid database 생성
#
cubrid createdb \
  --db-volume-size=512M \
  -F /data \
  --log-volume-size=200M \
  -L /log \
  <DB이름> ko_KR.utf8

#
# ======================== 옵션 ========================
#
# -F  --file-path       초기 볼륨이 위치할 경로 지정
# -L  --log-path        로그 볼륨이 위치할 경로 지정
# -B  --lob-base-path   LOB파일이 저장될 위치 경로 지정
# -r  --replace         DB가 이미 존재하는 경우 기존 데이터베이스를 삭제하고 재생성함.
#     --db-volume-size  생성되는 데이터베이스 볼륨의 크기를 바이트 단위로 지정한다.
#     --db-page-size    데이터베이스 페이지의 크기를 바이트 단위로 지정한다.
#     --log-volume-size 로그 볼륨의 크기를 지정한다.
#     --log-page-size   로그 볼륨의 페이지 크기를 바이트 단위로 지정한다.
```

@tab Volume 추가

```sh
#
# Cubrid DB Volume 추가
#
cubrid addvoldb -S -p data \
  -n edudb_data_x001 \
  --db-volume-size 2G \
  <DB이름>
cubrid addvoldb -S -p index \
  -n edudb_index_x002 \
  --db-volume-size 1G \
  <DB이름>
cubrid addvoldb -S -p temp \
  -n edudb_temp_x003 \
  --db-volume-size 1G \
  <DB이름>
#
# ======================== 옵션 ========================
#

```

:::

---

## 기타

```sh
#
# 실행중인 쿼리 조회
#
watch -n 1 cubrid translist \
    -p <접근 비밀번호> <테이블스페이스명>@<IP주소> \
    --sort-key=7 --reverse

#
# 실행중인 쿼리 중지
#
cubrid killtran \
    -p <접근 비밀번호> \
    -i <액티브번호> <테이블스페이스명>@<IP주소>
```

---

<TagLinks />