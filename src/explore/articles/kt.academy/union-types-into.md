---
lang: ko-KR
title: The problem of union types for type systems
description: Article(s) > The problem of union types for type systems
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
      content: Article(s) > The problem of union types for type systems
    - property: og:description
      content: The problem of union types for type systems
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/kt.academy/union-types-into.html
prev: /programming/java/articles/README.md
date: 2024-06-10
isOriginal: false
cover: https://kt.academy/_next/image?url=https%3A%2F%2Fmarcinmoskala.com%2Fkt-academy-articles%2Fimages%2Funion-types-intro-cover.jpg&w=576&q=75
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
  name="The problem of union types for type systems"
  desc="Why union types are not such a good idea for static type systems."
  url="https://kt.academy/article/union-types-into"
  logo="https://kt.academy/logo.png"
  preview="https://kt.academy/_next/image?url=https%3A%2F%2Fmarcinmoskala.com%2Fkt-academy-articles%2Fimages%2Funion-types-intro-cover.jpg&w=576&q=75"/>

KotlinConf 2024 shocked me with a new announcement. Union types are coming to Kotlin! However, in a limited form. At first, I couldn't understand why, but after some talks and discussions, I realized that it is a very smart move. Now let me show you the big picture.

---

## Union types

One feature I have always admired in other programming languages is union types, such as Int | String. I haven’t had any specific plans for using it, but it seems to offer an additional level of expressiveness. I often wondered why Kotlin didn't include this feature. Now I understand why!

Let's start our story with an example of where union types shine. Imagine that a variable is either String or Int. Currently, the result is Any, but it could instead be a more specific String | Int that, after is-checking for one type, could be smart cast to another.

```kotlin
fun main() {
    val intOrString: Int | String = if (condition) 1 else "One"
    if (intOrString is Int) {
        intOrString // smart-casted to Int
    } else {
        intOrString // smart-casted to String
    }
}
```

Union types could be passed around as a substitute for the current `Either` or `Result` classes.

```kotlin
fun fetchUser(userId: UserId): Result<User> = /* ... */
fun loadConfig(isFile: Boolean): Either<FileConfig, DatabaseConfig> = /* ... */
// to
fun fetchUser(userId: UserId): User | ApiException = /* ... */
fun loadConfig(isFile: Boolean): FileConfig | DatabaseConfig = /* ... */ 
```

As cool as it might look, now let's consider how much complexity it introduces to our type system. Consider the following example. What type should be the result of List and List? `List`, `List<Dog | Cat>` or `List | List`? The first option seems most intuitive, and the last one most precise.

```kotlin
abstract class Animal
class Dog: Animal()
class Cat: Animal()
fun produceAnimals() = listOf(Dog(), Dog(), Cat())
```

That is just the beginning of troubles. Type `Dog | Cat` would need to be a subtype of Animal, as well as all other types common to all interfaces in the union.

This is especially problematic once we consider generic classes. The following code would not compile because the inferred type of animals would be `MutableList<Cat | Dog>`. Currently, it would compile because it is MutableList.

```kotlin
abstract class Animal
class Dog: Animal()
class Cat: Animal()
class Snake: Animal()
val animals = mutableListOf(Dog(), Dog(), Cat())
animals.add(Snake())
```

The problem with generics is far deeper. It is actually proved that inference is NP-hard in the presence of union types. The following slide offers a hint why.

![](https://kt.academy/_next/image?url=https%3A%2F%2Fmarcinmoskala.com%2Fkt-academy-articles%2Fimages%2Funion-types-intro-NP-hard.png&w=576&q=75)

In general, subtyping with generics is not decidable. This means that there is no algorithm that can determine, in a finite amount of time, whether a given type-related question can be resolved. Union types make things even harder, especially for inference.

![](https://kt.academy/_next/image?url=https%3A%2F%2Fmarcinmoskala.com%2Fkt-academy-articles%2Fimages%2Funion-types-intro-undecidable.png&w=576&q=75)

That seems like an absolute blocker for union types, but as researcher Ross Tate discovered, there is a way to have a cake and eat it too. As it turns out, there is one particular use case where we use union type substitutions, and that case does not cause any of the problems mentioned above. It is using union types to represent either a result or a failure.

---

## Union types with errors

The Lead Kotlin Designer announced union types with errors. That will most likely mean special classes that specify throwable errors.

Union types are supertypes of both types, so `String | Error` is a supertype of both `String` and `Error`, so it accepts both `String` and `Error`. Just like Int? accepts both Int and null (Int? is like `Int | null`).


![](https://kt.academy/_next/image?url=https%3A%2F%2Fmarcinmoskala.com%2Fkt-academy-articles%2Fimages%2Funion-types-error-type.png&w=576&q=75) <!-- TODO: mermaid로 작성 -->

This feature should particularly help when a variable needs to represent either a value or a placeholder for a lack of value, like `T | NotFound`. It is useful when null cannot represent a lack of value.

```kotlin
private error object NotFound

fun<T> Sequence<T>.last(predicate: (T) -> Boolean): T {
    var result: T | NotFound = NotFound
    for (element in this) if (predicate(element)) result = element
    if (result is NotFound) throw NoSuchElementException("Not found")
    result
}
```

Union types with errors are also a replacement for types like `Either` or `Result`, just like nullable types were a replacement for `Optional`.


```kotlin
fun fetchUser(userId: UserId): Result<User> = /* ... */
fun loadConfig(isFile: Boolean): Either<FileConfig, DatabaseConfig> = /* ... */
// to
fun fetchUser(userId: UserId): User | ApiException = /* ... */
fun loadConfig(isFile: Boolean): FileConfig | DatabaseConfig = /* ... */ 
```

What is the advantage of using union types with errors instead of Either or Result? As a built-in construct, it can be much more efficient and convenient.

Either or Result must be represented with an object, that stores a value. Union types do not need that, they allow raw value passing. That also means we do not need to pack values, we can just use them where needed.

Union types with errors also support a number of operators, similar to those supported for nullable types.

- `!.` call will call a function or a property only if value is not an error, so `a!.b` translates to `if(a is Error) a else a.b`
- `!:` provides a default value in case of an error, so `a !: b` translates to `if(a is Error) b else a`
- `!!` just throws the throwable error if this value is an error, or returns the other value otherwise. So a!! translates to `if(a is Error) a.throw() else a`

With such support, we will be able to conveniently transform values in functional style. Just like we do now with nullability, but errors additionally store information about what went wrong.

```kotlin
// Implicit exceptions
fun getStudents(semester: String): List<ExposedStudent> =
  produceGetStudentsRequest(semester)
    .let { studentRepository.getStudents(it) }
    .also { logger.log("${it.size} students in $semester") }
    .map { stduentFactory.produceExposed(it) }

// With Result
```

Union types will be introduced step-by-step, first inside Kotlin stdlib to optimize algorithms.

---

## Discussion about name

I wondered, why "union types with errors", and not "exceptions", "throwables" or something else. I asked about it Ross Tate, and as it turns out, the name is not final. The Kotlin team is still discussing it. I was even asked to start a discussion about it. So here it is:

---

## Conclusion

Union types with errors are a very smart move. They offer a lot of expressiveness without introducing the complexity of full union types. They are a perfect fit for representing either a result or a failure.

---

<TagLinks />