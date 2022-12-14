---
lang: ko-KR
title: Basics
description: Basics
---

# {{ $frontmatter.description }} 관련

[[toc]]

---
## Singleton Pattern

```java
public final class FooBar {
    private static final FooBar INSTANCE = null;
    private FooBar() {}
    public static FooBar getInstance() {
        if (INSTANCE == null)
            INSTANCE = new FooBar();
        return INSTANCE;
    }
    // ...[생략]...
}
```

-- 
## Enum Class 구조

> Lombok을 사용하여 코드를 간결하게 작성

```java
@Getter
public enum RegularAction {
    A(1, "1"),
    B(2, "2"),
    C(3, "3");
    private int i;
    private String s;
    RegularAction(int i, String s) {
        this.i = i;
        this.s = s;
    }

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