---
lang: ko-KR
title: String interpolation can now include string literals
description: Article(s) > String interpolation can now include string literals
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-2.1
head:
  - - meta:
    - property: og:title
      content: Article(s) > String interpolation can now include string literals
    - property: og:description
      content: String interpolation can now include string literals
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/2.1/string-interpolation.html
prev: /explore/articles/hackingwithswift.com/swift/2.2/version-checking.md
next: /explore/articles/hackingwithswift.com/swift/2.0/try.md
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "HACKING WITH SWIFT",
  "desc": "What's new in Swift?",
  "link": "/explore/articles/hackingwithswift.com/swift/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "String interpolation can now include string literals | Changes in Swift 2.12.1",
  "desc": "String interpolation can now include string literals",
  "link": "https://hackingwithswift.com/swift/2.1/string-interpolation", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 2.1

Using quote marks inside strings caused problems before Swift 2.1, which meant that using string literals inside string interpolation was also difficult. This has been fixed in Swift 2.1, so this kind of code works fine now:

```swift
print("Hello, \(username ?? "Anonymous")")
```

This means it's also possible to read dictionary keys using string interpolation, like this:

```swift
print("Hello, \(user["name"]!)")
```

---

<TagLinks />