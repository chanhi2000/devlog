---
lang: ko-KR
title: "Fixing ”Class ViewController has no initializers”"
description: "Article(s) > Fixing ”Class ViewController has no initializers”"
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
  - ios-13.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Fixing ”Class ViewController has no initializers”"
    - property: og:description
      content: "Fixing ”Class ViewController has no initializers”"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/fixing-class-viewcontroller-has-no-initializers.html
date: 2019-03-28
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
  "title": "Fixing ”Class ViewController has no initializers” | Language - free Swift example code",
  "desc": "Fixing ”Class ViewController has no initializers”",
  "link": "https://hackingwithswift.com/example-code/language/fixing-class-viewcontroller-has-no-initializers",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<VidStack src="youtube/o_qBp32KpOI" />

<!-- TODO: 작성 -->

<!-- 
This is a common error, and one you can fix in just a few seconds. Swift has very strict rules about property initialization: if you give a class any properties without a default value, you *must* create an initializer that sets those default values.

There are two ways to solve this problem: either provide a default value for your property when you define the property, or create a custom `init()` method to set the value.

First, identify the problem property. Look for things like this:

```swift
class ViewController: UIViewController {
    var username: String
}
```

That defines a new property but doesn't give it an initial value, so Swift will refuse to build the app.

The simple solution is just to give your property a sensible initial value when it's defined, like this:

```swift
class ViewController: UIViewController {
    var username: String = "Anonymous"
}
```

The slightly more complicated solution is to create a custom initializer that gives properties default values in one place, then calls `super.init()`. When working with `UIViewController` and storyboards, the initializer you will want to override should look like this:

```swift
required init?(coder aDecoder: NSCoder) {
    self.username = "Anonymous"
    super.init(coder: aDecoder)
}
```

Remember: you must initialize all your own properties before calling `super.init()` or any other methods.

-->

::: details Similar solutions…

<!--
/example-code/uikit/fixing-failed-to-obtain-a-cell-from-its-datasource">Fixing "Failed to obtain a cell from its DataSource" 
/example-code/uikit/fixing-unable-to-dequeue-a-cell-with-identifier">Fixing "Unable to dequeue a cell with identifier" 
/example-code/language/fixing-ambiguous-reference-to-member-when-using-ceil-or-round">Fixing "Ambiguous reference to member when using ceil or round"</a>
-->

:::

---

<TagLinks />