---
lang: ko-KR
title: Coroutine Basic
description: Article(s) > Coroutine Basic
icon: iconfont icon-kotlin
category: 
  - Java
  - Kotlin
  - Article(s)
tag: 
  - blog
  - blog.gangnamunni.com
  - java
  - kotlin
head:
  - - meta:
    - property: og:title
      content: Article(s) > Coroutine Basic
    - property: og:description
      content: Coroutine Basic
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/blog.gangnamunni.com/coroutine-basic.html
prev: /programming/java/articles/README.md
date: 2019-08-20
isOriginal: false
cover: https://blog.gangnamunni.com/_nuxt/img/ae65a45.jpg
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Java > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/java/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Coroutine Basic"
  desc="Coroutine 기초 내용"
  url="https://blog.gangnamunni.com/post/coroutine_basic/"
  logo="https://blog.gangnamunni.com/favicon.ico"
  preview="https://blog.gangnamunni.com/_nuxt/img/ae65a45.jpg"/>

> 안녕하세요. 강남언니에서 Android 개발을 맡고 있는 David 입니다.
>
> 이번 글에서는 Coroutine의 기본적인 사용 방법과 왜 Coroutine을 써야하는지에 대하여 다뤄보도록 하겠습니다.

**coroutine** 이 **light-weight thread** 같다 라고 말합니다.

그 이유는 Kotlin에서의 coroutine은 자신만의 stack이 존재하지 않으며

(C#, Scala, Kotlin의 coroutine은 stackless이며 Quasar, Javaflow에서의 coroutine은 stackful 입니다.)

native thread와 mapping 되지 않기 때문에 context switchig이 필요하지 않습니다.

그리고 coroutine은  thread 와 비슷한 역할을 합니다.

어떤 점이 서로 비슷한지 알아보도록 하겠습니다.

아래 코드를 실행시키면 어떤 결과가 나올까요?

```kotlin
fun main() {
  thread {
    Thread.sleep(1000)
    println("World!")
  }
  println("Hello,")
  Thread.sleep(2000)
}
```

<!-- TODO: kotlin playground로 변경 -->

결과는 다음과 같습니다.

```sh
Hello,
World!
```

`Thread.sleep()` 메서드는 blocking 메서드 이기 때문에

"Hello," 문자열이 먼저 나타나고 1초 뒤에 "World!"가 나타납니다.

이번에는 thread 대신에 `GlobalScope.launch` 를 이용하여 실행을 시켜보도록 하겠습니다.

```kotlin
fun main() {
  GlobalScope.launch {
    delay(1000)
    println("World!")
  }
  println("Hello,")
  Thread.sleep(2000)
}
```

<!-- TODO: kotlin playground로 변경 -->

결과는 역시 똑같습니다.

```sh
Hello,
World!
```

위의 결과를 봤을때 다음과 같이 나타낼 수 있습니다.

- `GlobalScope.launch { … }` ≒ `thread { … }`
- `delay(…)` ≒ `Thread.sleep(…)`

여기서 주의해야할 부분은 `delay()` 메서드는 **coroutine scope** 안에서만 동작합니다.

`main` 함수에서 `delay()` 메서드를 사용하고 싶다면

```kotlin
fun main() = runBlocking {
  GlobalScope.launch {
    delay(1000)
    println("World!")
  }
  println("Hello,")
  delay(2000)
}
```

<!-- TODO: kotlin playground로 변경 -->

main 함수에 **runBlocking {...}** coroutine scope를 설정하면 사용할 수 있습니다.

coroutine은 thread 와 비슷한 동작을 하는데 왜 coroutine을 사용해야할까요?

## 1. thread 보다 더 좋은 performance를 나타내기 때문입니다.

만약 10만번 반복되는 작업을 실행하고 싶으면 어떻게 해야할까요?

일반적으로 thread를 생성하여 작업을 실행합니다.

아래 코드는 100_000개의 thread를 실행시키는 코드입니다.

```kotlin
fun main() = rubBlocking {
  repeat(100_000) {
    thread {
      Thread.sleep(1000)
      print(".")
    }
  }
}
```

<!-- TODO: kotlin playground로 변경 -->

해당 코드를 실행시키면

```
out-of-memory error
```

메모리 부족으로 OOM 에러가 나타납니다.

thread 생성할 수 있는 개수가 제한되어 있기 때문에

![](https://static.blog.gangnamunni.com/files/d5ddc5c5-8326-4720-87bd-f396ae953380)

thread pool를 이용하여 thread를 관리하면 10만번 반복되는 작업을 실행시킬 수 있습니다.

하지만 thread pool을 이용하여 개발을 하면 코드가 길어지고 잘못 사용할 경우에는 memory leak이 발생하고

개발자가 신경써야할 부분이 많아집니다.

**coroutine** 으로 10만번 작업을 실행하면 어떤 결과가 나올까요?

```kotlin
fun main() = runBlocking {
  repeat(100_000) {
    launch {
      delay(1000)
      print(".")
    }
  }
}
```

<!-- TODO: kotlin playground로 변경 -->


결과는

```
...........
```

예상한대로 "."이 10만번 찍힙니다.

thread 사용하면 생성하는데 비용이 들고 여러개의 thread를 생성하면 OOM이 일어나지만

coroutine을 사용하면 많이 생성하더라도 아주 훌륭한 performance를 보여줍니다.

---

## 2. 반복되는 작업을 쉽게 취소할 수 있습니다.

다음과 같이 반복되는 작업을 하고 있을때 해당 작업을 취소하고 싶으면 어떻게 해야할까요?

```kotlin
fun main() = runBlocking {
  thread {
    while(true) {
      Thread.sleep(1000)
      println("running...")
    }
  }
}
```

<!-- TODO: kotlin playground로 변경 -->

thread 의 생명주기를 보면

![](https://static.blog.gangnamunni.com/files/5b677dcb-9596-4cf9-a959-a6a4c2683c93)

thread가 생성되고 `start()` 메서드를 호출하면 작업이 실행됩니다.

`stop()` 메서드를 이용하면 thread를 종료시킬 수 있습니다.

다음은 3초뒤에 스레드를 종료시키는 코드입니다.

```kotlin
fun main() = runBlocking {
  val thread = thread {
    while(true) {
      Thread.sleep(1000)
      println("running...")
    }
    delay(3000)
    thread.stop()
  }
}
```

<!-- TODO: kotlin playground로 변경 -->


결과는

```
running...
running...
```

"running..." 이 두번 찍히고 종료됩니다.

하지만 `stop()` 메서드를 보면

```java
/**
 * @deprecated This method is inherently unsafe. Stopping a thread with
 *       Thread.stop causes it to unlock all of the monitors that it
 *       has locked (as a natural consequence of the unchecked
 */
@Deprecated(since="1.2")
public final void stop() {
    . . .
}
```

Java 1.2 버전부터 Deprecated 됬으며 사용하는것을 권장하지 않고 있습니다.

그러면 어떻게 thread를 종료 시켜야 할까요?

방법은 thread를 Interrupting 하여 종료 시켜야 합니다.

```kotlin
fun main = runBlocking {
  val thread = thread {
    try {
      while(!Thread.interrupted()) {
        Thread.sleep(1000)
        println("running...")
      } catch (e: InterruptedException) {
        println(e)
      }
    }
    delay(3000)
    thread.interrupt()
  }
}
```

<!-- TODO: kotlin playground로 변경 -->

2가지를 설정해줘야 하는데 interrupt state가 설정되었는지 확인을 해야합니다.

반복되는 작업에 `Thread.interrupted()` 메서드를 호출하여 매번 확인을 합니다.

그리고 interrupt를 한후 `sleep()` 같은 Blocking 메서드가 호출되었을 경우 InterruptedException이 일어납니다.

Blocking 메서드를 호출할 경우 try-catch로 감싸줘야합니다.

### **coroutine** 에서는 어떻게 작업을 취소할 수 있을까요?

```kotlin
fun main() = runBlocking {
  val job = launch {
    while(true) {
      delay(1000)
      println("running...")
    }
    delay(3000)
    job.cancelAndJoin()
  }
}
```

<!-- TODO: kotlin playground로 변경 -->

아주 간단하게 `cancelAndJoin()` 메서드를 호출하면 해당 작업을 취소 할 수 있습니다.

`launch()` 메서드를 보면 `Job` 을 return 합니다. 그리고 어떠한 결과 값을 받을 수 없습니다.

![](https://static.blog.gangnamunni.com/files/4900040b-0d0a-49b6-8b78-9e0e70c6264f)

thread 와 비슷하게 동작은 하지만 thread에 비하여 작업을 쉽게 취소할 수 있다라는 장점이 있습니다.

---

## 세번째, 비동기 병렬 처리를 쉽게 할 수 있습니다.

다음과 같은 코드를 실행시켰을 경우 결과가 어떻게 나올까요?

```kotlin
fun main() = runBlocking {
    val time = measureTimeMillis {
        val one = doSomethingUsefulOne()
        val two = doSomethingUsefulTwo()
        println("The answer is ${one + two}")
    }
    println("Completed in $time ms")
}

suspend fun doSomethingUsefulOne(): Int {
    delay(1000)
    return 13
}

suspend fun doSomethingUsefulTwo(): Int {
    delay(1000)
    return 29
}
```

<!-- TODO: kotlin playground로 변경 -->

결과는

```sh
The answer is 42
Completed in 2009 ms
```

값은 42이지만 시간은 2초가 걸렸습니다.

각 메서드에 1초씩 delay 되었기 때문에 총 2초가 걸렸습니다.

해당 작업을 병렬로 처리하려면

```kotlin
fun main() = runBlocking {
    val time = measureTimeMillis {
        val one = async { doSomethingUsefulOne() }
        val two = async { doSomethingUsefulTwo() }
        println("The answer is ${one.await() + two.await()}")
    }
    println("Completed in $time ms")
}

suspend fun doSomethingUsefulOne(): Int {
    delay(1000)
    return 13
}

suspend fun doSomethingUsefulTwo(): Int {
    delay(1000)
    return 29
}
```

<!-- TODO: kotlin playground로 변경 -->

coroutine의 `async` 를 사용하면 쉽게 병렬처리를 할 수 있습니다.

`async` 의 return 값은 **Deferred** 이며 Java의 **Future** 와 비슷하게 동작을 합니다.

thread를 이용하여 병렬처리 하는 방식보다 훨씬 더 간단하게 작성할 수 있다라는것을 알 수 있습니다.

이외에도 coroutine을 사용하면 쉽게 코드를 짤 수 있다라는 장점이 있습니다.

하지만 thread를 전혀 이해하지 못하고 무작정 coroutine을 사용하는것은 권장하지 않습니다.

면접에서 thread 동작원리에 대하여 질문을 하면 대부분 답을 못하시는 분들이 많습니다.

thread 동작원리도 모르는데 RxJava를 사용하신분들이 많으신데 그럴경우 RxJava를 잘못 사용할 경우가 큽니다.

thread에 대하여 충분한 학습을 한 뒤 coroutine을 학습하고

RxJava와 coroutine의 차이점에 대하여도 분석하는것도 추천드립니다.

---

## 출처

<SiteInfo
  name="Coroutines guide | Kotlin Documentation"
  desc="Kotlin provides only minimal low-level APIs in its standard library to enable other libraries to utilize coroutines. Unlike many other languages with similar capabilities, async and await are not keywords in Kotlin and are not even part of its standard library. Moreover, Kotlin's concept of suspending function provides a safer and less error-prone abstraction for asynchronous operations than futures and promises."
  url="https://kotlinlang.org/docs/reference/coroutines/coroutines-guide.html"
  logo="https://kotlinlang.org/assets/images/favicon.svg?v2"
  preview="https://kotlinlang.org/assets/images/open-graph/docs.png"/>

---

<TagLinks />