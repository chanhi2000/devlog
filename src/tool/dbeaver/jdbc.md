---
lang: ko-KR
title: JDBC 
description: DBeaver > JDBC
icon: fas fa-link
category: 
  - DBeaver
  - JDBC
tag:
  - dbeaver
  - dbeaver-ce
  - ide
  - jdbc
  - db-tibero
  - db-cubrid
  - cubrid
  - tibero
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## JDBC Properties 구성

### Tibero 

| key | value |
| :---: | :--- |
| Driver Name | Tibero 6 |
| Driver Type | `Generic` |
| Class Name | `com.tmax.tibero.jdbc.TbDriver` |
| URL Template | `jdbc:tibero:thin:@{host}[:{port}]:{database}` |
| Default Port | 8629 |

### Cubrid

| key | value |
| :---: | :--- |
| Driver Name | Cubrid |
| Driver Type | `Generic` |
| Class Name | `cubrid.jdbc.driver.CUBRIDDriver` |
| URL Template | `jdbc:CUBRID:thin:{host}:{port}:{database}:::?charset=UTF-8` |
| Default Port | 33000 |

---

<TagLinks />

