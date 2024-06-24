---
lang: ko-KR
title: What's the difference between @Bindable and @Binding?
description: Article(s) > What's the difference between @Bindable and @Binding?
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
      content: Article(s) > What's the difference between @Bindable and @Binding?
    - property: og:description
      content: What's the difference between @Bindable and @Binding?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/whats-the-difference-between-bindable-and-binding.html
date: 2023-09-26
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
  "title": "What's the difference between @Bindable and @Binding? | SwiftData by Example",
  "desc": "What's the difference between @Bindable and @Binding?",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/whats-the-difference-between-bindable-and-binding", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI provides two properties wrappers that use very similar names to provide wildly different functionality. No, I don't know why, either. However, I can at least explain to you what the difference is, so you're sure to always use the correct options.

The `@Binding` property wrapper is designed to let us read and write some external piece of data – something that was created elsewhere, such as an `@State` property from a parent view. If you were to create a custom text editor view, for example, you'd want to use `@Binding` to store access to the data you're writing, so that whichever parent view uses your text editor can say, “here is where you should store the user's text.”

In contrast, the `@Bindable` property wrapper allows us to get bindings from any property in an `@Observable` object, including all SwiftData model objects. If you create a local `@Observable` object using `@State`, you'll automatically be given bindings by the `@State` property wrapper. However, if you've been passed an object without any bindings – an object you *know* is `@Observable` – then you can use `@Bindable` to create bindings for you.

If the distinction still seems fuzzy to you, think about the older `@ObservedObject` property wrapper from SwiftUI. If you made a view that had some kind of object as a property you wouldn't be able to make bindings to it, but if you marked it with `@ObservedObject` then you *would* get bindings.

The only real difference is that `@Bindable` is sometimes needed inside your view body, perhaps because you want to make the whole object bindable, or because you're inside a `List` or a `ForEach` loop and need to make individual items bindable.

If you can, it's preferable to use `@Bindable` directly on your property, like this:

```swift
@Bindable var user: User
```

However, that isn't possible in some situations, such as when you've used `@Environment` already. For times like that, use `@Bindable` directly in your view body, like this:

```swift
@Bindable var user = user
```

---

<TagLinks />