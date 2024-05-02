---
lang: ko-KR
title: Building a menu using List
description: Article(s) > Building a menu using List
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
      content: Article(s) > Building a menu using List
    - property: og:description
      content: Building a menu using List
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/building-a-menu-using-list.html
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
  "title": "Building a menu using List | SwiftUI by Example",
  "desc": "Building a menu using List",
  "link": "https://hackingwithswift.com/quick-start/swiftui/building-a-menu-using-list",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

<VidStack src="youtube/62agNUDHh3U" />

We're going to start simple, and work our way up. Along the way you'll start to see some of the things that SwiftUI makes easy, and some of the things that are a bit harder.

In <FontIcon icon="fa-brands fa-swift"/>`ContentView.swift` is a basic struct representing the only screen in our app: `ContentView`. It looks like this:

```swift
struct ContentView: View {
    var body: some View {
        VStack {
            Image(systemName: "globe")
                .imageScale(.large)
                .foregroundStyle(.accentColor)
            Text("Hello, world!")
        }
        .padding()
    }
}
```

That isn't much code, but it already tells us a lot:

1. Views are structs in SwiftUI.
2. All views must conform to the `View` protocol.
3. That protocol requires a computed property called `body` that contains the actual layout for the view.
4. It returns `some View`, which is a Swift feature called _opaque return types_ – it means “one specific sort of view, but we don't really care which one.”
5. Inside our content view is a small amount of UI: an image showing a globe icon and some text saying “Hello, world”, both wrapped up in a `VStack` to make them vertically aligned. We'll be looking at these views in more detail as we progress.
6. There's are some method calls in place: `.imageScale()`, `.foregroundStyle()`, and `padding()`. In SwiftUI we call these _modifiers_ because they modify the way the text view looks or acts.

You should also see a preview pane on the right of Xcode. This updates as you type, which makes it a great way to see your changes as you work. If you don't see the preview pane on the right, go to the Editor menu and choose Canvas.

In the event that Xcode's preview area stops – which will happen quite often – you can press <kbd>Opt</kbd>+<kbd>Cmd</kbd>+<kbd>P</kbd> to make it resume showing your layouts.

__This is really important so I'm repeating it: pressing <kbd>Cmd</kbd>+<kbd>Opt</kbd>+<kbd>P</kbd> will make your SwiftUI preview update.__

![Xcode showing code on one side and the SwiftUI preview area on the other side.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/2-3~dark.png)

In our app this screen will show us a list of items from a menu, so we're going to use a `List` view instead of Xcode's default template code.

So, replace the current text view with this:

```swift
List {
    Text("Hello World")
    Text("Hello World")
    Text("Hello World")
}
```

When the preview updates you'll now see the equivalent of UIKit's `UITableView` with three pieces of text, all saying “Hello World”. This is a _static_ list view – we're sending in three pieces of fixed data, so it interprets them as three rows in the table.

In our app the menu will contain a list of items that can be ordered, and tapping one of them will show a new screen with details about that order item. This works just like in UIKit: we wrap our table in a navigation control.

In SwiftUI this navigation control is a `NavigationStack`, which combines the display styling of `UINavigationBar` and the view controller stack behavior of `UINavigationController`. To bring one in, just add `NavigationStack` around your list, like this:

```swift
NavigationStack {
    List {
        Text("Hello World")
        Text("Hello World")
        Text("Hello World")
    }
}
```

When the preview updates you'll see things look the same, but that's only because we haven't given it a title yet.

Earlier I mentioned the `padding()` modifier briefly, saying modifiers got that name because they modify the way views look or act. SwiftUI has many modifiers – hundreds, easily – and each one lets you customize the behavior of a view in one very specific way.

Yes, modifiers _look_ like regular Swift methods, but they are more complex because they actually _change_ what they apply to. In simple terms, if you have some text and apply the `padding()` modifier, you don't just get some text back that happens to have some space around it – you actually get a different _type_ back.

In this case, we want to apply a `navigationTitle()` modifier to our list view, which accepts some sort of text to show in the navigation bar. So, we'd write this:

```swift
NavigationStack {
    List {
        Text("Hello World")
        Text("Hello World")
        Text("Hello World")
    }
    .navigationTitle("Menu")
}
```

Yes, the modifier is attached to the list rather than the navigation stack – think of how we'd set the title of a `UIViewController` rather than try to set the title of a `UINavigationController`.

![Xcode showing code with three list items, and the SwiftUI preview showing that rendered in a virtual device.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/2-4~dark.png)

If you try running the app now you'll see that it all works exactly as we would expect – the table scrolls around, the navigation bar shrinks as you scroll, and so on. One of the great things that SwiftUI does is give us modern system behavior by default, so we get large navigation bar titles as standard.

Static text works fine when you have fixed table cells, but in our case we have lots of menu items to load across a number of sections – breakfast, mains, dessert, and drinks. What we _really_ want to do is load our menu data from JSON, then use _that_ for our list items, and that's actually not too hard to accomplish.

First we need to load our data. The <FontIcon icon="fa-brands fa-swift"/>`Helper.swift` file you already imported contains code for loading `Codable` JSON from the app bundle, which is perfect for loading our <FontIcon icon="iconfont icon-json"/>`menu.json` file. So, add this property to the `ContentView` struct now:

```swift
let menu = Bundle.main.decode([MenuSection].self, from: "menu.json")
```

Next we need to make our list go over the sections in our menu. This is done by using a `ForEach` block, which loops over items in an array and repeats whatever is inside:

```swift
List {
    ForEach(menu) {
        Text("Hello World")
        Text("Hello World")
        Text("Hello World")
    }
}
```

The opening braces after `List` and `ForEach` actually signify the start of a closure, and in the case of `ForEach` SwiftUI will pass into the closure each section from the array so that we can configure it.

So, we need to accept that section by modifying the code to this:

```swift
ForEach(menu) { section in
```

That _almost_ works, but there's one last thing we need to do. SwiftUI needs to know how to identify every cell in our table – it needs to know exactly which is which, so it can add and remove things for us if we ask. When we had a static list this wasn't a problem because it could see there were three, but now we have a dynamic list we need to tell it something about each section that makes it unique.

If you open <FontIcon icon="fa-brands fa-swift"/>`Menu.swift` you'll see structs that define `MenuSection` and `MenuItem`, and both of them have `id` properties that contain a `UUID` – a universally unique identifier. This is perfect for our use, because every menu item in every section has a unique identifier so SwiftUI can know which is which.

We can tell SwiftUI to use those identifiers by making the two types conform to `Identifiable`. This protocol has only one requirement, which is that conforming types must have a property called `id` that can identify them uniquely. We already have that, so just adding `Identifiable` to those two types is enough:

```swift
struct MenuSection: Codable, Identifiable {
```

And:

```swift
struct MenuItem: Codable, Equatable, Identifiable {
```

If you run the code now you'll see twelve rows containing “Hello World” – something you might not have expected.

What's changed is that we now have a _dynamic_ list, and our `ForEach` will execute the body of its closure – three text views – once for every item in our menu sections. We have four sections, and each one has been given three text views, so we end up with 12 in total.

To fix this, we're going to ask for _one_ text view per section, and give it the name of our section to display:

```swift
List {
    ForEach(menu) { section in
        Text(section.name)
    }
}
```

Next let's add the items inside each section. This is another `ForEach` inside the section `ForEach`, like this:

```swift
List {
    ForEach(menu) { section in
        Text(section.name)

        ForEach(section.items) { item in
            Text(item.name)
        }
    }
}
```

Now you'll see lots of table rows, with some containing section names (“Breakfast”, “Mains”, etc) and some containing menu item names (“Full English”, “Superfood Salad”, etc).

![Xcode showing a SwiftUI list with many items, and a navigation bar at the top. Next to it is the code required to make the preview.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/2-5~dark.png)

While this works, it's not ideal – it doesn't create any visual structure in our table, so we're going to break it up. The standard UIKit way of doing this is with table view sections, and SwiftUI gives us the `Section` view just for that. We can replace `Text(section.name)` with a Section using the section name for its title, which will be used as the text at the start of the section. The inner `ForEach` – the one containing our menu items – is then _inside_ the section, so SwiftUI will understand how we've grouped things together.

The end result looks like this:

```swift
List {
    ForEach(menu) { section in
        Section(section.name) {
            ForEach(section.items) { item in
                Text(item.name)
            }
        }
    }
}
```

By default SwiftUI's lists use the “inset grouped” style of `UITableView`, but we can change that by adding another modifier after `navigationTitle()`:

```swift
.listStyle(.grouped)
```

![The SwiftUI list is now split neatly into grouped sections.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/2-6~dark.png)

::: details Similar solutions…

How to show a menu when a button is pressed
How to let users pick options from a menu
How to show a context menu
SwiftUI tutorial: Building a complete project
How to allow row selection in a list

<!-- TODO: add VPCard -->

:::

---

<TagLinks />