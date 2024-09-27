---
lang: ko-KR
title: "What are inout parameters?"
description: "Article(s) > What are inout parameters?"
category:
  - Swift
  - iOS
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swift-5.10
  - ios
  - ios-8.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > What are inout parameters?"
    - property: og:description
      content: "What are inout parameters?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-are-inout-parameters.html
date: 2019-10-18
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Language - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/language/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "What are inout parameters? | Language - free Swift example code",
  "desc": "What are inout parameters?",
  "link": "https://hackingwithswift.com/example-code/language/what-are-inout-parameters",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
When you pass value types as parameters into a function, they are constants and so can’t be modified. Sometimes it would be convenient to change this so you *can* modify the values, and that’s what `inout` does for us: it lets us modify parameters inside a function, and have those changes persist *outside* the function.

For example, we could write a function that accepts a number and doubles it:

```swift
func double(_ number: inout Int) {
    number *= 2
}
```

That doesn’t return a value – it modifies the value that was passed in directly.

When it comes to *calling* functions with `inout` parameters, Swift has two rules: we must pass in variables, and we also need to use `&` before the parameter name to acknowledge that it might be changed.

So, we would call `double()` like this:

```swift
var number = 5
double(&number)
print(number)
```

That will print 10.

`inout` parameters are more common than you might realize. For example, if you use `+=` to append one string to another, it uses `inout` to modify the string in place.

-->

::: details Similar solutions…

<!--
/quick-start/concurrency/how-to-make-function-parameters-isolated">How to make function parameters isolated 
/quick-start/swiftui/how-to-create-custom-text-effects-and-animations">How to create custom text effects and animations 
/quick-start/swiftui/what-is-the-gesturestate-property-wrapper">What is the @GestureState property wrapper? 
/quick-start/swiftui/how-to-create-a-custom-layout-using-the-layout-protocol">How to create a custom layout using the Layout protocol 
/example-code/language/how-to-conform-to-the-hashable-protocol">How to conform to the Hashable protocol</a>
-->

:::

---

<TagLinks />