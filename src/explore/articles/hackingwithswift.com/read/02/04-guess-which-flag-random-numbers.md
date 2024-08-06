---
lang: ko-KR
title: "Guess which flag: random numbers"
description: "Article(s) > Guess which flag: random numbers"
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
      content: "Article(s) > Guess which flag: random numbers"
    - property: og:description
      content: "Guess which flag: random numbers"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/02/04-guess-which-flag-random-numbers.html
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
  "title": "Guess which flag: random numbers | Hacking with iOS",
  "desc": "Guess which flag: random numbers",
  "link": "https://hackingwithswift.com/read/2/4/guess-which-flag-random-numbers",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/A9SKgYhqZ_Q" />

Our current code chooses the first three items in the countries array, and places them into the three buttons on our view controller. This is fine to begin with, but really we need to choose random countries each time. There are two ways of doing this:

1. Pick three random numbers, and use those to read the flags from the array.
2. Shuffle up the order of the array, then pick the first three items.

Both approaches are valid, but the former takes a little more work because we need to ensure that all three numbers are different – this game would be even less fun if all three flags were the same!

The second approach is easier to do, because Swift has built-in methods for shuffling arrays: `shuffle()` for in-place shuffling, and `shuffled()` to return a new, shuffled array.

At the start of the `askQuestion()` method, just before you call the first `setImage()` method, add this line of code:

```swift
countries.shuffle()
```

That will automatically randomize the order of the countries in the array, meaning that `countries[0]`, `countries[1]` and `countries[2]` will refer to different flags each time the `askQuestion()` method is called. To try it out, press <kbd>Cmd</kbd>+<kbd>R</kbd> to run your program a few times to see different flags each time.

The next step is to track which answer should be the correct one, and to do that we're going to create a new property for our view controller called `correctAnswer`. Put this near the top, just above `var score = 0`:

```swift
var correctAnswer = 0
```

This gives us a new integer property that will store whether it's flag 0, 1 or 2 that holds the correct answer.

To choose which should be the right answer requires using Swift’s random system again, because we need to choose a random number for the correct answer. All Swift’s numeric types, such as `Int`, `Double`, and `CGFloat`, have a `random(in:)` method that generates a random number in a range. So, to generate a random number between 0 and 2 inclusive you need to put this line just below the three `setImage()` calls in `askQuestion()`:

```swift
correctAnswer = Int.random(in: 0...2)
```

Now that we have the correct answer, we just need to put its text into the navigation bar. This can be done by using the `title` property of our view controller, but we need to add one more thing: we don't want to write "france" or "uk" in the navigation bar, because it looks ugly. We could capitalize the first letter, and that would work great for France, Germany, and so on, but it would look poor for “Us” and “Uk”, which should be “US” and “UK”.

The solution here is simple: uppercase the entire string. This is done using the `uppercased()` method of any string, so all we need to do is read the string out from the countries array at the position of `correctAnswer`, then uppercase it. Add this to the end of the `askQuestion()` method, just after `correctAnswer` is set:

```swift
title = countries[correctAnswer].uppercased()
```

With that done, you can run the game and it's now almost playable: you'll get three different flags each time, and the flag the player needs to tap on will have its name shown at the top.

![Your game so far: three different flags, with one correct answer shown at the top.](https://hackingwithswift.com/img/books/hws/2-12@2x.png)

Of course, there's one piece missing: the user can tap on the flag buttons, but they don't actually *do* anything. Let's fix that…

---

<TagLinks />