---
lang: ko-KR
title: "Access control"
description: "Article(s) > Access control"
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
      content: "Article(s) > Access control"
    - property: og:description
      content: "Access control"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/00/19-access-control.html
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
  "title": "Access control | Hacking with iOS",
  "desc": "Access control",
  "link": "https://hackingwithswift.com/read/0/19/access-control",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/SVXtWw63C8k" />

Access control lets you specify what data inside structs and classes should be exposed to the outside world, and you get to choose four modifiers:

- Public: this means everyone can read and write the property.
- Internal: this means only your Swift code can read and write the property. If you ship your code as a framework for others to use, they won’t be able to read the property.
- File Private: this means that only Swift code in the same file as the type can read and write the property.
- Private: this is the most restrictive option, and means the property is available only inside methods that belong to the type, or its extensions.

Most of the time you don't need to specify access control, but sometimes you'll want to explicitly set a property to be private because it stops others from accessing it directly. This is useful because your own methods can work with that property, but others can't, thus forcing them to go through your code to perform certain actions.

To declare a property private, just do this:

```swift
class TaylorFan {
    private var name: String?
}
```

![Trying to set a private property results in a compiler error.](https://hackingwithswift.com/img/books/hws/access-control-1@2x.png)

If you want to use “file private” access control, just write it as one word like so: `fileprivate`.

---

<TagLinks />