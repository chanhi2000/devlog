---
lang: ko-KR
title: Basics
description: Basics
tags: ["java", "jdk", "jdk7", "jdk8", "singleton", "enum", "javadocs", "lombok", "log4j", "log4j2"]
---

# {{ $frontmatter.description }} 관련

[[toc]]

---
## Singleton Pattern

```java
public final class FooBar {
    private static final FooBar INSTANCE = null;
    private FooBar() {}
    public static synchronized FooBar getInstance() {
        if (INSTANCE == null)
            INSTANCE = new FooBar();
        return INSTANCE;
    }
    // ...[생략]...
}
```

---

## 자주쓰는 Enum Pattern

> Lombok을 사용하여 코드를 간결하게 작성

```java
package com.example.markiiimark;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Getter
@AllArgsConstructor
public enum FooBar {
    A("a", "1", 1),
    B("b", "2", 2),
    C("c", "3", 3);
    private String code;
    private String a;
    private int b;
    
    private static Map<String, FooBar> findMap = new ConcurrentHashMap<>();
    static {
        for (Foobar item: values())
            findMap.put(item.getCode(), item);
    }
    public static Foobar findByCode(int i) { return findMap.get(i); }

    // ...[생략]... 이 부분 부터는 알아서 응용 코드 적용
}
```


---
## 자주쓰는 Javadoc패턴

```java
package com.example.markiiimark;
/**
 * FooGaze
 * 
 * 클래스는 무엇 무엇을 합니다.
 * @since 2022.12.12
 * @author chlee
 * @see com.example.marikiimark.FooBar
 */
public class FooGaze {

    /** 
     * doStuff
     * 뭘 할 것인가
     * 
     * @param input {@link String} 입력값
     * @returns {@link String} 출력값
     */
    public String doStuff(String input) {
        //...[생략]...
        return input + " a";
    }
}
```

---
## Properties 파일객체 구성

### Regular Framework

- 파일: `src/main/resources/props/globals.properties`

```java
package com.example.markiiimark;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class FooBar {
    private Properties config = null;
    // ...[생략]...
    public void loadProperties() {
        try(InputStream io = Thread.currentThread().getContextClassLoader().getResourceAsStream("props/globals.properties")) {
            this.config = new Properties();
            this.config.load(io);
        } catch(IOException e) {
            // ...[생략]...
        }
    }
}
```

---

## Log4j (1,2)

### Favorite Layout Pattern(s)

1. `%d{yyyy-MM-dd HH:mm:ss} %-5p : $c.%M(%F:$L) %-80m %n`
2. `%-5p | %d{yyyy-MM-dd HH:mm:ss} | [%t] %C{2} (%F:%L) - %m%n`
3. `%d{yyyy-MM-dd HH:mm:ss} %-5p %c{1}:%L - %m%n`

### Reference(s)

- [velog.io - Log4j 2 제대로 사용하기 - 개념](https://velog.io/@bread_dd/Log4j-2-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-%EA%B0%9C%EB%85%90)
- [벨포트 라이브러리 - log4j 2 `log4j2.properties` 설정 옵션](https://wfreud.tistory.com/264)
- [HowToDoInJava - Log4j2 Properties File Example](https://howtodoinjava.com/log4j2/log4j2-properties-example)
- [HowToDoInJava - Log4j2 RollingFileAppender Example](https://howtodoinjava.com/log4j2/log4j2-rollingfileappender-example/)
- [LogicBig - SLF4J with Log4j2 example](https://www.logicbig.com/tutorials/misc/java-logging/slf4j-with-log4j2.html)
- [HatenaBlog - log4j-properties Converter](https://oboe2uran.hatenablog.com/entry/2011/01/20/204832)


<TagLinks />