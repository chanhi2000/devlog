---
lang: ko-KR
title: How to add support for undo and redo
description: Article(s) > How to add support for undo and redo
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
      content: Article(s) > How to add support for undo and redo
    - property: og:description
      content: How to add support for undo and redo
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-add-support-for-undo-and-redo.html
date: 2023-10-12
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
  "title": "How to add support for undo and redo | SwiftData by Example",
  "desc": "How to add support for undo and redo",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-add-support-for-undo-and-redo", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

It is startlingly easy to add undo and redo support to SwiftData, and really it takes just two steps: enabling undo, then calling undo either through the SwiftUI environment or through your model context’s own undo manager.

First, adjust the way you create your model container so that you enable undo. If you’re using SwiftUI, this probably means changing your `modelContainer()` modifier to something like this:

```swift
.modelContainer(for: [Store.self, Book.self], isUndoEnabled: true)
```

Once you have your undo manager in place, you can call `undo()` or `redo()` on it and SwiftData will automatically undo the last set of changes. For example, if you were using SwiftUI you’d first request the environment’s undo manager, like this:

```swift
@Environment(\.undoManager) var undoManager
```

And then trigger an undo action like this:

```swift
undoManager?.undo()
```

If you’re creating your model container manually, you need to create the undo manager manually too:

```swift
container = try ModelContainer(for: Store.self, Book.self)
container.mainContext.undoManager = UndoManager()
```

And then you should use `modelContext.undoManager?.undo()` to perform an undo.

::: tip

Calling `undo()` or `redo()` undoes or redoes the last set of changes you made, but what “last set of changes” means is a bit fuzzy. What I can say for sure is that it *doesn’t* mean individual changes (if you make several changes at once, they will all be undone), and it also doesn’t mean all the changes made since a save last happened (if you make a change, call `save()`, then make another change, both will be undone). Instead, it seems to be runloop-based: All changes made in the current runloop are grouped together into a single undo/redo batch, even if you attempt to start a fresh transaction inside the runloop.

:::

You can also call the undo manager directly on any model context, although this is likely to cause problems if you have other undoable operations on your view.

You can also redo actions, like so:

```swift
undoManager?.redo()
```

::: important

I’ve found that undo works perfectly every time, correctly undoing property changes or removing objects and relations that were inserted. However, I’ve found *redo* more flaky: it seems happy to redo simple property changes (changing someone’s name, for example), but struggles when redoing changes that involved objects with relations being deleted – I’ve had it crash several times. Tread carefully!

:::

When undo/redo support is working correctly, you should automatically get three-finger swipe support working too: three-finger swipe left for undo, or right for redo.

As well as calling `undo()` and `redo()`, you can also check your undo manager's `canUndo` and `canRedo` property, to determine whether the actions are possible in the first place.

---

<TagLinks />