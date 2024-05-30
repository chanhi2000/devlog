---
lang: ko-KR
title: How to run some code when state changes using onChange()
description: Article(s) > How to run some code when state changes using onChange()
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
      content: Article(s) > How to run some code when state changes using onChange()
    - property: og:description
      content: How to run some code when state changes using onChange()
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-run-some-code-when-state-changes-using-onchange.html
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
  "title": "How to run some code when state changes using onChange() | SwiftUI by Example",
  "desc": "How to run some code when state changes using onChange()",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-run-some-code-when-state-changes-using-onchange",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Improved in iOS 17**

SwiftUI lets us attach an `onChange()` modifier to any view, which will run code of our choosing when some state changes in our program. This is important, because we can't always use property observers like `didSet` with something like `@State`.

::: important

This behavior is changing in iOS 17 and later, with the older behavior being deprecated.

:::

If you need to target iOS 16 and earlier, `onChange()` accepts one parameter and sends its new value into a closure of your choosing. For example, this will print name changes as they are typed:

```swift
struct ContentView: View {
    @State private var name = ""

    var body: some View {
        TextField("Enter your name:", text: $name)
            .textFieldStyle(.roundedBorder)
            .onChange(of: name) { newValue in
                print("Name changed to \(name)!")
            }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-run-some-code-when-state-changes-using-onchang-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-run-some-code-when-state-changes-using-onchange-1~dark.mp4" />

If you're targeting iOS 17 or later, there's a variant that accepts no parameters – you can just read the property directly and be sure to get its new value, which isn't how the single-parameter version worked in iOS 16 and earlier.

iOS 17 also provides two other variants: one that accepts a two closure with parameters, one for the old value and one for the new value, and one that determines whether your action function should be run when your view is first shown.

For example, this prints out both the old and new value when a change happens:

```swift
struct ContentView: View {
    @State private var name = ""

    var body: some View {
        TextField("Enter your name", text: $name)
            .onChange(of: name) { oldValue, newValue in
                print("Changing from \(oldValue) to \(newValue)")
            }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-run-some-code-when-state-changes-using-onchang-2.zip)

And this prints a simple message when the value changes, but by adding `initial: true` also triggers the action closure when the view is shown:

```swift
struct ContentView: View {
    @State private var name = ""

    var body: some View {
        TextField("Enter your name", text: $name)
            .onChange(of: name, initial: true) {
                print("Name is now \(name)")
            }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-run-some-code-when-state-changes-using-onchang-3.zip)

Using `initial: true` is a really helpful way to consolidate functionality – rather than having to do some work in `onAppear()` *and* `onChange()`, you can do it all in one pass.

You might prefer to add a custom extension to `Binding` so that I attach observing code directly to the binding rather than to the view – it lets me place the observer next to the thing it's observing, rather than having lots of `onChange()` modifiers attached elsewhere in my view.

That would mean using code like this:

```swift
extension Binding {
    func onChange(_ handler: @escaping (Value) -> Void) -> Binding<Value> {
        Binding(
            get: { self.wrappedValue },
            set: { newValue in
                self.wrappedValue = newValue
                handler(newValue)
            }
        )
    }
}

struct ContentView: View {
    @State private var name = ""

    var body: some View {
        TextField("Enter your name:", text: $name.onChange(nameChanged))
            .textFieldStyle(.roundedBorder)
    }

    func nameChanged(to value: String) {
        print("Name changed to \(name)!")
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-run-some-code-when-state-changes-using-onchang-1.zip)

That being said, please be sure to run your code through Instruments if you do this – using `onChange()` on a view is more performant than adding it to a binding.

::: details Similar solutions…

```component VPCard
{
  "title": "How to run code when your app launches | SwiftUI by Example",
  "desc": "How to run code when your app launches",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-run-code-when-your-app-launches.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What's the difference between @ObservedObject, @State, and @EnvironmentObject? | SwiftUI by Example",
  "desc": "What's the difference between @ObservedObject, @State, and @EnvironmentObject?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/whats-the-difference-between-observedobject-state-and-environmentobject.md",
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

```component VPCard
{
  "title": "How to send state updates manually using objectWillChange | SwiftUI by Example",
  "desc": "How to send state updates manually using objectWillChange",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-send-state-updates-manually-using-objectwillchange.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard  
{
  "title": "How to fix “Modifying state during view update, this will cause undefined behavior” | SwiftUI by Example",
  "desc": "How to fix “Modifying state during view update, this will cause undefined behavior”",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-modifying-state-during-view-update-this-will-cause-undefined-behavior.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />