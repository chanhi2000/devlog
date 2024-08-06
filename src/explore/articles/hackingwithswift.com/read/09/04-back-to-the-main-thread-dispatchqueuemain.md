---
lang: ko-KR
title: "Back to the main thread: DispatchQueue.main"
description: "Article(s) > Back to the main thread: DispatchQueue.main"
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
      content: "Article(s) > Back to the main thread: DispatchQueue.main"
    - property: og:description
      content: "Back to the main thread: DispatchQueue.main"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/09/04-back-to-the-main-thread-dispatchqueuemain.html
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
  "title": "Back to the main thread: DispatchQueue.main | Hacking with iOS",
  "desc": "Back to the main thread: DispatchQueue.main",
  "link": "https://hackingwithswift.com/read/9/4/back-to-the-main-thread-dispatchqueuemain",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/8Q7JNnPBvXw" />

With this change, our code is both better and worse. It's better because it no longer blocks the main thread while the JSON downloads from Whitehouse.gov. It's worse because we're pushing work to the background thread, *and any further code called in that work will also be on the background thread*.

This change also introduced some confusion: the `showError()` call will get called regardless of what the loading does. Yes, there’s still a call to `return` in the code, but it now effectively does nothing – it’s returning from the closure that was being executed asynchronously, not from the whole method.

The combination of these problems means that regardless of whether the download succeeds or fails, `showError()` will be called. And if the download succeeds, the JSON will be parsed on the background thread and the table view's `reloadData()` will be called on the background thread – and the error will be shown regardless.

Let’s fix those problems, starting with the user interface background work. It's OK to parse the JSON on a background thread, but *it's never OK to do user interface work there*.

That's so important it bears repeating twice: **it's never OK to do user interface work on the background thread**.

If you're on a background thread and want to execute code on the main thread, you need to call `async()` again. This time, however, you do it on `DispatchQueue.main`, which is the main thread, rather than one of the global quality of service queues. 

We *could* modify our code to have `async()` before every call to `showError()` and `parse()`, but that's both ugly and inefficient. Instead, it's better to place the `async()` call inside `showError()`, wrapping up the whole `UIAlertController` code, and also inside `parse()`, but only where the table view is being reloaded. The actual JSON parsing can happily stay on the background thread.

So, inside the `parse()` method find this code:

```swift
tableView.reloadData()
```

…and replace it with this new code, bearing in mind again the need for `self.` to make our capturing clear:

```swift
DispatchQueue.main.async {
    self.tableView.reloadData()
}
```

To stop `showError()` being called regardless of the result of our fetch call, we need to move it inside the call to `DispatchQueue.global()` in `viewDidLoad()`, like this:

```swift
DispatchQueue.global(qos: .userInitiated).async {
    if let url = URL(string: urlString) {
        if let data = try? Data(contentsOf: url) {
            self.parse(json: data)
            return
        }
    }

    self.showError()
}
```

Remember, we need to add `self.` to the `showError()` call because it’s inside a closure now.

But this has created a second problem: `showError()` creates and shows a `UIAlertController` – we now have user interface work happening on a background thread, which is always a bad idea.

So, we need to modify `showError()` to push that work back to the main thread, like this:

```swift
func showError() {
    DispatchQueue.main.async {
        let ac = UIAlertController(title: "Loading error", message: "There was a problem loading the feed; please check your connection and try again.", preferredStyle: .alert)
        ac.addAction(UIAlertAction(title: "OK", style: .default))
        self.present(ac, animated: true)
    }
}
```

At this point, this code is in a better place: we do all the slow work off the main thread, then push work back to the main thread when we want to do user interface work. This background/foreground bounce is common, and you'll see it again in later projects.

---

<TagLinks />