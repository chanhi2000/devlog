---
lang: ko-KR
title: "Property observers: didSet"
description: "Article(s) > Property observers: didSet"
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
      content: "Article(s) > Property observers: didSet"
    - property: og:description
      content: "Property observers: didSet"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/08/05-property-observers-didset.html
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
  "title": "Property observers: didSet | Hacking with iOS",
  "desc": "Property observers: didSet",
  "link": "https://hackingwithswift.com/read/8/5/property-observers-didset",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/_0nER-JW9tU" />

There's one last thing to cover before this project is done, and it's both small and easy: property observers. You learned about these when we looked at the fundamentals of Swift, but now it’s time to put them into action.

Right now we have a property called `score` that is set to 0 when the game is created and increments by one whenever an answer is found. But we don't do anything with that score, so our score label is never updated.

One solution to this problem is to use something like `scoreLabel.text = "Score: \(score)"` whenever the score value is changed, and that's perfectly fine to begin with. But what happens if you're changing the score from several places? You need to keep all the code synchronized, which is unpleasant.

Swift’s solution is property observers, which let you execute code whenever a property has changed. To make them work, we use either `didSet` to execute code when a property has just been set, or `willSet` to execute code before a property has been set.

In our case, we want to add a property observer to our `score` property so that we update the score label whenever the score value was changed. So, change your `score` property to this:

```swift
var score = 0 {
    didSet {
        scoreLabel.text = "Score: \(score)"
    }
}
```

Using this method, any time `score` is changed by anyone, our score label will be updated. That's it, the project is done!

---

<TagLinks />