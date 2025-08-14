---
lang: ko-KR
title: Basics
description: Java > Basics
icon: fas fa-egg
category:
  - Java
  - Basics
tag: 
  - java
  - jdk
  - jdk7
  - jdk8
  - singleton
  - enum
  - javadocs
  - kotlin
  - kdoc
  - companion-object
  - lombok
  - log4j
  - log4j2
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## 공통

### 자주쓰는 Singleton Pattern

::: tabs

@tab:active <VPIcon icon="fa-brands fa-java"/>Java

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

@tab <VPIcon icon="iconfont icon-kotlin"/>Kotlin

```kotlin
class FooBar {
    companion object {
        @Volatile private var INSTANCE: FooBar? = null
        @JvmStatic fun getInstance(): FooBar = INSTANCE ?: synchronized(this) {
            INSTANCE ?: build().also { INSTANCE = it }
        }
        private fun build() = FooBar()
    }
}
```

:::

---

### 자주쓰는 Enum Pattern

::: tabs

@tab:active <VPIcon icon="fa-brands fa-java"/>Java

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
    
    private static Map<String, FooBar> findMap 
        = new ConcurrentHashMap<>();
    static {
        for (Foobar item: values())
            findMap.put(item.getCode(), item);
    }
    public static Foobar findByCode(int i) { return findMap.get(i); }

    // ...[생략]... 이 부분 부터는 알아서 응용 코드 적용
}
```

@tab <VPIcon icon="iconfont icon-kotlin"/>Kotlin

```kotlin
enum class FooBar(
    val code: String,
    val a: String,
    val b: Int
) {
    A("a", "0", 0),
    B("b", "1", 1),
    C("c", "2", 2);

    companion object {
        private val findMap: MutableMap<Int, FooBar> 
            = ConcurrentHashMap<Int, FooBar>()
        init {
            values().forEach { findMap[it.code] = it }
        }
        @JvmStatic fun findByCode(code: Int): FooBar? 
            = findMap[code]
    }
}
```

:::

### 자주쓰는 Documentation

::: tabs

@tab:active <VPIcon icon="fa-brands fa-java"/>Java

> for Javadoc

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

@tab <VPIcon icon="iconfont icon-kotlin"/>Kotlin

> for KDoc

```kotlin
package com.example.markiiimark

/**
 * [FooGaze]
 * 클래스는 무엇 무엇을 합니다.
 *
 * @since 2022.12.12
 * @author chlee
 * @see com.example.markiiimark.FooBar
 */
class FooGaze {
    /**
     * [FooGaze.doStuff]
     * 뭘 할 것인가
     * 
     * @param input [String] 입력값
     * @returns [String] 출력값
     */
     fun doStuff(input: String): String {
        // ... [생략] ...
        return input + " a"
     }
}
```

:::

---

## <VPIcon icon="iconfont icon-kotlin"/>Kotlin

### 자주쓰는 Builder Pattern

```kotlin
data class FooBar(
    val a: String = ""
    val b: String = ""
    val c: Boolean = false,
    val d: Boolean = false,
    val e: String = ""
) {
    class Builder {
        private var bA: String = ""; fun a(block: () -> String) { bA = block() }
        private var bB: String = ""; fun b(block: () -> String) { bB = block() }
        private var bC: String = ""; fun c(block: () -> String) { bC = block() }
        private var bD: String = ""; fun d(block: () -> String) { bD = block() }
        private var bE: String = ""; fun e(block: () -> String) { bE = block() }
        fun build(): FooBar = FooBar(bA, bB, bC, bD, bE)
    }
    companion object {
        inline fun builder(block: Builder.() -> Unit): FooBar = Builder().apply(block).build()
    }
}
```

### `in`, `out`, and `where`

::: details `in`, `out`, and `where`

They are variance modifiers and they help us allowing subtyping when using generics

Suppose we have a class called `Case` that will indicate if we either consume a weapon or produce it

```kotlin
class Case<T: Weapon> {
    private val contents = mutableListOf<T>()
    fun produce(): T = contents.last()
    fun consume(item: T) = contents.add(item)
}
```

You might think that this is indeed possible thanks to polymorphism

```kotlin
val sniperRifle: Case<SniperRifle> = Case<SniperRifle>()
var rifle = Case<Rifle>()
rifle = sniperRifle // NOPE
```

Normally assigning a child instance to a parent instance is possible. But this time it isn't because __generics doesn't allow subtyping by default__ and by that I mean we have to yous keywords like `out` and `in` to be able to use subtyping.

If we declare `T` with an `out` modifier, it will be convariant, so now we preserve subtyping but we cannot consume (take `T` as parameters) `T`, we can just produce (return) it.

```kotlin
class Case<out T: Weapon> {
    private val contents = mutableListOf<T>()
    fun produce(): T = contents.last()
    // this is nolonger possible
    // fun consume(item: T) = contents.add(item)
}
```

This is now possible 

```kotlin
val sniperRifle: Case<SniperRifle> = Case<SniperRifle>()
var rifle = Case<Rifle>()
rifle = sniperRifle
rifle.produce()
```

if we declare `T` with an `in` modifier, it will be contravariant. Think of it as the other way around (sort of), because we can now consume `T` but we can't produce `T`

```kotlin
class Case<oin T: Weapon> {
    private val contents = mutableListOf<T>()
    // this is nolonger possible
    // fun produce(): T = contents.last()
    fun consume(item: T) = contents.add(item)
}
```

But here is where things get a little bit weird. Now a parent class will be the child of its child class, so `rifle` is now a subclass of `sniperRifle` so you treat it as if `rifle` is extending `sniperRifle` or as if weapon is extending knife and rifle

```kotlin
val sniperRifle: Case<SniperRifle> = Case<SniperRifle>()
var rifle = Case<Rifle>()
sniperRifle = rifle
sniperRifle.consume(Rifle())
```

Finally what is all about with the `where` keyword? We use it when we want to extend from several interfaces and not just one. This is also called _an uppoer bound_. Suppose we have a function to sell weapons and we want to sell just weapons and usable ones (note the new interface I made usable). If the data type we pass is a weapon and is usable, we can proceed to use the function, otherwise we _can't_. This is only possible with function

```kotlin
fun <T> sellWeapon(weapon: T): String where T : Weapon, T : Usable {
    print("$weapon was just sold")
    return "success"
}
```

:::

---

## <VPIcon icon="fa-brands fa-java"/>Java 관련

### Properties 파일객체 구성

> 파일: <VPIcon icon="fas fa-folder-open"/>`src/main/resources/props/`<VPIcon icon="fas fa-file-lines"/>`globals.properties`

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

<TagLinks />