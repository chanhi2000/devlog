---
lang: ko-KR
title: Basics
description: Kotlin > Basics
tags: ["java", "jdk", "jdk7", "jdk8", "singleton", "enum", "javadocs","kotlin", "companion-object"]
---

# {{ $frontmatter.description }} 관련

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

<TagLinks />