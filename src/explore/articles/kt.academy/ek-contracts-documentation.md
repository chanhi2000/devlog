---
lang: ko-KR
title: "Item 30: Define contracts with documentation"
description: "Article(s) > Item 30: Define contracts with documentation"
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
      content: "Article(s) > Item 30: Define contracts with documentation"
    - property: og:description
      content: "Item 30: Define contracts with documentation"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/kt.academy/ek-contracts-documentation.html
prev: /programming/java/articles/README.md
date: 2024-07-08
isOriginal: false
cover: https://kt.academy/_next/image?url=https%3A%2F%2Fmarcinmoskala.com%2FEffectiveKotlin-Book%2Fpromotion%2Fcontracts_documentation.jpg&w=828&q=75
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
  name="Item 30: Define contracts with documentation"
  desc="How do we express our library or module contracts and why are they so important."
  url="https://kt.academy/article/ek-contracts-documentation"
  logo="https://kt.academy/logo.png"
  preview="https://kt.academy/_next/image?url=https%3A%2F%2Fmarcinmoskala.com%2FEffectiveKotlin-Book%2Fpromotion%2Fcontracts_documentation.jpg&w=828&q=75"/>

![](https://kt.academy/_next/image?url=https%3A%2F%2Fmarcinmoskala.com%2FEffectiveKotlin-Book%2Fpromotion%2Fcontracts_documentation.jpg&w=828&q=75)

::: note

This is a chapter from the book [<FontIcon icon="fas fa-globe"/>Effective Kotlin](https://kt.academy/book/effectivekotlin). You can find it on [<FontIcon icon="fas fa-globe"/>LeanPub](https://leanpub.com/effectivekotlin) or [<FontIcon icon="fa-brands fa-amazon"/>Amazon](https://www.amazon.com/Effective-Kotlin-Best-Practices-Developers-ebook/dp/B0CHBR5XPF/).

:::

Think again about the function to display a message from *Item 26: Use abstraction to protect code against changes*:

```kotlin
fun Context.showMessage(
   message: String,
   length: MessageLength = MessageLength.LONG
) {
  val toastLength = when(length) {
      SHORT -> Toast.LENGTH_SHORT
      LONG -> Toast.LENGTH_LONG
  }
  Toast.makeText(this, message, toastLength).show()
}

enum class MessageLength { SHORT, LONG }
```

We extracted the `showMessage` function to give ourselves the freedom to change how the message is displayed. However, this function is not well documented. Another developer might read its code and assume that this function always displays a toast. This is the opposite of what we wanted to achieve by naming this function `showMessage`, so in a way that does not suggest a concrete message type. To make our intention clear, it would be better to add a meaningful KDoc comment explaining what should be expected from this function.

```kotlin
/**
* Universal way for the project to display a short
* message to a user.
* @param message The text that should be shown to
* the user
* @param length How long to display the message.
*/
fun Context.showMessage(
   message: String,
   duration: MessageLength = MessageLength.LONG
) {
  val toastDuration = when(duration) {
      SHORT -> Toast.LENGTH_SHORT
      LONG -> Toast.LENGTH_LONG
  }
  Toast.makeText(this, message, toastDuration).show()
}

enum class MessageLength { SHORT, LONG }
```

In many cases, there are details that are not clearly inferred by the name at all. For instance, *powerset*, even though it is a well-defined mathematical concept, needs an explanation since it is not well known:

```kotlin
/**
* Powerset returns a set of all subsets of the receiver
* including itself and the empty set
*/
fun <T> Collection<T>.powerset(): Set<Set<T>> =
   if (isEmpty()) setOf(emptySet())
   else take(size - 1)
       .powerset()
       .let { it + it.map { it + last() } }
```

Notice that this description gives us some freedom as it does not specify the order of these elements. As a user, we should not depend on how these elements are ordered. The implementation hidden behind this abstraction can be optimized without changing how this function looks from the outside:

```kotlin
       /**
* Powerset returns a set of all subsets of the receiver
* including itself and empty set
*/
fun <T> Collection<T>.powerset(): Set<Set<T>> =
     powerset(this, setOf(setOf()))

private tailrec fun <T> powerset(
   left: Collection<T>,
   acc: Set<Set<T>>
): Set<Set<T>> = when {
  left.isEmpty() -> acc
  else -> {
     val head = left.first()
     val tail = left.drop(1)
     powerset(tail, acc + acc.map { it + head })
  }
}
```

The general problem is that **when a behavior is not documented and an element name is not clear, developers will depend on the current implementation instead of on the abstraction we intended to create**. We solve this problem by describing the behavior that can be expected.

---

## Contracts

Whenever we describe a behavior, users treat it as a promise and on this basis they adjust their expectations. We call any such expected behavior a contract of an element. Just like in a real-life contract, the other side expects us to honor it. The same is true here: users will expect us to honor this contract once it is stable (*Item 27: Specify API stability*).

At this point, defining a contract might sound scary, but actually it is great for both sides. **When a contract is well specified, creators do not need to worry about how the class is used, and users do not need to worry about how something is implemented under the hood.** Users can rely on this contract without knowing anything about the actual implementation. For creators, a contract gives the freedom to change everything as long as the contract is satisfied. **Both users and creators depend on the abstractions defined in the contract, therefore they can work independently.** Everything will work perfectly fine as long as the contract is respected. This is reassurance and freedom for both sides.

What if we don’t define a contract? **Without users knowing what they can and cannot do, they’ll depend on implementation details instead. A creator who doesn’t know what users depend on would be either blocked or would risk breaking users implementations.** As you can see, it is important to define a contract.

---

## Defining a contract

How do we define a contract? There are various ways, including:

- **Names** - when a name is connected to a more general concept, we expect this element to be consistent with this concept. For instance, when you see the `sum` method, you don’t need to read its comment to know how it will behave. This is because summation is a well-defined mathematical concept.
- **Comments and documentation**: this is the most powerful way as it can describe everything that is needed.
- **Types** - Types say a lot about objects. Each type specifies a set of often well-defined methods, and some types also have set-up responsibilities in their documentation. When we see a function, information about the return type and argument types are very meaningful.

---

## Do we need comments?

Looking back, it is amazing to see how opinions in the community fluctuate. When Java was still young, there was a very popular concept called literate programming that suggested explaining everything in comments[^1]. A decade later, comments are widely criticized and many say that we should omit them completely and concentrate on writing readable code instead (I believe that the most influential book that suggested that was the Clean Code by Robert C. Martin).

No extreme is healthy. I absolutely agree that we should first concentrate on writing readable code. However, it should also be understood that comments before elements can describe them at a higher level and define their contracts. **Additionally, comments are now often used to automatically generate documentation, which generally is treated as a source of truth in projects.**

Sure, we often do not need comments. For instance, many functions are self-explanatory and don’t need any special description. We might, for instance, assume that a product is a clear mathematical concept that is known by programmers therefore no comments are needed:

```kotlin
fun List<Int>.product() = fold(1) { acc, i -> acc * i }
```

Obvious comments are noise that only distracts us. Do not write comments that only describe what is clearly expressed by a function name and parameters. The following example demonstrates an unnecessary comment because its meaning can be inferred from the method's name and parameter type:

```kotlin
// Product of all numbers in a list
fun List<Int>.product() = fold(1) { acc, i -> acc * i }
```
I also agree that when we just need to organize our code, instead of writing comments in the implementation, we should rather extract a function. Take a look at the example below:

```kotlin
fun update() {
  // Update users
  for (user in users) {
      user.update()
  }

  // Update books
  for (book in books) {
      updateBook(book)
  }
}
```

The `update` function is clearly composed of extractable parts, and comment suggests that these parts can be described with a different explanation. Therefore, it is better to extract these parts into separate abstractions such as methods, whose names should be clear enough to explain what they mean (just like in *Item 25: Each function should be written in terms of a single level of abstraction*).

```kotlin
fun update() {
  updateUsers()
  updateBooks()
}

private fun updateBooks() {
  for (book in books) {
      updateBook(book)
  }
}

private fun updateUsers() {
  for (user in users) {
      user.update()
  }
}
```

However, comments are often useful and important. To find examples, take a look at nearly any public function from the Kotlin standard library. They have well-defined contracts that give a lot of freedom. For instance, take a look at the `listOf` function:

```kotlin
/**
* Returns a new read-only list of given elements.
* The returned list is serializable (JVM).
* @sample samples.collections.Collections.Lists.
readOnlyList
*/
public fun <T> listOf(vararg elements: T): List<T> =
    if (elements.size > 0) elements.asList()
    else emptyList()
```

It only promises to return a `List` that is read-only and serializable on JVM. Nothing else. The list does not need to be immutable. No concrete class is promised. This contract is minimalistic but it’s enough for the needs of most Kotlin developers. You can also see that it points to sample uses, which are also useful when we are learning how to use an element.

---

## The KDoc format

When we document functions using comments, the official format in which we present these comments is called KDoc. All KDoc comments start with `/**` and end with `*/`, and all internal lines generally start with `*`. Descriptions there are written in KDoc markdown.

The structure of a KDoc comment is the following:

- The first paragraph of the documentation text is the summary description of the element.
- The second part is the detailed description.
- Every next line begins with a tag. These tags are used to reference an element to describe it.

Here are the supported tags:

- `@param`: Documents a value parameter of a function or a type parameter of a class, property or function.
- `@return`: Documents the return value of a function.
- `@constructor`: Documents the primary constructor of a class.
- `@receiver`: Documents the receiver of an extension function.
- `@property`: Documents the property of the specified class. Used for properties defined in the primary constructor.
- `@throws`, `@exception`:  - Documents an exception which can be thrown by a method.
- `@sample`:  Embeds the body of the specified function into the documentation for the current element in order to show an example of how the element could be used.
- `@see`: Adds a link to the specified class or method.
- `@author`: Specifies the author of the documented element.
- `@since`: Specifies the version of the software in which the documented element was introduced.
- `@suppress`: Excludes the element from the generated documentation. Can be used for elements which are not part of the official API of a module but still have to be visible externally.

In both descriptions and in text that describes tags we can link classes, methods, properties or parameters. Links are in square brackets, or double square brackets when we want to have a different description than the name of the linked element.

```kotlin
/**
 * This is an example descriptions linking to [element1],
 * [com.package.SomeClass.element2] and
 * [this element with custom description][element3]
 */
```

All these tags will be understood by Kotlin documentation generation tools. The official one is called Dokka. They generate documentation files that can be published online and presented to outside users. Here is an example documentation with a shortened description:

```kotlin
/**
 * Immutable tree data structure.
 *
 * Class represents an immutable tree with from 1 to
 * an infinite number of elements. In the tree we hold
 * elements on each node, and nodes can have left and
 * right subtrees...
 *
 * @param T the type of elements this tree holds.
 * @property value the value kept in this node of the tree.
 * @property left the left subtree.
 * @property right the right subtree.
 */
class Tree<T>(
   val value: T,
   val left: Tree<T>? = null,
   val right: Tree<T>? = null
) {
   /**
   * Creates a new tree based on the current but with
   * [element] added.
   * @return newly created tree with additional element.
   */
   operator fun plus(element: T): Tree { /* ... */ }
```

Notice that not everything needs to be described. The best documentation is short and precisely describes what might be unclear.

---

## The type system and expectations

Type hierarchy is an important source of information about an object. An interface is more than just a list of methods we promise to implement. Classes and interfaces can also have some expectations. If a class promises something, all of its subclasses should guarantee that too. This principle is known as *the Liskov substitution principle*, and it is one of the most important rules in *object-oriented programming*. It is generally translated to "if S is a subtype of T, then objects of type T may be replaced with objects of type S without altering any of the desirable properties of the program". A simple explanation of why this is important is that every class can be used as a superclass; so, if a class does not behave as we expect its superclass to behave, we might end up with unexpected failure. In programming, children should always satisfy parents' contracts.

One important implication of this rule is that we should properly specify contracts for open functions. For instance, coming back to our car metaphor, we could represent a car in our code using the following interface:

```kotlin
interface Car {
  fun setWheelPosition(angle: Float)
  fun setBreakPedal(pressure: Double)
  fun setGasPedal(pressure: Double)
}

class GasolineCar: Car {
  // ...
}

class GasCar: Car {
  // ...
}

class ElectricCar: Car {
  // ...
}
```

The problem with this interface is that it leaves a lot of questions. What does `angle` in the `setWheelPosition` function mean? In which units is it measured? What if it is not clear for someone what the gas and brake pedals do? People using instances of type `Car` need to know how to use them, and all the classes that implement this interface should behave similarly when they are used as a `Car`. We can address these concerns with documentation:

```kotlin
interface Car {
  /**
   * Changes car direction.
   *
   * @param angle Represents position of wheels in
   * radians relatively to car axis. 0 means driving
   * straight, pi/2 means driving maximally right,
   * -pi/2 maximally left.
   * Value needs to be in (-pi/2, pi/2)
   */
  fun setWheelPosition(angle: Float)

  /**
   * Decelerates vehicle speed until 0.
   *
   * @param pressure The percentage of brake pedal use.
   * Number from 0 to 1 where 0 means not using break
   * at all, and 1 means maximal pedal pedal use.
   */
  fun setBreakPedal(pressure: Double)

  /**
   * Accelerates vehicle speed until max speed possible
   * for the user.
   *
   * @param pressure The percentage of gas pedal use.
   * Number from 0 to 1 where 0 means not using gas at
   * all, and 1 means maximal gas pedal use.
   */
  fun setGasPedal(pressure: Double)
}
```

Now, all cars have a defined standard that describes how they all should behave.

Most classes in the stdlib and in popular libraries have well-defined and well-described contracts and expectancies for their children. We should also define contracts for our elements because they will make these interfaces truly useful. They will give us the freedom to use classes that implement these interfaces in the way their contract guarantees.

---

## Leaking implementation

Implementation details always leak. In cars, different kinds of engines behave a bit differently. We are still able to drive all cars, but we can feel a difference. This is fine even though it is not described in the contract.

In programming languages, implementation details leak as well. For instance, calling a function using reflection works, but it is significantly slower than a normal function call (unless it is optimized by the compiler). We will see more examples in the chapter about performance optimization. As long as a language works as it promises, everything is fine. We just need to remember and apply good practices.

In our abstractions, implementations will also leak, but we should still protect them as much as we can. We protect them by encapsulation, which can be described as "You can do what I allow, and nothing more". The more we encapsulate our classes and functions, the more freedom we have inside them because we don’t need to think about how someone else might depend on our implementation.

---

## Summary

When we define an element, especially part of an external API, we should define a contract. We do this using names, documentation, comments, and types. The contract specifies what these elements’ expectations are. It can also describe how an element should be used.

A contract gives users confidence about how elements behave now and will behave in the future; it gives creators the freedom to change what is not specified in the contract. The contract is a kind of agreement, and it works well as long as both sides respect it.

[^1]: Read more about this concept in the book Literate Programming by Donald Knuth.

---

<TagLinks />