---
lang: ko-KR
title: How to create and compose custom views
description: Article(s) > How to create and compose custom views
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
      content: Article(s) > How to create and compose custom views
    - property: og:description
      content: How to create and compose custom views
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-and-compose-custom-views.html
prev: /explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-multi-step-animations-using-phase-animators.md
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
  "title": "How to create and compose custom views | SwiftUI by Example",
  "desc": "How to create and compose custom views",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-and-compose-custom-views",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

One of the core tenets of SwiftUI is composition, which means it’s designed for us to create many small views then combine them together to create something bigger. This allows us to re-use views on a massive scale, which means less work for us. Even better, combining small subviews has almost no runtime overhead, so we can use them freely.

The key is to start small and work your way up. For example,
many apps have to work with employees that look something like this:

```swift
struct Employee {
    var name: String
    var jobTitle: String
    var emailAddress: String
    var profilePicture: String
}
```

If you want to have a consistent design for employee profile pictures in your app, you might create a 100x100 image view with a circular shape:

```swift
struct ProfilePicture: View {
    var imageName: String

    var body: some View {
        Image(imageName)
            .resizable()
            .frame(width: 100, height: 100)
            .clipShape(Circle())
    }
}
```

![A circular image of Paul Hudson.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-and-compose-custom-views-1~dark@2x.png)

Your designer might tell you that whenever an email address is visible you should show a little envelope icon next to it as a visual hint, so you could make an `EmailAddress` view:

```swift
struct EmailAddress: View {
    var address: String

    var body: some View {
        HStack {
            Image(systemName: "envelope")
            Text(address)
        }
    }
}
```

![An envelope icon beside an email address.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-and-compose-custom-views-2~dark@2x.png)

When it comes to showing an employee’s details, you could create a view that has their name and job title formatted neatly, backed up by their email address using your `EmailAddress` view, like this:

```swift
struct EmployeeDetails: View {
    var employee: Employee

    var body: some View {
        VStack(alignment: .leading) {
            Text(employee.name)
                .font(.largeTitle)
                .foregroundStyle(.primary)
            Text(employee.jobTitle)
                .foregroundStyle(.secondary)
            EmailAddress(address: employee.emailAddress)
        }
    }
}
```

![The text “Paul Hudson” in large text. Below is “Editor, Hacking with Swift” in gray, and below that is an envelope icon beside an email address.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-and-compose-custom-views-3~dark@2x.png)

And you could even create a larger view that puts a `ProfilePicture` next to a `EmployeeDetails` to give a single visual representation of employees, like this:

```swift
struct EmployeeView: View {
    var employee: Employee

    var body: some View {
        HStack {
            ProfilePicture(imageName: employee.profilePicture)
            EmployeeDetails(employee: employee)
        }
    }
}
```

![A circular image of Paul Hudson. Beside it are three lines of text: “Paul Hudson” in large print, “Editor, Hacking with Swift” in gray, and an envelope icon beside an email address.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-and-compose-custom-views-4~dark@2x.png)

With this structure we now have several ways of showing employees:

- Just their picture
- Just their email address
- Just their job details
- Everything all at once

More importantly, it means that when it comes to *using* all this work, our main content views don’t have to worry about what employees look like or how they should be treated – all that work is baked into our smaller views. This means we can create a `EmployeeView` with an example employee and have it just work.

To demonstrate all this together, here’s one code sample with all the smaller view structs, ending with a `ContentView` struct that displays a single employee. To the user the result is the same, but we end up with a whole bunch of small views that do individual things, each of which can be recombined in any number of different ways.

Here’s the code:

```swift
struct Employee {
    var name: String
    var jobTitle: String
    var emailAddress: String
    var profilePicture: String
}

struct ProfilePicture: View {
    var imageName: String

    var body: some View {
        Image(imageName)
            .resizable()
            .frame(width: 100, height: 100)
            .clipShape(Circle())
    }
}

struct EmailAddress: View {
    var address: String

    var body: some View {
        HStack {
            Image(systemName: "envelope")
            Text(address)
        }
    }
}

struct EmployeeDetails: View {
    var employee: Employee

    var body: some View {
        VStack(alignment: .leading) {
            Text(employee.name)
                .font(.largeTitle)
                .foregroundStyle(.primary)
            Text(employee.jobTitle)
                .foregroundStyle(.secondary)
            EmailAddress(address: employee.emailAddress)
        }
    }
}

struct EmployeeView: View {
    var employee: Employee

    var body: some View {
        HStack {
            ProfilePicture(imageName: employee.profilePicture)
            EmployeeDetails(employee: employee)
        }
    }
}

struct ContentView: View {
    let employee = Employee(name: "Paul Hudson", jobTitle: "Editor, Hacking with Swift", emailAddress: "paul@hackingwithswift.com", profilePicture: "paul-hudson")

    var body: some View {
        EmployeeView(employee: employee)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-and-compose-custom-views-1.zip)

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-tips-and-tricks.md",
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
  "title": "How to use Instruments to profile your SwiftUI code and identify slow layouts | SwiftUI by Example",
  "desc": "How to use Instruments to profile your SwiftUI code and identify slow layouts",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts.md",
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

```component VPCard
{
  "title": "Composing views to create a list row | SwiftUI by Example",
  "desc": "Composing views to create a list row",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/composing-views-to-create-a-list-row.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />