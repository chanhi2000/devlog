---
lang: ko-KR
title: Enabling and disabling elements in forms
description: Article(s) > Enabling and disabling elements in forms
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
      content: Article(s) > Enabling and disabling elements in forms
    - property: og:description
      content: Enabling and disabling elements in forms
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/enabling-and-disabling-elements-in-forms.html
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
  "title": "Enabling and disabling elements in forms | SwiftUI by Example",
  "desc": "Enabling and disabling elements in forms",
  "link": "https://hackingwithswift.com/quick-start/swiftui/enabling-and-disabling-elements-in-forms",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI lets us disable any part of its forms or even the whole form, all by using the `disabled()` modifier. This takes a single Boolean that defines whether the element should be disabled or not. The form element's style automatically gets updated to reflect its status – buttons and toggles get grayed out, for example.

For example, this creates a form with two sections: one containing a toggle, and one containing a button that is enabled only when the toggle is on:

```swift
struct ContentView: View {
    @State private var agreedToTerms = false

    var body: some View {
        Form {
            Section {
                Toggle("Agree to terms and conditions", isOn: $agreedToTerms)
            }

            Section {
                Button("Continue") {
                    print("Thank you!")
                }
                .disabled(agreedToTerms == false)
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/enabling-and-disabling-elements-in-forms-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/enabling-and-disabling-elements-in-forms-1~dark.mp4" />

As you can see, the button is disabled just by adding `disabled(agreedToTerms == false)` to the list of modifiers.

Like many other SwiftUI modifiers, you can lift `disabled()` so that it's run on the section or even the whole form depending on what behavior you want – just move it to come after the section, for example.

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
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui/swiftui-tips-and-tricks.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Bindings and forms | SwiftUI by Example",
  "desc": "Bindings and forms",
  "link": "/explore/articles/hackingwithswift.com/swiftui/bindings-and-forms.html",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Breaking forms into sections | SwiftUI by Example",
  "desc": "Breaking forms into sections",
  "link": "/explore/articles/hackingwithswift.com/swiftui/breaking-forms-into-sections.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Working with forms | SwiftUI by Example",
  "desc": "Working with forms",
  "link": "/explore/articles/hackingwithswift.com/swiftui/working-with-forms.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />