---
lang: ko-KR
title: How to create a List or a ForEach from a binding
description: Article(s) > How to create a List or a ForEach from a binding
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
      content: Article(s) > How to create a List or a ForEach from a binding
    - property: og:description
      content: How to create a List or a ForEach from a binding
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-list-or-a-foreach-from-a-binding.html
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
  "title": "How to create a List or a ForEach from a binding | SwiftUI by Example",
  "desc": "How to create a List or a ForEach from a binding",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-list-or-a-foreach-from-a-binding",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 15**

SwiftUI lets us create a `List` or `ForEach` directly from a binding, which then provides the content closure with individual bindings to each element in the collection of data we're showing. This is important for the times when the content you're showing for each item needs a binding to some of its data, such as list rows having a text field to edit a user's name.

To use this, pass the binding into your list directly, e.g. `$users`, then accept a binding in the content closure, e.g. `$user`. For example, in this code we show a list of users and add to each row a `Toggle` determining whether they have been contacted or not:

```swift
struct User: Identifiable {
    let id = UUID()
    var name: String
    var isContacted = false
}

struct ContentView: View {
    @State private var users = [
        User(name: "Taylor"),
        User(name: "Justin"),
        User(name: "Adele")
    ]

    var body: some View {
        List($users) { $user in
            Text(user.name)
            Spacer()
            Toggle("User has been contacted", isOn: $user.isContacted)
                .labelsHidden()
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-a-list-or-a-foreach-from-a-binding-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-list-or-a-foreach-from-a-binding-1~dark.mp4" />

Using a binding in this way is the most efficient way of modifying the list, because it won't cause the entire view to reload when only a single item changes.

::: details Similar solutions…

```component VPCard
{
  "title": "How to create views in a loop using ForEach | SwiftUI by Example",
  "desc": "How to create views in a loop using ForEach",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-views-in-a-loop-using-foreach.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @Binding property wrapper? | SwiftUI by Example",
  "desc": "What is the @Binding property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-binding-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard  
{
  "title": "How to fix “Cannot convert value of type 'String' to expected argument type 'Binding<String>'” | SwiftUI by Example",
  "desc": "How to fix “Cannot convert value of type 'String' to expected argument type 'Binding<String>'”",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-cannot-convert-value-of-type-string-to-expected-argument-type-binding-string.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to animate changes in binding values | SwiftUI by Example",
  "desc": "How to animate changes in binding values",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-animate-changes-in-binding-values.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Building a menu using List | SwiftUI by Example",
  "desc": "Building a menu using List",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/building-a-menu-using-list.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />