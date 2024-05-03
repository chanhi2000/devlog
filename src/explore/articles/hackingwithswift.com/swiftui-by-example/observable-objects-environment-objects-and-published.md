---
lang: ko-KR
title: Observable objects, environment objects, and @Published
description: Article(s) > Observable objects, environment objects, and @Published
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
      content: Article(s) > Observable objects, environment objects, and @Published
    - property: og:description
      content: Observable objects, environment objects, and @Published
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/observable-objects-environment-objects-and-published.html
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/README.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Observable objects, environment objects, and @Published | SwiftUI by Example",
  "desc": "Observable objects, environment objects, and @Published",
  "link": "https://hackingwithswift.com/quick-start/swiftui/observable-objects-environment-objects-and-published",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

<VidStack src="youtube/lxaEAHNmhY4" />

We want to let folks place an order for pick up by selecting items and adding them to a cart. I already gave you a dedicated `Order` class that holds an array of items, so we're going to add items to that then show them in a dedicated order view.

But there's a catch: if we're adding things inside `ItemDetail`, how can we show them in an entirely separate `OrderView`? More importantly, how can we make sure both of these two update each other as things change?

Well, SwiftUI has a quite brilliant solution called _environment objects_. These are objects that our views can use freely, but don't create or manage – they get created elsewhere, and carry on existing after the view has gone away.

In this app, we're going to create an instance of our order when the app launches, then pass it into our content view. Any view that is inside that content view – anything that can call the content view its ancestor – will automatically gain access to that environment object. Even better, when any view changes it, all other places automatically update.

Let's try it out now. Open your <FontIcon icon="fa-brands fa-swift"/>`iDineApp.swift`, which is where our initial instance of `ContentView` is created. Now give it this property:

```swift
@StateObject var order = Order()
```

__Tip__: Xcode will shown an error when you add that line, which is okay – we'll fix it in a moment.

That creates a new order when the app starts, and keeps it alive regardless of what view we show. The `@StateObject` property wrapper is responsible for keeping the object alive throughout the life of our app.

Now we can pass that into our `ContentView` struct when it gets created – look for this:

```swift
WindowGroup {
    ContentView()
}
```

And replace it with this:

```swift
WindowGroup {
    ContentView()
        .environmentObject(order)
}
```

Now, I said that Xcode would throw up an error when we used the `@StateObject` property – something along the lines of “Argument type 'Order' does not conform to expected type 'ObservableObject'”.

What it means is that SwiftUI doesn't understand how its user interface is supposed to watch our `Order` class for changes – it doesn't understand how it should send and receive notifications that the data changed.

Think about it: if we select some food from the menu and add it to our order, we want that to appear immediately on the order page – we don't want to have hit refresh, or wait a few seconds, we want it _immediately_. And for that to work, SwiftUI needs a standard way for objects like `Order` to say “hey, if anyone is watching me, you should know my data just changed.”

This standard already exists, and it's the `ObservableObject` protocol. Anything that conforms to `ObservableObject` can be used inside SwiftUI, and publish announcements when its values have changed so the user interface can be updated.

Apple provides a couple of different ways of publishing change announcements, but the easiest is to use the `@Published` property wrapper before any properties that should trigger change notifications. In this case, just placing `@Published` before a property is enough to have it update any SwiftUI views that are watching for changes – it's really powerful!

So, open <FontIcon icon="fa-brands fa-swift"/>`Order.swift` and change the `items` property to this:

```swift
@Published var items = [MenuItem]()
```

And that's it! Now that our class is configured correctly, we can make it conform to `ObservableObject`, like this:

```swift
class Order: ObservableObject {
```

…and our code is back to compiling again. In total, we have updated `Order` so it knows how to announce changes to any views that are watching, we have told the `items` array that whenever it changes it should send out such an announcement, we have created an instance of the `Order` object in our main app, and we have placed it into the SwiftUI environment for other views to use – nice!

::: details Further reading

```component VPCard
{
  "title": "How to use @EnvironmentObject to share data between views | SwiftUI by Example",
  "desc": "How to use @EnvironmentObject to share data between views",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-environmentobject-to-share-data-between-views.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What's the difference between @ObservedObject, @State, and @EnvironmentObject? | SwiftUI by Example",
  "desc": "What's the difference between @ObservedObject, @State, and @EnvironmentObject?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/whats-the-difference-between-observedobject-state-and-environmentobject.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

::: details Similar solutions…

```component VPCard
{
  "title": "What is the @Published property wrapper? | SwiftUI by Example",
  "desc": "What is the @Published property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-published-property-wrapper.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-tips-and-tricks.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @Environment property wrapper? | SwiftUI by Example",
  "desc": "What is the @Environment property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-environment-property-wrapper.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to use Instruments to profile your SwiftUI code and identify slow layouts | SwiftUI by Example",
  "desc": "How to use Instruments to profile your SwiftUI code and identify slow layouts",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />