---
lang: ko-KR
title: "Static properties and methods"
description: "Article(s) > Static properties and methods"
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
      content: "Article(s) > Static properties and methods"
    - property: og:description
      content: "Static properties and methods"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/00/18-static-properties-and-methods.html
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
  "title": "Static properties and methods | Hacking with iOS",
  "desc": "Static properties and methods",
  "link": "https://hackingwithswift.com/read/0/18/static-properties-and-methods",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/XOiUNC84Sak" />

Swift lets you create properties and methods that belong to a type, rather than to instances of a type. This is helpful for organizing your data meaningfully by storing shared data.

Swift calls these shared properties “static properties”, and you create one just by using the `static` keyword. Once that's done, you access the property by using the full name of the type. Here's a simple example:

```swift
struct TaylorFan {
    static var favoriteSong = "Look What You Made Me Do"

    var name: String
    var age: Int
}

let fan = TaylorFan(name: "James", age: 25)
print(TaylorFan.favoriteSong)
```

So, a Taylor Swift fan has a name and age that belongs to them, but they all have the same favorite song.

Because static methods belong to the struct itself rather than to instances of that struct, you can't use it to access any non-static properties from the struct.

---

<TagLinks />