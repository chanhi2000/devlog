---
lang: ko-KR
title: "How to use Dynamic Member Lookup in Swift"
description: SE-0195 has been approved, so here’s a guide to get you started.
icon: fa-brands fa-swift
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swift-5.0
  - ios
  - xcode
head:
  - - meta:
    - property: og:title
      content: How to use Dynamic Member Lookup in Swift
    - property: og:description
      content: SE-0195 has been approved, so here’s a guide to get you started.
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/how-to-use-dynamic-member-lookup-in-swift.html
prev: /programming/swift/articles/README.md
date: 2019-03-29
isOriginal: false
cover: https://www.hackingwithswift.com/uploads/coding-man-3.jpg
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Swift > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/swift/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="How to use Dynamic Member Lookup in Swift – Hacking with Swift"
  desc="SE-0195 has been approved, so here’s a guide to get you started."
  url="https://hackingwithswift.com/articles/55/how-to-use-dynamic-member-lookup-in-swift"
  logo="https://hackingwithswift.com/favicon.svg"
  preview="https://www.hackingwithswift.com/uploads/coding-man-3.jpg"/>

![](https://www.hackingwithswift.com/uploads/coding-man-3.jpg)

[Swift Evolution proposal SE-0195 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0195-dynamic-member-lookup.md) brings Swift closer in behavior to scripting languages, but does so in a type-safe way – you don’t lose any of Swift’s safety, but you do gain the ability to write the kind of code you’re more likely to see in PHP and Python.

In this article I want to walk you through the rationale for the change and provide code some samples showing how it works. If you’re short on time, the TL;DR version is that this change will help dynamic languages such as Python be used much more easily from Swift code, similar to the way we can already call into Objective-C.

---

## Why change?

There are lots of words you could use to describe Swift, but I think “safe” is probably the one that comes to mind first for many people – strong type safety, optionality, throwing functions, and more all combine to make it harder to make mistakes in Swift.

On the other end of the spectrum, languages such as PHP, Python, and JavaScript are more relaxed about safety. That doesn’t mean they encourage bad code (after all, you can write bad code in any language), just that they require developers to keep more information in their head while working.

You might think these two worlds can’t easily be reconciled, but SE-0195 takes a good stab at it. At its core is a new attribute called `@dynamicMemberLookup`, which instructs Swift to call a subscript method when accessing properties. This subscript method, `subscript(dynamicMember:)`, is *required*: you’ll get passed the string name of the property that was requested, and can return any value you like.

Let’s look at a trivial example so you can understand the basics. We could create a `Person` struct that reads its values from a dictionary like this:

```swift
@dynamicMemberLookup
struct Person {
    subscript(dynamicMember member: String) -> String {
        let properties = ["name": "Taylor Swift", "city": "Nashville"]
        return properties[member, default: ""]
    }
}
```

The `@dynamicMemberLookup` attribute requires the type to implement a `subscript(dynamicMember:)` method to handle the actual work of dynamic member lookup. As you can see, I’ve written one that accepts the member name as string and returns a string, and internally it just looks up the member name in a dictionary and returns its value.

That struct allows us to write code like this:

```swift
let taylor = Person()
print(taylor.name)
print(taylor.city)
print(taylor.favoriteIceCream)
```

That will compile cleanly and run, even though `name`, `city`, and `favoriteIceCream` do not exist as properties on the `Person` type. Instead, they are all looked up at runtime: that code will print “Taylor Swift” and “Nashville” for the first two calls to `print()`, then an empty string for the final one because our dictionary doesn’t store anything for `favoriteIceCream`.

My `subscript(dynamicMember:)` method *must* return a string, which is where Swift’s type safety comes in: even though you’re dealing with dynamic data, Swift will still ensure you get back what you expected. And if you want multiple different types, just implement different `subscript(dynamicMember:)` methods, like this:

```swift
@dynamicMemberLookup
struct Person {
    subscript(dynamicMember member: String) -> String {
        let properties = ["name": "Taylor Swift", "city": "Nashville"]
        return properties[member, default: ""]
    }

    subscript(dynamicMember member: String) -> Int {
        let properties = ["age": 26, "height": 178]
        return properties[member, default: 0]
    }
}
```

Now that any property can be accessed in more than one way, Swift requires you to be clear which one should be run. That might be implicit, for example if you send the return value into a function that accepts only strings, or it might be explicit, like this:

```swift
let taylor = Person()
let age: Int = taylor.age
```

Either way, Swift must know for sure which subscript will be called.

You can even overload `subscript` to return closures:

```swift
@dynamicMemberLookup
struct Person {
    subscript(dynamicMember member: String) -> (_ input: String) -> Void {
        return {
            print("Hello! I live at the address \($0).")
        }
    }
}

let taylor = Person()
taylor.printAddress("555 Taylor Swift Avenue")
```

When that’s run, `taylor.printAddress` returns a closure that prints out a string, and the `("555 Taylor Swift Avenue")` part immediately calls it with that input.

---

## Is it safe?

Swift already has the `AnyObject` type, which behaves like Objective-C’s `id` type – you can use it to send any message to any object, and you may or may not get something sensible back.

For example, try casting a string to be `AnyObject`:

```swift
let str = "Hello, Swift" as AnyObject
```

Even though that’s still a `String`, we’ve erased Swift’s knowledge of that type – it could be any kind of object as far as Swift is concerned. So, we could treating it as a `UILabel` and Swift will be fine with that:

```swift
let bounds = str.bounds
let alignment = str.textAlignment
```

Both those properties will be set to `nil` because Swift will try reading the `bounds` and `textAlignment` properties, fail to do so because they don’t exist on strings, and so send back an optional string – everything gets wrapped in a layer of optionality because of the uncertainty.

That extra layer of optionality makes property access safe, but it doesn’t make *method* use safe. `AnyObject` makes available all methods as implicitly unwrapped optionals, so you can call them like this:

```swift
str.addSubview(UIButton())
```

That will compile cleanly but crash at runtime because of course strings don’t have the `addSubview()` method. Instead, you need to be aware that you’re calling an implicitly unwrapped optional method and call it safely like this:

```swift
str.addSubview?(UIButton())
```

Integer overflow is another common example of code that builds cleanly but can fail without warning:

```swift
let number = Int.max
let higher = number + 1
```

That will crash your app without warning, because `Int` is unable to store the number we requested.

However, these examples are different from the potential problems of dynamic member lookup. When using the `@dynamicMemberLookup` attribute, you can type literally any property after your instance name, and the compiler will be fine with it.

To give you a practical example, imagine if `UITextField` had been written using `@dynamicMemberLookup` – all this code would compile cleanly:

```swift
let label = UILabel()
label.backgroundColour = .red
label.translatesAutoresizingMaskIntoConstraint = false
label.inputAccessoryVíew = UIToolbar()
```

Each of those three properties don’t exist on `UILabel`, but you might not notice that during a casual read through – `backgroundColor` has an extra U, `translatesAutoresizingMaskIntoConstraints` is missing its final S, and `inputAccessoryVíew` shouldn’t have an accent over the final I.

This also means that code completion loses much if not all of its usefulness, because there’s nothing to complete. This isn’t too much of a surprise, though, and it’s something that Python IDEs have had to deal with for some time. Chris Lattner (the author of SE-0195) discussed future possibilities for code completion in the proposal itself – it’s [worth reading (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0195-dynamic-member-lookup.md#future-directions-python-code-completion).

---

## Classes and protocols

`@dynamicMemberLookup` plays a full part in Swift’s type system, which means you can assign them to protocols, structs, enums, and classes – even classes that are marked `@objc`.

In practice, this means you can create a class using `@dynamicMemberLookup`, and any classes that inherit from it are also automatically `@dynamicMemberLookup`. So, this will print “Taylor Swift” because `User` inherits from `Person`:

```swift
@dynamicMemberLookup
class Person {
    subscript(dynamicMember member: String) -> String {
        return "Taylor Swift"
    }
}

class User: Person { }

let twostraws = User()
print(twostraws.username)
```

In his Swift Evolution proposal, Chris Lattner also gives an example `JSON` enum that uses dynamic member lookup to create more natural syntax for navigating through JSON:

```swift
@dynamicMemberLookup
enum JSON {
   case intValue(Int)
   case stringValue(String)
   case arrayValue(Array<JSON>)
   case dictionaryValue(Dictionary<String, JSON>)

   var stringValue: String? {
      if case .stringValue(let str) = self {
         return str
      }
      return nil
   }

   subscript(index: Int) -> JSON? {
      if case .arrayValue(let arr) = self {
         return index < arr.count ? arr[index] : nil
      }
      return nil
   }

   subscript(key: String) -> JSON? {
      if case .dictionaryValue(let dict) = self {
         return dict[key]
      }
      return nil
   }

   subscript(dynamicMember member: String) -> JSON? {
      if case .dictionaryValue(let dict) = self {
         return dict[member]
      }
      return nil
   }
}
```

Without dynamic member look up you would need to navigate an instance of that `JSON` enum like this:

```swift
json[0]?["name"]?["first"]?.stringValue
```

But *with* dynamic member look up you can use this instead:

```swift
json[0]?.name?.first?.stringValue
```

I think this example is particularly important because it gets to the nub of what `@dynamicMemberLookup` does: it’s syntactic sugar that turns a custom subscript into simple dot syntax.

---

## So what about Python?

Chris [<FontIcon icon="fa-brands fa-swift"/>has made it no secret](https://lists.swift.org/pipermail/swift-evolution/Week-of-Mon-20171204/042029.html) that he’s working hard to improve interoperability between Swift and Python, which ought not to be a surprise given that he works at Google where Python is used extensively.

The official Swift Evolution proposal mentions Python dozens of times, along with Perl, Ruby, and even JavaScript, so clearly the big win here is enabling interoperability with Python rather than using `@dynamicMemberLookup` in pure Swift code. Python is already hugely popular in the machine learning world amongst others, and if Swift coders can connect with that existing community and their incredible work then that just helps us.

[Swift 5.0 introduced `@dynamicCallable`](/explore/articles/hackingwithswift.com/how-to-use-dynamiccallable-in-swift.md) as a counterpart to `@dynamicMemberLookup`, offering even more bridging for scripting languages. Although it's limited right now, future Swift versions might extend `@dynamicCallable` so that it can call any kind of method – we'll see!

---

<TagLinks />