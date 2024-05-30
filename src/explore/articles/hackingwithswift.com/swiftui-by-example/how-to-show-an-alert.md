---
lang: ko-KR
title: How to show an alert
description: Article(s) > How to show an alert
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
      content: Article(s) > How to show an alert
    - property: og:description
      content: How to show an alert
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-an-alert.html
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
  "title": "How to show an alert | SwiftUI by Example",
  "desc": "How to show an alert",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-show-an-alert",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Updated in iOS 15**

SwiftUI lets us show alerts to the user with its `alert()` modifier, but how that works depends on whether you’re targeting iOS 15 and later or whether you need to support iOS 13 and 14 too. I’ll show you both approaches here, but the newer iOS 15 approach is preferable because it builds on standard SwiftUI buttons.

Let’s look at the iOS 15 approach first. To show an alert, create some Boolean state that determines whether the alert should be visible, then attach that to an `alert()` modifier along with all the buttons you want to show in the alert. All buttons dismiss the alert when tapped, so you can provide an empty action for simple dismissal.

For example, this shows an alert with a single “OK” button:

```swift
struct ContentView: View {
    @State private var showingAlert = false

    var body: some View {
        Button("Show Alert") {
            showingAlert = true
        }
        .alert("Important message", isPresented: $showingAlert) {
            Button("OK", role: .cancel) { }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-show-an-alert-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-show-an-alert-1~dark.mp4" />

::: tip

Presenting an alert like this will automatically set `showingAlert` back to false when the button is tapped.

:::

You can provide as many buttons as you need, and if you provide no buttons then you’ll automatically be given a default “OK” to dismiss the alert. As these are standard SwiftUI buttons, you can assign other roles such as `.destructive` to have the system style them appropriately.

![An alert titled “Important message” with choices “First”, “Second”, and “Third” in red, as well as “Cancel” in bold blue.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-show-an-alert-3~dark@2x.png)

If you need to support iOS 14 and 13, you should instead use the dedicated `Alert` struct, which looks like this:

```swift
Alert(
    title: Text("Important message"),
    message: Text("Wear sunscreen"), 
    dismissButton: .default(Text("Got it!"))
)
```

That defines a title and message, like you’d see in a `UIAlertController`, then adds a dismiss button with a default style and the text “Got it!”.

To *show* that alert the first approach is to define some sort of bindable condition that determines whether the alert should be visible or not. You then attach that to your main view, which presents the alert as soon as its condition becomes true.

For example, this code creates a `showingAlert` Boolean that tracks whether the sunscreen message should be shown or not, sets that Boolean to true when a button is tapped, then creates and attaches an alert view using that Boolean so it appears when the button is tapped:

```swift
struct ContentView: View {
    @State private var showingAlert = false

    var body: some View {
        Button("Show Alert") {
            showingAlert = true
        }
        .alert(isPresented: $showingAlert) {
            Alert(title: Text("Important message"), message: Text("Wear sunscreen"), dismissButton: .default(Text("Got it!")))
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-show-an-alert-2.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-show-an-alert-4~dark.mp4" />

The second approach to creating alerts is to bind to some optional state that conforms to `Identifiable`, which will cause the alert to be shown whenever the object’s value changes.

There are two advantages to this method:

1. You can attach any object you like at runtime, so your alert can show any number of different pieces of data.
2. SwiftUI automatically unwraps the optional when it has value, so you can be sure it exists by the time you want to show your alert – no need to check and unwrap the value yourself.

For example, this shows one alert with two different values depending on which TV show was chosen:

```swift
struct TVShow: Identifiable {
    var id: String { name }
    let name: String
}

struct ContentView: View {
    @State private var selectedShow: TVShow?

    var body: some View {
        VStack(spacing: 20) {
            Text("What is your favorite TV show?")
                .font(.headline)

            Button("Select Ted Lasso") {
                selectedShow = TVShow(name: "Ted Lasso")
            }

            Button("Select Bridgerton") {
                selectedShow = TVShow(name: "Bridgerton")
            }
        }
        .alert(item: $selectedShow) { show in
            Alert(title: Text(show.name), message: Text("Great choice!"), dismissButton: .cancel())
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-show-an-alert-3.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-show-an-alert-5~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "Presenting an alert | SwiftUI by Example",
  "desc": "Presenting an alert",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/presenting-an-alert.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add actions to alert buttons | SwiftUI by Example",
  "desc": "How to add actions to alert buttons",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-actions-to-alert-buttons.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add a TextField to an alert | SwiftUI by Example",
  "desc": "How to add a TextField to an alert",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-a-textfield-to-an-alert.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to show multiple alerts in a single view | SwiftUI by Example",
  "desc": "How to show multiple alerts in a single view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-multiple-alerts-in-a-single-view.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to show a Map view | SwiftUI by Example",
  "desc": "How to show a Map view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-a-map-view.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />