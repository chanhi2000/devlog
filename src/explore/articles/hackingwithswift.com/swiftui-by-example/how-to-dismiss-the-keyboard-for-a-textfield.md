---
lang: ko-KR
title: How to dismiss the keyboard for a TextField
description: Article(s) > How to dismiss the keyboard for a TextField
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
      content: Article(s) > How to dismiss the keyboard for a TextField
    - property: og:description
      content: How to dismiss the keyboard for a TextField
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-dismiss-the-keyboard-for-a-textfield.html
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
  "title": "How to dismiss the keyboard for a TextField | SwiftUI by Example",
  "desc": "How to dismiss the keyboard for a TextField",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-dismiss-the-keyboard-for-a-textfield",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Updated in iOS 15**

SwiftUI's `TextField` will show the keyboard automatically when activated, but before iOS 15 it was tricky to *hide* the keyboard when you're done – particularly if you're using the `keyboardType()` modifier with something like `.numberPad`, `.decimalPad`, or `.phonePad`.

If you're supporting only iOS 15 and later, you can activate and dismiss the keyboard for a text field by focusing and unfocusing it. In its simplest form, this is done using the `@FocusState` property wrapper and the `focusable()` modifier – the first stores a Boolean that tracks whether the second is currently focused.

So, we could write a simple view that hides the keyboard when a button is tapped:

```swift
struct ContentView: View {
    @State private var name = ""
    @FocusState private var nameIsFocused: Bool

    var body: some View {
        VStack {
            TextField("Enter your name", text: $name)
                .focused($nameIsFocused)

            Button("Submit") {
                nameIsFocused = false
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-dismiss-the-keyboard-for-a-textfield-1.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-dismiss-the-keyboard-for-a-textfield-1~dark.mp4 "/>

For more advanced uses, you can use `@FocusState` to track an optional enum case that determines which form field is currently focused. For example, we might show three text fields asking the user for various pieces of information, then submit the form once the final piece has arrived:

```swift
struct ContentView: View {
    enum Field {
        case firstName
        case lastName
        case emailAddress
    }

    @State private var firstName = ""
    @State private var lastName = ""
    @State private var emailAddress = ""
    @FocusState private var focusedField: Field?

    var body: some View {
        VStack {
            TextField("Enter your first name", text: $firstName)
                .focused($focusedField, equals: .firstName)
                .textContentType(.givenName)
                .submitLabel(.next)

            TextField("Enter your last name", text: $lastName)
                .focused($focusedField, equals: .lastName)
                .textContentType(.familyName)
                .submitLabel(.next)

            TextField("Enter your email address", text: $emailAddress)
                .focused($focusedField, equals: .emailAddress)
                .textContentType(.emailAddress)
                .submitLabel(.join)
        }
        .onSubmit {
            switch focusedField {
            case .firstName:
                focusedField = .lastName
            case .lastName:
                focusedField = .emailAddress
            default:
                print("Creating account…")
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-dismiss-the-keyboard-for-a-textfield-2.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-dismiss-the-keyboard-for-a-textfield-2~dark.mp4" />

::: important

You should not attempt to use the same focus binding for two different form fields.

:::

If you have to support iOS 14 and 13, things are trickier. In fact, I want to make one thing clear: *there is no built-in way of doing this with SwiftUI in iOS 13 and 14* – there's no simple modifier we can attach, so if you were struggling to solve this it's not because you weren't trying hard enough.

To force SwiftUI to hide your keyboard, you need to use this code:

```swift
UIApplication.shared.sendAction(#selector(UIResponder.resignFirstResponder), to: nil, from: nil, for: nil)
```

Yes, that's very long, but it asks UIKit to search through what's called the *responder chain* – the collection of controls that are currently responding to user input – and find one that is capable of resigning its first responder status. That's a fancy way of saying “ask whatever has control to stop using the keyboard”, which in our case means the keyboard will be dismissed when a text field is active.

Because that code isn't particularly easy to read, you should consider wrapping it in an extension such as this:

```swift
#if canImport(UIKit)
extension View {
    func hideKeyboard() {
        UIApplication.shared.sendAction(#selector(UIResponder.resignFirstResponder), to: nil, from: nil, for: nil)
    }
}
#endif
```

You can now write `hideKeyboard()` from inside any SwiftUI view.

How you use that depends on your code, but here's a simple example that shows a decimal pad text field with a button to dismiss it:

```swift
struct ContentView: View {
    @State private var tipAmount = ""

    var body: some View {
        VStack {
            TextField("Tip Amount ", text: $tipAmount)
                .textFieldStyle(.roundedBorder)
                .keyboardType(.decimalPad)

            Button("Submit") {
                print("Tip: \(tipAmount)")
                hideKeyboard()
            }
        }
    }
}

#if canImport(UIKit)
extension View {
    func hideKeyboard() {
        UIApplication.shared.sendAction(#selector(UIResponder.resignFirstResponder), to: nil, from: nil, for: nil)
    }
}
#endif
```

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-dismiss-the-keyboard-for-a-textfield-3~dark.mp4 "/>

::: important

If you're using Xcode 12 you need to use `RoundedBorderTextFieldStyle()` rather than `.roundedBorder`.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "How to dismiss the keyboard when the user scrolls | SwiftUI by Example",
  "desc": "How to dismiss the keyboard when the user scrolls",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-dismiss-the-keyboard-when-the-user-scrolls.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to make a view dismiss itself | SwiftUI by Example",
  "desc": "How to make a view dismiss itself",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-a-view-dismiss-itself.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add a toolbar to the keyboard | SwiftUI by Example",
  "desc": "How to add a toolbar to the keyboard",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-a-toolbar-to-the-keyboard.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to make a TextField expand vertically as the user types | SwiftUI by Example",
  "desc": "How to make a TextField expand vertically as the user types",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-a-textfield-expand-vertically-as-the-user-types.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add keyboard shortcuts using keyboardShortcut() | SwiftUI by Example",
  "desc": "How to add keyboard shortcuts using keyboardShortcut()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-keyboard-shortcuts-using-keyboardshortcut.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />