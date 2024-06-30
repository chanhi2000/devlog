---
lang: ko-KR
title: How to set custom accessibility labels and hints
description: Article(s) > How to set custom accessibility labels and hints
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
      content: Article(s) > How to set custom accessibility labels and hints
    - property: og:description
      content: How to set custom accessibility labels and hints
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-set-custom-accessibility-labels-and-hints.html
next: /explore/articles/hackingwithswift.com/swiftui/working-with-lists.md
date: 2024-06-21
isOriginal: false
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
  "title": "How to set custom accessibility labels and hints | SwiftUI by Example",
  "desc": "How to set custom accessibility labels and hints",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-set-custom-accessibility-labels-and-hints",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 16

**Improved in iOS 18**

SwiftUI does a great job of providing sensible default accessibility labels for text, images, and many other built-in views, but very often you'll want to customize this yourself using the `accessibilityLabel()` and `accessibilityHint()` modifiers.

::: important

Your accessibility labels are read immediately by VoiceOver, and so should be kept short and to the point. Accessibility *hints* are bonus text that get read after a short delay, and can provide extra information beyond the label.

:::

For example, we could use `accessibilityLabel()` and `accessibilityHint()` together to provide better context on what your view means:

```swift
Button("Add", systemName: "person.crop.circle") {
    print("Adding friend…)
}
.accessibilityLabel("Add to group")
.accessibilityHint("Add Jess to the Bridgerton Fans chat group.")
```

If you're able to target iOS 18 and later, there is an additional variant of `accessibilityLabel()` that is very helpful: we can provide it with a closure to customize whatever is SwiftUI's default label, allowing us to add to an existing description.

For example, the code below will read SwiftUI's default label for the text, but add the word "Warning" before it to reflect the fact that the text is bold and red:

```swift
Text("This is an important message")
    .fontWeight(.bold)
    .foregroundStyle(.red)
    .accessibilityLabel { label in
        Text("Warning:")
        label
    }
```

::: details Similar solutions…

```component VPCard
{
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui/swiftui-tips-and-tricks.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{ 
  "title": "Introduction to accessibility with SwiftUI | SwiftUI by Example",
  "desc": "Introduction to accessibility with SwiftUI",
  "link": "/explore/articles/hackingwithswift.com/swiftui/introduction-to-accessibility-with-swiftui.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create static labels with a Text view | SwiftUI by Example",
  "desc": "How to create static labels with a Text view",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-static-labels-with-a-text-view.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{ 
  "title": "How to detect the Reduce Motion accessibility setting | SwiftUI by Example",
  "desc": "How to detect the Reduce Motion accessibility setting",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-detect-the-reduce-motion-accessibility-setting.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />