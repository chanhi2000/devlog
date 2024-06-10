---
lang: ko-KR
title: Mutable objects or properties?
description: Article(s) > Mutable objects or properties?
icon: iconfont icon-kotlin
category: 
  - Kotlin
  - Article(s)
tag: 
  - blog
  - kt.academy
  - kotlin
  - kt
head:
  - - meta:
    - property: og:title
      content: Article(s) > Mutable objects or properties?
    - property: og:description
      content: Mutable objects or properties?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/kt.academy/var-readonly-vs-val-mutable.html
prev: /programming/java/articles/README.md
date: 2024-06-10
isOriginal: false
cover: https://kt.academy/_next/image?url=https%3A%2F%2Fmarcinmoskala.com%2Fkt-academy-articles%2Fimages%2Fvar_vs_mutable_cover.png&w=576&q=75
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
  name="Mutable objects or properties?"
  desc="Time to answer the question: var/readonly vs val/mutable. Which one should you use?"
  url="https://kt.academy/article/var_readonly_vs_val_mutable"
  logo="https://kt.academy/logo.png"
  preview="https://kt.academy/_next/image?url=https%3A%2F%2Fmarcinmoskala.com%2Fkt-academy-articles%2Fimages%2Fvar_vs_mutable_cover.png&w=576&q=75"/>

One of the oldest discussions in Kotlin is if we should prefer to represent a mutable state with read-only var or a mutable val property. There is no single answer! Each of them should be preferred in different cases!

The key difference between those two options is how we can modify them. Modifications to var with read-only collection require making a copy of the entire collection. For large collections, that is a heavy and memory-consuming operation.

```kotlin
class UserRepository {
    private var storedUsers: Map<Int, User> = mapOf()

    fun getUser(id: Int): User? = storedUsers[id] // Cheap!

    fun addUser(id: Int, name: String) {
        storedUsers = storedUsers + (id to User(name)) 
        // This makes a copy of the whole collection!
        // What is expensive for large collections!
    }
}
```

Mutable collections support a range of methods that allow their modification, that are as fast as possible. That is why many people prefer mutable collections by default, arguing it is for efficiency.

```kotlin
class UserRepository {
    private val storedUsers: MutableMap<Int, User> = mutableMapOf()

    fun getUser(id: Int): User? = storedUsers[id] // Cheap!

    fun addUser(id: Int, name: String) {
        storedUsers[id] = User(name) // Cheap!
    }
}
```

However, var with read-only collections also have their advantages, and can sometimes be more efficient! First, their changes are observable, so we can use read-only collections with StateFlow, observable delegate, or observe them with setter.

```kotlin
val users = MutableStateFlow(mapOf<Int, User>())
var users by mutableStateOf(mapOf<Int, User>())
var users by Delegates.observable(mapOf<Int, User>()) { _, _, _ -> 
    // Do something when users change
}
```

We cannot so easily observe changes in mutable collections. Another problem is that when we store state in a mutable collection, it is easy to expose access to this collection! Consider the below code. Even though `getAllUsers` returns a read-only type, it is still returning a reference to the mutable collection. That is why whenever this collection changes, the result of `getAllUsers` changes as well. That is why when we print `users` for the second time, it has changed, even though `users` is a val with `Map` type. That is a common source of bugs.

::: kotlin-playground 1

@file main.kt

```kotlin
class UserRepository {
    private val storedUsers: MutableMap<Int, User> = mutableMapOf()

    fun getUser(id: Int): User? = storedUsers[id]

    fun getAllUsers(): Map<Int, User> = storedUsers

    fun addUser(id: Int, name: String) {
        storedUsers[id] = User(name)
    }
}

fun main() {
    val repo = UserRepository()
    val users = repo.getAllUsers()
    println(users) // {}
    repo.addUser(1, "ABC")
    println(users) // {1=ABC}
} 

data class User(val name: String)
```

@settings

```json
{
  "data-target-platform": "junit"
}
```

:::

To prevent that, we must use a technique known as "defensive copy", so copy the collection before exposing it.

::: kotlin-playground 2

@file main.kt

```kotlin
class UserRepository {
    private val storedUsers: MutableMap<Int, User> = mutableMapOf()

    fun getUser(id: Int): User? = storedUsers[id]

    fun getAllUsers(): Map<Int, User> = storedUsers.toMap()

    fun addUser(id: Int, name: String) {
        storedUsers[id] = User(name)
    }
}

fun main() {
    val repo = UserRepository()
    val users = repo.getAllUsers()
    println(users) // {}
    repo.addUser(1, "ABC")
    println(users) // {}
}

data class User(val name: String)
```

@settings

```json
{
  "data-target-platform": "junit"
}
```

:::

Making such a copy is expensive. We do not need to make a copy for read-only collection, so if we expect exposing the whole collection is more frequent than its modification, var with read-only collection should be preferable. However, it is rather a rare situation.

::: kotlin-playground 3

@file main.kt

```kotlin
class UserRepository {
    private var storedUsers: Map<Int, User> = mapOf()

    fun getUser(id: Int): User? = storedUsers[id]

    fun getAllUsers() = storedUsers

    fun addUser(id: Int, name: String) {
        storedUsers = storedUsers + (id to User(name)) 
    }
}

fun main() {
    val repo = UserRepository()
    val users = repo.getAllUsers()
    println(users) // {}
    repo.addUser(1, "ABC")
    println(users) // {}
}

data class User(val name: String)
```

@settings

```json
{
  "data-target-platform": "junit"
}
```

:::

Now consider thread safety. Default mutable collections require synchronizing both their reads, copies, and modifications, because those are all non-atomic operations.

::: kotlin-playground 4

@file main.kt

```kotlin
class UserRepository {
    private val storedUsers: MutableMap<Int, User> = mutableMapOf()
    private val lock = Any()

    fun getUser(id: Int): User? = synchronized(lock) {
        storedUsers[id] 
    }

    fun getAllUsers() = synchronized(lock) { 
        storedUsers.toMap() 
    }

    fun addUser(id: Int, name: String) = synchronized(lock) {
        storedUsers[id] = User(name)
    }
}
```

@settings

```json
{
  "data-target-platform": "junit"
}
```

:::

If we don't do that, with every modification, we can end up with a corrupted collection. It might mean losing some data, or even worse, getting a `ConcurrentModificationException`.

::: kotlin-playground 5

@file main.kt

```kotlin
import kotlin.concurrent.thread

class UserRepository {
    private val storedUsers: MutableMap<Int, User> = mutableMapOf()
    private val lock = Any()

    fun getUser(id: Int): User? = synchronized(lock) {
        storedUsers[id] 
    }

    fun getAllUsers() = 
        storedUsers.toMap() // Mistake! No synchronization!

    fun addUser(id: Int, name: String) = synchronized(lock) {
        storedUsers[id] = User(name)
    }
} 

fun main() {
    val repo = UserRepository()
    repeat(1000) {
        thread {
            repo.addUser(it, "ABC")
        }
        thread { 
            println(repo.getAllUsers()) 
            // ERROR: ConcurrentModificationException
        }
    }
}

data class User(val name: String)
```

@settings

```json
{
  "data-target-platform": "junit"
}
```

:::

Of course, there are mutable collections like `ConcurrentHashMap` that are thread-safe, but they are not always the best choice. They are slower than regular mutable collections.

```kotlin
class UserRepository {
    private val storedUsers: MutableMap<Int, User> = ConcurrentHashMap()
    
    fun getUser(id: Int): User? = storedUsers[id]

    fun getAllUsers() = storedUsers.toMap()

    fun addUser(id: Int, name: String) {
        storedUsers[id] = User(name)
    }
}
```

Property read and write is atomic, so we do not need to synchronize many operations on var with read-only collections. We typically need to synchronize only updates.

```kotlin
class UserRepository {
    private var storedUsers: Map<Int, User> = mapOf()
    private val lock = Any()

    fun getUser(id: Int): User? = storedUsers[id]

    fun getAllUsers() = storedUsers

    fun addUser(id: Int, name: String) = synchronized(lock) {
        storedUsers = storedUsers + (id to User(name)) // Copy!
    }
}
```

To summarize, var with read-only allows observability, and it is easier to synchronize it. On the other hand, mutable collections offer us better update performance and offer thread-safe alternatives, but its exposure requires defensive copying.

| Mutable collection | Read-only collection |
| :--- | :---- |
| Reading is cheap | Reading is cheap |
| Modifications are cheap | Modifications require making a copy |
| Cannot be observed | Can be obserced |
| Modifications require synchroniztaion | Modifications require synchroniztaion |
| Exposing require making a defensive copy | Exposing is cheap |
| Exposing must be synchronized | Exposing require no synchronization |

---

<TagLinks />