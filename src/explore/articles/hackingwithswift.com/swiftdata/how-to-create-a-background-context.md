---
lang: ko-KR
title: How to create a background context
description: Article(s) > How to create a background context
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
      content: Article(s) > How to create a background context
    - property: og:description
      content: How to create a background context
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-create-a-background-context.html
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
  "title": "How to create a background context | SwiftData by Example",
  "desc": "How to create a background context",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-create-a-background-context", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Although SwiftData doesn't have the concept of child contexts, you can create as many peer or sibling contexts as you need, all attached to the same model container, and mixing foreground and background tasks freely.

::: important

`ModelContext` and all SwiftData models do not conform to `Sendable`, which means they can't be transferred between Swift actors. `ModelContainer` *does* conform to `Sendable`, so please use that to create your background context.

Creating a new model context is as simple as calling its initializer with a model container, like this:

```swift
class BackgroundDataHander {
    private var context: ModelContext

    init(with container: ModelContainer) {
        context = ModelContext(container)
    }
```

As we've used a class above, it's important to create it away from the main actor by using `async let`, `Task.detached()`, or other concurrency options. If you use an actor rather than a class, the context will be bound to its actor rather than the main actor used for your main context.

::: important

If you intend to create a background context using an actor in order to do bulk data imports, I would recommend against storing the context as a property because the extra actor synchronization will slow down your code dramatically.

:::

When a save is triggered on your background context, its changes will automatically be reflected in your other contexts, including updating any `@Query` properties in your SwiftUI views.

Apple's official view is that autosave is enabled for the main context, but *not* for model context created by hand. In my experience this is inconsistent: yes, the main context always has autosave enabled, but any extra contexts you create by hand may or may not.

Very roughly – and this is simply through observation rather than actual facts that will stand the test of time – if you create a new model context on the main actor, it will have autosave enabled, but if you create it to run on a separate actor then autosave will be disabled.

::: tip

Until we have more certainty around when autosave is actually enabled or not, I would recommend being explicit when creating your background contexts.

:::

Because SwiftData models are not sendable, you should transfer them between tasks using their `id` property. This allows you to load the object on your background context, without worrying about data races.

---

<TagLinks />