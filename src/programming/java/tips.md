---
lang: ko-KR
title: Tips
description: Java > Tips
icon: fas fa-lightbulb
category:
  - Java
  - Kotlin
  - Tips
tag: 
  - kt
  - kts
  - kotlin
  - companion-object
  - logger
  - slf4j
  - log4j
  - lombok
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## <FontIcon icon="iconfont icon-kotlin"/>Kotlin

### Slf4j loggers in 3 ways

If you use [SLF4J](https://slf4j.org) (and possibly Logback) for logging, you are probably familiar with the following code:

```kotlin
val logger = LoggerFactory.getLogger(MyClass::class.java)
```

We like short code, and we like DRY. So here are 3 other ways of getting a logger, to avoid repeating the tedious `LoggerFactory` stuff:

#### 1. Factory function

- Function definition is easy to understand, but usage requires the class name.
- Gives the correct logger class name in companions.

::: details Usages

@tab:active Code

```kotlin
inline fun <reified T> logger(): Logger {
    return LoggerFactory.getLogger(T::class.java)
}
```

@tab Usage 1

```kotlin
class LogWithFactoryFunction {
    val logger = logger<LogWithFactoryFunction>()

    fun doSomething() {
        logger.info("Hey from a factory function!")
    }
}
```

@tab Usage 2

```kotlin
class LogWithCompanionFactoryFunction {
    companion object {
        val logger = logger<LogWithFactoryFunction>()
    }

    fun doSomething() {
        logger.info("Hey from a factory function!")
    }
}
```

@tab Usage 3

```kotlin
class LogWithFactoryFunction {
    val logger = logger(this)

    fun doSomething() {
        logger.info("Hey from a factory function!")
    }
}
```

Alternatively, you can help kotlin figure out `T` to avoid passing it in. However, this would cause `Companion` to show up again:


@tab Usage 4

```kotlin
class LogWithFactoryFunction {
    val logger = logger()

    fun doSomething() {
        logger.info("Hey from a factory function!")
    }
}
```

Or even shorter, creating it as an extension function

:::

#### 2. Companion with inheritance

- No visible `logger` property in your code; it's available through the companion object
- Logger gets `$Companion` in the logger name
- Interface version asks for a logger each time, causing slf4j to check its initialization state

::: details Usages
 
@tab:active Code

```kotlin
abstract class Log {
    val logger: Logger = LoggerFactory.getLogger(this.javaClass)
}

// or
interface Log {
    fun logger() = LoggerFactory.getLogger(this.javaClass)
}
```

@tab Usage 1

```kotlin
class LogWithCompanion {
    companion object : Log() {}

    fun doSomething() {
        logger.info("Hey from a companion!")
    }
}
```

@tab Usage 2

```kotlin
class LogWithInterfaceCompanion {
    companion object : Log {}

    fun doSomething() {
        logger().info("Hey from a companion!")
    }
}
```

:::

#### 3. Delegate property

- Harder to understand delegate source code
- Logger gets `$Companion` in the logger name if placed in a companion

::: details Usage

@tab:active Code

```kotlin
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import kotlin.properties.ReadOnlyProperty
import kotlin.reflect.KProperty

class LoggerDelegate : ReadOnlyProperty<Any?, Logger> {
    companion object {
        private fun <T>createLogger(clazz: Class<T>) : Logger {
            return LoggerFactory.getLogger(clazz)
        }
    }

    private var logger: Logger? = null

    override operator fun getValue(thisRef: Any?, property: KProperty<*>): Logger {
        if (logger == null) {
            logger = createLogger(thisRef!!.javaClass)
        }
        return logger!!
    }
}
```

@tab Usage 1

```kotlin
class LogWithDelegate {
    val logger by LoggerDelegate()

    fun doSomething() {
        logger.info("Hey from a delegate!")
    }
}
```

:::

#### 😎4. Bonus

If you have access to the `KClass`, this is an easy way to get rid of `$Companion`:

```kotlin
inline fun <reified T> T.logger(): Logger {
    if (T::class.isCompanion) {
        return LoggerFactory.getLogger(T::class.java.enclosingClass)
    }
    return LoggerFactory.getLogger(T::class.java)
}
```

---

<TagLinks />