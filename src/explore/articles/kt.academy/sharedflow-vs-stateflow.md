---
lang: ko-KR
title: "SharedFlow vs StateFlow"
description: "Article(s) > SharedFlow vs StateFlow"
icon: iconfont icon-kotlin
category: 
  - Kotlin
  - Article(s)
tag: 
  - blog
  - kt.academy
  - java
  - kotiln
head:
  - - meta:
    - property: og:title
      content: "Article(s) > SharedFlow vs StateFlow"
    - property: og:description
      content: "SharedFlow vs StateFlow"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/kt.academy/sharedflow-vs-stateflow.html
prev: /programming/java/articles/README.md
date: 2024-06-27
isOriginal: false
cover: https://kt.academy/_next/image?url=https%3A%2F%2Fmarcinmoskala.com%2Fkt-academy-articles%2Fimages%2Fsharedflow_vs_stateflow_cover.png&w=1080&q=75
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
  name="SharedFlow vs StateFlow"
  desc="When to use SharedFlow and when to use StateFlow."
  url="https://kt.academy/article/sharedflow_vs_stateflow"
  logo="https://kt.academy/logo.png"
  preview="https://kt.academy/_next/image?url=https%3A%2F%2Fmarcinmoskala.com%2Fkt-academy-articles%2Fimages%2Fsharedflow_vs_stateflow_cover.png&w=1080&q=75"/>

StateFlow and SharedFlow seem similar, but they are designed for different use cases, and they should not be confused. Let's discuss the key differences and usages.

Let's start with how they work. SharedFlow resembles a broadcast channel—emitted values are delivered to all observers. It allows setting a replay parameter specifying how many past values should be emitted to new observers.

::: kotlin-playground 1

@file main.kt

```kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

suspend fun main(): Unit = withTimeoutOrNull(3000) {
    val sf = MutableSharedFlow<String>(replay = 1)
    sf.emit("Message-1")
    sf.emit("Message0")
    sf.onEach { println("#1 $it") }.launchIn(this)
    // #1 Message0
    sf.onEach { println("#2 $it") }.launchIn(this)
    // #2 Message0
    delay(1000)
    sf.emit("Message1") // #1 Message1 #2 Message1
    sf.emit("Message2") // #1 Message2 #2 Message2
}
```

:::

StateFlow behaves a lot like SharedFlow with reply = 1, but StateFlow must always have a value, so an initial value must be specified when a StateFlow is created. This value can be accessed or changed using value property.

::: kotlin-playground 2

@file main.kt

```kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

suspend fun main(): Unit = withTimeoutOrNull(3000) {
    val sf = MutableStateFlow("Message0")
    
    sf.onEach { println("#1: $it ") }.launchIn(this) 
    // #1: Message0
    sf.onEach { println("#2: $it ") }.launchIn(this)
    // #2: Message0

    delay(1000)
    sf.value = "Message1" // #1: Message1 #2: Message1
    sf.emit("Message2") // #1: Message2 #2: Message2
    println(sf.value) // Message2
}
```

:::

But StateFlow was designed for a concrete use case: to represent an observable state. In Android, it is used to represent the state of our application, and views observe it and redraw whenever it changes. That is the key source of differences.

![](https://kt.academy/_next/image?url=https%3A%2F%2Fmarcinmoskala.com%2Fkt-academy-articles%2Fimages%2Fsharedflow_vs_stateflow_viewmodel.png&w=1080&q=75)

Redrawing view can be expensive, and state changes can be frequent. That is why two optimizations were introduced. First, updates are only emitted when they are different from the previous state. This behavior can be achieved on SharedFlow using distinctUntilChanged.

::: kotlin-playground 3

@file main.kt

```kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

suspend fun main() = withTimeoutOrNull(3000) {
    val state = MutableStateFlow("A")
    
    state.onEach { println("Updated to $it") }
        .stateIn(this) // Updated to A
    
    state.value = "B" // Updated to B
    state.value = "B" // (nothing printed)
    state.emit("B") // (nothing printed)
}
```

:::

Second, StateFlow is conflated, meaning if observer is slower than value changes, it might lose some intermediate updates. That is appropriate for StateFlow, because we are not interested in drawing obsolete state.

::: kotlin-playground 3

@file main.kt

```kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

suspend fun main() = withTimeoutOrNull(3000) {
    val state = MutableStateFlow('X')

    launch {
        for (c in 'A'..'E') {
            delay(300)
            state.value = c
            // or state.emit(c)
        }
    }

    state.collect {
        delay(1000)
        println(it)
    }
}
// X
// C
// E
```

:::

StateFlow also have some tools for state update, like update function, that lets us safely update state, bu creating a new one based on the current one.

::: kotlin-playground 3

@file main.kt

```kotlin
import kotlinx.coroutines.*

suspend fun main() = withTimeoutOrNull(3000) {
    val sf = MutableStateFlow(0)

    coroutineScope {
        repeat(10_000) {
            launch {
                sf.update { it + 1 }
            }
        }
    }
    println(sf.value) // 10000
}
```

:::

That is why StateFlow should be used concretely to represent the observable state of our application. It should not be used as a "boradcast channel". For that we use SharedFlow.

Let's see an Android example: Things like a progress bar or data to display should be represented by StateFlow, but exceptions or messages to show to users as toasts should be represented as SharedFlow.

```kotlin
private val _usersList = MutableStateFlow<List<User>>(emptyList())
val usersList: StateFlow<List<User>> = _usersList

private val _showProgress = MutableStateFlow(true)
val showLoading: StateFlow<Boolean> = _showProgress

private val _errors = MutableSharedFlow<Throwable>()
val errors: SharedFlow<Throwable> = _errors

private val _messages = MutableSharedFlow<String>()
val messages: SharedFlow<String> = _messages
```

Now let's see a backend example. On a backend service, updates received from some websocket should be represented using SharedFlow, but an observable cuter of application users can be represented using StateFlow.

```kotlin
class InventoryService {
    private val inventoryState = MutableStateFlow<InventoryState>(InventoryState.Loading)
    private val inventoryEvents = MutableSharedFlow<InventoryEvent>()
    
    // ...
}

class StatusTrackingService {
    val activeConnections = MutableStateFlow(0)
    val highTrafficEvents = MutableSharedFlow<Int>()
    
    // ...
}
```

To sum up, StateFlow and SharedFlow are similar, but they are designed for different use cases. StateFlow is for representing observable state, and SharedFlow is for broadcasting events. Use them accordingly.

---

<TagLinks />