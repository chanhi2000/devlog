---
lang: ko-KR
title: How to insert images into text
description: Article(s) > How to insert images into text
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
      content: Article(s) > How to insert images into text
    - property: og:description
      content: How to insert images into text
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-insert-images-into-text.html
next: /explore/articles/hackingwithswift.com/swiftui/learn-once-apply-anywhere.md
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
   "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to insert images into text | SwiftUI by Example",
  "desc": "How to insert images into text",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-insert-images-into-text",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI lets you combine text views using `+`, but you can also place images directly into text using a simple `Text` initializer. This allows you to place images directly inside text, including having the text and images wrap as needed.

For example, this writes “Hello World” with a star image in the middle:

```swift
Text("Hello ") + Text(Image(systemName: "star")) + Text(" World!")
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-insert-images-into-text-1.zip)

![The text “Hello World!” with a star outline between the two words](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-insert-images-into-text-1~dark@2x.png)

The images inside your text will automatically adjust to match whatever font or foreground color you’ve chosen, but make sure you apply your modifiers to the whole joined text rather than simply the last item.

For example, this will make the whole combined text large and blue:

```swift
(Text("Hello ") + Text(Image(systemName: "star")) + Text(" World!"))
    .foregroundStyle(.blue)
    .font(.largeTitle)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-insert-images-into-text-2.zip)

![The text “Hello World!” with an outlined star icon between the two words. The words and icon are in large blue text](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-insert-images-into-text-2~dark@2x.png)

Whereas this – without the extra parentheses – will make only the “World” text large and blue:

```swift
Text("Goodbye ") + Text(Image(systemName: "star")) + Text(" World!")
    .foregroundStyle(.blue)
    .font(.largeTitle)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-insert-images-into-text-3.zip)

![The text “Goodbye World!” with an outlined star icon between the two words. Only “World!” is in large blue text](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-insert-images-into-text-3~dark@2x.png)

::: details Similar solutions…

```component VPCard
{
  "title": "How to use images and other views as backgrounds | SwiftUI by Example",
  "desc": "How to use images and other views as backgrounds",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-use-images-and-other-views-as-backgrounds.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to let the user paste data into your app | SwiftUI by Example",
  "desc": "How to let the user paste data into your app",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-let-the-user-paste-data-into-your-app.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to format text inside text views | SwiftUI by Example",
  "desc": "How to format text inside text views",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-format-text-inside-text-views.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to show different images and other views in light or dark mode | SwiftUI by Example",
  "desc": "How to show different images and other views in light or dark mode",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-show-different-images-and-other-views-in-light-or-dark-mode.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to disable the overlay color for images inside Button and NavigationLink | SwiftUI by Example",
  "desc": "How to disable the overlay color for images inside Button and NavigationLink",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-disable-the-overlay-color-for-images-inside-button-and-navigationlink.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />