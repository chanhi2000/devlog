---
lang: ko-KR
title: Subscripts can now declare default arguments
description: Article(s) > Subscripts can now declare default arguments
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.2
head:
  - - meta:
    - property: og:title
      content: Article(s) > Subscripts can now declare default arguments
    - property: og:description
      content: Subscripts can now declare default arguments
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.2/subscript-default-arguments.html
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "HACKING WITH SWIFT",
  "desc": "What's new in Swift?",
  "link": "/explore/articles/hackingwithswift.com/swift/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Subscripts can now declare default arguments | Changes in Swift 5.2",
  "desc": "Subscripts can now declare default arguments",
  "link": "https://hackingwithswift.com/swift/5.2/subscript-default-arguments", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.2

When adding custom subscripts to a type, you can now use default arguments for any of the parameters. For example, if we had a `PoliceForce` struct with a custom subscript to read officers from the force, we could add a `default` parameter to send back if someone tries to read an index outside of the array’s bounds:

```swift
struct PoliceForce {
    var officers: [String]

    subscript(index: Int, default default: String = "Unknown") -> String {
        if index >= 0 && index < officers.count {
            return officers[index]
        } else {
            return `default`
        }
    }
}

let force = PoliceForce(officers: ["Amy", "Jake", "Rosa", "Terry"])
print(force[0])
print(force[5])
```

That will print “Amy” then “Unknown”, with the latter being caused because there is no officer at index 5. Note that you do need to write your parameter labels twice if you want them to be used, because subscripts don’t use parameter labels otherwise.

So, because I use `default default` in my subscript, I can use a custom value like this:

```swift
print(force[-1, default: "The Vulture"])
```

::: details Other Changes in Swift 5.2

```component VPCard
{
  "title": "Key path expressions as functions | Changes in Swift 5.2",
  "desc": "Key path expressions as functions",
  "link": "/explore/articles/hackingwithswift.com/swift/5.2/keypath-expressions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Callable values of user-defined nominal types | Changes in Swift 5.2",
  "desc": "Callable values of user-defined nominal types",
  "link": "/explore/articles/hackingwithswift.com/swift/5.2/callasfunction.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Subscripts can now declare default arguments | Changes in Swift 5.2",
  "desc": "Subscripts can now declare default arguments",
  "link": "/explore/articles/hackingwithswift.com/swift/5.2/subscript-default-arguments.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
-->
```component VPCard
{
  "title": "Lazy filtering order is now reversed | Changes in Swift 5.2",
  "desc": "Lazy filtering order is now reversed",
  "link": "/explore/articles/hackingwithswift.com/swift/5.2/lazy-filtering.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "New and improved diagnostics | Changes in Swift 5.2",
  "desc": "New and improved diagnostics",
  "link": "/explore/articles/hackingwithswift.com/swift/5.2/new-diagnostics.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.2 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-1-to-5-2.playground.zip)

:::

---

<TagLinks />