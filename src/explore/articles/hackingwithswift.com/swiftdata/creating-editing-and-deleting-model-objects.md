---
lang: ko-KR
title: Creating, editing, and deleting model objects
description: Article(s) > Creating, editing, and deleting model objects
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swiftdata
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > Creating, editing, and deleting model objects
    - property: og:description
      content: Creating, editing, and deleting model objects
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/creating-editing-and-deleting-model-objects.html
date: 2024-06-08
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftData by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftdata/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Creating, editing, and deleting model objects | SwiftData by Example",
  "desc": "Creating, editing, and deleting model objects",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/creating-editing-and-deleting-model-objects", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

<VidStack src="youtube/w4BQnVn7H6M" />

After you've defined your data model, used `@Query` to read it back out, then placed the resulting array into some kind of SwiftUI layout, the next step is the fun one: adding some UI to let the user create, edit, and delete SwiftData objects, rather than relying on sample data.

The easiest one of these is deleting, so we'll start there. You can delete any object from SwiftData by passing it to the `delete()` method of your model context. 

In our code we used a `ForEach` to iterate over all the destinations returned by our SwiftData query, so we can now write the same kind of deleting method we’d use for any array of data with SwiftUI.

Add this method to `ContentView`:

```swift
func deleteDestinations(_ indexSet: IndexSet) {
    for index in indexSet {
        let destination = destinations[index]
        modelContext.delete(destination)
    }
}
```

And now attach this modifier to the `ForEach`:

```swift
.onDelete(perform: deleteDestinations)
```

The next easiest task is editing data, which means creating a new SwiftUI view with the various options:

1. Text fields to edit text for a destination's `name` and `details` property.
2. A date picker to adjust the date and time they'll visit.
3. A picker to adjust the priority.

If we put all those into a `Form` view we'll get a great layout by default.

So, press <kbd>Cmd</kbd>+<kbd>N</kbd> to make a new SwiftUI view now, and call it `EditDestinationView`. When Xcode opens it for editing, please add `import SwiftData` near the top, so we get access to all the SwiftData API.

This needs to know the destination that was selected. If we just wanted to read the properties from our destination, we could add an `EditDestinationView` property like this:

```swift
var destination: Destination
```

But here just reading properties from the destination isn't enough – we need to be able to bind them to SwiftUI views such as `TextField` and `Picker`, so the user can actually edit those values.

Instead, we need to use a property wrapper called `@Bindable`, which is able to create bindings any SwiftData object. This was built for the Swift observation that was introduced in iOS 17, but because SwiftData builds on observation it works just as well here too.

So, add the property like this:

```swift
@Bindable var destination: Destination
```

Now that we added a property to `EditDestinationView`, our preview struct won't work any more. Worse, we can't just create a temporary `Destination` inside the preview, because SwiftData won't know where to create it – there's no active model container or context around.

To fix this we need to create a model container by hand, and we're going to do this in a very particular way: because it's a preview code with example data in, we're going to create an *in-memory* container so that any preview objects we create aren't saved, and instead are just temporary.

This takes four steps:

1. Creating a custom `ModelConfiguration` object to specify we want in-memory storage.
2. Using that to create a model container.
3. Creating an example `Destination` object that contains some sample data. This will automatically be created inside the model container we just made.
4. Sending that example object and our model container into the `EditDestinationView`, then returning it all.

We didn't need to do steps 1 and 2 so far because it was all taken care of by the `modelContainer()` modifier in iTourApp.swift, but now we need to do it by hand so we can create a `Destination` object to pass into the view.

Modify your preview code to this:

```swift
#Preview {
    do {
        let config = ModelConfiguration(isStoredInMemoryOnly: true)
        let container = try ModelContainer(for: Destination.self, configurations: config)

        let example = Destination(name: "Example Destination", details: "Example details go here and will automatically expand vertically as they are edited.")
        return EditDestinationView(destination: example)
            .modelContainer(container)
    } catch {
        fatalError("Failed to create model container.")
    }
}
```

::: important

If you try to create an instance of a SwiftData model and there isn't a model container already around, your preview will just crash. Be careful!

:::

That should mean your project is compiling cleanly again, so now we can fill in the body of `EditDestinationView`. This is just regular SwiftUI code – it has no idea that it's reading and writing information backed by SwiftData.

Replace the default `body` property with this:

```swift
Form {
    TextField("Name", text: $destination.name)
    TextField("Details", text: $destination.details, axis: .vertical)
    DatePicker("Date", selection: $destination.date)

    Section("Priority") {
        Picker("Priority", selection: $destination.priority) {
            Text("Meh").tag(1)
            Text("Maybe").tag(2)
            Text("Must").tag(3)
        }
        .pickerStyle(.segmented)
    }
}
.navigationTitle("Edit Destination")
.navigationBarTitleDisplayMode(.inline)
```

And now we should be able to go back to `ContentView` and make navigation work for our sample data. This means placing a `NavigationLink` around the contents of our `ForEach`, like this:

```swift
ForEach(destinations) { destination in
    NavigationLink(value: destination) {
        VStack(alignment: .leading) {
            Text(destination.name)
                .font(.headline)

            Text(destination.date.formatted(date: .long, time: .shortened))
        }
    }
}
```

And then adding a `navigationDestination()` modifier below `navigationTitle()`, so SwiftUI knows to move to our new editing view whenever a destination is selected:

```swift
.navigationDestination(for: Destination.self, destination: EditDestinationView.init)
```

That should all work correctly: we can now delete sample data, and also select one to see a detail view.

That’s it! You can try using it now, and you’ll see that any changes you make are automatically applied to our data and saved – we don’t need to do anything other than change the values, and SwiftData takes care of the rest.

Now we have editing working, *adding* destinations is easy: we can simply insert a new destination into our model context, then bring it up for editing immediately.

This means making a few small changes, starting with some storage to track the path of our `NavigationStack`. Storing this in state means we can adjust what’s showing in our stack dynamically – we can present the editing screen programmatically as soon as a new destination is added.

So, start with this property in `ContentView`:

```swift
@State private var path = [Destination]()
```

Second, we need to bind that to our `NavigationStack`, like this:

```swift
NavigationStack(path: $path) {
```

Third, we need a method in `ContentView` that creates a new destination, adds it to our model context, then puts it into our new `navPath` property to trigger editing straight away:

```swift
func addDestination() {
    let destination = Destination()
    modelContext.insert(destination)
    path = [destination]
}
```

And finally we need another button in our toolbar, like this:

```swift
Button("Add Destination", systemImage: "plus", action: addDestination)
```

Done! Give it a try – add some other sample destinations of your own choosing, and you should find them all automatically appearing in our main list.

::: tip

You can now remove the button and method to add sample data, because we no longer need them.

:::

---

<TagLinks />