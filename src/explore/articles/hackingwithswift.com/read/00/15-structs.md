---
lang: ko-KR
title: "Structs"
description: "Article(s) > Structs"
category:
  - Swift
  - iOS
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - xcode
  - appstore
  - ios  
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Structs"
    - property: og:description
      content: "Structs"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/00/15-structs.html
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/read/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Structs | Hacking with iOS",
  "desc": "Structs",
  "link": "https://hackingwithswift.com/read/0/15/structs",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/d13uCPrmEXM" />

Structs are complex data types, meaning that they are made up of multiple values. You then create an instance of the struct and fill in its values, then you can pass it around as a single value in your code. For example, we could define a `Person` struct type that contains two properties: `clothes` and `shoes`:

```swift
struct Person {
    var clothes: String
    var shoes: String
}
```

When you define a struct, Swift makes them very easy to create because it automatically generates what's called a memberwise initializer. In plain speak, it means you create the struct by passing in initial values for its two properties, like this:

```swift
let taylor = Person(clothes: "T-shirts", shoes: "sneakers")
let other = Person(clothes: "short skirts", shoes: "high heels")
```

![Initializing two `Person` structs by telling Swift their clothes and shoes."](https://hackingwithswift.com/img/books/hws/structs-1@2x.png)

Once you have created an instance of a struct, you can read its properties just by writing the name of the struct, a period, then the property you want to read:

```swift
print(taylor.clothes)
print(other.shoes)
```

![Accessing the `clothes` and `shoes` propeties of our `Person` structs."](https://hackingwithswift.com/img/books/hws/structs-2@2x.png)

If you assign one struct to another, Swift copies it behind the scenes so that it is a complete, standalone duplicate of the original. Well, that's not strictly true: Swift uses a technique called "copy on write" which means it only actually copies your data if you try to change it.

To help you see how struct copies work, put this into your playground:

```swift
struct Person {
    var clothes: String
    var shoes: String
}

let taylor = Person(clothes: "T-shirts", shoes: "sneakers")
let other = Person(clothes: "short skirts", shoes: "high heels")

var taylorCopy = taylor
taylorCopy.shoes = "flip flops"

print(taylor)
print(taylorCopy)
```

![Modifying `taylorCopy` does not change the original Taylor Swift."](https://hackingwithswift.com/img/books/hws/structs-3@2x.png)

That creates two `Person` structs, then creates a third one called `taylorCopy` as a copy of `taylor`. What happens next is the interesting part: the code changes `taylorCopy`, and prints both it and `taylor`. If you look in your results pane (you might need to resize it to fit) you'll see that the copy has a different value to the original: changing one did not change the other.

---

## Functions inside structs

You can place functions inside structs, and in fact it’s a good idea to do so for all functions that read or change data inside the struct. For example, we could add a function to our `Person` struct to describe what they are wearing, like this:


```swift
struct Person {
    var clothes: String
    var shoes: String

    func describe() {
        print("I like wearing \(clothes) with \(shoes)")
    }
}
```

![Calling `Person`'s `describe` method."](https://hackingwithswift.com/img/books/hws/structs-4@2x.png)

There’s one more thing you ought to know but can't see in that code: when you write a function inside a struct, it's called a *method* instead. In Swift you write `func` whether it's a function or a method, but the distinction is preserved when you talk about them.

---

<TagLinks />