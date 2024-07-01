---
lang: ko-KR
title: How to enable or disable autosave for a ModelContext
description: Article(s) > How to enable or disable autosave for a ModelContext
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swiftdata
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to enable or disable autosave for a ModelContext
    - property: og:description
      content: How to enable or disable autosave for a ModelContext
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/how-to-enable-or-disable-autosave-for-a-modelcontext.html
next: /explore/articles/hackingwithswift.com/swiftdata/how-to-define-swiftdata-models-using-the-model-macro.md
date: 2023-09-30
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftData by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftdata/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to enable or disable autosave for a ModelContext | SwiftData by Example",
  "desc": "How to enable or disable autosave for a ModelContext",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-enable-or-disable-autosave-for-a-modelcontext", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 16

SwiftUI provides a built-in model context called the main context, and it has autosave enabled – SwiftData will automatically save your changes but you can also create a custom model context without that.

If you want to do this across your whole app – if you want your primary model context to have save disabled – then you would modify your `App` struct to this:

```swift
WindowGroup {
    ContentView()
}
.modelContainer(for: User.self, isAutosaveEnabled: false)
```

::: important To be clear

This means you’re responsible for calling `save()` on your model context manually.

:::

If you’re making a new context by hand, autosave is usually automatically disabled. You can enable it by adjust its `autosaveEnabled` Boolean like this:

```swift
let newContext = ModelContext(container)
print(newContext.autosaveEnabled)
newContext.autosaveEnabled = true
```

::: tip

It's not specified exactly when autosave is enabled for new contexts, so I'd recommend setting the value explicitly to avoid problems.

:::

---

<TagLinks />