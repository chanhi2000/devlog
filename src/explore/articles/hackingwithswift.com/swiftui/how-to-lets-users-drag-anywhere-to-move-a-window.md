---
lang: ko-KR
title: How to lets users drag anywhere to move a window
description: Article(s) > How to lets users drag anywhere to move a window
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
      content: Article(s) > How to lets users drag anywhere to move a window
    - property: og:description
      content: How to lets users drag anywhere to move a window
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-lets-users-drag-anywhere-to-move-a-window.html
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
  "title": "How to lets users drag anywhere to move a window | SwiftUI by Example",
  "desc": "How to lets users drag anywhere to move a window",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-lets-users-drag-anywhere-to-move-a-window",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 16

**New in macOS 15**

SwiftUI on macOS provides a special `‌WindowDragGesture` type that is specifically designed to let users click and drag on a view to move your window. This is particularly helpful for windows that hide their title, which is more common in smaller utilities.

Use it like this:

```swift
VStack {
    Text("You can drag from here")
    Text("Or from here")
}
.gesture(WindowDragGesture())
```

To get the full effect, you should also add `.windowStyle(.plain)` to your `WindowGroup` or similar scene-level control.

::: details Similar solutions…

```component VPCard
{
  "title": "How to open a new window | SwiftUI by Example",
  "desc": "How to open a new window",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-open-a-new-window.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Learn once, apply anywhere | SwiftUI by Example",
  "desc": "Learn once, apply anywhere",
  "link": "/explore/articles/hackingwithswift.com/swiftui/learn-once-apply-anywhere.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to support drag and drop in SwiftUI | SwiftUI by Example",
  "desc": "How to support drag and drop in SwiftUI",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-support-drag-and-drop-in-swiftui.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to let users move rows in a list | SwiftUI by Example",
  "desc": "How to let users move rows in a list",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-let-users-move-rows-in-a-list.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to make a scroll view move to a location using ScrollViewReader | SwiftUI by Example",
  "desc": "How to make a scroll view move to a location using ScrollViewReader",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-make-a-scroll-view-move-to-a-location-using-scrollviewreader.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />
