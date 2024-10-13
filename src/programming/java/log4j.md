---
lang: ko-KR
title: Log4j
description: Java > Log4j
icon: fas fa-file-invoice
category:
  - Java 
  - Log4j
tag: 
  - java
  - jdk
  - kotlin
  - log4j
  - log4j2
head:
  - - meta:
    - property: og:title
      content: Java > Log4j
    - property: og:description
      content: Log4j
    - property: og:type
      content: article
    - property: og:url
      content: https://chanhi2000.github.io/programming/java/log4j.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## 예제: <FontIcon icon="fas fa-file-lines"/>`log4j2.properties` 

::: details 예제

@tab:active 기본

```properties
status=warn
name=DemoLog

appenders = stdout

# 콘솔 출력 설정
appender.stdout.type                     = Console
appender.stdout.name                     = STDOUT
appender.stdout.layout.type              = PatternLayout
appender.stdout.layout.pattern           = [%t] %-5p : %c.%M(%F:%L) %-80m %n
appender.stdout.filter.threshold.type    = ThresholdFilter
appender.stdout.filter.threshold.level   = debug

rootLogger.level                         = debug
rootLogger.appenderRef.stdout.additivity = false
rootLogger.appenderRef.stdout.ref        = STDOUT
```

:::

---

## Layout Pattern(s)

- `%d{yyyy-MM-dd HH:mm:ss} %-5p : $c.%M(%F:$L) %-80m %n`
- `[%t] %-5p : %c.%M(%F:%L) %-80m %n`
- `%-5p | %d{yyyy-MM-dd HH:mm:ss} | [%t] %C{2} (%F:%L) - %m%n`
- `%d{yyyy-MM-dd HH:mm:ss} %-5p %c{1}:%L - %m%n`

---

<TagLinks />