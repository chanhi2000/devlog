---
lang: ko-KR
title: "Item 31: Respect abstraction contracts"
description: "Article(s) > Item 31: Respect abstraction contracts"
icon: iconfont icon-kotlin
category: 
  - Kotlin
  - Article(s)
tag: 
  - blog
  - kt.academy
  - kotlin
  - kdoc
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Item 31: Respect abstraction contracts"
    - property: og:description
      content: "Item 31: Respect abstraction contracts"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/kt.academy/ek-respect-contracts.html
prev: /programming/java/articles/README.md
date: 2024-07-22
isOriginal: false
cover: https://kt.academy/_next/image?url=https%3A%2F%2Fmarcinmoskala.com%2FEffectiveKotlin-Book%2Fpromotion%2Frespect_contracts.jpg&w=1200&q=75
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
  name="Item 31: Respect abstraction contracts"
  desc="Just because we can do something, does not mean we should. How to respect abstraction contracts and why it is so important."
  url="https://kt.academy/article/ek-respect-contracts"
  logo="https://kt.academy/logo.png"
  preview="https://kt.academy/_next/image?url=https%3A%2F%2Fmarcinmoskala.com%2FEffectiveKotlin-Book%2Fpromotion%2Frespect_contracts.jpg&w=1200&q=75"/>

Both contracts and visibility are kind of an agreement between developers. This agreement can nearly always be violated by a user. Technically, everything in a single project can be hacked. For instance, it is possible to use reflection to open and use anything we want:

::: kotlin-playground 1

@file main.kt

```kotlin
class Employee {
  private val id: Int = 2
  override fun toString() = "User(id=$id)"

  private fun privateFunction() {
      println("Private function called")
  }
}

fun callPrivateFunction(employee: Employee) {
  employee::class.declaredMemberFunctions
       .first { it.name == "privateFunction" }
       .apply { isAccessible = true }
       .call(employee)
}

fun changeEmployeeId(employee: Employee, newId: Int) {
  employee::class.java.getDeclaredField("id")
       .apply { isAccessible = true }
       .set(employee, newId)
}

fun main() {
  val employee = Employee()
  callPrivateFunction(employee)
  // Prints: Private function called

  changeEmployeeId(employee, 1)
  print(employee) // Prints: User(id=1)
}
```

:::

Just because you can do something doesn’t mean that it is fine to do it. Here, we very strongly depend on implementation details, such as the names of the private property and the private function. They are not part of the contract at all, so they might change at any moment. This is like a ticking time bomb for our program.

Remember that a contract is like a warranty. As long as you use your computer correctly, the warranty protects you. When you open your computer and start hacking it, you lose your warranty. The same principle applies here: when you break the contract, it is your problem when the implementation changes and your code stops working.

---

## Contracts are inherited

It is especially important to respect contracts when we inherit from classes, or when we extend interfaces from another library. Remember that a children should respect parents contracts. For instance, every class extends `Any` that has `equals` and `hashCode` methods. Both those methods have well-established contracts that we need to respect. If we don’t, our objects might not work correctly. For instance, when `hashCode` is not consistent with `equals`, our object might not behave correctly on `HashSet`. The behavior shown below is incorrect because a set should not allow duplicates:

```kotlin
class Id(val id: Int) {
  override fun equals(other: Any?) =
      other is Id &amp;&amp; other.id == id
}

val mutableSet = mutableSetOf(Id(1))
mutableSet.add(Id(1))
mutableSet.add(Id(1))
print(mutableSet.size) // 3
```

In this case, the violated contract is that `hashCode` implementation should be consistent with `equals`. We will discuss it in the *Item 43: Respect the contract of `hashCode`*. We will also discuss many other contracts defined by methods from `Any` in the *Chapter 6: Class design*. For now, remember to check and respect the expectations on the functions you override.

---

## Summary

If you want your programs to be stable, respect contracts. If you are forced to break them, document this fact well. Such information will be very helpful to whoever maintains your code, even if that’s just you in a few years’ time.

---

<TagLinks />