---
lang: ko-KR
title: "Easy GCD using performSelector(inBackground:)"
description: "Article(s) > Easy GCD using performSelector(inBackground:)"
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
      content: "Article(s) > Easy GCD using performSelector(inBackground:)"
    - property: og:description
      content: "Easy GCD using performSelector(inBackground:)"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/09/05-easy-gcd-using-performselectorinbackground.html
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
  "title": "Easy GCD using performSelector(inBackground:) | Hacking with iOS",
  "desc": "Easy GCD using performSelector(inBackground:)",
  "link": "https://hackingwithswift.com/read/9/5/easy-gcd-using-performselectorinbackground",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/T5_QS7Y7TuI" />

There’s another way of using GCD, and it’s worth covering because it’s a great deal easier in some specific circumstances. It’s called `performSelector()`, and it has two interesting variants: `performSelector(inBackground:)` and `performSelector(onMainThread:)`.

Both of them work the same way: you pass it the name of a method to run, and `inBackground` will run it on a background thread, and `onMainThread` will run it on a foreground thread. You don’t have to care about how it’s organized; GCD takes care of the whole thing for you. If you intend to run a whole method on either a background thread or the main thread, these two are easiest.

For project 7, we can use this method to clear up the confusion with our `showError()` method. For example, we could refactor the fetching code into a `fetchJSON()` method that can then run in the background like this:

```swift
override func viewDidLoad() {
    super.viewDidLoad()

    performSelector(inBackground: #selector(fetchJSON), with: nil)
}

@objc func fetchJSON() {
    let urlString: String

    if navigationController?.tabBarItem.tag == 0 {
        urlString = "https://api.whitehouse.gov/v1/petitions.json?limit=100"
    } else {
        urlString = "https://api.whitehouse.gov/v1/petitions.json?signatureCountFloor=10000&limit=100"
    }

    if let url = URL(string: urlString) {
        if let data = try? Data(contentsOf: url) {
            parse(json: data)
            return
        }
    }

    performSelector(onMainThread: #selector(showError), with: nil, waitUntilDone: false)
}

func parse(json: Data) {
    let decoder = JSONDecoder()

    if let jsonPetitions = try? decoder.decode(Petitions.self, from: json) {
        petitions = jsonPetitions.results
        tableView.performSelector(onMainThread: #selector(UITableView.reloadData), with: nil, waitUntilDone: false)
    }
}

@objc func showError() {
    let ac = UIAlertController(title: "Loading error", message: "There was a problem loading the feed; please check your connection and try again.", preferredStyle: .alert)
    ac.addAction(UIAlertAction(title: "OK", style: .default))
    present(ac, animated: true)
}
```

As you can see, it makes your code easier because you don’t need to worry about closure capturing, so we’ll come back to this again in the future. Note: because `performSelector()` uses `#selector`, we need to mark both `fetchJSON()` and `showError()` with the `@objc` attribute.

Because the code is now much simpler, we can add an `else` block to our JSON decoding, like this:

```swift
if let jsonPetitions = try? decoder.decode(Petitions.self, from: json) {
    petitions = jsonPetitions.results
    tableView.performSelector(onMainThread: #selector(UITableView.reloadData), with: nil, waitUntilDone: false)
} else {
    performSelector(onMainThread: #selector(showError), with: nil, waitUntilDone: false)
}
```

This refactored code also makes the `return` call inside `fetchJSON()` work as intended: the `showError()` method is never called when things go well, because the whole method is exited. What you choose depends on your project’s needs, but I think it’s much easier to understand the program flow using this final approach.

---

<TagLinks />