---
lang: ko-KR
title: What is the @FocusState property wrapper?
description: Article(s) > What is the @FocusState property wrapper?
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
      content: Article(s) > What is the @FocusState property wrapper?
    - property: og:description
      content: What is the @FocusState property wrapper?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/what-is-the-focusstate-property-wrapper.html
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
  "title": "What is the @FocusState property wrapper? | SwiftUI by Example",
  "desc": "What is the @FocusState property wrapper?",
  "link": "https://hackingwithswift.com/quick-start/swiftui/what-is-the-focusstate-property-wrapper",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 15**

SwiftUI gives us a specific property wrapper for tracking which view currently receives user input, called `@FocusState`. This can be bound to a Boolean to control a single field, or to an enum to control movement between several.

If you just want to control whether a single piece of input has keyboard focus you can use this with a Boolean like this:

```swift
struct ContentView: View {
    @FocusState private var isUsernameFocused: Bool
    @State private var username = "Anonymous"

    var body: some View {
        VStack {
            TextField("Enter your username", text: $username)
                .focused($isUsernameFocused)

            Button("Toggle Focus") {
                isUsernameFocused.toggle()
            }
        }
    }
}
```

If you want to move keyboard focus between more than one view you should use an optional enum. This can be set to one of the cases from your enum to activate a particular piece of input, or you can set it to `nil` to make nothing focused – effectively dismissing the keyboard on iOS.

So, we could create two text fields to store a username and password, then move between them using `@FocusState` and `onSubmit()`:

```swift
struct ContentView: View {
    enum FocusedField {
        case username, password
    }

    @FocusState private var focusedField: FocusedField?
    @State private var username = "Anonymous"
    @State private var password = "sekrit"

    var body: some View {
        VStack {
            TextField("Enter your username", text: $username)
                .focused($focusedField, equals: .username)

            SecureField("Enter your password", text: $password)
                .focused($focusedField, equals: .password)
        }
        .onSubmit {
            if focusedField == .username {
                focusedField = .password
            } else {
                focusedField = nil
            }
        }
    }
}
```

::: details Similar solutions…

```component VPCard
{
  "title": "What is the @GestureState property wrapper? | SwiftUI by Example",
  "desc": "What is the @GestureState property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui/what-is-the-gesturestate-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @Published property wrapper? | SwiftUI by Example",
  "desc": "What is the @Published property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui/what-is-the-published-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @ScaledMetric property wrapper? | SwiftUI by Example",
  "desc": "What is the @ScaledMetric property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui/what-is-the-scaledmetric-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @ObservedObject property wrapper? | SwiftUI by Example",
  "desc": "What is the @ObservedObject property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui/what-is-the-observedobject-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @AppStorage property wrapper? | SwiftUI by Example",
  "desc": "What is the @AppStorage property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui/what-is-the-appstorage-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />