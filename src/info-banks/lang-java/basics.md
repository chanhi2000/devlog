---
lang: ko-KR
title: Basics
description: Basics
tags: ["java", "jdk", "jdk7", "jdk8", "singleton", "enum", "javadocs", "lombok"]
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

-- 
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

<TagLinks />