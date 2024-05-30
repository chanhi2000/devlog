---
lang: ko-KR
title: How to combine text views together
description: Article(s) > How to combine text views together
category:
  - Swift
  - SwiftUI
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swiftui
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to combine text views together
    - property: og:description
      content: How to combine text views together
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-combine-text-views-together.html
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to combine text views together | SwiftUI by Example",
  "desc": "How to combine text views together",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-combine-text-views-together",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI’s text view overloads the `+` operator so that you can combine them together to make new text views.

This is helpful for times when you need to have different formatting across your views, because you can make each text view look exactly as you want then join them together to make a single combined text view. Even better, VoiceOver automatically recognizes them as a single piece of text when it comes to reading them out.

For example, this creates three text views then uses `+` to join them into a single text view to be returned:

```swift
Text("SwiftUI ")
    .font(.largeTitle)
+ Text("is ")
    .font(.headline)
+ Text("awesome")
    .font(.footnote)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-combine-text-views-together-1.zip)

![A line reading “SwiftUI is awesome” with “SwiftUI” in very large text and “is” in large text](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-combine-text-views-together-1~dark@2x.png)

You can also use this technique to create different colors or font weights of text, like this:

```swift
Text("SwiftUI ")
    .foregroundStyle(.red)
+ Text("is ")
    .foregroundStyle(.orange)
    .fontWeight(.black)
+ Text("awesome")
    .foregroundStyle(.blue)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-combine-text-views-together-2.zip)

![A line reading “SwiftUI is awesome” with “SwiftUI” in red, “is” in bold orange, and “awesome” in blue](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-combine-text-views-together-2~dark@2x.png)

::: tip

Combining text views like this is as close as we get to attributed strings in SwiftUI – there is no support for using `NSAttributedString` at this time.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "How to group views together | SwiftUI by Example",
  "desc": "How to group views together",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-group-views-together.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to group views together with ControlGroup | SwiftUI by Example",
  "desc": "How to group views together with ControlGroup",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-group-views-together-with-controlgroup.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to blend views together | SwiftUI by Example",
  "desc": "How to blend views together",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-blend-views-together.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to combine transitions | SwiftUI by Example",
  "desc": "How to combine transitions",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-combine-transitions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to combine shapes to create new shapes | SwiftUI by Example",
  "desc": "How to combine shapes to create new shapes",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-combine-shapes-to-create-new-shapes.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />