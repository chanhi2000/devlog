---
lang: ko-KR
title: Two-way bindings in SwiftUI
description: Article(s) > Two-way bindings in SwiftUI
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
  - hacking-with-swift
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > Two-way bindings in SwiftUI
    - property: og:description
      content: Two-way bindings in SwiftUI
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/two-way-bindings-in-swiftui.html
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
  "title": "Two-way bindings in SwiftUI | SwiftUI by Example",
  "desc": "Two-way bindings in SwiftUI",
  "link": "https://hackingwithswift.com/quick-start/swiftui/two-way-bindings-in-swiftui",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

<VidStack src="youtube/7AY3v2woKio" />

If you look in the SwiftUI preview window you'll see the standard iOS picker interface – a pop up menu of options. By default it will show the first option, because it reads the value of `paymentType`, which we set to “Cash”. However, when the user brings up the menu their selection changes – they might select “Credit Card” or “iDine Points” instead of cash.

So, this picker doesn't just _read_ the value of `paymentType`, it also _writes_ the value. This is what's called a two-way binding, because any changes to the value of `paymentType` will update the picker, and any changes to the picker will update `paymentType`.

This is where the dollar sign comes in: Swift property wrappers use that to provide two-way bindings to their data, so when we say `$paymentType` SwiftUI will write the value using the property wrapper, which will in turn stash it away and cause the UI to refresh automatically.

At first glance all these @ and $s might seem a bit un-Swifty, and it's true that if you're coming from UIKit you might not used to working in this way. However, they allow us to get features that would otherwise require a lot of hassle:

- Without `@State` we wouldn't be able to change properties in our structs, because structs are fixed values.
- Without `StateObject` we wouldn't be able to create classes that stay alive for the duration of our app.
- Without `@EnvironmentObject` we wouldn't be able to receive shared data from elsewhere in our app.
- Without `ObservableObject` we wouldn't be notified when an external value changes.
- Without `$property` two-way bindings we would need to update values by hand.

Anyway, that's our basic picker complete, so if we return to <FontIcon icon="fa-brands fa-swift"/>`OrderView.swift` we can update our code so that it shows our new `CheckoutView` struct rather than some text saying “Checkout”.

Find this code:

```swift
NavigationLink("Place Order") {
    Text("Check out")
}
```

And replace it with this:

```swift
NavigationLink("Place Order") {
    CheckoutView()
}
```

Try running the app now, then go to the Order tab and press Place Order. The result is… well, less than perfect, let's put it that way. And that's despite putting in quite a lot of work just to get _this_ far.

Well, we're going to change just one word in <FontIcon icon="fa-brands fa-swift"/>`CheckoutView.swift`, and it should make all that work feel justified.

Inside `CheckoutView`, I'd like you to change `VStack` to `Form`, then press <kbd>Cmd</kbd>+<kbd>R</kbd> to try the app again. Can you spot the difference?

Previously we had a plain pop up menu with no title, but now that we're in a form we get a single table row that shows our picker's title alongside its currently selected value.

![SwiftUI has adapted our form to show the picture as a single row in a form.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/2-13~dark.png)

This is the power of SwiftUI's declarative approach to user interfaces: we say what behavior we want rather than the precise styling of it, and SwiftUI will automatically adapt it according to the context where it's used.

Let's continue on with our form by adding two more components: one that lets users select whether they have an iDine loyalty card, and another that lets them enter their card number. Both of these need two-way bindings just like our picker, so let's start with two new `@State` properties:

```swift
@State private var addLoyaltyDetails = false
@State private var loyaltyNumber = ""
```

Now we can add controls to our form to represent those – `Toggle` is the equivalent of a `UISwitch`, and `TextField` is the equivalent of `UITextField`. Add these two inside our existing form section:

```swift
Toggle("Add iDine loyalty card", isOn: $addLoyaltyDetails)
TextField("Enter your iDine ID", text: $loyaltyNumber) 
```

There's not a lot of code there, but it's worth mentioning some details:

1. Both controls are bound to those `@State` properties we just made.
2. The `Toggle` switch has some text inside that will automatically appear to the left as a description.
3. The `TextField` has some placeholder text so users know what to type in there.

Before you run the app, there's another change I'd like to talk about first. That text field we just added – should it _always_ be there, or only when the toggle switch is enabled?

We bound `Toggle` to the value of `addLoyaltyDetails`, which means when the user flicks it on or off that Boolean gets set to true or false. Wouldn't it be great if the text field was visible only when the toggle was on?

Well, it turns out that's pretty easy to do. Try wrapping the text field in a condition:

```swift
Toggle("Add iDine loyalty card", isOn: $addLoyaltyDetails)

if addLoyaltyDetails {
    TextField("Enter your iDine ID", text: $loyaltyNumber)
}
```

When you run the program now you'll see that changing the state of the toggle shows or hides the text field. If you think it through this should all make sense:

- The toggle has a two-way binding to the `addLoyaltyDetails` property.
- That means when the toggle is changed, the property updates.
- That property is marked with `@State`.
- When any `@State` or `@EnvironmentObject` changes its value, SwiftUI will re-invoke the `body` property.
- That `body` property directly reads the value of `addLoyaltyDetails` to decide whether the text field is created or not.

For an improved effect, modify the binding on the `Toggle` so that it animates any changes it causes:

```swift
Toggle("Add iDine loyalty card", isOn: $addLoyaltyDetails.animation())
```

That will cause the loyalty card row to slide in and out smoothly.

Let's try another common control: segmented controls. In SwiftUI this is actually just a `Picker` with a modifier, so it works in exactly the same way – we give it a two-way binding that stores its selection, then use a `ForEach` to loop over an array to create some options to choose from.

For this screen, we can use a segmented control to represent various tip percentages that the user can select from. So, first add this property to store the options we want to show:

```swift
let tipAmounts = [10, 15, 20, 25, 0]
```

Now add this property to store the selected tip amount:

```swift
@State private var tipAmount = 15
```

We can now put all that into a segmented control in our form. I'm going to put this into a new section in our form, because it lets us add a title that makes the UI clearer:

```swift
Section("Add a tip?") {
    Picker("Percentage:", selection: $tipAmount) {
        ForEach(tipAmounts, id: \.self) {
            Text("\($0)%")
        }
    }
    .pickerStyle(.segmented)
}
```

We're going to add one more component to our form, which is a button to actually confirm the order. We'll come back to its exact functionality in just a moment, because there are other things we need to look at first.

Here's the final section for the table:

```swift
Section("Total: $100") {
    Button("Confirm order") {
        // place the order
    }
}
```

Yes, I know the total order value is wrong, but just run the app for now.

We added a button inside `ItemDetail` and it was blue text on a clear background, centered on the screen. Now we have a button in our form, and it's different: it's blue text, left aligned, and if you tap it the whole row flashes gray. This is another example of the way SwiftUI's forms system changes the design and behavior of components inside it.

::: details Further reading

```component VPCard
{
  "title": "Article(s) > Working with forms",
  "desc": "Working with forms",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/working-with-forms.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > Basic form design",
  "desc": "Basic form design",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/basic-form-design.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to create a toggle switch",
  "desc": "How to create a toggle switch",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-toggle-switch.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to read text from a TextField",
  "desc": "How to read text from a TextField",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-read-text-from-a-textfield.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to animate changes in binding values",
  "desc": "How to animate changes in binding values",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-animate-changes-in-binding-values.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to create a segmented control and read values from it",
  "desc": "How to create a segmented control and read values from it",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-segmented-control-and-read-values-from-it.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

::: details Similar solutions…

How to create constant bindings
How to create custom bindings
Bindings and forms
SwiftUI tips and tricks
Answering the big question: should you learn SwiftUI, UIKit, or both?

<!-- TODO: add VPCard -->

:::

---

<TagLinsk />