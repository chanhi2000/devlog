---
lang: ko-KR
title: 🐣Basics
description: 🅺Kotlin > 🐣Basics
tags: ["java", "jdk", "jdk7", "jdk8", "singleton", "enum", "javadocs","kotlin", "companion-object"]
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

## Singleton Pattern

```kotlin
class FooBar {
    companion object {
        @Volatile private var INSTANCE: FooBar? = null
        fun getInstance(): FooBar = INSTANCE ?: synchronized(this) {
            INSTANCE
                ?: build().also { INSTANCE = it }
        }
        private fun build() = FooBar()
    }
}
```

---

## 자주쓰는 Enum Pattern

```kotlin
enum class FooBar(
    val code: Int,
    val desc: String
) {
    A(0, "0"),
    B(1, "1"),
    C(2, "2"),
    D(3, "3");
    companion object {
        private val findMap: MutableMap<Int, FooBar> = ConcurrentHashMap<Int, FooBar>()
        init {
            values().forEach { findMap[it.code] = it }
        }
        @JvmStatic
        fun findByCode(code: Int): FooBar? = findMap[code]
    }
}
```

---

## 자주쓰는 Builder Pattern

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

<TagLinks />