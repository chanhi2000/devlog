---
lang: ko-KR
title: "Fixing Project 10: Codable"
description: "Article(s) > Fixing Project 10: Codable"
category:
  - Swift
  - iOS
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - xcode
  - appstore
  - ios  
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Fixing Project 10: Codable"
    - property: og:description
      content: "Fixing Project 10: Codable"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/12/04-fixing-project-10-codable.html
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/read/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Fixing Project 10: Codable | Hacking with iOS",
  "desc": "Fixing Project 10: Codable",
  "link": "https://hackingwithswift.com/read/12/4/fixing-project-10-codable",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/Jr6YcWlGHvg" />

`NSCoding` is a great way to read and write data when using `UserDefaults`, and is the most common option when you must write Swift code that lives alongside Objective-C code.

However, if you’re *only* writing Swift, the `Codable` protocol is much easier. We already used it to load petition JSON back in project 7, but now we’ll be loading *and* saving JSON.

There are three primary differences between the two solutions:

1. The `Codable` system works on both classes and structs. We made `Person` a class because `NSCoding` only works with classes, but if you didn’t care about Objective-C compatibility you could make it a struct and use `Codable` instead.
2. When we implemented `NSCoding` in the previous chapter we had to write `encode()` and `init()` calls ourself. With `Codable` this isn’t needed unless you need more precise control - it does the work for you.
3. When you encode data using `Codable` you can save to the same format that `NSCoding` uses if you want, but a much more pleasant option is JSON – `Codable` reads and writes JSON natively.

All three of those combined means that you can define a struct to hold data, and have Swift create instances of that struct directly from JSON with no extra work from you.

Anyway, to demonstrate more of `Codable` in action I’d like you to close project12a and open project12b – this should be identical to project 10, because it doesn’t contain any of the `NSCoding` changes.

First, let’s modify the `Person` class so that it conforms to `Codable`:

```swift
class Person: NSObject, Codable {
```

…and that’s it. Yes, just adding `Codable` to the class definition is enough to tell Swift we want to read and write this thing. So, now we can go back to <FontIcon icon="fa-brands fa-swift"/>`ViewController.swift` and add code to load and save the `people` array.

As with `NSCoding` we’re going to create a single `save()` method we can use anywhere that's needed. This time it’s going to use the `JSONEncoder` class to convert our `people` array into a `Data` object, which can then be saved to `UserDefaults`. This conversion might fail, so we’re going to use `if let` and `try?` so that we save data only when the JSON conversion was successful.

Add this method to <FontIcon icon="fa-brands fa-swift"/>`ViewController.swift` now:

```swift
func save() {
    let jsonEncoder = JSONEncoder()
    if let savedData = try? jsonEncoder.encode(people) {
        let defaults = UserDefaults.standard
        defaults.set(savedData, forKey: "people")
    } else {
        print("Failed to save people.")
    }
}
```

Just like with the `NSCoding` example you need to modify our collection view's `didSelectItemAt` method so that you call `self?.save()` just after calling `self.collectionView.reloadData()`. Again, remember that adding `self` is required because we're inside a closure. You then need to modify the image picker's `didFinishPickingMediaWithInfo` method so that it calls `save()` just before the end of the method.

Finally, we need to load the array back from disk when the app runs, so add this code to `viewDidLoad()`:

```swift
let defaults = UserDefaults.standard

if let savedPeople = defaults.object(forKey: "people") as? Data {
    let jsonDecoder = JSONDecoder()

    do {
        people = try jsonDecoder.decode([Person].self, from: savedPeople)
    } catch {
        print("Failed to load people")
    }
}
```

This code is effectively the `save()` method in reverse: we use the `object(forKey:)` method to pull out an optional `Data`, using `if let` and `as?` to unwrap it. We then give that to an instance of `JSONDecoder` to convert it back to an object graph – i.e., our array of `Person` objects.

Once again, note the interesting syntax for `decode()` method: its first parameter is `[Person].self`, which is Swift’s way of saying “attempt to create an array of `Person` objects.” This is why we don’t need a typecast when assigning to `people` – that method will automatically return `[People]`, or if the conversion fails then the `catch` block will be executed instead.

---

<TagLinks />