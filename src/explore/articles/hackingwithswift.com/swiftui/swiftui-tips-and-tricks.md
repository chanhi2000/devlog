---
lang: ko-KR
title: SwiftUI tips and tricks
description: Article(s) > SwiftUI tips and tricks
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
      content: Article(s) > SwiftUI tips and tricks
    - property: og:description
      content: SwiftUI tips and tricks
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/swiftui-tips-and-tricks.html
prev: how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts.md
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
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "https://hackingwithswift.com/quick-start/swiftui/swiftui-tips-and-tricks",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI is packed with powerful headline features, but there are also dozens of smaller tips and tricks that will help you write better apps.

I’ve tried to summarize all the tips I’ve come across so far below, and where applicable I’ve also provided links to my more in-depth SwiftUI tutorials to help give you extra context.

---

## Resume the live preview

Having a live preview of your layouts while you code is a great feature of Xcode, but often you’ll see it pause because you changed a lot and Xcode couldn’t keep up.

Rather than constantly reaching for your trackpad to press Resume, here’s the most important keyboard shortcut for SwiftUI developers: press <kbd>Option</kbd>+<kbd>CMd</kbd>+<kbd>P</kbd> to make the preview window reload immediately, and resume its live updates.

---

## Make `@State` private

Apple provides us with three ways to use state in our apps: `@State` is for simple local properties, `@ObservedObject` is for complex properties or properties that are shared between views, and `@EnvironmentObject` is for properties that are indirectly shared potentially by many views.

Because `@State` is specifically designed for use by the local view, Apple recommends marking `@State` properties as `private` to really re-enforce that they aren’t designed to be accessed elsewhere:

```swift
@State private var score = 0
```

::: info Read more

```component VPCard
{
  "title": "What's the difference between @ObservedObject, @State, and @EnvironmentObject? | SwiftUI by Example",
  "desc": "What's the difference between @ObservedObject, @State, and @EnvironmentObject?",
  "link": "/explore/articles/hackingwithswift.com/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

## Prototype with constant bindings

If you’re just trying out a design and don’t want to have to create bindings to use things like text fields and sliders, you can use a constant binding instead. This will allow you to use the object with a realistic value.

For example, this creates a text field with the constant string “Hello”:

```swift
TextField("Example placeholder", text: .constant("Hello"))
    .textFieldStyle(.roundedBorder)
```

::: important

If you’re using Xcode 12 you need to use `RoundedBorderTextFieldStyle()` rather than `.roundedBorder`.

:::

And this creates a slider with a constant value of 0.5:

```swift
Slider(value: .constant(0.5))
```

::: note

Constant bindings like this one are just for testing and illustration purposes – you can’t change them at runtime.

:::

---

## Presenting test views

Another useful tip while you’re prototyping is that you can present any kind of view rather than a full detail view – even when working with a navigation stack.

For example, if you had a list of users and wanted to make sure that tapping one of them worked, you could use a navigation link that points to a text view rather than a fully fledged custom custom view, like this:

```swift
struct ContentView: View {
    let users = (1...100).map { number in "User \(number)" }

    var body: some View {
        NavigationStack {
            List(users, id: \.self) { user in
                NavigationLink {
                    Text("Detail for \(user)")
                } label: {
                    Text(user)
                }
            }
            .navigationTitle("Select a user")
        }
    }
}
```

This allows you to make one screen complete before going on to design the real detail view.

::: info Read more

```component VPCard
{
  "title": "How to push a new view onto a NavigationStack | SwiftUI by Example",
  "desc": "How to push a new view onto a NavigationStack",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-push-a-new-view-onto-a-navigationstack.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

## Add customizations for an individual platform

Sometimes you have one SwiftUI view that works great on both iOS and macOS, but needs just a tiny modification – perhaps a little more padding on iOS, or slightly different styling.

For these times I recommend the following view extensions, which add `iOS()`, `macOS()`, `tvOS()`, and `watchOS()` methods for just this purpose:

```swift
extension View {
    func iOS<Content: View>(_ modifier: (Self) -> Content) -> some View {
        #if os(iOS)
        return modifier(self)
        #else
        return self
        #endif
    }
}

extension View {
    func macOS<Content: View>(_ modifier: (Self) -> Content) -> some View {
        #if os(macOS)
        return modifier(self)
        #else
        return self
        #endif
    }
}

extension View {
    func tvOS<Content: View>(_ modifier: (Self) -> Content) -> some View {
        #if os(tvOS)
        return modifier(self)
        #else
        return self
        #endif
    }
}

extension View {
    func watchOS<Content: View>(_ modifier: (Self) -> Content) -> some View {
        #if os(watchOS)
        return modifier(self)
        #else
        return self
        #endif
    }
}
```

Each of those follow the same pattern: they create a new method using the platform name, each of which accept a function that is able to transform the current view somehow. Inside the method there is a compiler check to see whether the current platform manages the one we expect – if so we apply the modifier function, otherwise we don’t.

Those platform checks – `#if os(iOS)`, etc – are done at *compile* time, which means they will be optimized away. In fact, it’s likely the compiler will be able to optimize these methods entirely because they are so simple.

Use them like this:

```swift
Text("Hello World")
    .iOS { $0.padding(10) }
```

---

## Go past the 10 view limit

All containers in SwiftUI must return no more than ten children, which is usually fine for most purposes. However, if you need to have more than 10 views, if you need to return more than one view from your `body` property, or if you need to return several different kinds of view, you should use a group like this:

```swift
struct ContentView: View {
    var body: some View {
        List {
            Group {
                Text("Row 1")
                Text("Row 2")
                Text("Row 3")
                Text("Row 4")
                Text("Row 5")
                Text("Row 6")
            }

            Group {
                Text("Row 7")
                Text("Row 8")
                Text("Row 9")
                Text("Row 10")
                Text("Row 11")
            }
        }
    }
}
```

Groups are purely logical containers – they don’t affect your layouts.

::: info Read more

```component VPCard
{
  "title": "How to group views together | SwiftUI by Example",
  "desc": "How to group views together",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-group-views-together.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

## Use semantic colors

SwiftUI is designed to work with themed user interfaces out of the box, which means it provides both semantic and adaptive colors by default. Although it might be tempting to use your own custom colors, you should at least check first whether you have something in the default SwiftUI set.

For example, `Color.red` isn’t the pure red of RGB(255, 0, 0), but instead slightly lighter or slightly darker based on the environment – it adapts automatically without us needing to think about it.

Similarly, `Color.primary`, `Color.secondary`, and `Color.accentColor` all refer to fixed values that are provided by the environment, allowing us to structure and highlight content in a standardized way.

::: info Read more

```component VPCard
{
  "title": "How to style text views with fonts, colors, line spacing, and more | SwiftUI by Example",
  "desc": "How to style text views with fonts, colors, line spacing, and more",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-style-text-views-with-fonts-colors-line-spacing-and-more.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

## Rely on adaptive padding

SwiftUI lets us control precisely how much padding to apply around views, like this:

```swift
Text("Row 1")
    .padding(10)
```

While it’s tempting to always control padding like this to “get things just right”, if you use the `padding()` modifier without any parameters you get *adaptive* padding – padding that automatically adjusts itself to its content and its environment.

So, if your app is running on an iPad with a regular size class you’ll get more padding than if the user moves it down to a split view – all without having to write any code.

::: info Read more

```component VPCard
{
  "title": "How to control spacing around individual views using padding | SwiftUI by Example",
  "desc": "How to control spacing around individual views using padding",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-control-spacing-around-individual-views-using-padding.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

## Combine text views

You can create new text views out of several small ones using `+`, which is an easy way of creating more advanced formatting. For example, this creates three text views in different colors and combines them together:

```swift
struct ContentView: View {
    var body: some View {
        Text("Colored ")
            .foregroundStyle(.red)
        +
        Text("SwifUI ")
            .foregroundStyle(.green)
        +
        Text("Text")
            .foregroundStyle(.blue)
    }
}
```

::: info Read more

```component VPCard
{
  "title": "How to combine text views together | SwiftUI by Example",
  "desc": "How to combine text views together",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-combine-text-views-together.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

## How to make `print()` work

If you press play in the SwiftUI preview to try out your designs, you’ll find that any calls to `print()` are ignored. If you’re using `print()` for testing purposes – e.g. as simple button tap actions – then this can be a real headache.

Fortunately, there’s a simple fix: right-click on the play button in the preview canvas and choose “Debug Preview”. With that small change made you’ll find your `print()` calls work as normal.

---

## Relying on the implicit `HStack`

When you create a list of items, it’s common to want to get the iOS-standard look of having an image on the left then some text on the right.

Well, if you’re using a dynamic list of items – i.e., a list that’s attached to an array of data – then you actually get a `HStack` for free inside your list, so there’s no need to make one by hand.

So, this code will create a list based on picture names from an array, and relies on the implicit `HStack` to arrange the image and text side by side:

```swift
struct ContentView: View {
    let imageNames = ["paul-hudson", "swiftui"]

    var body: some View {
        List(imageNames, id: \.self) { image in
            Image(image).resizable().frame(width: 40)
            Text(image)
        }
    }
}
```

::: info Read more

```component VPCard
{
  "title": "How to use implicit stacking | SwiftUI by Example",
  "desc": "How to use implicit stacking",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-use-implicit-stacking.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

## Splitting up large views

If you find yourself with a large view you might find it easier to break it up into several smaller views and compose those together to get the same result. One of the great features of SwiftUI is that there’s no performance difference because it flattens its view hierarchy, but it certainly makes maintenance easier!

For example, here’s a list that shows an image, a title, and a subtitle for every users:

```swift
struct ContentView: View {
    let users = ["Paul Hudson", "Taylor Swift"]

    var body: some View {
        NavigationStack {
            List(users, id: \.self) { user in
                Navigation {
                    Text("Detail View")
                } label: {
                    Image(systemImage: "person.crop.circle")
                        .resizable()
                        .frame(width: 50, height: 50)

                    VStack(alignment: .leading) {
                        Text(user)
                            .font(.headline)
                        Text("Occupation: Programmer")
                    }
                }
            }
            .navigationTitle("Users")
        }
    }
}
```

Even though it’s not really *that* complicated, you still need to read it carefully to understand what it’s going on.

Fortunately, we can take parts of the view out into a separate view to make it easier to understand and easier to re-use, and Xcode makes it a cinch: just Cmd-click on the navigation link and choose Extract Subview. This will pull the code out into a new SwiftUI view, and leave a reference where it was.

::: note

If your subview relies on data from the parent you’ll need to pass that along yourself.

:::

::: info Read more

```component VPCard
{
  "title": "How to create and compose custom views | SwiftUI by Example",
  "desc": "How to create and compose custom views",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-and-compose-custom-views",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

## Better previewing

One of the many benefits of SwiftUI is that we get instant previews of our layouts as we work. Even better, we can customize those previews so that we can see multiple designs side by side, see how things look with a navigation stack, try out dark mode, and more.

For example, this creates a preview for `ContentView` that shows three different designs side by side: extra large text, dark mode, and a navigation stack:

```swift
struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
            .environment(\.sizeCategory, .accessibilityExtraExtraExtraLarge)
        ContentView()
            .preferredColorScheme(.dark)
        NavigationStack {
            ContentView()
        }
    }
}
```

::: tip

Make sure you zoom out or scroll around in the preview window to see all the different previews.

:::

::: info Read more

```component VPCard
{
  "title": "How to preview your layout in different devices | SwiftUI by Example",
  "desc": "How to preview your layout in different devices",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-preview-your-layout-in-different-devices.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

## Create custom modifiers

If you find yourself regularly repeating the same set of view modifiers – for example, making a text view have padding, be of a specific size, have fixed background and foreground colors, etc – then you should consider moving those to a custom modifier rather than repeating your code.

For example, this creates a new `PrimaryLabel` modifier that adds padding, a black background, white text, a large font, and some corner rounding:

```swift
struct PrimaryLabel: ViewModifier {
    func body(content: Content) -> some View {
        content
            .padding()
            .background(.black)
            .foregroundStyle(.white)
            .font(.largeTitle)
            .cornerRadius(10)
    }
}
```

You can now attach that to any view using `.modifier(PrimaryLabel())`, like this:

```swift
struct ContentView: View {
    var body: some View {
        Text("Hello World")
            .modifier(PrimaryLabel())
    }
}
```

::: info Read more

```component VPCard
{
  "title": "How to create custom modifiers | SwiftUI by Example",
  "desc": "How to create custom modifiers",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-custom-modifiers.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

## Animate changes easily

SwiftUI has two ways for us to animate changes to its view hierarchy: `animation()` and `withAnimation()`. They are used in different places, but both have the effect of smoothing out changes to the views in our app.

The `animation()` method is used on bindings, and it asks SwiftUI to animate any changes that result in the binding’s value being modified. For example, here’s a view that has a `Toggle` to show or hide a label:

```swift
struct ContentView: View {
    @State private var showingWelcome = false

    var body: some View {
        VStack {
            Toggle("Toggle label", isOn: $showingWelcome)

            if showingWelcome {
                Text("Hello World")
            }
        }
    }
}
```

When the toggle is changed, the text view below it will appear or disappear immediately, which isn’t a great experience. However, if we used `animation()` we could make the view slide in and out smoothly when the toggle is changed:

```swift
Toggle("Toggle label", isOn: $showingWelcome.animation())
```

You can even control the kind of animation you want, like this:

```swift
Toggle("Toggle label", isOn: $showingWelcome.animation(.spring()))
```

When you’re working with regular state rather than bindings, you can animate changes by wrapping them in a `withAnimation()` call.

For example, here’s our same view except now it shows or hide the welcome label using a button press:

```swift
struct ContentView: View {
    @State private var showingWelcome = false

    var body: some View {
        VStack {
            Button("Toggle label") {
                showingWelcome.toggle()
            }

            if showingWelcome {
                Text("Hello World")
            }
        }
    }
}
```

As with before that will cause the welcome label to appear and disappear immediately, but if we wrap our changes in `withAnimation()` they will be animated instead:

```swift
withAnimation {
    showingWelcome.toggle()
}
```

And it’s customizable in exactly the same way as `animation()`:

```swift
withAnimation(.spring()) {
    showingWelcome.toggle()
}
```

::: info Read more

```component VPCard
{
  "title": "How to add and remove views with a transition | SwiftUI by Example",
  "desc": "How to add and remove views with a transition",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-add-and-remove-views-with-a-transition.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

## Showing multiple alerts in a view

If you try to attach multiple `alert()` modifiers to a single view, you’ll find your code doesn’t work as you expect – one alert will work but the other won’t.

To fix this, you should attach your alerts to different parts of your view hierarchy, such as to the button or other view that triggers the alert to appear.

::: info Read more

```component VPCard
{
  "title": "How to show multiple alerts in a single view | SwiftUI by Example",
  "desc": "How to show multiple alerts in a single view",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-show-multiple-alerts-in-a-single-view.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

## Publishing new values from a binding

Last but not least, to avoid problems when sending update notifications from a publisher – e.g. calling `send()` on a `PassthroughSubject` or updating any `@Published` property – you should make sure you’re always on the main thread.

As with UIKit and most other UI frameworks, you can do all the background work you want in your SwiftUI apps, but you should only ever manipulate the user interface on the main thread. Because state changes automatically trigger a refresh of your `body`, it’s important that you make sure you perform those state changes on the main thread.

::: info Read more

```component VPCard
{
  "title": "How to use @ObservedObject to manage state from external objects | SwiftUI by Example",
  "desc": "How to use @ObservedObject to manage state from external objects",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-use-observedobject-to-manage-state-from-external-objects.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

## What are *your* tips?

The SwiftUI tips and tricks above are ones I’ve come across watching WWDC sessions, asking questions in the labs, and writing lots and lots of code while moving my own projects from UIKit.

I’d love to hear what tips you have – [<FontIcon icon="fa-brands fa-x-twitter"/>send me a tweet @twostraws](https://twitter.com/twostraws) and let me know!

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
  "title": "How to use Instruments to profile your SwiftUI code and identify slow layouts | SwiftUI by Example",
  "desc": "How to use Instruments to profile your SwiftUI code and identify slow layouts",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Building a menu using List | SwiftUI by Example",
  "desc": "Building a menu using List",
  "link": "/explore/articles/hackingwithswift.com/swiftui/building-a-menu-using-list.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Answering the big question: should you learn SwiftUI, UIKit, or both? | SwiftUI by Example",
  "desc": "Answering the big question: should you learn SwiftUI, UIKit, or both?",
  "link": "/explore/articles/hackingwithswift.com/swiftui/answering-the-big-question-should-you-learn-swiftui-uikit-or-both.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Frequently asked questions about SwiftUI | SwiftUI by Example",
  "desc": "Frequently asked questions about SwiftUI",
  "link": "/explore/articles/hackingwithswift.com/swiftui/frequently-asked-questions-about-swiftui.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />