---
lang: ko-KR
title: How to add Core Data objects from SwiftUI views
description: Article(s) > How to add Core Data objects from SwiftUI views
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
      content: Article(s) > How to add Core Data objects from SwiftUI views
    - property: og:description
      content: How to add Core Data objects from SwiftUI views
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-core-data-objects-from-swiftui-views.html
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
  "title": "How to add Core Data objects from SwiftUI views | SwiftUI by Example",
  "desc": "How to add Core Data objects from SwiftUI views",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-add-core-data-objects-from-swiftui-views",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Saving Core Data objects in SwiftUI works in exactly the same way it works outside of SwiftUI: get access to the managed object context, create an instance of your type inside that context, then save the context when you’re ready.

If you followed my [Core Data and SwiftUI set up instructions](/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-configure-core-data-to-work-with-swiftui.md), you’ve already injected your managed object context into the SwiftUI environment.

Anywhere you need to create Core Data objects you should add an `@Environment` property to `ContentView` to read the managed object context right out:

```swift
@Environment(\.managedObjectContext) var managedObjectContext
```

Next, go ahead and create an instance of your Core Data entity class wherever you need, referencing that `managedObjectContext`. In my example setup, we have a ProgrammingLanguage entity with `name` and `creator` properties, so we could create one of those inside a SwiftUI button action like this:

```swift
Button("Insert example language") {
    let language = ProgrammingLanguage(context: managedObjectContext)
    language.name = "Python"
    language.creator = "Guido van Rossum"
    // more code here
}
```

<VidStac src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-core-data-objects-from-swiftui-views-1~dark.mp4" />

Finally, save the context whenever is appropriate – that might be immediately, after a group of objects have been added, when the state of your app changes, and so on. 

If you’re using my `PersistenceController` setup code from earlier, replace `// more code here` with this:

```swift
PersistenceController.shared.save()
```

If you’re not, use this code instead:

```swift
do {
    try managedObjectContext.save()
} catch {
    // handle the Core Data error
}
```

Remember, for general saves that don’t directly follow creating a new object, it’s usually worth adding a check to see whether your managed object context has any changes:

```swift
if managedObjectContext.hasChanges {
```

::: details Similar solutions…

```component VPCard
{
  "title": "How to delete Core Data objects from SwiftUI views | SwiftUI by Example",
  "desc": "How to delete Core Data objects from SwiftUI views",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-delete-core-data-objects-from-swiftui-views.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Observable objects, environment objects, and @Published | SwiftUI by Example",
  "desc": "Observable objects, environment objects, and @Published",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/observable-objects-environment-objects-and-published.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to use @StateObject to create and monitor external objects | SwiftUI by Example",
  "desc": "How to use @StateObject to create and monitor external objects",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-stateobject-to-create-and-monitor-external-objects.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to use @ObservedObject to manage state from external objects | SwiftUI by Example",
  "desc": "How to use @ObservedObject to manage state from external objects",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-observedobject-to-manage-state-from-external-objects.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::


---

<TagLinks />